---
permalink: /conferences/mum2026/program/
title: 'MUM2026 Program'
description: 'Program for the MATSim User Meeting 2026, Monday 28 September 2026 in Paris: two parallel tracks, 43 presentations.'
layout: page
---

<style>
  /* Every session table must line up with every other one, so the columns are
     fixed rather than sized from each table's own content. 14em holds all but the
     two longest presenter names, which wrap to a second line. */
  .session-table-wrap table {
    table-layout: fixed;
    width: 100%;
  }
  .session-table-wrap table th:nth-child(1),
  .session-table-wrap table td:nth-child(1) { width: 6em; }
  .session-table-wrap table th:nth-child(2),
  .session-table-wrap table td:nth-child(2) { width: 5em; }
  .session-table-wrap table th:nth-child(4),
  .session-table-wrap table td:nth-child(4) { width: 14em; }
  .session-table-wrap table td:nth-child(1),
  .session-table-wrap table td:nth-child(2) { white-space: nowrap; }
  .session-table-wrap table td code { white-space: nowrap; }
  /* long titles still need somewhere to go on a narrow screen */
  .session-table-wrap { overflow-x: auto; }
  .session-table-wrap table { min-width: 44em; }
</style>

**Monday, 28 September 2026 · Sorbonne University, Pierre et Marie Curie campus, Paris**

<div class="lead">

The meeting **starts at 08:30**, half an hour earlier than the time printed in the hEART
conference booklet. Registration opens at 08:00. Please plan to arrive accordingly.

Talks run in two parallel tracks, in **Salle 105** and **Salle 107**, and finish at **17:30**.

</div>

## Practical details

### Finding the rooms

Enter the campus from **Place Jussieu / Rue Jussieu** (Métro 7, Jussieu). Salles 105 and
107 are on the **first floor of barre 44-54**, reached **via Tour 44**.

<figure>
  <img src="/assets/images/mum2026-cicsu-access-plan.png"
       alt="Access plan for the CICSU spaces on the Pierre et Marie Curie campus, showing the entrance on Rue Jussieu, Tour 44 and the barre 44-54 where Salles 105, 107 and 116 are located."
       loading="lazy">
  <figcaption>
    Access plan for the CICSU, supplied by the hEART 2026 organisers. Credits © Sorbonne
    Université. <strong>Note that the plan is not oriented north:</strong> read it against
    the Rue Jussieu and Place Jussieu labels at the top rather than by compass direction.
  </figcaption>
</figure>


| | |
| --- | --- |
| Registration | 08:00–08:30 |
| First session | 08:30 (not 09:00 as printed in the hEART booklet) |
| Rooms | Salle 105 and Salle 107 |
| Presentation slots | 18 minutes end to end. Plan for **15 minutes of presentation**; the rest covers questions and handing over to the next speaker. |
| Lunch | Lunch boxes, 13:00–14:00 |
| Annual General Meeting | **Postponed** to a later date; members will receive the invitation and agenda in advance |
| Last talk ends | 17:30 |
| Boat trip | **hEART registrants only.** Boarding closes **18:30** at Pont Neuf; boats depart **19:00 sharp**. It is a 25–30 minute walk from the venue. |

**Please check your registration.** If you are not sure whether your registration went
through, or your name is missing from the program below, write to
[association@matsim.org](mailto:association@matsim.org) before the meeting. The
registration list was finalised for catering on 14 September 2026, so corrections need
to be made by email.

Presenters: your name below is the author we have on the registration list. If somebody
else will give the talk, tell us so the session chairs have it right.

**The day is tightly packed.** With 43 presentations across the day there is very
little slack between slots, so please keep to 15 minutes. You will not be connecting your own
laptop: your slides run from the room machine and have to reach us in advance, as below. Be in
the room before your session starts and know your slot number.

## Send us your slides by Friday 25 September

**We are running both rooms from a single laptop each.** With 43 talks and almost no
time between them, we cannot swap laptops between speakers. Every presentation has to be loaded
and in running order before the day starts.

Please upload your slides by **Friday, 25 September**:

**[Upload your slides](https://docs.google.com/forms/d/e/1FAIpQLSd3VNtxa4n3QiusjipxghN_nL0mqKGHlmSranjAsLV1lBzy2Q/viewform)**

The form asks for your slot number and your file. Nobody but us can see what you upload, and
you can submit again if you need to replace it.

- **Name the file with your slot number**, shown in the first column of the tables below —
  for example `105-07.pdf` if your slot is 105-07. Add your surname if you like: `105-07-Nagel.pdf`.
- **The form needs a Google account.** If you cannot use Google services — if you are in
  mainland China, for example — email your slides to
  [association@matsim.org](mailto:association@matsim.org) instead, with your slot number in
  the subject line.
- **PDF is preferred**, because fonts and layout survive the move to another machine.
  PowerPoint is accepted; if you send PowerPoint, please also send a PDF fallback where you can.
- If your talk needs video, live animation or a running demo, tell us in advance so we can plan
  that slot. It will not work if we discover it on the day.

If your slides are not in by Friday you will be chasing us on the morning, and there will not be
time for it. Send what you have; you can send a corrected version up to Sunday evening.

**Presenting remotely?** Four remote presentations are arranged: 105-12, 107-09, 105-20 and 107-18. Remote
presentation is by exception and has to be set up with the venue in advance, so if you are planning to present
remotely and have not already agreed it with us, write to
[association@matsim.org](mailto:association@matsim.org) immediately.


## 08:00–08:30 · Registration

Doors open at 08:00; the first talk is at 08:30.


## Session 1 · 08:30–10:30


### Salle 105 — Core engine and performance

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `105-01` | 08:30 | **DSim: A Distributed Mobsim, Ready to Use**<br>Janek Laudan, Christian Rakow | Christian Rakow |
| `105-02` | 08:48 | **A Deterministic Asynchronous Service-Based Architecture for Agent-Based Transport Simulation**<br>Paul Heinrich, Kai Nagel | Paul Heinrich |
| `105-03` | 09:06 | **Scaling the Swiss National ABM: A High-Performance, Native Java Implementation for generating daily plans in MATSim**<br>Joschka Bischoff, Annette Knupp | Joschka Bischoff |
| `105-04` | 09:24 | **Simple MATSim replanning recipe**<br>Fadi El Eid, Sonja Fessler, Johannes Müller, Denissa Purba, Franz-Xaver Rupprecht, Gunnar Flötteröd | Gunnar Flötteröd |
| `105-05` | 09:42 | **New method and MATSim contrib for the Agent-based Traffic Assignment Problem (ATAP)**<br>Gunnar Flötteröd | Gunnar Flötteröd |
| `105-06` | 10:00 | **The search continues: Integrating parking into an agent-based transport simulation**<br>Gregor Rybczak, Paul Heinrich, Kai Nagel | Gregor Rybczak |

</div>


### Salle 107 — Calibration and optimisation

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `107-01` | 08:30 | **Improving Public Transport Modeling in MATSim: Fare Pricing and Routing Parameter Optimization**<br>Aurore Sallard, Milos Balac | Aurore Sallard |
| `107-02` | 08:48 | **A multi-source calibration framework for activity-based transport simulations integrating background traffic and travel-time perception**<br>Maryam Samaei, Mahdi Zargayouna, Mélanie Gidel, Jonathan Couppé, Mostafa Ameli | Maryam Samaei |
| `107-03` | 09:06 | **A Crowdsourced-First Calibration Framework for Multi-Class MATSim Models in Data-Constrained Heterogeneous Traffic**<br>Ashutosh, Sunhyung Yoo, Pieter Fourie, Vinayak Dixit, Divya Nair | Ashutosh |
| `107-04` | 09:24 | **Online Calibration of MATSim Models via Stochastic Batch Optimization**<br>Abdelkader Dib, Milos Balac | Abdelkader Dib |
| `107-05` | 09:42 | **Measuring perturbation-reconvergence cost in MATSim for charging-infrastructure placement**<br>Shahriar Iqbal Zame, Denissa Sari Darmawi Purba, Yusak Susilo, Constantinos Antoniou | Shahriar Iqbal Zame |
| `107-06` | 10:00 | **An End-to-End Pipeline for Scenario-Based Transportation Modelling under Deep Uncertainty**<br>Jan Andrin Ghadamian, Orlando Roman, Milos Balac, Bryan Adey | Jan Andrin Ghadamian |

</div>


## 10:30–11:00 · Coffee break


## Session 2 · 11:00–13:00


### Salle 105 — On-demand mobility and automation

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `105-07` | 11:00 | **MATSim in Production: Live Demand Prediction, Automated DRT Scenario Build and Visualisation for Non-Expert Users**<br>Tom-Erik Kuhlen | Tom-Erik Kuhlen |
| `105-08` | 11:18 | **Benchmarking on-demand mobility algorithms using a new remote dispatching interface for MATSim**<br>Sebastian Hörl | Sebastian Hörl |
| `105-09` | 11:36 | **Between driver and driverless: modelling remote operators for autonomous ride-pooling in MATSim**<br>Nico Kuehnel, Lion Pfeil, Mark Frawley | Nico Kuehnel |
| `105-10` | 11:54 | **Autonomous Shuttle and BRT Integration: An Agent-Based Case Study of Paris's Southern Suburbs**<br>Laura C. Echeverri, Nicolas Coulombel | Laura C. Echeverri |
| `105-11` | 12:12 | **Introducing DRT and Person-Based Accessibility in MATSim**<br>Jakob Rehmann, Kai Nagel | Jakob Rehmann |
| `105-12` | 12:30 | **Accelerating MATSim-Based Vertiport Siting via Facility Location Surrogate Space Mapping**<br>Ziyue Song, Xinwei Wang, Lin Guan, John Woodward, George Vogiatzis | Ziyue Song (remote) |

</div>


### Salle 107 — Demand generation, learning and tooling

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `107-07` | 11:00 | **Agent-based Simulation with Mobility Personas: An LLM-based Persona Labelling Approach for MATSim Synthetic Populations**<br>Jingjun Li, Shiqi Sun, Francesco Ciari, Chengqi Lu, Guy Walker, John Easton, David Flynn, Philip Greening | Jingjun Li |
| `107-08` | 11:18 | **Block box approaches to activity sequence modelling**<br>Fred Shone, Tim Hillel | Fred Shone |
| `107-09` | 11:36 | **Towards MAPPO and Inverse DRL for MATSim Replanning**<br>Ming Lu | Ming Lu (remote) |
| `107-10` | 11:54 | **CitySim: One Data Pipeline, Three Cities: Building MATSim Mobility Digital Twins for Pedestrian Safety, Flood Resilience, and Event Traffic Management**<br>Jeramin Leong, Pieter Fourie, Apurva Kumar | Jeramin Leong |
| `107-11` | 12:12 | **Improved Automated Model Generation and Agent-Group specific Model Analysis**<br>Nadine Rieser, Moritz Dück, Marcel Rieser | Moritz Dück |
| `107-12` | 12:30 | **MobilityStudio: Making MATSim Accessible - A Visual Workbench and a First Step Towards Conversational, AI-Assisted Transport Planning**<br>Ihab Kaddoura, Tobias Kohl, Michael Balmer | Ihab Kaddoura, Tobias Kohl |

</div>


## 13:00–14:00 · Lunch boxes

Lunch boxes. The MATSim Association Annual General Meeting will not be held in Paris. Because of the full programme and the venue arrangements it is postponed to a later date. Members will receive the invitation and agenda in advance.


## Session 3 · 14:00–15:30


### Salle 105 — Environment, health and resilience

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `105-13` | 14:00 | **Modeling air pollution exposure with MATSim: to what extent are complex modeling chains necessary?**<br>Marjolaine Lannes, Nicolas Coulombel, Yelva Roustan | Marjolaine Lannes |
| `105-14` | 14:18 | **A flexible and robust network generation pipeline for more detailed bicycle infrastructure representations in MATSim**<br>Simon Metzler, Dominik Ziemke | Simon Metzler |
| `105-15` | 14:36 | **Bikeability-integrated cycling policy evaluation, Eskilstuna (Sweden)**<br>Peiling Wu, Fariya Sharmeen, Daniel Jonsson | Peiling Wu |
| `105-16` | 14:54 | **How resilient is university mobility? Evaluating public transport disruptions with MATSim**<br>Rodrigo Esteban Medina Godoy, Rosa Arroyo, Tomas Ruiz, Pau Seguí Gascó | Rodrigo Esteban Medina Godoy |
| `105-17` | 15:12 | **Synergy between aggregated anonymized real-world data and agent-based modeling: the Carola Bridge collapse in Dresden**<br>Chengqi Lu, Jyotirmaya Ijaradar, Regine Gerike | Chengqi Lu |

</div>


### Salle 107 — Public transport and rail

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `107-13` | 14:00 | **Using MATSim for strategic planning: Insights from various projects at Swiss Federal Railways**<br>Ihab Kaddoura, Thomas Hettinger, Merlin Unterfinger, Nicolas Dulex | Ihab Kaddoura |
| `107-14` | 14:18 | **Integrating MATSim and Microscopic Railway Simulation for Passenger Transport Digital Twinning**<br>David Kirkwood, Jingjun Li, Wenhua Jiang, John Easton, Heather Steele, Christian Rakow, Clive Roberts, Philip Greening, David Flynn | David Kirkwood |
| `107-15` | 14:36 | **An Integrated Metaheuristic Approach for Generating Combined Road-Rail Transport Chains**<br>Theresa-Maria Mersini, Ibraheem O. Adeniran, Marcel Schindler, Alessandro Tarantola, Carina Kehrt | Theresa-Maria Mersini |
| `107-16` | 14:54 | **MATSim for Jakarta MRT Expansion: Projected Ridership and Mode Shifts**<br>Reza Abdullah, Anugrah Ilahi, Andria Arisal, Akimasa Fujiwara | Reza Abdullah |
| `107-17` | 15:12 | **From Activity-Based-Model to MATSim for BRT Planning: Practical Lessons from the Tel Aviv Pink Route**<br>Timofey Volotskiy, Yaroslav Smirnov, Tina Rakic, Golan Ben Dor | Timofey Volotskiy |

</div>


## 15:30–16:00 · Coffee break


## Session 4 · 16:00–17:40


### Salle 105 — City-scale scenarios

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `105-18` | 16:00 | **Building the AgiMo Digital Twin: First steps towards continuous transport model assimilation**<br>Daniel Röder | Daniel Röder |
| `105-19` | 16:18 | **Towards a MATSim Scenario for a Data-Scarce Megacity: Dhaka, Bangladesh**<br>Adnan Abir, Grace O. Kagho, Tasnia Tabassum Prima, Sk. Md. Mashrur | Grace O. Kagho |
| `105-20` | 16:36 | **Beyond Carrying Capacity: An Agent-Based Model for the Char Dham Pilgrimage Corridor**<br>Anuj Nautiyal, Amit Agarwal | Anuj Nautiyal (remote) |
| `105-21` | 16:54 | **A Reachability-Pruned Activity-Based Demand Model for MATSim: Congestion Response and Demand Generation in Higashi-Hiroshima**<br>Azwan Nazamuddin, Reem Alolabi, Makoto Chikaraishi | Azwan Nazamuddin |
| `105-22` | 17:12 | **Agent-Based Modeling of a Zero-Emission Zone in Berlin Using MATSim**<br>Yaroslav Smirnov, Kai Nagel, Tina Rakic, Ricardo Ewert, Tim Volotskiy, Tilmann Schlenther | Kai Nagel |

</div>


### Salle 107 — Applications, visualisation and community

<div class="session-table-wrap" markdown="1">

| Slot | Time | Presentation | Presenting |
| --- | --- | --- | --- |
| `107-18` | 16:00 | **Modeling Informal Paratransit for Local Public Transport Route Planning: Tricycle-for-Hire Services in Puerto Princesa City, Philippines**<br>Noriel Christopher Tiglao, Niki Jon Tolentino | Noriel Christopher Tiglao (remote) |
| `107-19` | 16:18 | **Multi-Agent Simulation and Crowdsourced Reviews for Urban Vitality Analysis: Insights from a Peri-Urban City**<br>Sié Cyriac Noufe, Rachid Belaroussi, Francis Dupin, Pierre-Olivier Vandanjon | Sié Cyriac Noufe |
| `107-20` | 16:36 | **A Pipeline for Visualising MATSim Events in Blender**<br>Daniel Bell | Daniel Bell |
| `107-21` | 16:54 | **Results from the MATSim User Survey**<br>Marcel Rieser | Marcel Rieser |

</div>


## 18:30–19:00 · Boat trip · hEART 2026 registrants only

The evening boat trip is part of the hEART 2026 program and is open only to those registered for hEART. If that is you: boarding closes 18:30 at Pont Neuf and the boats depart 19:00 sharp. Allow 25–30 minutes to walk from the venue.


---

Questions about the program go to [association@matsim.org](mailto:association@matsim.org).

If you are also attending hEART 2026, note that it requires
[separate registration](https://heart2026.fr).
