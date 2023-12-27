import{_ as n,o as s,c as a,a as e}from"./app-VdCEKWSB.js";const l={},i=e(`<h1 id="class-typed-properties" tabindex="-1"><a class="header-anchor" href="#class-typed-properties" aria-hidden="true">#</a> Class Typed Properties</h1><p>It is recommended to use type hints for properties whenever possible instead of relying solely on docblocks.</p><h2 id="ok" tabindex="-1"><a class="header-anchor" href="#ok" aria-hidden="true">#</a> OK</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">PunchRecordRepository</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">null</span><span class="token punctuation">|</span><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> Validation errors
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$errors</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">Record<span class="token punctuation">|</span><span class="token keyword">null</span></span> Data array
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$data</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">Record</span> Model instance
     */</span>
    <span class="token keyword">private</span> <span class="token variable">$model</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name">CreateJournal</span> Action instance
     */</span>
    <span class="token keyword">private</span> <span class="token variable">$action</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Validator<span class="token punctuation">|</span><span class="token keyword">null</span></span> Validator instance
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$validator</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="not-ok" tabindex="-1"><a class="header-anchor" href="#not-ok" aria-hidden="true">#</a> NOT OK</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">PunchRecordRepository</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$errors</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token operator">?</span><span class="token keyword type-hint">array</span> <span class="token variable">$data</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name type-declaration">Record</span> <span class="token variable">$model</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name type-declaration">CreateJournal</span> <span class="token variable">$action</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token operator">?</span><span class="token class-name class-name-fully-qualified type-declaration"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Validation<span class="token punctuation">\\</span>Validator</span> <span class="token variable">$validator</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function p(t,o){return s(),a("div",null,c)}const r=n(l,[["render",p],["__file","class-typed-properties.html.vue"]]);export{r as default};
