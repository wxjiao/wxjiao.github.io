---
title: "Wenxiang Jiao - Research"
layout: homelay
excerpt: "Research on self-evolving agents, deep reasoning, and language model capability learning."
sitemap: true
permalink: /research/
---

<section markdown="0" class="page-header">
  <p class="eyebrow">Questions, methods &amp; systems</p>
  <h1>Research</h1>
  <p class="page-intro">From learning capabilities to reasoning deeply to building agents that improve themselves. My work connects these three directions through learning from data, interaction, and experience.</p>
  <nav class="research-index" aria-label="Research areas">
    {% for area in site.data.research_areas %}<a href="#{{ area.id }}" data-area="{{ area.id }}">{{ area.number }} &nbsp; {{ area.title }}</a>{% endfor %}
  </nav>
  <p class="metrics-note">Citation and star counts checked <time datetime="2026-11-04">Nov 4, 2026</time>. Select a count to view its source.</p>
</section>

{% for area in site.data.research_areas %}
<section markdown="0" class="section-block research-section" data-area="{{ area.id }}" id="{{ area.id }}" aria-labelledby="heading-{{ area.id }}">
  <div class="research-section-heading">
    <span class="direction-number">{{ area.number }}</span>
    <div><h2 class="section-label" id="heading-{{ area.id }}">{{ area.title }}</h2><p class="research-question">{{ area.question }}</p><p>{{ area.description }}</p></div>
  </div>
  <div class="publication-list">
    {% assign area_projects = site.data.projects | where: "area", area.id %}
    {% assign highlights = area_projects | where: "research_highlight", true | sort: "research_priority" %}
    {% if highlights.size > 0 %}
    <h3 class="publication-year">Highlights</h3>
    {% for project in highlights %}
    {% include research-publication.html %}
    {% endfor %}
    {% endif %}
    {% assign remaining = area_projects | where: "research_highlight", false | sort: "year" | reverse %}
    {% assign year_groups = remaining | group_by: "year" %}
    {% for year_group in year_groups %}
    <h3 class="publication-year">{{ year_group.name }}</h3>
    {% assign published = year_group.items | where: "status", "published" | sort: "venue_group" %}
    {% assign preprints = year_group.items | where: "status", "preprint" | sort: "venue_group" %}
    {% assign ordered_projects = published | concat: preprints %}
    {% assign venue_groups = ordered_projects | group_by: "venue_group" %}
    {% for venue_group in venue_groups %}
    {% assign venue_projects = venue_group.items | sort: "title" %}
    {% for project in venue_projects %}
    {% include research-publication.html %}
    {% endfor %}
    {% endfor %}
    {% endfor %}
  </div>
</section>
{% endfor %}

<p class="publication-footer"><a class="text-link" href="https://scholar.google.com/citations?hl=en&amp;user=CvtODukAAAAJ&amp;view_op=list_works&amp;sortby=pubdate">Full publication list on Google Scholar <span aria-hidden="true">↗</span></a></p>
