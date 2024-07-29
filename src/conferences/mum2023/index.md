---
permalink: /conferences/mum2023.html
title: 'MATSim User Meeting 2023'
description: 'The MATSim User Meeting 2023 takes place on September 5, 2023 in Zurich, Switzerland.'
layout: event
date: 2023-09-05
date_display: September 05, 2023
location: Zurich, Switzerland
---

<div class="lead">
The MATSim User Meeting is a workshop of the hEART 2023 conference.
</div>


## Presentations

{% include "icons/fa-file-pdf.svg" %} [Preliminary Schedule](/conferences/mum2023/MUM2023_Preliminary-Schedule.pdf)


{% set items = data.talks %}
<div>{% for item in items %}
	<p>
		{{ item.author }}:&nbsp; 
		{%- if item.presentation != '' -%}
			{%- if item.presentation.endsWith('.pdf') -%}
				{% include "icons/fa-file-pdf.svg" %} 
			{%- endif -%}
			{%- if item.presentation.endsWith('.pptx') -%}
				{% include "icons/fa-file-powerpoint.svg" %} 
			{%- endif -%}
			<a href="/conferences/mum2023/presentations/{{ item.presentation }}">{{ item.title }}</a>
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract != '' -%}
			&nbsp;&nbsp;({% include "icons/fa-file-lines.svg" %} <a href="/conferences/mum2023/abstracts/{{ item.abstract }}">Abstract</a>)
		{%- endif -%}
	</p>{% endfor %}
</div>

