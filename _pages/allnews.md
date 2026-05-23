---
title: "Wenxiang Jiao (焦文祥) - News"
layout: homelay
excerpt: "Recent research updates, publications, talks, and project news from Wenxiang Jiao."
sitemap: false
permalink: /allnews.html
---

<section markdown="0" class="page-header">
  <h1>News</h1>
</section>

<section markdown="0" class="section-block">
  <div class="news-list">
    {% for article in site.data.news %}
    <article class="news-item">
      <time>{{ article.date }}</time>
      <p>{{ article.headline }}</p>
    </article>
    {% endfor %}
  </div>
</section>
