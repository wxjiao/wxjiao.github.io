---
title: "Wenxiang Jiao (焦文祥)"
layout: homelay
excerpt: "Wenxiang Jiao is a researcher working on large language models, AI agents, reasoning, safety, and LLM psychology."
sitemap: true
permalink: /
---

<section markdown="0" class="home-hero">
  <div class="home-hero-copy">
    <p class="eyebrow">LLMs · Agents · Reasoning · Safety</p>
    <h1>Wenxiang Jiao <span>焦文祥</span></h1>
    <p class="hero-lede">
      I study where large language models break — in reasoning, agency, safety, and psychological behavior — and turn those findings into benchmarks, agents, and alignment methods for reliable AI systems.
    </p>
    <div class="hero-links">
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=CvtODukAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a>
      <a href="https://github.com/wxjiao">GitHub</a>
      <a href="https://twitter.com/WenxiangJiao">X / Twitter</a>
      <a href="mailto:wenxiangjiaonju@gmail.com">Email</a>
    </div>
  </div>
  <div class="home-hero-visual" aria-label="Portrait of Wenxiang Jiao">
    <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/wxjiao2016.jpeg" alt="Wenxiang Jiao" />
  </div>
</section>

<section markdown="0" class="section-block about-block">
  <div class="section-heading">
    <p class="section-label">About</p>
  </div>
  <div class="section-body">
    <div class="compact-list">
      <div><strong>Current</strong><span>Xiaohongshu Inc., LLM Algorithm Expert, 2025 - Present</span></div>
      <div><strong>Previously</strong><span>Tencent AI Lab, Senior Researcher, 2021 - 2025</span></div>
      <div><strong>Education</strong><span>Ph.D., The Chinese University of Hong Kong, 2021</span></div>
      <div class="service-row">
        <strong>Service</strong>
        <span class="service-venues">
          <span class="venue-label">Reviewer for</span>
          <span class="venue-chip">Nature</span>
          <span class="venue-chip">Nature Machine Intelligence</span>
          <span class="venue-chip">NeurIPS</span>
          <span class="venue-chip">ICML</span>
          <span class="venue-chip">ACL</span>
        </span>
      </div>
    </div>
  </div>
</section>

<section markdown="0" class="section-block latest-news">
  <div class="section-heading">
    <p class="section-label">Updates</p>
  </div>
  <div class="news-list">
    {% for article in site.data.news limit:5 %}
    <article class="news-item">
      <time>{{ article.date }}</time>
      <p>{{ article.headline }}</p>
    </article>
    {% endfor %}
  </div>
  <p class="section-link"><a href="{{ site.url }}{{ site.baseurl }}/allnews.html">Read all news</a></p>
</section>

<section markdown="0" class="section-block">
  <div class="section-heading">
    <p class="section-label">Selected Work</p>
  </div>
  {% include spotlight-projects.html %}
</section>

<section markdown="0" class="section-block research-areas">
  <div class="section-heading">
    <p class="section-label">Research</p>
  </div>
  <div class="research-strip">
    <article class="research-topic">
      <h3>General Agents</h3>
      <p>Multimodal, tool-using, and collaborative agents for complex tasks.</p>
      <span>DeepAgent · OmniGAIA · MAD</span>
    </article>
    <article class="research-topic">
      <h3>LLM Reasoning</h3>
      <p>Mathematical, reflective, and efficient long-chain reasoning.</p>
      <span>DeepCompress · REA-RL</span>
    </article>
    <article class="research-topic">
      <h3>LLM Safety</h3>
      <p>Risk awareness, jailbreak robustness, multilingual safety, and refusal.</p>
      <span>CipherChat · DeRTa</span>
    </article>
    <article class="research-topic">
      <h3>LLM Personality</h3>
      <p>Emotion, personality, and psychological portrayals in conversational AI.</p>
      <span>PsychoBench · EmotionBench · Fints</span>
    </article>
  </div>
</section>
