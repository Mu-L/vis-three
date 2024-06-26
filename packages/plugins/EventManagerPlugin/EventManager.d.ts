import { EventDispatcher } from "@vis-three/core";
import { PointerManager, VisPointerEvent } from "@vis-three/plugin-pointer-manager";
import { Camera, Event, Intersection, Object3D, Raycaster, Scene } from "three";
export interface ObjectEvent extends VisPointerEvent {
    intersection: Intersection<Object3D<Event>>;
}
export interface GlobalEvent extends VisPointerEvent {
    intersections: Intersection<Object3D<Event>>[];
}
export interface EventManagerParameters {
    scene: Scene;
    camera: Camera;
    recursive?: boolean;
    penetrate?: boolean;
    support?: boolean;
    raycaster?: {
        params: {
            Line?: {
                threshold: number;
            };
            Points?: {
                threshold: number;
            };
        };
    };
}
export declare enum EVENTNAME {
    POINTERDOWN = "pointerdown",
    POINTERUP = "pointerup",
    POINTERMOVE = "pointermove",
    POINTERENTER = "pointerenter",
    POINTERLEAVE = "pointerleave",
    CLICK = "click",
    DBLCLICK = "dblclick",
    CONTEXTMENU = "contextmenu"
}
export declare class EventManager extends EventDispatcher {
    raycaster: Raycaster;
    private scene;
    private camera;
    private filter;
    recursive: boolean;
    penetrate: boolean;
    propagation: boolean;
    delegation: boolean;
    constructor(parameters: EventManagerParameters);
    setScene(scene: Scene): this;
    setCamera(camera: Camera): this;
    /**
     * 添加不会触发事件的场景中的物体
     * @param object Object3D
     * @returns this
     */
    addFilterObject(object: Object3D): this;
    /**
     * 移除过滤器中的物体
     * @param object Object3D
     * @returns this
     */
    removeFilterObject(object: Object3D): this;
    private intersectObject;
    use(pointerManager: PointerManager): this;
}
