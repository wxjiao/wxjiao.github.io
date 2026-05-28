---
title: "Wenxiang Jiao (焦文祥) - Collaborators & Students"
layout: homelay
excerpt: "Researchers and students Wenxiang Jiao has worked with on LLM agents, reasoning, safety, and psychology."
sitemap: false
permalink: /team/
---

<section markdown="0" class="page-header">
  <h1>Collaborators &amp; Students</h1>
  <p class="page-intro">Researchers and students I've worked with on LLM agents, reasoning, safety, and psychology.</p>
</section>

<section markdown="0" class="section-block">
  <div class="people-list">
    {% for m in site.data.team_members %}
    <article class="person">
      <header class="person-head">
        <h3 class="person-name">{{ m.name }}</h3>
        {% if m.role %}<span class="person-role">{{ m.role }}</span>{% endif %}
      </header>
      {% if m.affiliation %}
      <p class="person-affiliation">{{ m.affiliation }}</p>
      {% endif %}
      {% if m.education and m.education.size > 0 %}
      <p class="person-edu"><span class="person-meta-label">Education</span>{% for e in m.education %}{{ e }}{% unless forloop.last %} · {% endunless %}{% endfor %}</p>
      {% endif %}
      {% if m.research and m.research != "" %}
      <p class="person-research"><span class="person-meta-label">Research</span>{{ m.research }}</p>
      {% endif %}
      {% if m.selected_works and m.selected_works.size > 0 %}
      <p class="person-works"><span class="person-meta-label">Selected</span>{% for w in m.selected_works %}<a href="{{ w.link }}">{{ w.title }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}</p>
      {% endif %}
      {% if m.links.homepage or m.links.scholar or m.links.github %}
      <p class="person-links inline-links">
        {% if m.links.homepage %}<a href="{{ m.links.homepage }}">Homepage</a>{% endif %}
        {% if m.links.scholar %}<a href="{{ m.links.scholar }}">Scholar</a>{% endif %}
        {% if m.links.github %}<a href="{{ m.links.github }}">GitHub</a>{% endif %}
      </p>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</section>
