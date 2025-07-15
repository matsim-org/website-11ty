---
layout: post
author: Nico Kuehnel, Mark Frawley and Thibaut Dubernet
title: "MATSim AWS Example Setup Repository Published"
summary: "MOIA has published a working example of a setup that employs AWS for running MATSim on the cloud."
---

At MOIA, we have been using AWS cloud resources for the simulation of MATSim models for quite some time.
Over time, we came up with a reproducible setup using infrastructure as code.

A multi-purpose version of that setup has recently been published under our open source account:
https://github.com/moia-oss/matsim-aws

It includes (among others):

- setting up storage resources (AWS S3) for input and executable jars
- identity access roles
- compute environments

The setup creates a docker image which takes care of the syncing input and jar files, running the simulation and writing the output back to AWS S3.

You only need to bring your simulation jar, input and an AWS account. 
A full working example based on the 'equil' scenario is provided. 
Just run the three scripts as described in the readme.

We are happy to receive feedback. PRs and further development on the public repo are welcome!
