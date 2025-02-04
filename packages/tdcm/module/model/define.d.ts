import { KeyMappingTo } from "@vis-three/utils";
import { EngineSupport } from "../../engine";
import { BasicConfig } from "../common";
import { Compiler } from "../compiler";
import { Model, ModelCommands } from "./Model";
import { LoadUnit } from "@vis-three/plugin-loader-manager";
/**模型选项 */
export interface ModelOption<Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Res extends Record<string, LoadUnit> = Record<string, LoadUnit>> {
    /**模型类型 */
    type: string;
    /**模型依赖的预加载外部资源 */
    resources?: Res;
    /**模型的配置结构 */
    config: () => Cf;
    /**模型实例的共享属性方法 */
    shared?: Srd;
    /**模型实例的特有属性方法 */
    context?: (this: Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx, params: {
        model: Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx;
    }) => Ctx;
    /**模型的命令链 */
    commands?: ModelCommands<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>, Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx>;
    /**模型的生成方法 */
    create: (this: Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx, params: {
        model: Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx;
        config: Cf;
        engine: Eg;
        compiler: Cpl;
        resources: KeyMappingTo<Res, object>;
    }) => Obj;
    /**模型的销毁方法 */
    dispose: (this: Model<Cf, Obj, Eg, Cpl, KeyMappingTo<Res, object>> & Readonly<Srd> & Ctx, params: {
        model: Model<Cf, Obj, Eg, Cpl> & Readonly<Srd> & Ctx & Res;
        target: Obj;
        puppet: Obj;
        config: Cf;
        engine: Eg;
        compiler: Cpl;
        resources: KeyMappingTo<Res, object>;
    }) => void;
    /**该模型应用时对其他模型产生的扩展 */
    expand?: [
        {
            models: string | string[] | RegExp;
            config: () => object;
            commands: ModelCommands<any, any, any, any, any>;
        }
    ];
}
/**
 * 定义一个模型
 * @param option 模型选项ModelOption
 * @returns
 */
export declare const defineModel: {
    <Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Res extends Record<string, LoadUnit> = Record<string, LoadUnit>>(option: ModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Res>): ModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Res>;
    /**
     * 定义模型的拓展方法，相当于定义一个父类
     * @param abstract 父类的抽象方法
     * @returns defineModel((abstract) => ModelOptions)
     */
    extend<Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Cra extends Function = Function, Dsp extends Function = Function>(abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>): {
        <ACf extends Cf = Cf, AObj extends Obj = Obj, ACtx extends object = object, ASrd extends object = object, AEg extends Eg = Eg, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): ModelOption<ACf, AObj, Ctx & ACtx, Srd & ASrd, AEg, ACpl>;
        extend<ECf extends Cf = Cf, EObj extends Obj = Obj, ECtx extends object = object, ESrd extends object = object, EEg extends Eg = Eg, ECpl extends Compiler<EEg> = Compiler<EEg>, ECra extends Function = Function, EDsp extends Function = Function>(fun: (abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>) => AbstractModelOption<ECf, EObj, ECtx, ESrd, EEg, ECpl, ECra, EDsp>): {
            <ACf extends ECf = ECf, AObj extends EObj = EObj, ACtx extends object = object, ASrd extends object = object, AEg extends EEg = EEg, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf, EObj, Ctx & ECtx, Srd & ESrd, EEg, ECpl, ECra, EDsp>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ACtx, Srd & ESrd & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
            extend<ECf_1 extends ECf = ECf, EObj_1 extends EObj = EObj, ECtx_1 extends object = object, ESrd_1 extends object = object, EEg_1 extends EEg = EEg, ECpl_1 extends Compiler<EEg_1> = Compiler<EEg_1>, ECra_1 extends Function = Function, EDsp_1 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf, EObj, Ctx & ECtx, Srd & ESrd, EEg, ECpl, ECra, EDsp>) => AbstractModelOption<ECf_1, EObj_1, ECtx_1, ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>): {
                <ACf extends ECf_1 = ECf_1, AObj extends EObj_1 = EObj_1, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_1 = EEg_1, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_1, EObj_1, Ctx & ECtx & ECtx_1, Srd & ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ACtx, Srd & ESrd & ESrd_1 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                extend<ECf_2 extends ECf_1 = ECf_1, EObj_2 extends EObj_1 = EObj_1, ECtx_2 extends object = object, ESrd_2 extends object = object, EEg_2 extends EEg_1 = EEg_1, ECpl_2 extends Compiler<EEg_2> = Compiler<EEg_2>, ECra_2 extends Function = Function, EDsp_2 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_1, EObj_1, Ctx & ECtx & ECtx_1, Srd & ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => AbstractModelOption<ECf_2, EObj_2, ECtx_2, ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>): {
                    <ACf extends ECf_2 = ECf_2, AObj extends EObj_2 = EObj_2, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_2 = EEg_2, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_2, EObj_2, Ctx & ECtx & ECtx_1 & ECtx_2, Srd & ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                    extend<ECf_3 extends ECf_2 = ECf_2, EObj_3 extends EObj_2 = EObj_2, ECtx_3 extends object = object, ESrd_3 extends object = object, EEg_3 extends EEg_2 = EEg_2, ECpl_3 extends Compiler<EEg_3> = Compiler<EEg_3>, ECra_3 extends Function = Function, EDsp_3 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_2, EObj_2, Ctx & ECtx & ECtx_1 & ECtx_2, Srd & ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => AbstractModelOption<ECf_3, EObj_3, ECtx_3, ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>): {
                        <ACf extends ECf_3 = ECf_3, AObj extends EObj_3 = EObj_3, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_3 = EEg_3, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_3, EObj_3, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                        extend<ECf_4 extends ECf_3 = ECf_3, EObj_4 extends EObj_3 = EObj_3, ECtx_4 extends object = object, ESrd_4 extends object = object, EEg_4 extends EEg_3 = EEg_3, ECpl_4 extends Compiler<EEg_4> = Compiler<EEg_4>, ECra_4 extends Function = Function, EDsp_4 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_3, EObj_3, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => AbstractModelOption<ECf_4, EObj_4, ECtx_4, ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>): {
                            <ACf extends ECf_4 = ECf_4, AObj extends EObj_4 = EObj_4, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_4 = EEg_4, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_4, EObj_4, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                            extend<ECf_5 extends ECf_4 = ECf_4, EObj_5 extends EObj_4 = EObj_4, ECtx_5 extends object = object, ESrd_5 extends object = object, EEg_5 extends EEg_4 = EEg_4, ECpl_5 extends Compiler<EEg_5> = Compiler<EEg_5>, ECra_5 extends Function = Function, EDsp_5 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_4, EObj_4, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => AbstractModelOption<ECf_5, EObj_5, ECtx_5, ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>): {
                                <ACf extends ECf_5 = ECf_5, AObj extends EObj_5 = EObj_5, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_5 = EEg_5, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_5, EObj_5, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                extend<ECf_6 extends ECf_5 = ECf_5, EObj_6 extends EObj_5 = EObj_5, ECtx_6 extends object = object, ESrd_6 extends object = object, EEg_6 extends EEg_5 = EEg_5, ECpl_6 extends Compiler<EEg_6> = Compiler<EEg_6>, ECra_6 extends Function = Function, EDsp_6 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_5, EObj_5, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => AbstractModelOption<ECf_6, EObj_6, ECtx_6, ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>): {
                                    <ACf extends ECf_6 = ECf_6, AObj extends EObj_6 = EObj_6, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_6 = EEg_6, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_6, EObj_6, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                    extend<ECf_7 extends ECf_6 = ECf_6, EObj_7 extends EObj_6 = EObj_6, ECtx_7 extends object = object, ESrd_7 extends object = object, EEg_7 extends EEg_6 = EEg_6, ECpl_7 extends Compiler<EEg_7> = Compiler<EEg_7>, ECra_7 extends Function = Function, EDsp_7 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_6, EObj_6, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => AbstractModelOption<ECf_7, EObj_7, ECtx_7, ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>): {
                                        <ACf extends ECf_7 = ECf_7, AObj extends EObj_7 = EObj_7, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_7 = EEg_7, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_7, EObj_7, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                        extend<ECf_8 extends ECf_7 = ECf_7, EObj_8 extends EObj_7 = EObj_7, ECtx_8 extends object = object, ESrd_8 extends object = object, EEg_8 extends EEg_7 = EEg_7, ECpl_8 extends Compiler<EEg_8> = Compiler<EEg_8>, ECra_8 extends Function = Function, EDsp_8 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_7, EObj_7, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => AbstractModelOption<ECf_8, EObj_8, ECtx_8, ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>): {
                                            <ACf extends ECf_8 = ECf_8, AObj extends EObj_8 = EObj_8, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_8 = EEg_8, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_8, EObj_8, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                            extend<ECf_9 extends ECf_8 = ECf_8, EObj_9 extends EObj_8 = EObj_8, ECtx_9 extends object = object, ESrd_9 extends object = object, EEg_9 extends EEg_8 = EEg_8, ECpl_9 extends Compiler<EEg_9> = Compiler<EEg_9>, ECra_9 extends Function = Function, EDsp_9 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_8, EObj_8, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => AbstractModelOption<ECf_9, EObj_9, ECtx_9, ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>): {
                                                <ACf extends ECf_9 = ECf_9, AObj extends EObj_9 = EObj_9, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_9 = EEg_9, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_9, EObj_9, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                                extend<ECf_10 extends ECf_9 = ECf_9, EObj_10 extends EObj_9 = EObj_9, ECtx_10 extends object = object, ESrd_10 extends object = object, EEg_10 extends EEg_9 = EEg_9, ECpl_10 extends Compiler<EEg_10> = Compiler<EEg_10>, ECra_10 extends Function = Function, EDsp_10 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_9, EObj_9, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => AbstractModelOption<ECf_10, EObj_10, ECtx_10, ESrd_10, EEg_10, ECpl_10, ECra_10, EDsp_10>): any;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    expand<EC extends object = {}, ECf extends BasicConfig = BasicConfig, EObj extends object = object, ECtx extends object = object, ESrd extends object = object, EEg extends EngineSupport = EngineSupport, ECpl extends Compiler<EEg> = Compiler<EEg>>(expandOption: {
        models: string | string[] | RegExp;
        config: EC;
        commands: ModelCommands<EC & ECf, EObj, EEg, ECpl, Record<string, object>, Model<EC & ECf, EObj, EEg, ECpl> & Readonly<ESrd> & ECtx>;
    }): {
        models: string | string[] | RegExp;
        config: EC;
        commands: ModelCommands<EC & ECf, EObj, EEg, ECpl, Record<string, object>, Model<EC & ECf, EObj, EEg, ECpl> & Readonly<ESrd> & ECtx>;
    };
};
export interface AbstractModelOption<Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Cra extends Function = Function, Dsp extends Function = Function> {
    shared?: Srd;
    context?: (params: {
        model: Model<Cf, Obj, Eg, Cpl> & Readonly<Srd> & Ctx;
    }) => Ctx;
    commands?: ModelCommands<Cf, Obj, Eg, Cpl, Record<string, object>, Model<Cf, Obj, Eg, Cpl> & Readonly<Srd> & Ctx>;
    create?: Cra;
    dispose?: Dsp;
}
/**
 * @deprecated use defineModel
 */
export declare const defineProcessor: {
    <Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Res extends Record<string, LoadUnit> = Record<string, LoadUnit>>(option: ModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Res>): ModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Res>;
    /**
     * 定义模型的拓展方法，相当于定义一个父类
     * @param abstract 父类的抽象方法
     * @returns defineModel((abstract) => ModelOptions)
     */
    extend<Cf extends BasicConfig = BasicConfig, Obj extends object = object, Ctx extends object = object, Srd extends object = object, Eg extends EngineSupport = EngineSupport, Cpl extends Compiler<Eg> = Compiler<Eg>, Cra extends Function = Function, Dsp extends Function = Function>(abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>): {
        <ACf extends Cf = Cf, AObj extends Obj = Obj, ACtx extends object = object, ASrd extends object = object, AEg extends Eg = Eg, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl>): ModelOption<ACf, AObj, Ctx & ACtx, Srd & ASrd, AEg, ACpl>;
        extend<ECf extends Cf = Cf, EObj extends Obj = Obj, ECtx extends object = object, ESrd extends object = object, EEg extends Eg = Eg, ECpl extends Compiler<EEg> = Compiler<EEg>, ECra extends Function = Function, EDsp extends Function = Function>(fun: (abstract: AbstractModelOption<Cf, Obj, Ctx, Srd, Eg, Cpl, Cra, Dsp>) => AbstractModelOption<ECf, EObj, ECtx, ESrd, EEg, ECpl, ECra, EDsp>): {
            <ACf extends ECf = ECf, AObj extends EObj = EObj, ACtx extends object = object, ASrd extends object = object, AEg extends EEg = EEg, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf, EObj, Ctx & ECtx, Srd & ESrd, EEg, ECpl, ECra, EDsp>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ACtx, Srd & ESrd & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
            extend<ECf_1 extends ECf = ECf, EObj_1 extends EObj = EObj, ECtx_1 extends object = object, ESrd_1 extends object = object, EEg_1 extends EEg = EEg, ECpl_1 extends Compiler<EEg_1> = Compiler<EEg_1>, ECra_1 extends Function = Function, EDsp_1 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf, EObj, Ctx & ECtx, Srd & ESrd, EEg, ECpl, ECra, EDsp>) => AbstractModelOption<ECf_1, EObj_1, ECtx_1, ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>): {
                <ACf extends ECf_1 = ECf_1, AObj extends EObj_1 = EObj_1, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_1 = EEg_1, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_1, EObj_1, Ctx & ECtx & ECtx_1, Srd & ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ACtx, Srd & ESrd & ESrd_1 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                extend<ECf_2 extends ECf_1 = ECf_1, EObj_2 extends EObj_1 = EObj_1, ECtx_2 extends object = object, ESrd_2 extends object = object, EEg_2 extends EEg_1 = EEg_1, ECpl_2 extends Compiler<EEg_2> = Compiler<EEg_2>, ECra_2 extends Function = Function, EDsp_2 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_1, EObj_1, Ctx & ECtx & ECtx_1, Srd & ESrd & ESrd_1, EEg_1, ECpl_1, ECra_1, EDsp_1>) => AbstractModelOption<ECf_2, EObj_2, ECtx_2, ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>): {
                    <ACf extends ECf_2 = ECf_2, AObj extends EObj_2 = EObj_2, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_2 = EEg_2, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_2, EObj_2, Ctx & ECtx & ECtx_1 & ECtx_2, Srd & ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                    extend<ECf_3 extends ECf_2 = ECf_2, EObj_3 extends EObj_2 = EObj_2, ECtx_3 extends object = object, ESrd_3 extends object = object, EEg_3 extends EEg_2 = EEg_2, ECpl_3 extends Compiler<EEg_3> = Compiler<EEg_3>, ECra_3 extends Function = Function, EDsp_3 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_2, EObj_2, Ctx & ECtx & ECtx_1 & ECtx_2, Srd & ESrd & ESrd_1 & ESrd_2, EEg_2, ECpl_2, ECra_2, EDsp_2>) => AbstractModelOption<ECf_3, EObj_3, ECtx_3, ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>): {
                        <ACf extends ECf_3 = ECf_3, AObj extends EObj_3 = EObj_3, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_3 = EEg_3, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_3, EObj_3, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                        extend<ECf_4 extends ECf_3 = ECf_3, EObj_4 extends EObj_3 = EObj_3, ECtx_4 extends object = object, ESrd_4 extends object = object, EEg_4 extends EEg_3 = EEg_3, ECpl_4 extends Compiler<EEg_4> = Compiler<EEg_4>, ECra_4 extends Function = Function, EDsp_4 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_3, EObj_3, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3, EEg_3, ECpl_3, ECra_3, EDsp_3>) => AbstractModelOption<ECf_4, EObj_4, ECtx_4, ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>): {
                            <ACf extends ECf_4 = ECf_4, AObj extends EObj_4 = EObj_4, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_4 = EEg_4, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_4, EObj_4, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                            extend<ECf_5 extends ECf_4 = ECf_4, EObj_5 extends EObj_4 = EObj_4, ECtx_5 extends object = object, ESrd_5 extends object = object, EEg_5 extends EEg_4 = EEg_4, ECpl_5 extends Compiler<EEg_5> = Compiler<EEg_5>, ECra_5 extends Function = Function, EDsp_5 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_4, EObj_4, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4, EEg_4, ECpl_4, ECra_4, EDsp_4>) => AbstractModelOption<ECf_5, EObj_5, ECtx_5, ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>): {
                                <ACf extends ECf_5 = ECf_5, AObj extends EObj_5 = EObj_5, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_5 = EEg_5, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_5, EObj_5, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                extend<ECf_6 extends ECf_5 = ECf_5, EObj_6 extends EObj_5 = EObj_5, ECtx_6 extends object = object, ESrd_6 extends object = object, EEg_6 extends EEg_5 = EEg_5, ECpl_6 extends Compiler<EEg_6> = Compiler<EEg_6>, ECra_6 extends Function = Function, EDsp_6 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_5, EObj_5, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5, EEg_5, ECpl_5, ECra_5, EDsp_5>) => AbstractModelOption<ECf_6, EObj_6, ECtx_6, ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>): {
                                    <ACf extends ECf_6 = ECf_6, AObj extends EObj_6 = EObj_6, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_6 = EEg_6, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_6, EObj_6, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                    extend<ECf_7 extends ECf_6 = ECf_6, EObj_7 extends EObj_6 = EObj_6, ECtx_7 extends object = object, ESrd_7 extends object = object, EEg_7 extends EEg_6 = EEg_6, ECpl_7 extends Compiler<EEg_7> = Compiler<EEg_7>, ECra_7 extends Function = Function, EDsp_7 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_6, EObj_6, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6, EEg_6, ECpl_6, ECra_6, EDsp_6>) => AbstractModelOption<ECf_7, EObj_7, ECtx_7, ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>): {
                                        <ACf extends ECf_7 = ECf_7, AObj extends EObj_7 = EObj_7, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_7 = EEg_7, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_7, EObj_7, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                        extend<ECf_8 extends ECf_7 = ECf_7, EObj_8 extends EObj_7 = EObj_7, ECtx_8 extends object = object, ESrd_8 extends object = object, EEg_8 extends EEg_7 = EEg_7, ECpl_8 extends Compiler<EEg_8> = Compiler<EEg_8>, ECra_8 extends Function = Function, EDsp_8 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_7, EObj_7, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7, EEg_7, ECpl_7, ECra_7, EDsp_7>) => AbstractModelOption<ECf_8, EObj_8, ECtx_8, ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>): {
                                            <ACf extends ECf_8 = ECf_8, AObj extends EObj_8 = EObj_8, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_8 = EEg_8, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_8, EObj_8, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                            extend<ECf_9 extends ECf_8 = ECf_8, EObj_9 extends EObj_8 = EObj_8, ECtx_9 extends object = object, ESrd_9 extends object = object, EEg_9 extends EEg_8 = EEg_8, ECpl_9 extends Compiler<EEg_9> = Compiler<EEg_9>, ECra_9 extends Function = Function, EDsp_9 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_8, EObj_8, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8, EEg_8, ECpl_8, ECra_8, EDsp_8>) => AbstractModelOption<ECf_9, EObj_9, ECtx_9, ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>): {
                                                <ACf extends ECf_9 = ECf_9, AObj extends EObj_9 = EObj_9, ACtx extends object = object, ASrd extends object = object, AEg extends EEg_9 = EEg_9, ACpl extends Compiler<AEg> = Compiler<AEg>>(fun: (abstract: AbstractModelOption<ECf_9, EObj_9, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => ModelOption<ACf, AObj, ACtx, ASrd, AEg, ACpl, Record<string, LoadUnit>>): ModelOption<ACf, AObj, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9 & ACtx, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9 & ASrd, AEg, ACpl, Record<string, LoadUnit>>;
                                                extend<ECf_10 extends ECf_9 = ECf_9, EObj_10 extends EObj_9 = EObj_9, ECtx_10 extends object = object, ESrd_10 extends object = object, EEg_10 extends EEg_9 = EEg_9, ECpl_10 extends Compiler<EEg_10> = Compiler<EEg_10>, ECra_10 extends Function = Function, EDsp_10 extends Function = Function>(fun: (abstract: AbstractModelOption<ECf_9, EObj_9, Ctx & ECtx & ECtx_1 & ECtx_2 & ECtx_3 & ECtx_4 & ECtx_5 & ECtx_6 & ECtx_7 & ECtx_8 & ECtx_9, Srd & ESrd & ESrd_1 & ESrd_2 & ESrd_3 & ESrd_4 & ESrd_5 & ESrd_6 & ESrd_7 & ESrd_8 & ESrd_9, EEg_9, ECpl_9, ECra_9, EDsp_9>) => AbstractModelOption<ECf_10, EObj_10, ECtx_10, ESrd_10, EEg_10, ECpl_10, ECra_10, EDsp_10>): any;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    expand<EC extends object = {}, ECf extends BasicConfig = BasicConfig, EObj extends object = object, ECtx extends object = object, ESrd extends object = object, EEg extends EngineSupport = EngineSupport, ECpl extends Compiler<EEg> = Compiler<EEg>>(expandOption: {
        models: string | string[] | RegExp;
        config: EC;
        commands: ModelCommands<EC & ECf, EObj, EEg, ECpl, Record<string, object>, Model<EC & ECf, EObj, EEg, ECpl> & Readonly<ESrd> & ECtx>;
    }): {
        models: string | string[] | RegExp;
        config: EC;
        commands: ModelCommands<EC & ECf, EObj, EEg, ECpl, Record<string, object>, Model<EC & ECf, EObj, EEg, ECpl> & Readonly<ESrd> & ECtx>;
    };
};
