---
permalink: /conferences/mum2022.html
title: 'MATSim User Meeting 2022'
description: 'The MATSim User Meeting 2022 takes place on May 31, 2022 in Leuven, Belgium.'
layout: event
date: 2022-05-31
date_display: May 31, 2022
location: Leuven, Belgium
---

<div class="lead">
We are happy to announce that MATSim User Meeting in 2022 will be held in conjunction
with the 10th Symposium of the European Association for Research in Transportation
(hEART 2022). A full day meeting will be held on 31.05. at KU Leuven, Belgium. 
We are now accepting submissions of 1-2 pages extended abstracts that should describe 
your recent MATSim work
</div>

<div class="grid border" data-layout="50-50">

<div>

## Submissions

We are now accepting submissions of 1-2 pages extended abstracts that should describe 
your recent MATSim work:

[Submission page](httpshttps://easychair.org/conferences/?conf=mum2022]) **Submission page is now closed!**

</div>

<div>

## Registration

If you plan to attend the meeting (either as an author, co-author, or attendee) 
there is a registration fee of 55 CHF to cover for the venue and food expenses 
(coffees and food). You can register at the following link:

[Registration page](https://www.eventbrite.com/e/matsim-user-meeting-2022-tickets-276948700017). 
**Registration is now closed!**

</div>
</div>

## Presentations

{% include "icons/fa-file-pdf.svg" %} [Schedule](/conferences/mum2022/schedule.pdf)



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
			<a href="/conferences/mum2022/presentations/{{ item.presentation }}">{{ item.title }}</a>
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract != '' -%}
			&nbsp;&nbsp;({% include "icons/fa-file-lines.svg" %} <a href="/conferences/mum2022/abstracts/{{ item.abstract }}">Abstract</a>)
		{%- endif -%}
	</p>{% endfor %}
</div>
