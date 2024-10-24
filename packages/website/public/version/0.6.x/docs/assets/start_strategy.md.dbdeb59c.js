import{_ as s,o as n,c as a,O as l}from"./chunks/framework.b643d968.js";const g=JSON.parse('{"title":"自定义策略","description":"","frontmatter":{},"headers":[],"relativePath":"start/strategy.md","filePath":"start/strategy.md"}'),p={name:"start/strategy.md"},o=l(`<h1 id="自定义策略" tabindex="-1">自定义策略 <a class="header-anchor" href="#自定义策略" aria-label="Permalink to &quot;自定义策略&quot;">​</a></h1><p><code>vis-three</code>提供了可拔插的插件支持功能，但是当我们的插件丰富起来之后，插件之间的工作协调会遇到问题，比如我们有一个<code>WebGLRendererPlugin</code>这个是管理<code>WebGL</code>渲染的插件，又有一个<code>RenderManagerPlugin</code>插件，这个是管理所有渲染逻辑的插件，那么我们该如何让这两个插件协调工作？</p><p>这个时候我们就需要策略去进行插件之间的功能协调，因为策略是讲究条件的，策略会以某一个插件，或者某几个插件为条件，去完成功能。</p><blockquote><p>本文使用的是 ts 进行策略编写。</p></blockquote><h2 id="策略选项" tabindex="-1">策略选项 <a class="header-anchor" href="#策略选项" aria-label="Permalink to &quot;策略选项&quot;">​</a></h2><p>策略选项是一个策略最终交给<code>engine</code>时所需要的选项对象，<code>engine</code>会通过相关的选项进行相关的执行回滚操作。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StrategyOptions</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Engine</span><span style="color:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 策略名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">condition</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">[]; </span><span style="color:#6A737D;">// 策略条件</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">exec</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">engine</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 策略执行方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rollback</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">engine</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">E</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 策略回滚方法</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StrategyOptions</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">E</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Engine</span><span style="color:#24292E;">&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 策略名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">condition</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">[]; </span><span style="color:#6A737D;">// 策略条件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">exec</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">engine</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">E</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 策略执行方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rollback</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">engine</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">E</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 策略回滚方法</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="策略条件" tabindex="-1">策略条件 <a class="header-anchor" href="#策略条件" aria-label="Permalink to &quot;策略条件&quot;">​</a></h2><p>我们执行策略的时候，都是有条件的，因为我们策略的编写是根据不同的插件去完成不同的事情，所以我们策略的条件就是能完成这些事情的插件合集，包括我们的插件组合<code>engine</code>。 比如我们下面的例子，我们需要<code>RenderManagerPlugin</code>，<code>WebGLRendererPlugin</code>配合去实现<code>WebGL</code>的 引擎长渲染，所以我们的这个策略需要依赖这两个插件的拓展引擎和功能。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Strategy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { RenderManagerEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGLRendererEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererEngine</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">RenderManagerEngine</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererStrategy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Strategy</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">WebGLRenderEngine</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition: [</span><span style="color:#9ECBFF;">&quot;RenderManagerPlugin&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Strategy } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { RenderManagerEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { WebGLRendererEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererEngine</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RenderManagerEngine</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererStrategy</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Strategy</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">WebGLRenderEngine</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    condition: [</span><span style="color:#032F62;">&quot;RenderManagerPlugin&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {},</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rollback</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {},</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="策略执行-回滚功能编写" tabindex="-1">策略执行，回滚功能编写 <a class="header-anchor" href="#策略执行-回滚功能编写" aria-label="Permalink to &quot;策略执行，回滚功能编写&quot;">​</a></h2><p>我们的策略除了安装之外，是支持策略的回滚的，也就是跟插件的可拔插机制一致，所以我们需要组织好策略执行和策略回滚时候的功能逻辑。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Strategy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  RenderManagerEngine,</span></span>
<span class="line"><span style="color:#E1E4E8;">  RENDER_EVENT,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGLRendererEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererEngine</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">RenderManagerEngine</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererStrategy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Strategy</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">WebGLRenderEngine</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderFun</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RenderEvent</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition: [</span><span style="color:#9ECBFF;">&quot;RenderManagerPlugin&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">renderFun</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        engine.webGLRenderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(engine.scene, engine.camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      engine.renderManager.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">RENDER_EVENT</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">RENDER</span><span style="color:#E1E4E8;">, renderFun);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      engine.renderManager.</span><span style="color:#B392F0;">removeEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">RENDER_EVENT</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">RENDER</span><span style="color:#E1E4E8;">, renderFun);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Strategy } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  RenderManagerEngine,</span></span>
<span class="line"><span style="color:#24292E;">  RENDER_EVENT,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { WebGLRendererEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererEngine</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RenderManagerEngine</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererStrategy</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Strategy</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">WebGLRenderEngine</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderFun</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RenderEvent</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    condition: [</span><span style="color:#032F62;">&quot;RenderManagerPlugin&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">renderFun</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        engine.webGLRenderer.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(engine.scene, engine.camera);</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      engine.renderManager.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">RENDER_EVENT</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">RENDER</span><span style="color:#24292E;">, renderFun);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rollback</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      engine.renderManager.</span><span style="color:#6F42C1;">removeEventListener</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">RENDER_EVENT</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">RENDER</span><span style="color:#24292E;">, renderFun);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><p><code>Engine</code>与<code>Strategy</code>需要从核心包中引入<code>@vis-three/core</code>。</p></li><li><p>对于方法或者部分属性，我们能够利用 js 的闭包形式，将逻辑或者变量内存封装在插件内，在销毁的时候一并清除，防止内存泄漏。</p></li><li><p><code>name</code>, <code>condition</code>, <code>exec</code>, <code>rollback</code>是必要的字段，不能为空。</p></li></ul></div><h2 id="策略传参" tabindex="-1">策略传参 <a class="header-anchor" href="#策略传参" aria-label="Permalink to &quot;策略传参&quot;">​</a></h2><p>策略化是函数式的编写形式，既然是函数式，所以我们是可以进行参数的传递的，这样子我们就能够编写更灵活的策略。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Strategy } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  RenderManagerEngine,</span></span>
<span class="line"><span style="color:#E1E4E8;">  RENDER_EVENT,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { WebGLRendererEngine } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererParameters</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererEngine</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">RenderManagerEngine</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">WebGLRendererStrategy</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Strategy</span><span style="color:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">WebGLRenderEngine</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">WebGLRendererParameters</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">params</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">WebGLRendererParameters</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    condition: [</span><span style="color:#9ECBFF;">&quot;RenderManagerPlugin&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(params);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rollback</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">engine</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Strategy } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  RenderManagerEngine,</span></span>
<span class="line"><span style="color:#24292E;">  RENDER_EVENT,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/render-manager-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { WebGLRendererEngine } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/webgl-renderer-plugin&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererParameters</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRenderEngine</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererEngine</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">RenderManagerEngine</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">WebGLRendererStrategy</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Strategy</span><span style="color:#24292E;">&lt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">WebGLRenderEngine</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">WebGLRendererParameters</span></span>
<span class="line"><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">params</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">WebGLRendererParameters</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&quot;WebGLRendererStrategy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    condition: [</span><span style="color:#032F62;">&quot;RenderManagerPlugin&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;WebGLRendererPlugin&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(params);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rollback</span><span style="color:#24292E;">(</span><span style="color:#E36209;">engine</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// do something</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div>`,17),e=[o];function r(t,c,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",r]]);export{g as __pageData,u as default};