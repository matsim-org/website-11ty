---
permalink: /conferences/mum2026/index.html
title: 'MATSim User Meeting 2026'
description: 'The MATSim User Meeting 2026 took place on September 28, 2026 at Sorbonne University in Paris, France, alongside hEART 2026.'
layout: event
date: 2026-09-28
date_display: September 28, 2026
location: CICSU, Pierre et Marie Curie campus of Sorbonne University, Paris, France
---

<div class="lead">

The MATSim Association held its User Meeting 2026 on **Monday, 28 September 2026** at the CICSU,
Pierre et Marie Curie campus of Sorbonne University in Paris, the day before the
[hEART 2026 conference](https://heart2026.fr). Forty-three presentations ran in two parallel
tracks, Salle 105 and Salle 107, from 08:30 to 17:30, with four presenters joining remotely and
about 75 participants in the rooms.

The **MATSim Association Annual General Meeting** was not held in Paris. Members will receive the
invitation and agenda for a remote AGM later in the year.

</div>

{% set photos = [
{ file: 'mum2026-group.jpg', caption: 'MUM2026 participants at Sorbonne University, Paris. Photo: Sebastian Hörl.' }
] %}

{% for p in photos %}
  <figure class="conference-photo">
    <img src="/conferences/mum2026/media/{{ p.file }}" alt="{{ p.caption }}">
    <figcaption>{{ p.caption }}</figcaption>
  </figure>
{% endfor %}

### Best Paper Award

The MUM2026 Best Paper Award goes to **Nico Kuehnel** (MOIA GmbH) for
*“Between driver and driverless: modelling remote operators for autonomous ride-pooling in MATSim”*,
with Lion Pfeil and Mark Frawley.

## Presentations

The full timetable is on the [program page](/conferences/mum2026/program/). Slides are listed here
in programme order by room and session.

{% set items = data.talks %}
{% set rooms = ['Salle 105', 'Salle 107'] %}
{% for room in rooms %}
### {{ room }}
{% for sess in [1, 2, 3, 4] %}
{% set first = true %}
{% for item in items %}{% if item.room == room and item.session == sess %}
{% if first %}
<h4>Session {{ sess }} · {{ item.theme }}</h4>
{% set first = false %}
{% endif %}
	<p>
		{{ item.author }}<br>
		{%- if item.presentation %}
			{%- if item.presentation | slice(-4) == '.pdf' -%}
				{% include "icons/fa-file-pdf.svg" %}
			{%- endif -%}
			<a href="/conferences/mum2026/presentations/{{ item.presentation }}">{{ item.title }}</a>
		{%- else -%}
			{{ item.title }}
		{%- endif -%}
		{%- if item.abstract %}
			({% include "icons/fa-file-lines.svg" %} <a href="/conferences/mum2026/abstracts/{{ item.abstract }}">Abstract</a>)
		{%- endif -%}
		{%- if item.note %} <em>({{ item.note }})</em>{% endif %}
	</p>
{% endif %}{% endfor %}
{% endfor %}
{% endfor %}

<div class="grid border" data-layout="50-50">
<div>

## Thanks

Our thanks to Latifa Oukhellou, Mostafa Ameli and the hEART 2026 organising committee for hosting
the user meeting, to Maryam Samaei and Thomas Bapaume for running the two rooms on the day, and to
everyone who presented.

</div>
<div>

## Membership

MATSim Association membership supports MATSim core development, infrastructure and hosting,
documentation and training, community coordination, and user meetings like this one.
To support the association, visit the <a href="/association/membership/">membership page</a>.

Questions about the meeting can go to [association@matsim.org](mailto:association@matsim.org).

</div>
</div>
