import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const F=JSON.parse('{"title":"@vis-three/plugin-webgl-renderer","description":"","frontmatter":{},"headers":[],"relativePath":"zh/library/plugins/plugin-webgl-renderer.md","filePath":"zh/library/plugins/plugin-webgl-renderer.md"}'),l={name:"zh/library/plugins/plugin-webgl-renderer.md"},e=n(`<h1 id="vis-three-plugin-webgl-renderer" tabindex="-1">@vis-three/plugin-webgl-renderer <a class="header-anchor" href="#vis-three-plugin-webgl-renderer" aria-label="Permalink to &quot;@vis-three/plugin-webgl-renderer&quot;">​</a></h1><p>webgl 渲染器插件。</p><h2 id="最新版本" tabindex="-1">最新版本 <a class="header-anchor" href="#最新版本" aria-label="Permalink to &quot;最新版本&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/plugin-webgl-renderer"><h2 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/plugin-webgl-renderer?color=blue"><h2 id="插件名称" tabindex="-1">插件名称 <a class="header-anchor" href="#插件名称" aria-label="Permalink to &quot;插件名称&quot;">​</a></h2><p><code>WebGLRendererPlugin</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可以使用枚举：<code>WEBGL_RENDERER_PLUGIN</code></p></div><h2 id="插件依赖" tabindex="-1">插件依赖 <a class="header-anchor" href="#插件依赖" aria-label="Permalink to &quot;插件依赖&quot;">​</a></h2><p>无</p><h2 id="插件传参" tabindex="-1">插件传参 <a class="header-anchor" href="#插件传参" aria-label="Permalink to &quot;插件传参&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> WebGLRendererParameters</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * A Canvas where the renderer draws its output.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  canvas</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> HTMLCanvasElement</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OffscreenCanvas</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * A WebGL Rendering Context.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * (https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Default is null</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  context</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> WebGLRenderingContext</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * shader precision. Can be &quot;highp&quot;, &quot;mediump&quot; or &quot;lowp&quot;.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  precision</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is false.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  alpha</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is true.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  premultipliedAlpha</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is false.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  antialias</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is true.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  stencil</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is false.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  preserveDrawingBuffer</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * Can be &quot;high-performance&quot;, &quot;low-power&quot; or &quot;default&quot;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  powerPreference</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is true.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  depth</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is false.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  logarithmicDepthBuffer</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   * default is false.</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  failIfMajorPerformanceCaveat</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> undefined</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="引擎拓展" tabindex="-1">引擎拓展 <a class="header-anchor" href="#引擎拓展" aria-label="Permalink to &quot;引擎拓展&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Screenshot</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  width</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  height</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  mine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> WebGLRendererEngine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**webgl渲染器 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  webGLRenderer</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> WebGLRenderer</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**获取webGL渲染截图 */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  getScreenshot</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Screenshot</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Promise</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="webglrenderer" tabindex="-1">WebGLRenderer <a class="header-anchor" href="#webglrenderer" aria-label="Permalink to &quot;WebGLRenderer&quot;">​</a></h2><p>参照：<a href="https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer" target="_blank" rel="noreferrer">https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer</a></p>`,17),h=[e];function p(t,k,r,d,g,y){return a(),i("div",null,h)}const o=s(l,[["render",p]]);export{F as __pageData,o as default};