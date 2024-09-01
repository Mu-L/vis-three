import { COMPILER_MANAGER_PLUGIN, CONFIGTYPE, DATA_SUPPORT_MANAGER_PLUGIN, MODULETYPE, uniqueSymbol, } from "@vis-three/middleware";
import { TRANSFORM_CONTROLS_PLUGIN, TRANSFORM_EVENT, } from "@vis-three/plugin-transform-controls";
import { transPkgName } from "@vis-three/utils";
import { name as pkgname } from "./package.json";
import TransformControlsProcessor from "./TransformControlsProcessor";
export const TRANSFORM_CONTROLS_SUPPORT_STRATEGY = transPkgName(pkgname);
export const TransformControlsSupportStrategy = function () {
    return {
        name: TRANSFORM_CONTROLS_SUPPORT_STRATEGY,
        condition: [
            COMPILER_MANAGER_PLUGIN,
            DATA_SUPPORT_MANAGER_PLUGIN,
            TRANSFORM_CONTROLS_PLUGIN,
        ],
        exec(engine) {
            const compiler = engine.compilerManager.getCompiler(MODULETYPE.CONTROLS);
            compiler.reigstProcessor(TransformControlsProcessor, (compiler) => {
                compiler.map.set(uniqueSymbol(CONFIGTYPE.TRNASFORMCONTROLS), engine.transformControls);
                compiler.weakMap.set(engine.transformControls, uniqueSymbol(CONFIGTYPE.ORBITCONTROLS));
            });
            // TODO: compiler event pref to observer event
            let config = null;
            engine.transformControls.addEventListener(TRANSFORM_EVENT.OBJECT_CHANGE, (event) => {
                event.transObjectSet.forEach((object) => {
                    config = engine.getObjectConfig(object);
                    if (config) {
                        // slientUpdate(config, () => {
                        config.position.x = object.position.x;
                        config.position.y = object.position.y;
                        config.position.z = object.position.z;
                        config.rotation.x = object.rotation.x;
                        config.rotation.y = object.rotation.y;
                        config.rotation.z = object.rotation.z;
                        config.scale.x = object.scale.x;
                        config.scale.y = object.scale.y;
                        config.scale.z = object.scale.z;
                        // });
                    }
                });
            });
        },
        rollback() { },
    };
};