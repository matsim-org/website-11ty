---
title: "Vienna, Austria"
thumbnail: /assets/images/gallery/vienna_thumb.jpg
layout: scenario
prio: 39
---

The Austrian Institute of Technology (AIT) has created a MATSim model 
covering the city and agglomeration of Vienna (Austria).


## The Model in a Nutshell

- Aims to represent traffic *before* the COVID pandemic (~2020)
- **Simulation Area:** Vienna and surroundings (between 40 and 80km away)
  - area: 11,700 km²
  - total population: 3.05 million (2013-01), 3.275 million (2020-01)
- **Network**: 375k links and 169k nodes extracted from [OpenStreetMap](https://www.openstreetmap.org) (2021) and OGD transit timetables (VOR: Tuesday 2022-06-07, EVU: 2022-10-27) with [pt2matsim](https://github.com/matsim-org/pt2matsim)
- **Facilities:** 654k locations extracted mainly from [OpenStreetMap](https://www.openstreetmap.org)
- **Population synthesis**: based on the Austrian mobility survey *Österreich Unterwegs 2013/14* by Tomschy et al. (2016) with [ARUP PAM](https://github.com/arup-group/pam), scaled up to population of 2020
- **Population**: 332k agents represent 12.5% of the mobile population older than 5 years.
  - Agents use the MATSim modes walk, bike, pt, car, ride.
  - Trips include inside, source, destination and through traffic (see cordon traffic)
  - Traffic by foreign citizens is not included (except for cargo traffic)
- **Cargo traffic**: represented as ~10% reduction in `flowCapacityFactor` and `storageCapacityFactor` and a reduction of all count stations.
- **Routing**: SwissRailRaptor (not Ariadne)
- **Mode choice model:** 10 subpopulations, based on Greene and Hensher (2003), plus an additional subpopulation for cordon trips.
- **Calibration:** on modal split derived from synthesized population


## Coverage Area

![Area covered by the MATSim Model Vienna](/assets/images/gallery/vienna_area.jpg)

Area covered by the MATSim Model Vienna, light-blue areas contain facilities.
The area contains Vienna and large parts of Lower Austria as well as parts of Burgenland
(including St. Pölten, Wiener Neustadt, Hollabrunn, Mistelbach,..)
where people tend to commute to Vienna.

## Open Data

The model is available as open data along with more detailed information
in a [github repository](https://github.com/ait-energy/matsim-model-vienna/).
