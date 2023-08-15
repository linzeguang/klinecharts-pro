import{_ as s,o as a,c as n,S as o}from"./chunks/framework.3ac0968e.js";const A=JSON.parse('{"title":"Theme customization","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/theme.md","filePath":"en-US/theme.md"}'),l={name:"en-US/theme.md"},p=o(`<h1 id="theme-customization" tabindex="-1">Theme customization <a class="header-anchor" href="#theme-customization" aria-label="Permalink to &quot;Theme customization&quot;">​</a></h1><p>The chart has two built-in themes, <code>dark</code> and <code>light</code>, and the default is <code>light</code>. If you need to customize other topics, you need to complete the style customization of the core chart and the customization of the CSS.</p><h2 id="customization-of-core-chart" tabindex="-1">Customization of core chart <a class="header-anchor" href="#customization-of-core-chart" aria-label="Permalink to &quot;Customization of core chart&quot;">​</a></h2><p>Set through the API <code>setStyles(styles)</code>.</p><h2 id="css-related-styles" tabindex="-1">CSS related styles <a class="header-anchor" href="#css-related-styles" aria-label="Permalink to &quot;CSS related styles&quot;">​</a></h2><p>The css style uses css variables to control the color, as follows,</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">klinecharts-pro</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* Light theme colors */</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-primary-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1677ff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-hover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FFFFFF</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-popover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FFFFFF</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">051441</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-second-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">76808F</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ebedf1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-selected-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Dark theme colors  */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">klinecharts-pro</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-hover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">151517</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-popover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1c1c1f</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F8F8F8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-second-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">929AA5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">292929</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.klinecharts-pro</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/* Light theme colors */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-primary-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1677ff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-hover-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgba</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">22</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">119</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.15</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#FFFFFF</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-popover-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#FFFFFF</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-text-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#051441</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-text-second-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#76808F</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ebedf1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-selected-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgba</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">22</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">119</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.15</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Dark theme colors  */</span></span>
<span class="line"><span style="color:#6F42C1;">.klinecharts-pro</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">data-theme</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;dark&quot;</span><span style="color:#24292E;">] {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-hover-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgba</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">22</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">119</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.15</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#151517</span><span style="color:#24292E;">;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-popover-background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1c1c1f</span><span style="color:#24292E;">;;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-text-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#F8F8F8</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-text-second-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#929AA5</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--klinecharts-pro-border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#292929</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,7),e=[p];function c(r,t,y,C,D,F){return a(),n("div",null,e)}const h=s(l,[["render",c]]);export{A as __pageData,h as default};
