---
permalink: /conferences/index.html
title: 'Conferences'
description: 'Learn about the next MATSim User Meeting or look at the slides from past conferences.'
layout: page
---

<p class="lead">
We try to have a MATSim User Meeting once a year. 
In addition, we might try to organize local meet-ups from time to time.
If you are interested in organizing a local meet-up, please speak to us.
</p>


## Upcoming Events


{% set futureEvents = collections.futureEvents %}
{% if futureEvents.length == 0 %}
<div id="future-events">
We're sorry, but we currently have no event scheduled.
</div>
{% else %}
<div id="future-events">{% for item in futureEvents %}
	<div class="event-list-item">
		<p>
			<a href="{{item.url}}">
				{{ item.data.title }}
			</a> &nbsp;  &nbsp; 
			{% include "icons/fa-calendar-day.svg" %} {{ item.data.date_display}} &nbsp;  &nbsp; 
			{% include "icons/fa-location-dot.svg" %} {{ item.data.location }}
		</p>
	</div>{% endfor %}
</div>
{% endif %}


## Past Events

{% set items = collections.pastEvents %}
<div id="past-events">{% for item in items %}
	<div class="event-list-item">
		<p>
			<a href="{{item.url}}">
				{{ item.data.title }}
			</a> &nbsp;  &nbsp; 
			{% include "icons/fa-calendar-day.svg" %} {{ item.data.date_display}} &nbsp;  &nbsp; 
			{% include "icons/fa-location-dot.svg" %} {{ item.data.location }}
		</p>
	</div>{% endfor %}
</div>
