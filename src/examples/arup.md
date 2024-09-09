---
title: "Show Case: ARUP"
permalink: /examples/arup/index.html
description: "ARUP uses MATSim for ...."
layout: page-showcase
---

<aside>
Arup makes heavy use of MATSim to build agent-based models for our clients all over the world.
</aside>

[Arup](https://www.arup.com) is a global collective of designers, engineers and sustainability consultants, advisors and experts. 
Arup launched the City Modelling Lab in 2019 to act as a research & development skunkworks for the use of activity and agent-based models in practice. 
We were being challenged by our clients to answer questions on equity, multi-modality, multi-scale and decarbonisation. 
To decarbonise our cities and make them cleaner and more equitable, we cannot use the same tools and approaches that we have been using for the past few decades. 


### Case study: BERTIE

Transport East are an English Sub-National Transport body. 
They provide a strategic regional perspective to support their partners in Norfolk, Suffolk, Essex, Thurrock, and Southend-on-Sea. 
The area contains ~5 million individuals and has significant amounts of commuting activity to London. 

The BEhaviouR & Transport: Impact & Equity Model 
([BERTIE](https://medium.com/arupcitymodelling/introducing-bertie-an-agent-based-model-for-transport-east-412470e7d9cf)) 
model has been developed by Arup with Transport East to generate a multimodal evidence base and approach using MATSim. 
Transport East have a strong focus on decarbonisation and improved outcomes for everyone in the region, 
so they were open to using people-focused modelling to help deliver on their objectives.

<aside>
Flexibility and extensibility of MATSim are key features.
</aside>

The flexibility and extensibility of MATSim enables Transport East to build an ever compounding evidence base, 
each additional capability delivering insights into new areas such as active travel and decarbonisation, 
but in an integrated way. 
This means that modelling, simulation, and analysis don't live in isolation and deliver value in everything that Transport East do.

> “The East is facing ever-more complex challenges as it adapts to emerging mobility trends, 
> changing behaviours, and unexpected shocks. 
> Transport East is committed to thinking creatively to solve the transport challenges we face to improve outcomes for our communities, now and in the future.
> 
> But how do we achieve this in a sustainable and equitable way? 
> This is the power of BERTIE &mdash; our Agent-Based Model, developed by Arup.”
> 
> Dan Johnson, Senior Transport Planner, Transport East

<aside>
Modelling electric vehicles and active modes for future states.
</aside>

The BERTIE model has been used to model EV update scenarios, active mode improvements, driving related scenarios and combined scenarios for 2040.
The development of these has required extensive modelling and the use of a large number of components from the MATSim ecosystem, 
in addition to feeding back new functionality to the core libraries. 
The open source nature of MATSim is key in meeting multiple policy aims for public authorities in the U.K. 

The BERTIE model is in its infancy, but is already allowing Transport East to further their aims within the regions. 
The modularity and flexibility of the MATSim approach mean that as the model matures, 
it will be able to tackle ever increasingly complex problems in the service of the people of the region.

![Screenshot of a visualization of the BERTIE model](/assets/images/usecases/arup/bertie.webp)

### Case study: MONTY

The New Zealand Ministry of Transport plays a vital role in shaping the country’s transport system. 
It acts as a trusted, impartial adviser to Government whilst providing leadership across the sector. 
In order to improve its ability to plan for and evaluate changes to the transport system, in 2019, 
the Ministry started a project to develop a national transport simulation capability known as Project Monty 
([Monty](https://www.arup.com/projects/building-an-agent-based-modelling-capability-for-new-zealand)). 
The planning and development of this project has been conducted jointly by Arup and the Ministry through a co-development partnership model.

<aside>
MATSim provides the ‘who’ and ‘why’ of people’s travel choices in greater detail than existing solutions.
</aside>

Beyond simply forecasting road volumes and public transport patronage however, the Ministry also stipulated 
that Monty be capable of exploring the ‘who’ and ‘why’ of people’s travel choices in greater detail 
than the existing ecosystem facilitates. 
The ability to understand these choices and the broader circumstances of the households' people 
inhabit would enable more direct analysis of equity and enable a more informed policy development approach.

Monty achieves this through a combination of activity- and agent-based modelling methodologies, 
orchestrated through a complex series of statistical models and simulation systems. 
MATSim plays a key role in this ecosystem, simulating the interactions of people on the transport network 
and allowing for highly detailed analysis such as equity and demographics analysis on an individual level.

Development of Monty by Arup and the Ministry is ongoing, but much has been achieved by the model development team to date. 
Monty has already been tested on a select set of policy case studies, including:

- Investigations into potential responses to complex road pricing schemes in Auckland and Wellington. 
  This included combined implementation of cordon-based and area-based tolls with time-sensitive pricing.
- Simulation of short- and medium-term road closure impacts due to the 2023 North Island flooding incidents, 
  focusing on demographics affected and magnitude of delay induced.
- Implementation of future infrastructure in Auckland, including a second harbour crossing, 
  congestion charging and other congestion related measures, to investigate demand for the crossing.

In the future, Monty will be the primary tool in New Zealand to directly test transport infrastructure 
and policy planning in a statistically robust manner, forming key evidence for assessments. 

![Screenshot of a visualization of the MONTY model](/assets/images/usecases/arup/monty.webp)

### Open Source and Insights

<aside>
Learn from ARUP's City Modelling Lab <b>detailed articles</b>
</aside>

Arup regularly writes about their findings in using agent-based simulation model on their 
[City Modelling Lab blog on Medium](https://medium.com/arupcitymodelling). 
The articles provide technical insights into how to process data to make it ready for a MATSim model, 
what results can be obtained from such models, and what implications these could have on a region, its inhabitants, and its society.

<aside>
<b>Various Python tools</b> to ease the work with MATSim
</aside>


- [PAM: Generate and modify transport demand scenarios via a Python API](https://github.com/arup-group/pam)
- [GeNet: Manipulate MATSim networks via a Python API](https://github.com/arup-group/genet)
- [Elara: Command line utility for processing MATSim events output files](https://github.com/arup-group/elara)
- [Osmox: A tool for extracting facility locations and features from OpenStreetMap (OSM) data](https://github.com/arup-group/osmox)
- [Londinium: A semi-synthetic MATSim ABM dataset (small, suitable for local testing)](https://github.com/arup-group/londinium)


