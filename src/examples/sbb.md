---
title: "Show Case: SBB"
seo:
  title: "MATSim Show Case: SBB (Swiss Federal Railways)"
permalink: /examples/sbb/index.html
description: "SBB uses MATSim since 2017 at the core of its activity and agent-based transport model, used for forecasts and supports decisions of planners and managers."
layout: page-showcase
---


The Passenger Division at the Swiss Federal Railways (SBB) started building a MATSim model
of all of Switzerland back in 2017. Since then, MATSim builds the main framework for SIMBA 
MOBi, the activity and agent-based transport model at SBB.

<aside>
MATSim is used to support decisions of planners and managers.
</aside>

Nowadays, SIMBA MOBi, and with it MATSim, are well-established at SBB and help the company's
decision-making process in passenger demand planning. The model contributes forecasts
and supports decisions of planners and managers inside of the company and outside. To 
replicate all travel door to door in Switzerland, a large number of available ground truth data
is used to calibrate and validate the simulations.

<aside>
<b>SwissRailRaptor:</b> Very fast public transport router developed by SBB
</aside>

From very early in the development stage of the model SBB has committed itself to 
contributing actively to the further development of MATSim. It developed the very fast
transit router **SwissRailRaptor** which has since been contributed to the core of MATSim
and become the default transit router in MATSim. Additional functionality from SBB is
available in a separate contrib [sbb-extensions](https://github.com/matsim-org/matsim-libs/tree/master/contribs/sbb-extensions),
for example a deterministic public transport simulation or packages to calculate
a number of transit-related key performance indices (KPIs) from MATSim simulations.

<iframe style="width:100%;aspect-ratio:16/9;" 
        src="https://www.youtube-nocookie.com/embed/B7BXXRZPvrg?si=HGu3AO-XikdHKQoX" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>

<div>&nbsp;</div>

<aside>
<b>railsim:</b> simulating operational aspects of railway operations.
</aside>

Since 2023, a second division at SBB also uses MATSim to model operational aspects of 
railway operations and created the [railsim extension](https://github.com/matsim-org/matsim-libs/tree/master/contribs/railsim),
again open-sourcing the internally developed functionality.



To let others learn from its own experiences and code, SBB's Passenger Division publishes all [MATSim-related
code of SIMBA MOBI at GitHub](https://github.com/SchweizerischeBundesbahnen/matsim-sbb).

To learn more about how SBB uses MATSim and deals with its open source aspects, 
watch the [presentation of SBB about MATSim at FOSDEM'24](https://fosdem.org/2024/schedule/event/fosdem-2024-2203-matsim-at-sbb-using-and-contributing-to-the-open-source-transport-simulation-for-advanced-passenger-demand-modeling-/).


