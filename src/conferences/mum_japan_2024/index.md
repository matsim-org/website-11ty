---
permalink: /conferences/mum_japan_2024/index.html
title: "MATSim User Meeting Japan 2024"
description: "A meeting of the MATSim community in Japan on 21 November 2021 with Kay Axhausen as keynote speaker."
layout: event
date: 2024-11-21
date_display: November 21, 2024
location: University of Tokyo, Japan
---

<div class="lead">
The first MATSim User Meeting in Japan took place on <b>21 November 2024</b>, hosted by Prof. Giancarlo Parady at the University of Tokyo. 
We were honored to have MATSim co-founder Prof. Em. Kay W. Axhausen as the keynote speaker, who provided an overview of MATSim's current state and future development goals.
It was exciting to see the growing interest in MATSim in Japan, with presentations featuring both research and industry applications of MATSim in the region.
</div>

## Presentations

{% set items = data.talks %}
<div>{% for item in items %}
	<p>
		{{ item.author }}<br>
		{%- if item.presentation != '' -%}
			{%- if item.presentation.endsWith('.pdf') -%}
				{% include "icons/fa-file-pdf.svg" %} 
			{%- endif -%}
			{%- if item.presentation.endsWith('.pptx') -%}
				{% include "icons/fa-file-powerpoint.svg" %} 
			{%- endif -%}
			<a href="/conferences/mum_japan_2024/presentations/{{ item.presentation }}">{{ item.title }}</a>
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract != '' -%}
			&nbsp;&nbsp;({% include "icons/fa-file-lines.svg" %} <a href="/conferences/mum_japan_2024/abstracts/{{ item.abstract }}">Abstract</a>)
		{%- endif -%}
	</p>{% endfor %}
</div>

