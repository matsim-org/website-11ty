---
permalink: /examples/index.html
title: 'Examples'
description: 'See what models others have built and learn from them'
layout: page
---

<p class="lead">
Learn from others! Have a look at what others are using MATSim for.
</p>

## Show Cases

{% include "partials/show-cases.njk" %}

## Scenario Gallery

<p class="lead">
A lot of MATSim models have been created in the past, in varying quality.
Below, we present a number of them, ranging from simple student projects
to non-calibrated show-case models to highly complex scenarios used by
practitioners and consultants.
</p>

<div id="scenario-gallery">{% set items = collections.galleryItems %}{% for item in items %}
	<div class="scenario-gallery-thumb">
		<a href="{{item.url}}">
			<img src="{{item.data.thumbnail}}">
			<p>{{ item.data.title }}</p>
		</a>
	</div>{% endfor %}
</div>

Do you have a scenario and want to present it here as well? Feel free to <a href="mailto:info@matsim.org">contact us</a> so we can add it, or create a pull request with your scenario! 

## Open Data Models

There are a few MATSim models available freely that you can use to get started, play around,
or test your own algorithms with. Have a look at our [dedicated page for open data models](/downloads/open-data-models)
to see what models are available.
