import { BaseEvent, Engine, EngineOptions } from "@vis-three/core";
import {
  LoaderManager,
  LoaderManagerParameters,
  LoaderManagerPlugin,
  LoadUnit,
} from "@vis-three/plugin-loader-manager";
import {
  PointerManager,
  PointerManagerEngine,
  PointerManagerParameters,
  PointerManagerPlugin,
} from "@vis-three/plugin-pointer-manager";
import {
  EventManager,
  EventManagerEngine,
  EventManagerParameters,
  EventManagerPlugin,
} from "@vis-three/plugin-event-manager";
import {
  RenderManager,
  RenderManagerEngine,
  RenderManagerPlugin,
  RenderManagerPluginParams,
} from "@vis-three/plugin-render-manager";
import {
  DataSupportEngine,
  DataSupportManager,
  DataSupportManagerPlugin,
  DataSupportPluginParameters,
  LoadOptions,
} from "../plugin/DataSupportManagerPlugin";
import {
  MappedEvent,
  RESOURCE_EVENT,
  ResourceManager,
  ResourceManagerEngine,
  ResourceManagerPlugin,
  ResourceManagerPluginParameters,
} from "../plugin/ResourceManagerPlugin";
import { BasicConfig } from "../module/common";
import { LoaderDataSupportStrategy } from "../strategy/LoaderDataSuportStrategy";
import {
  LoaderMappingEngine,
  LoaderMappingStrategy,
} from "../strategy/LoaderMappingStrategy";
import {
  CompilerManager,
  CompilerManagerEngine,
  CompilerManagerPlugin,
  CompilerManagerPluginParameters,
} from "../plugin/CompilerManagerPlugin";
import { CompilerSupportStrategy } from "../strategy/CompilerSupportStrategy";
import { MODULE_TYPE, ModuleOptions, Moduler, OBJECT_MODULE } from "../module";
import { Object3D, Event, Object3DEventMap } from "three";

import { emunDecamelize } from "../utils/humps";
import { Trigger, ObjectTrigger } from "../trigger";

export type EngineSupportLoadOptions = LoadOptions & {
  assets?: string[];
};

export interface EngineSupportParameters {
  LoaderManagerPlugin: LoaderManagerParameters;
  PointerManagerPlugin: PointerManagerParameters;
  EventManagerPlugin: EventManagerParameters;
  RenderManagerPlugin: RenderManagerPluginParams;
  ResourceManagerPlugin: ResourceManagerPluginParameters;
  DataSupportManagerPlugin: DataSupportPluginParameters;
  CompilerManagerPlugin: CompilerManagerPluginParameters;
}

export enum SUPPORT_LIFE_CYCLE {
  ZERO = 0,
  ONE = 100,
  TWO = 200,
  THREE = 300,
  FOUR = 400,
  FIVE = 500,
  SIX = 600,
  SEVEN = 700,
  EIGHT = 800,
  NINE = 900,
}

export class EngineSupport
  extends Engine
  implements
    PointerManagerEngine,
    EventManagerEngine,
    RenderManagerEngine,
    DataSupportEngine,
    CompilerManagerEngine,
    LoaderMappingEngine
{
  declare loaderManager: LoaderManager;
  declare eventManager: EventManager;
  declare renderManager: RenderManager;
  declare play: () => void;
  declare stop: () => void;
  declare render: (delta?: number) => this;
  declare pointerManager: PointerManager;
  declare resourceManager: ResourceManager;
  declare registerResources: (
    resourceMap: Record<string, unknown>
  ) => ResourceManagerEngine;
  declare dataSupportManager: DataSupportManager;
  declare applyConfig: (...args: BasicConfig[]) => DataSupportEngine;
  declare removeConfigBySymbol: (...args: string[]) => DataSupportEngine;
  declare toJSON: () => string;
  declare exportConfig: () => LoadOptions;
  declare compilerManager: CompilerManager;
  declare getObjectSymbol: (object: any) => string | null;
  declare getObjectBySymbol: (vid: string) => any;
  declare loadResources: (
    urlList: LoadUnit[],
    callback: (err: Error | undefined, event?: MappedEvent | undefined) => void
  ) => this;

  declare getConfigBySymbol: <C extends BasicConfig = any>(
    vid: string
  ) => C | null;
  /**
   * @deprecated use getConfigFromModule
   */
  declare getConfigfromModule: <C extends BasicConfig = any>(
    module: string,
    vid: string
  ) => C | null;
  /**
   * @deprecated use getConfigFromModules
   */
  declare getConfigfromModules: <C extends BasicConfig = any>(
    modules: string[] | Record<string, any>,
    vid: string
  ) => C | null;

  declare getConfigFromModule: <C extends BasicConfig = any>(
    module: string,
    vid: string
  ) => C | null;
  declare getConfigFromModules: <C extends BasicConfig = any>(
    modules: string[] | Record<string, any>,
    vid: string
  ) => C | null;
  /**
   * @deprecated use getObjectFromModule
   */
  declare getObjectfromModule: <O = any>(
    module: string,
    vid: string
  ) => O | null;
  /**
   * @deprecated use getObjectFromModules
   */
  declare getObjectfromModules: <O = any>(
    modules: string[] | Record<string, any>,
    vid: string
  ) => O | null;

  declare getObjectFromModule: <O = any>(
    module: string,
    vid: string
  ) => O | null;
  declare getObjectFromModules: <O = any>(
    modules: string[] | Record<string, any>,
    vid: string
  ) => O | null;

  declare getObject3D: <
    O extends Object3D<Object3DEventMap> = Object3D<Object3DEventMap>
  >(
    vid: string
  ) => O | null;

  declare loadResourcesAsync: (urlList: LoadUnit[]) => Promise<MappedEvent>;
  private moduleLifeCycle: Array<{ module: string; order: number }> = [];
  private triggers: Record<string, Trigger> = { object: ObjectTrigger };
  private modulers: Record<string, Moduler> = {};

  constructor(params: Partial<EngineSupportParameters> = {}) {
    super();
    this.install(LoaderManagerPlugin(params.LoaderManagerPlugin))
      .install(PointerManagerPlugin(params.PointerManagerPlugin))
      .install(EventManagerPlugin(params.EventManagerPlugin))
      .install(RenderManagerPlugin(params.RenderManagerPlugin))
      .install(ResourceManagerPlugin(params.ResourceManagerPlugin))
      .install(DataSupportManagerPlugin(params.DataSupportManagerPlugin))
      .install(CompilerManagerPlugin(params.CompilerManagerPlugin));

    this.exec(LoaderDataSupportStrategy())
      .exec(LoaderMappingStrategy())
      .exec(CompilerSupportStrategy());
  }

  /**
   * 导入配置的生命周期执行方法
   * @param config 配置
   */
  private loadLifeCycle(config: Omit<EngineSupportLoadOptions, "assets">) {
    const dataSupportManager = this.dataSupportManager;
    const triggers = this.triggers;

    const loadCycle = this.moduleLifeCycle.sort((a, b) => a.order - b.order);

    for (const { module } of loadCycle) {
      config[module] && dataSupportManager.loadByModule(config[module], module);
      for (const key in triggers) {
        triggers[key].reach(module);
      }
    }
  }

  /**
   * 移除配置时的生命周期执行方法
   * @param config 配置
   */
  private removeLifeCycle(config: EngineSupportLoadOptions) {
    const dataSupportManager = this.dataSupportManager;

    const removeCycle = this.moduleLifeCycle.sort((a, b) => b.order - a.order);

    for (const { module } of removeCycle) {
      config[module] && dataSupportManager.remove({ [module]: config[module] });
    }

    // 再清空外部资源缓存
    const assets = config.assets || [];
    const resourceManager = this.resourceManager;
    const loaderManager = this.loaderManager;
    assets.forEach((url) => {
      resourceManager.remove(url);
      loaderManager.remove(url);
    });
  }

  /**
   * 加载一个配置
   * @param config 配置单
   * @param callback 加载完成后的回调
   * @returns this
   */
  loadConfig(
    config: EngineSupportLoadOptions,
    callback?: (event?: MappedEvent) => void
  ): this {
    const renderFlag = this.renderManager.hasRendering();

    if (renderFlag) {
      this.renderManager.stop();
    }

    // 导入外部资源
    if (config.assets && config.assets.length) {
      const mappedFun = (event: MappedEvent) => {
        delete config.assets;
        this.loadLifeCycle(config);

        this.resourceManager.removeEventListener("mapped", mappedFun);
        callback && callback(event);
        if (renderFlag) {
          this.renderManager.play();
        } else {
          this.renderManager.render();
        }
      };

      this.resourceManager.addEventListener<MappedEvent>("mapped", mappedFun);
      this.loaderManager.reset().load(config.assets);
    } else {
      this.loadLifeCycle(config);
      callback && callback();

      if (renderFlag) {
        this.renderManager.play();
      } else {
        this.renderManager.render();
      }
    }

    return this;
  }

  /**
   * 异步的加载一个配置
   * @param config 配置单
   * @param pretreat 配置单预处理
   * @returns Promise<MappedEvent>
   */
  loadConfigAsync(
    config: EngineSupportLoadOptions,
    pretreat?: (c: EngineSupportLoadOptions) => EngineSupportLoadOptions
  ): Promise<MappedEvent> {
    return new Promise((resolve, reject) => {
      const renderFlag = this.renderManager.hasRendering();

      if (renderFlag) {
        this.renderManager.stop();
      }
      // 导入外部资源
      if (config.assets && config.assets.length) {
        this.loadResourcesAsync(config.assets).then((event) => {
          delete config.assets;
          this.loadLifeCycle(config);

          if (renderFlag) {
            this.renderManager.play();
          } else {
            this.renderManager.render();
          }
          resolve(event);
        });
      } else {
        this.loadLifeCycle(config);
        if (renderFlag) {
          this.renderManager.play();
        } else {
          this.renderManager.render();
        }
        resolve({
          type: RESOURCE_EVENT.MAPPED,
          configMap: this.resourceManager.configMap,
          resourceMap: this.resourceManager.resourceMap,
          resourceConfig: {} as { [key: string]: LoadOptions },
        });
      }
    });
  }

  /**
   * 移除一个配置单
   * @param config 配置单
   */
  removeConfig(config: EngineSupportLoadOptions) {
    this.removeLifeCycle(config);
  }

  /**
   * 获取一个对象的配置结构
   * @param object 物体对象
   * @returns 配置 | null
   */
  getObjectConfig<O, C extends BasicConfig>(object: O): C | null {
    const symbol = this.getObjectSymbol(object);

    if (symbol) {
      return this.getConfigBySymbol(symbol) as C | null;
    } else {
      return null;
    }
  }

  /**
   * 使用一个配置化模块
   * @param options 配置化模块选项
   * @returns this
   */
  useModule(options: ModuleOptions<any, any>): this {
    const typeName = emunDecamelize(options.type);

    if (MODULE_TYPE[typeName]) {
      console.warn(`Engine:module ${options.type} is already exist.`);
      return this;
    }

    MODULE_TYPE[options.type.toUpperCase()] = options.type;
    MODULE_TYPE[typeName] = options.type;

    if (options.object) {
      OBJECT_MODULE[options.type] = true;
    }

    const moduler = new Moduler(options);

    this.modulers[options.type] = moduler;

    moduler.compiler.useEngine(this);

    this.dataSupportManager.extend(moduler.converter);
    this.compilerManager.extend(moduler.compiler);

    if (options.extend) {
      options.extend(this);
    }

    this.moduleLifeCycle.push({
      module: options.type,
      order: options.lifeOrder || 0,
    });

    Object.values(this.triggers).forEach((trigger) => {
      trigger.add(options.type);
    });

    return this;
  }

  /**
   * 添加一个触发器
   * @param name 触发器名称或者标识
   * @param trigger 触发器对象
   * @returns this
   */
  addTrigger(name: string, trigger: Trigger) {
    if (!this.triggers[name]) {
      this.triggers[name] = trigger;
    } else {
      console.warn(
        `EngineSupport: this trigger has already exist: ${name}.`,
        this.triggers
      );
    }

    return this;
  }

  /**
   * 获取一个触发器
   * @param name 触发器名称
   * @returns Trigger
   */
  getTrigger(name: string) {
    if (!this.triggers[name]) {
      console.warn(
        `EngineSupport: not found this trigger: ${name}.`,
        this.triggers
      );
      return null;
    } else {
      return this.triggers[name];
    }
  }

  /**
   * 引擎的初始化，如果定义的模型存在外部资源需要手动调用此api。
   */
  async init() {
    let allPreload: LoadUnit[] = [];

    for (const moduler of Object.values(this.modulers)) {
      allPreload.push(...moduler.preload);
    }

    allPreload = Array.from(new Set(allPreload));

    await this.loadResourcesAsync(allPreload).catch((err) => {
      console.error(`EngineSupport init err: `, err);
    });
  }

  /**
   * @deprecated
   * use useModule
   */
  registModule(options: ModuleOptions): this {
    return this.useModule(options);
  }
}

export interface EngineSupportOptions extends EngineOptions {
  modules: ModuleOptions<any>[];
}

/**
 * 定义一个配置化引擎
 * @param options 定义引擎的选项
 * @param params 引擎的参数
 * @returns engine extends EngineSupport
 */
export const defineEngineSupport = function <
  E extends EngineSupport = EngineSupport
>(
  options: EngineSupportOptions,
  params: Partial<EngineSupportParameters> = {}
) {
  const engine = new EngineSupport(params) as E;

  if (options.plugins) {
    options.plugins.forEach((plugin) => {
      engine.install(plugin);
    });
  }
  if (options.modules) {
    options.modules.forEach((module) => {
      engine.useModule(module);
    });
  }

  if (options.strategy) {
    options.strategy.forEach((strategy) => {
      engine.exec(strategy);
    });
  }

  return engine;
};
