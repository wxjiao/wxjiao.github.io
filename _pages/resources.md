---
title: "Mrinmaya's Lab - Resources"
layout: gridlay
excerpt: "Mrinmaya's Lab -- Resources."
sitemap: false
permalink: /publication_resources/
---


# Resources

## Group highlights

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <p><em>{{ publi.authors }}</em></p>
  <span><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong> &nbsp; </span>
  <span><strong><a href="{{ publi.codelink.url }}">{{ publi.codelink.display }}</a></strong> &nbsp; </span>
  <span><strong><a href="{{ publi.datalink.url }}">{{ publi.datalink.display }}</a></strong> &nbsp; </span>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}
