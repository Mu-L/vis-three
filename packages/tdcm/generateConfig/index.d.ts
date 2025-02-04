import { DeepPartial } from "@vis-three/utils";
import { BasicConfig } from "../module";
import { EngineSupport } from "../engine";
/**
 * 配置单生成的附加选项
 */
export interface GenerateOptions<C extends BasicConfig> {
    /**是否生成响应式配置，默认为true */
    observer?: boolean;
    /**严格模式，只允许合并CONFIG_TYPE规定的属性，自定义扩展配置下关闭 */
    strict?: boolean;
    /**控制台是否输出warn */
    warn?: boolean;
    /**
     * 配置额外处理方法，不过建议使用 全局选项`defineOption`,除非特殊情况再使用此方法。
     */
    handler?: (c: C) => C;
}
export interface GenerateConfig {
    /**
     * 生成相关对象配置单
     * @param type 对象类型 CONFIG_TYPE
     * @param merge 合并的对象
     * @param options 函数的拓展选项
     * @returns config object
     */
    <C extends BasicConfig>(type: string, merge?: DeepPartial<C>, options?: GenerateOptions<C>): C;
    /**是否自动注入*/
    autoInject: boolean;
    /**自动注入的目标引擎 */
    injectEngine: EngineSupport | null;
    /**自动注入场景，设置目标场景可以传入场景的vid，如果是true则会加入当前的场景 */
    injectScene: string | boolean;
}
/**
 * 生成相关对象配置单
 * @param type 对象类型 CONFIG_TYPE
 * @param merge 合并的对象
 * @param options 函数的拓展选项
 * @returns config object
 */
export declare const generateConfig: GenerateConfig;
