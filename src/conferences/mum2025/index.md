---
permalink: /conferences/mum2025.html
title: 'MATSim User Meeting 2025'
description: 'The MATSim User Meeting 2025 took place on June 12–13 2025 in Munich, Germany.'
layout: event
date: 2025-06-12
date_display: June 12–13 2025
location: Munich, Germany
---

<div class="lead">

The MATSim Association held its User Meeting 2025 after the [hEART Conference](https://www.heart2025.vtk.ed.tum.de)
at the Technical University of Munich, Germany. The meeting ran over two days, **12–13 June 2025**.

The **MATSim Association Annual General Meeting** was co-located at the event, and convened at **12 p.m. CET on 13 June 2025**.
</div>



The meeting featured a full programme of scientific presentations, software demonstrations, and discussions among researchers and practitioners.

{% set photos = [
{ file: 'mum25.jpeg', caption: 'MUM 2025 in session.' },
{ file: 'mum252.jpeg', caption: 'MUM 2025 attendees enjoying a well deserved break to take in the pleasures of Munich in the summer.' },
{ file: 'winner.jpeg', caption: 'David Alvarez receiving the best paper award.' }
] %}

{% for p in photos %}
  <figure class="conference-photo">
    <img src="/conferences/mum2025/media/{{ p.file }}" alt="{{ p.caption }}">
    <figcaption>{{ p.caption }}</figcaption>
  </figure>
{% endfor %}

### Best Paper Award

The Best Paper Award was presented to **David Álvarez Castro** for  his team's work on
*“A MATSim Modeling Framework to Simulate the Impacts of Extreme Rainfall Events in the UK.”*


## Presentations

{% set items = data.talks %}
<div>{% for item in items %}
	<p>
		{{ item.author }}<br>
		{%- if item.presentation %}
            {%- if item.presentation.indexOf('http://') == 0 or item.presentation.indexOf('https://') == 0 -%}
				<a href="{{ item.presentation }}">{{ item.title }}</a>
			{%- else %}
				{%- if item.presentation | slice(-4) == '.pdf' -%}
					{% include "icons/fa-file-pdf.svg" %} 
				{%- endif -%}
				{%- if item.presentation | slice(-5) == '.pptx' -%}
					{% include "icons/fa-file-powerpoint.svg" %} 
				{%- endif -%}
				<a href="/conferences/mum2025/presentations/{{ item.presentation }}">{{ item.title }}</a>
			{%- endif %}
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract %}
			({% include "icons/fa-file-lines.svg" %} 
			{%- if item.abstract.indexOf('http://') == 0 or item.abstract.indexOf('https://') == 0 -%}
				<a href="{{ item.abstract }}">Abstract</a>
			{%- else -%}
				<a href="/conferences/mum2025/abstracts/{{ item.abstract }}">Abstract</a>
			{%- endif -%})
		{%- endif -%}
	</p>{% endfor %}
</div>