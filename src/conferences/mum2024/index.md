---
permalink: /conferences/mum2024.html
title: 'MATSim User Meeting 2024'
description: 'The MATSim User Meeting 2024 takes place on June 17, 2024 in Espoo, Finland.'
layout: event
date: 2024-06-17
date_display: June 17, 2024
location: Espoo, Finland
---

<div class="lead">
The MATSim Association is happy to announce that the MATSim User Meeting 2024 will be held 
in conjunction with the 12th Symposium of the European Association for Research in 
Transportation (hEART 2024) in Espoo, Finland. 
A full-day meeting will be held one day before the hEART conference, on 17.&nbsp;June&nbsp;2024.
</div>

<div class="grid border" data-layout="50-50">

<div>

## Submissions

We are now accepting submissions of 2-3 pages extended abstracts that should describe your recent MATSim work:

[Submission page](https://easychair.org/my/conference?conf=mum2024) **Submission page is now closed!**

</div>

<div>

## Registration

Registration is now available and is free for MATSim Association Members (please follow instructions carefully): [Registration page](https://matsim.payrexx.com/en/pay?tid=f7c50c4a).

**Registration is now closed!**

</div>
</div>

## Presentations

{% include "icons/fa-file-pdf.svg" %} [Preliminary Schedule](/conferences/mum2024/Preliminary-Schedule.pdf)



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
			<a href="/conferences/mum2024/presentations/{{ item.presentation }}">{{ item.title }}</a>
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract != '' -%}
			&nbsp;&nbsp;({% include "icons/fa-file-lines.svg" %} <a href="/conferences/mum2024/abstracts/{{ item.abstract }}">Abstract</a>)
		{%- endif -%}
	</p>{% endfor %}
</div>

