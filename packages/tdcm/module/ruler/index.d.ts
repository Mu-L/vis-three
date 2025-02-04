import { Compiler } from "../compiler";
import { CtnNotice } from "../container";
export type Rule = (input: CtnNotice, compiler: Compiler) => boolean;
export declare const DEFAULT_RULE: Record<string, Rule>;
export declare class Ruler {
    rules: Rule[];
    compiler: Compiler;
    private pointer;
    constructor(rules?: Rule[]);
    link(compiler: Compiler<any>): void;
    execute(input: CtnNotice): void;
    remove(rule: Rule): void;
    add(rule: Rule, index?: number): this;
    before(rule: Rule): this;
    after(rule: Rule): this;
    push(rule: Rule): this;
    unshift(rule: Rule): this;
    pop(): this;
    shift(): this;
}
/**
 * 定义规则链
 * @param rules 规则链
 * @returns rules
 */
export declare const defineRule: (rules: Rule[]) => Rule[];
