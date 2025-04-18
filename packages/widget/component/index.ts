import {
  EffectScope,
  ReactiveEffect,
  proxyRefs,
  shallowReactive,
} from "@vue/reactivity";
import { Data, VNode, isOnProp, isVNode } from "../vnode";
import { EngineWidget } from "../engine";
import { createSymbol } from "@vis-three/tdcm";
import { ENGINE_EVENT, EventDispatcher, RenderEvent } from "@vis-three/core";
import { Renderer } from "../renderer";
import { Widget } from "../widget";
import { RENDER_SCOPE, VNodeScpoe, _h } from "../h";
import { PropsOptions } from "./props";
import { LifeCycleHooks } from "./hooks";
import { queueJob, queuePostFlushCb } from "../scheduler";
import { KeyEnum } from "@vis-three/utils";
import { parseName } from "../renderer/events";

export interface RenderParams<Resources extends object = any> {
  components: Record<string, ComponentOptions>;
  resources: KeyEnum<Resources>;
}

export interface SetupParams<
  Engine extends EngineWidget = any,
  Props extends object = any,
  Emit extends object = any
> {
  engine: Engine;
  props: Props;
  emit: (type: keyof Emit, params: any) => void;
}

export interface ComponentOptions<
  Engine extends EngineWidget = any,
  Emit extends object = any,
  Props extends object = any,
  RawBindings extends object = any,
  Resources extends object = any
> {
  /**组件名 */
  name?: string;
  /**组件的事件列表 */
  emits?: Emit;
  /**父组件的传入 */
  props?: PropsOptions<Props>;
  /**注册的子组件 */
  components?: Record<string, ComponentOptions>;
  /**组件使用的engine */
  engine: Engine;
  /**组件挂载的位置 */
  el: string;
  /**组件需要加载的外部资源 */
  load: Record<string, string>;
  /**组件可以使用的资源 */
  resources?: () => Resources;
  /**组件的响应式对象和业务逻辑的位置 */
  setup?: (params: SetupParams<Engine, Props>) => RawBindings;
  /**组件渲染的目标 */
  render: (params: RenderParams<Resources>) => VNode | VNode[];
}
export class Component<
  Engine extends EngineWidget = any,
  Emit extends object = any,
  Props extends object = any,
  RawBindings extends object = any,
  Resources extends object = any
> extends EventDispatcher {
  static currentComponent: Component | null;

  static setCurrentComponent(component: Component) {
    Component.currentComponent = component;
    // @ts-ignore
    component.scope.on();
  }

  static unsetCurrentComponent() {
    // @ts-ignore
    Component.currentComponent && Component.currentComponent.scope.off();
    Component.currentComponent = null;
  }

  cid = createSymbol();
  name = "";

  vnode!: VNode<Props>;

  private options: ComponentOptions<
    Engine,
    Emit,
    Props,
    RawBindings,
    Resources
  >;
  private el = "";

  private render!: (params: RenderParams) => VNode | VNode[];

  private engine: Engine;
  private renderer: Renderer<Engine>;

  isMounted = false;

  private props: Props = shallowReactive(Object.create(Object.prototype));
  private setupState!: RawBindings;
  private rawSetupState!: RawBindings;

  private effect!: ReactiveEffect;
  scope = new EffectScope(true);
  update!: () => void;

  private subTree: Array<VNode | VNodeScpoe> | null = null;
  private ctx!: Widget<Engine>;

  private cacheResources: Resources = Object.create(Object.prototype);
  private resourcesKeyEnum: KeyEnum<Resources> = Object.create(
    Object.prototype
  );

  private cacheEvent: Record<string, Function> = {};

  constructor(vnode: VNode<Props>, renderer: Renderer<Engine>) {
    super();
    this.vnode = vnode;

    const options = vnode.type as ComponentOptions<
      Engine,
      Emit,
      Props,
      RawBindings,
      Resources
    >;

    options.name && (this.name = options.name);
    this.el = options.el;

    this.options = options;
    this.renderer = renderer;
    this.engine = renderer.engine;
    this.ctx = renderer.context;
    this.createProps();
    this.createSetup();
    this.createResources();
    this.createRender();
    this.createEffect();
  }

  private renderTree() {
    _h.reset();
    _h.el = this.el;

    this.render.call(
      { ...this.setupState, ...this.props },
      {
        components: this.options.components || {},
        resources: this.resourcesKeyEnum,
      }
    );

    let tree = _h.vnodes;

    return tree;
  }

  private createResources() {
    if (!this.options.resources) {
      return;
    }

    const resources = this.options.resources.call(this.setupState);
    this.engine.registerResources(resources as Record<string, unknown>);

    this.cacheResources = resources;

    for (const key in resources) {
      this.resourcesKeyEnum[key] = key;
    }
  }

  private createProps() {
    const propsOptions = this.options.props || {};
    const vnProps = this.vnode.props || {};
    const props = this.props;
    const emits = this.options.emits || {};
    const inputProps: Data = {};

    for (const key in vnProps) {
      if (isOnProp(key)) {
        const [name, options] = parseName(key);
        if (emits[name]) {
          this[options.once ? "once" : "on"](name, vnProps[key]);
        } else {
          console.warn(
            `widget Component: you not declare attribute  ${key}  in emits options`,
            this.options
          );
        }
      } else {
        inputProps[key] = vnProps[key];
      }
    }

    for (const key in propsOptions) {
      const options = propsOptions[key];
      if (options.required && typeof inputProps[key] === "undefined") {
        console.error(`widget component: component prop is required.`, {
          component: this,
          props: inputProps,
          key,
        });
        return;
      }

      let value: any;

      if (typeof inputProps[key] !== "undefined") {
        value = inputProps[key];
      } else if (options.default) {
        value =
          typeof options.default === "function"
            ? options.default()
            : options.default;
      }

      if (value.constructor !== options.type) {
        console.error(
          `widget component: component prop is not instance of type.`,
          {
            component: this,
            props: inputProps,
            key,
            value,
            type: options.type,
          }
        );
        return;
      }

      props[key] = value;
    }
  }

  private createSetup() {
    if (!this.options.setup) {
      return;
    }

    Component.setCurrentComponent(this);

    const setupResult =
      this.options.setup({
        engine: this.engine,
        props: this.props,
        emit: this.emit.bind(this) as any,
      }) || {};
    this.setupState = proxyRefs<any>(setupResult);
    this.rawSetupState = setupResult;

    Component.unsetCurrentComponent();
  }

  private createRender() {
    this.render = this.options.render;
  }

  private createEffect() {
    const effect = new ReactiveEffect(
      () => {
        if (!this.isMounted) {
          const setupState = this.rawSetupState;

          const matchRef = (vnode: VNode) => {
            if (!vnode.ref) {
              return;
            }
            if (typeof setupState[vnode.ref] !== "undefined") {
              setupState[vnode.ref].value = vnode.component
                ? vnode.component
                : vnode.config || null;
            }
          };

          const matchRaw = (vnode: VNode) => {
            if (!vnode.raw) {
              return;
            }
            if (typeof setupState[vnode.raw] !== "undefined") {
              if (vnode.config) {
                const raw = this.engine.getObjectBySymbol(vnode.config.vid);
                if (!raw) {
                  console.warn(`can not found raw object in engine`, {
                    component: this,
                    vnode,
                  });
                }
                setupState[vnode.raw].value = raw || null;
              } else {
                console.warn(`component raw object is not a native config`, {
                  component: this,
                  vnode,
                });
                return;
              }
            }
          };

          const subTree = (this.subTree = this.renderTree());

          for (const vnode of subTree) {
            if (isVNode(vnode)) {
              this.renderer.patch(null, vnode as VNode);
              matchRef(<VNode>vnode);
              matchRaw(<VNode>vnode);
            } else {
              for (const vn of (<VNodeScpoe>vnode).vnodes) {
                this.renderer.patch(null, vn);
                matchRef(<VNode>vn);
                matchRaw(<VNode>vn);
              }
            }
          }

          this.isMounted = true;

          queuePostFlushCb(() => this.emit(LifeCycleHooks.MOUNTED));

          const frameEvent = (event: RenderEvent) => {
            this.emit(LifeCycleHooks.FRAME, event);
          };

          this.engine.renderManager.addEventListener<RenderEvent>(
            ENGINE_EVENT.RENDER,
            frameEvent
          );

          this.cacheEvent[ENGINE_EVENT.RENDER] = frameEvent;
        } else {
          const nextTree = this.renderTree();
          const prevTree = this.subTree!;

          if (prevTree.length !== nextTree.length) {
            console.error(`widget component render: tree render error`, {
              nextTree,
              prevTree,
            });
            return;
          }

          // 由于通过vif, vfor进行结构划分，所以nextTree和prevTree的结构是相同且固定的
          // 所以i下面的结构是固定的，只用比较每个scope的vnode即可
          for (let i = 0; i < nextTree.length; i += 1) {
            if (isVNode(prevTree[i]) && isVNode(nextTree[i])) {
              this.renderer.patch(prevTree[i] as VNode, nextTree[i] as VNode);
            } else {
              // scope
              const next = nextTree[i] as VNodeScpoe;
              const prev = prevTree[i] as VNodeScpoe;
              if (next.scope !== prev.scope) {
                console.error(`widget component render: tree render error`, {
                  nextTree,
                  prevTree,
                });
                return;
              }

              if (next.scope === RENDER_SCOPE.VIF) {
                for (const vnode of prev.vnodes) {
                  this.renderer.patch(vnode, null);
                }

                for (const vnode of next.vnodes) {
                  this.renderer.patch(null, vnode);
                }
              } else if (next.scope === RENDER_SCOPE.VFOR) {
                for (const key of next.keyMap.keys()) {
                  if (prev.keyMap.has(key)) {
                    this.renderer.patch(
                      prev.keyMap.get(key)!,
                      next.keyMap.get(key)!
                    );
                    // prevTree是一次性的所有可以修改
                    prev.keyMap.delete(key);
                  } else {
                    this.renderer.patch(null, next.keyMap.get(key)!);
                  }
                }

                for (const vnode of prev.keyMap.values()) {
                  this.renderer.unmountElement(vnode);
                }
              } else {
                console.warn(
                  `widget component render: unknow scope type: ${next.scope}`
                );
              }
            }
          }

          this.subTree = nextTree;
        }
      },
      () => queueJob(update),
      undefined,
      this.scope
    );

    const update = () => effect.run();

    update();

    this.effect = effect;
    this.update = update;
  }

  distory() {
    this.engine.removeEventListener<RenderEvent>(
      ENGINE_EVENT.RENDER,
      this.cacheEvent[ENGINE_EVENT.RENDER] as (event: RenderEvent) => void
    );

    this.emit(LifeCycleHooks.BEFORE_DISTORY);
    this.scope.stop();
    this.effect.active = false;
    this.effect.stop();

    const tree = this.subTree || [];
    for (let i = 0; i < tree.length; i += 1) {
      if (isVNode(tree[i])) {
        this.renderer.patch(tree[i] as VNode, null);
        (<VNode>tree[i]).config = null;
        (<VNode>tree[i]).raw = null;
      } else {
        for (const vnode of (<VNodeScpoe>tree[i]).vnodes) {
          this.renderer.patch(vnode, null);
          vnode.config = null;
          vnode.raw = null;
        }
      }
    }
  }

  updateProps(newProps: Partial<Props>) {
    const props = this.props;
    for (const key in newProps) {
      props[key] = newProps[key]!;
    }
  }

  getState(raw = true) {
    return raw ? this.rawSetupState : this.setupState;
  }
}

export const defineComponent = function <
  Engine extends EngineWidget = any,
  Emit extends object = any,
  Props extends object = any,
  RawBindings extends object = any,
  Resources extends object = any
>(
  options: ComponentOptions<Engine, Emit, Props, RawBindings, Resources>
): ComponentOptions<Engine, Emit, Props, RawBindings, Resources> {
  return options;
};
