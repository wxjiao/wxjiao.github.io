---
title: "Wenxiang Jiao (焦文祥)"
layout: homelay
excerpt: "Wenxiang Jiao studies capability learning, deep reasoning, and self-evolving agents. LLM Algorithm Expert at Xiaohongshu."
sitemap: true
permalink: /
---

<section markdown="0" class="home-hero" aria-labelledby="profile-heading">
  <div class="home-hero-copy">
    <h1 id="profile-heading">Wenxiang Jiao <span lang="zh">焦文祥</span></h1>
    <p class="profile-role">LLM Algorithm Expert <span class="role-divider">/</span> Xiaohongshu</p>
    <p class="hero-lede">Towards agents that reason deeply, learn from experience, and continually improve.</p>
    <p class="hero-detail">My research spans capability learning, deep reasoning, and self-evolving agents. I currently focus on tool and skill learning, agentic reinforcement learning, and harness engineering—how an agent’s runtime can support learning and self-improvement.</p>
    <div class="hero-links" aria-label="Contact and profiles">
      <a href="mailto:wenxiangjiaonju@gmail.com">Email <span aria-hidden="true">↗</span></a>
      <a href="https://scholar.google.com/citations?hl=zh-CN&user=CvtODukAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/wxjiao">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://twitter.com/WenxiangJiao">X / Twitter <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <figure class="home-hero-visual">
    <img src="{{ '/images/teampic/wxjiao2016.jpeg' | relative_url }}" alt="Portrait of Wenxiang Jiao" width="719" height="719" fetchpriority="high">
    <figcaption>焦文祥 <span>Wenxiang Jiao</span></figcaption>
  </figure>
</section>

<section markdown="0" class="section-block research-overview" aria-labelledby="research-heading">
  <div class="section-heading">
    <div><p class="eyebrow">Research agenda</p><h2 class="section-label" id="research-heading">From learning to self-evolution.</h2></div>
    <a class="text-link" href="{{ '/research/' | relative_url }}">Explore research <span aria-hidden="true">↗</span></a>
  </div>
  <div class="research-path">
    {% for area in site.data.research_areas %}
    <a class="research-direction" data-area="{{ area.id }}" href="{{ '/research/' | relative_url }}#{{ area.id }}">
      <span class="direction-number">{{ area.number }}</span>
      <h3>{{ area.title }}</h3>
      <p>{{ area.question }}</p>
      <span class="direction-topics">{{ area.topics }}</span>
      <span class="direction-arrow" aria-hidden="true">↗</span>
    </a>
    {% endfor %}
  </div>
</section>

<section markdown="0" class="section-block selected-work" aria-labelledby="work-heading">
  <div class="section-heading">
    <div><p class="eyebrow">A closer look</p><h2 class="section-label" id="work-heading">Selected work</h2></div>
    <a class="text-link" href="{{ '/research/' | relative_url }}">All research <span aria-hidden="true">↗</span></a>
  </div>
  {% include spotlight-projects.html %}
  <p class="metrics-note">Citation and star counts checked <time datetime="2026-11-04">Nov 4, 2026</time>.</p>
</section>

<section markdown="0" class="section-block latest-news" aria-labelledby="updates-heading">
  <div class="section-heading">
    <div><p class="eyebrow">Recently</p><h2 class="section-label" id="updates-heading">Updates</h2></div>
    <a class="text-link" href="{{ '/allnews.html' | relative_url }}">News archive <span aria-hidden="true">↗</span></a>
  </div>
  <div class="news-list">
    {% for article in site.data.news limit:5 %}
    <article class="news-item">
      <time datetime="{{ article.date | date: '%Y-%m-%d' }}">{{ article.date }}</time>
      <p>{{ article.headline }}</p>
    </article>
    {% endfor %}
  </div>
</section>

<section markdown="0" class="section-block background-block" id="background" aria-labelledby="background-heading">
  <div class="section-heading"><div><p class="eyebrow">Background</p><h2 class="section-label" id="background-heading">Experience &amp; education</h2></div></div>
  <div class="background-columns">
    <div>
      <h3 class="column-label">Experience</h3>
      <ol class="timeline">
        <li><span class="timeline-date">Sep 2025 — Present</span><h4>Xiaohongshu</h4><p class="timeline-role">LLM Algorithm Expert</p><p>General agents, tool and skill learning, and self-improvement through Harness Engineering.</p></li>
        <li><span class="timeline-date">Nov 2021 — Aug 2025</span><h4>Tencent</h4><p class="timeline-role">Senior Researcher</p><p>Hunyuan, Aug 2024–Aug 2025: long-context understanding and complex instruction following.</p><p>AI Lab, Nov 2021–Aug 2024: multilingual models, translation, reasoning, and multi-agent collaboration.</p></li>
      </ol>
    </div>
    <div>
      <h3 class="column-label label-education">Education</h3>
      <ol class="timeline">
        <li><span class="timeline-date">Aug 2017 — Nov 2021</span><h4>The Chinese University of Hong Kong</h4><p class="timeline-role">Ph.D. in Computer Science &amp; Engineering</p><p>Advised by <a href="https://www.cse.cuhk.edu.hk/irwin.king/">Prof. Irwin King</a> and <a href="https://www.cse.cuhk.edu.hk/lyu/">Prof. Michael R. Lyu</a>.</p></li>
        <li><span class="timeline-date">Aug 2015 — Jun 2017</span><h4>Nanjing University</h4><p class="timeline-role">Master’s in Optical Engineering</p></li>
        <li><span class="timeline-date">Sep 2011 — Jul 2015</span><h4>Nanjing University</h4><p class="timeline-role">Bachelor’s in Information Engineering</p></li>
      </ol>
    </div>
  </div>
</section>

<section markdown="0" class="section-block community-block" aria-labelledby="community-heading">
  <div class="section-heading"><div><p class="eyebrow">Academic community</p><h2 class="section-label" id="community-heading">Recognition &amp; service</h2></div></div>
  <div class="community-columns">
    <div>
      <h3 class="column-label label-recognition">Selected recognition</h3>
      <ul class="recognition-list">
        <li><span>2024</span><div><strong>ICLR Oral Presentation</strong><p>PsychoBench · Top 1.2%</p></div></li>
        <li><span>2022</span><div><strong>Best Paper Award</strong><p>Multilingual Representation Learning Workshop, EMNLP</p></div></li>
        <li><span>2022</span><div><strong>1st Place · WMT</strong><p>Large-Scale African Languages Translation · Constrained track</p></div></li>
      </ul>
    </div>
    <div class="service-copy">
      <h3 class="column-label">Reviewing</h3>
      <p>Nature, Nature Machine Intelligence, NeurIPS, ICLR, ICML, ACL, and EMNLP.</p>
      <h3 class="column-label label-talks">Selected invited talks</h3>
      <p><a href="https://www.bagevent.com/event/9095910/p/568383">Scalable and Personalizable AI Agents</a><br><span class="detail-muted">Agentic AI Summit · Jan 2026</span></p>
      <p><a href="http://sc.cipsc.org.cn/mt/conference/2023/schedule/">From Machine to Human-like Intelligence</a><br><span class="detail-muted">CCMT tutorial · Oct 2023</span></p>
    </div>
  </div>
</section>

<section markdown="0" class="section-block visitor-block" aria-label="Visitor map">
  {% include visitor-map.html %}
</section>
