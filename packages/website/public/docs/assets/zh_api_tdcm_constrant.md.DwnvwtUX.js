import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const F=JSON.parse('{"title":"常量","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/tdcm/constrant.md","filePath":"zh/api/tdcm/constrant.md"}'),h={name:"zh/api/tdcm/constrant.md"},l=n(`<h1 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h1><h2 id="module-type" tabindex="-1">MODULE_TYPE <a class="header-anchor" href="#module-type" aria-label="Permalink to &quot;MODULE_TYPE&quot;">​</a></h2><p>当前所有注册的模块类型。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Record</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineEngineSupport</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  modules: [MeshModule, GeometryModule, MaterialModule],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">MODULE_TYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">MESH</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// mesh</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">MODULE_TYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">GEOMETRY</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// geometry</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">MODULE_TYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">MATERIAL</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// material</span></span></code></pre></div><h2 id="config-type" tabindex="-1">CONFIG_TYPE <a class="header-anchor" href="#config-type" aria-label="Permalink to &quot;CONFIG_TYPE&quot;">​</a></h2><p>当前所有注册的配置化模型类型。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Record</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> GeometryModule</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineModule</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  type: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;geometry&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  models: [BoxGeometryModel, SphereGeometryModel],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineEngineSupport</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  modules: [GeometryModule],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">CONFIG_TYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">BOXGEOMETRY</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// BoxGeometry</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">CONFIG_TYPE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">SPHEREGEOMETRY</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// SphereGeometry</span></span></code></pre></div><h2 id="object-module" tabindex="-1">OBJECT_MODULE <a class="header-anchor" href="#object-module" aria-label="Permalink to &quot;OBJECT_MODULE&quot;">​</a></h2><p>当前注册的模块中属于物体模块。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Record</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, boolean</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> MeshModule</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineModule</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  type: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;mesh&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  object: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineEngineSupport</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  modules: [MeshModule, GeometryModule, MaterialModule],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">OBJECT_MODULE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;mesh&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">]); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">OBJECT_MODULE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;geometry&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">]); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// false</span></span></code></pre></div><h2 id="config-module" tabindex="-1">CONFIG_MODULE <a class="header-anchor" href="#config-module" aria-label="Permalink to &quot;CONFIG_MODULE&quot;">​</a></h2><p>该模型类型对应的模块类型。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Record</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> GeometryModule</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineModule</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  type: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;geometry&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  models: [BoxGeometryModel, SphereGeometryModel],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> engine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> defineEngineSupport</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  modules: [GeometryModule],</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">CONFIG_MODULE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;BoxGeometry&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">]); </span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">// &#39;geometry&#39;</span></span></code></pre></div><h2 id="model-event" tabindex="-1">MODEL_EVENT <a class="header-anchor" href="#model-event" aria-label="Permalink to &quot;MODEL_EVENT&quot;">​</a></h2><p>配置化模型所有的模型事件。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> enum</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> MODEL_EVENT</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  COMPILED_ADD</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;compiledAdd&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  COMPILED_REMOVE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;compiledRemove&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  COMPILED_ATTR</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;compiledAttr&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  COMPILED_UPDATE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;compiledUpdate&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  COMPILED</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;compiled&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  NOTICED</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;noticed&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="support-life-cycle" tabindex="-1">SUPPORT_LIFE_CYCLE <a class="header-anchor" href="#support-life-cycle" aria-label="Permalink to &quot;SUPPORT_LIFE_CYCLE&quot;">​</a></h2><p><code>@vis-three/tdcm</code>提供的模块生命周期。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> enum</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SUPPORT_LIFE_CYCLE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  ZERO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  ONE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 100</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  TWO</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 200</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  THREE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 300</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  FOUR</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 400</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  FIVE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 500</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  SIX</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 600</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  SEVEN</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 700</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  EIGHT</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 800</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  NINE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> 900</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="default-rule" tabindex="-1">DEFAULT_RULE <a class="header-anchor" href="#default-rule" aria-label="Permalink to &quot;DEFAULT_RULE&quot;">​</a></h2><p><code>@vis-three/tdcm</code>提供的默认处理规则。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> DEFAULT_RULE</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Record</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Rule</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt; </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  SYMBOL_VALIDATOR</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">input</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> globalOption.symbol.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">validator</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(input.symbol);</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  OPERATE_ADD</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">operate</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">path</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">symbol</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">key</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> }, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">compiler</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (operate </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">===</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;add&quot;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">path.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">length</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> symbol </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">===</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> key) {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      compiler.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">add</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(value);</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">else</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  OPERATE_DELETE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">operate</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">path</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> }, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">compiler</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (operate </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">===</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;delete&quot;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">path.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">length</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      compiler.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">remove</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(value);</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">else</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  OPERATE_COVER</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">({ </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">operate</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">path</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">value</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">key</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">symbol</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> }, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">compiler</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    if</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (operate </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">===</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;set&quot;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> !</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">path.</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">length</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> &amp;&amp;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> key </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">===</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> symbol) {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      compiler.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">cover</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(value);</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    } </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">else</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">      return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  OPERATE_COMPILE</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">input</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">compiler</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    compiler.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">compile</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(input.symbol, input);</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    return</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div>`,37),k=[l];function t(p,e,E,r,d,g){return a(),i("div",null,k)}const o=s(h,[["render",t]]);export{F as __pageData,o as default};