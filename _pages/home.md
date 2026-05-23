---
title: "Wenxiang Jiao (焦文祥)"
layout: homelay
excerpt: "Wenxiang Jiao is a researcher working on large language models, AI agents, reasoning, safety, and LLM psychology."
sitemap: true
permalink: /
---

<section class="home-hero">
  <div class="home-hero-copy">
    <p class="eyebrow">Large Language Models · AI Agents · Reasoning · Safety</p>
    <h1>Wenxiang Jiao <span>焦文祥</span></h1>
    <p class="hero-lede">
      I build benchmarks, agents, and alignment techniques that make large language models more capable, reliable, and aware of their limits.
    </p>
    <p class="hero-affiliation">
      LLM Application Algorithm Expert at Xiaohongshu. Previously Senior Researcher at Tencent AI Lab. Ph.D., The Chinese University of Hong Kong.
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

<section class="section-block about-block">
  <div class="section-heading">
    <p class="eyebrow">Profile</p>
    <h2>About</h2>
  </div>
  <div class="section-body">
    <p>
      My research focuses on large language models, especially their reasoning capabilities, agentic behavior, safety, and psychological properties. I am interested in turning these questions into concrete benchmarks, open-source systems, and practical techniques for more robust AI applications.
    </p>
    <div class="compact-list">
      <div><strong>Current</strong><span>Xiaohongshu Inc., LLM Application Algorithm Expert, 2025 - Present</span></div>
      <div><strong>Previously</strong><span>Tencent AI Lab, Senior Researcher, 2021 - 2025</span></div>
      <div><strong>Education</strong><span>Ph.D., The Chinese University of Hong Kong, 2021</span></div>
      <div><strong>Service</strong><span>Reviewer for Nature, Nature Machine Intelligence, NeurIPS, ICML, and ACL</span></div>
    </div>
  </div>
</section>

<section class="section-block research-areas">
  <div class="section-heading">
    <p class="eyebrow">Research</p>
    <h2>Research Areas</h2>
  </div>
  <div class="research-grid">
    <article class="research-card">
      <h3>General Agents</h3>
      <p>Building multimodal and tool-using agents for complex, open-ended tasks.</p>
      <span>DeepAgent · OmniGAIA · Multi-Agent Debate</span>
    </article>
    <article class="research-card">
      <h3>LLM Reasoning</h3>
      <p>Improving mathematical, reflective, and efficient long-chain reasoning.</p>
      <span>DeepCompress · REA-RL · Rubric Rewards</span>
    </article>
    <article class="research-card">
      <h3>LLM Safety</h3>
      <p>Evaluating risk awareness, jailbreak robustness, multilingual safety, and refusal behavior.</p>
      <span>CipherChat · DeRTa · Multilingual Safety</span>
    </article>
    <article class="research-card">
      <h3>LLM Personality</h3>
      <p>Studying how conversational AI portrays emotion, personality, and psychological traits.</p>
      <span>PsychoBench · EmotionBench · Fints</span>
    </article>
  </div>
</section>

<section class="section-block selected-publications">
  <div class="section-heading">
    <p class="eyebrow">Selected Work</p>
    <h2>Selected Publications</h2>
  </div>
  <div class="publication-list">
    <article class="publication-item">
      <div class="publication-meta">WWW 2026</div>
      <h3>DeepAgent: A General Reasoning Agent with Scalable Toolsets</h3>
      <p>A general reasoning agent that searches for and uses tools from large-scale toolsets.</p>
      <div class="inline-links">
        <a href="https://arxiv.org/abs/2510.21618">Paper</a>
        <a href="https://github.com/DeepExperience/DeepAgent">Code</a>
      </div>
    </article>
    <article class="publication-item">
      <div class="publication-meta">ICLR 2024 Oral</div>
      <h3>On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs</h3>
      <p>PPBench evaluates personality, relationships, motivations, and emotional abilities in LLMs.</p>
      <div class="inline-links">
        <a href="https://arxiv.org/abs/2310.01386">Paper</a>
        <a href="https://github.com/CUHK-ARISE/PsychoBench">Code</a>
      </div>
    </article>
    <article class="publication-item">
      <div class="publication-meta">ICLR 2024</div>
      <h3>GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher</h3>
      <p>CipherChat studies how safety alignment generalizes to cipher-based non-natural languages.</p>
      <div class="inline-links">
        <a href="https://arxiv.org/abs/2308.06463">Paper</a>
        <a href="https://llmcipherchat.github.io/">Project</a>
      </div>
    </article>
    <article class="publication-item">
      <div class="publication-meta">EMNLP 2024</div>
      <h3>Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate</h3>
      <p>Multi-Agent Debate explores divergent chains of thought through structured agent interaction.</p>
      <div class="inline-links">
        <a href="https://arxiv.org/abs/2305.19118">Paper</a>
        <a href="https://github.com/Skytliang/Multi-Agents-Debate">Code</a>
      </div>
    </article>
  </div>
  <p class="section-link"><a href="{{ site.url }}{{ site.baseurl }}/publications/">View all publications</a></p>
</section>

<section class="section-block">
  <div class="section-heading">
    <p class="eyebrow">Open Source</p>
    <h2>Spotlight Projects</h2>
  </div>
  {% include spotlight-projects.html %}
</section>

<section class="section-block latest-news">
  <div class="section-heading">
    <p class="eyebrow">Updates</p>
    <h2>Latest News</h2>
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
