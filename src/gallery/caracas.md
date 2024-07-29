---
title: "Caracas, Venezuela"
thumbnail: /assets/images/gallery/caracas_thumb.jpg
layout: scenario
prio: 120
---

<figure>
  <img src="/assets/images/gallery/caracas_1.jpg" alt="Build-up of traffic over time in Caracas" />
  <figcaption>Build-up of traffic over time in Caracas</figcaption>
</figure>

The commercial and industrial zone "Los Ruices y Los Cortijos de Lourdes" in Caracas is one of the most transited zones on the east side of the city. The network was created by using data from OpenStreetMap, but then manually modified (e.g. setting correct speed, capacity attributes) based on information delievered by a company doing a prior study in the same area. Demand was given in a O/D matrix by the same company, but only for the morning period. As the area researched is mainly a consuming zone in the morning, and a producing zone in the afternoon, the values from the O/D matrix were used to create dayplans for the agents. An initial departure around 7:30 time was assigned to the plans.

Several scenarios with different replanning rates were run to test how much agents have to change their departure time in the morning such that the network can accomodate all of the travel demand. The screenshots above show how the traffic jam builds up in the scenario in which the simulated demand matches the values of real-world traffic counts best.

The model and research was done by Daniel Ampuero Anca and Jesús Francisco Gómez Ortíz during their Bachelor's study at Universidad Central de Venezuela. The work was tutored by Prof. Héctor Navarro. Special thanks to URBISA SA and its founder Óscar Anzola.
