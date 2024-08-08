---
title: Install MATSim
permalink: /install/index.html
description: How to install and use MATSim
layout: page
preloads:
  href: '/assets/fonts/robotomono/robotomono-variablefont_wght-webfont.woff2'
  as: 'font'
  type: 'font/woff2'
  crossorigin: true
---


<div class="toc">

## Contents

- [Use MATSim as a programmer out of an IDE](#programmers)
- [Use the MATSim GUI](#gui)
- [Use MATSim as a dependency](#maven)
- [Visualization](#visualization)
- [About releases](#releases)
- [Open Data Models](#open-data-models)
- [Benchmark](#benchmark)

</div>

<div class="important-notice">

MATSim is mostly a software framework to be configured and enhanced with your own code. 
While MATSim can be [started standalone](#gui), it only offers a very simple user interface. 
To get the most out of MATSim, you will likely have to use MATSim as a framework or library and write code to customize its functionality.

</div>

<div id="programmers"></div>

## Use MATSim as a programmer out of an IDE

<!-- ### Quickstart -->

<div class="lead">

This approach targets programmers who are comfortable with Java and an IDE (e.g. Eclipse or IntelliJ). This will automatically download MATSim, allow you to browse the source code, and keep you up-to-date with releases or snapshots.

</div>

<div class="grid" data-layout="50-50">

<div>

### Install

1. (optional but recommended) Fork [matsim-example-project](https://github.com/matsim-org/matsim-example-project).
1. Clone matsim-example-project into local directory.
1. Import as Maven project into IDE. Maven will sort out the dependencies. <mark>No need to download the MATSim main repository.</mark> Sources are available.
   - <b>IntelliJ:</b> Import project &rarr; browse to directory &rarr; Maven &rarr; Next, Next, Next
   - <b>Eclipse:</b> Import ... &rarr; ... as Maven project &rarr; browse to directory &rarr; accept, accept, accept
1. Run `MATSimGUI` from the IDE.
   - An example config file is in `scenarios/equil`.
   - Press `Run` to run MATSim.
1. (optional but recommended) Run `RunMATSim` from the IDE.
1. (optional but recommended) Set up, for your forked repo, a continuous integration (CI) workflow. 
    On the github website of your repo: `Actions` &rarr; `New Workflow` &rarr; `More continuous integration workflows...` &rarr; `Java with Maven` &rarr; `Set up this workflow` &rarr; `Start commit` &rarr; `...`. 
    This will result in a file `.github/workflows/maven.yml` which triggers the automatic build after each commit. Detailed configuration of the workflow via this file is possible at a later point in time.

</div>
<div>

### Notes

- Code examples are in [matsim-code-examples](https://github.com/matsim-org/matsim-code-examples) on github. Also see there for examples of how to use extensions (package `extensions`).
- If you want/need to write your own extensions:

    1. Again, look at [matsim-code-examples](https://github.com/matsim-org/matsim-code-examples) for examples.
    1. Look at `ControlerDefaultsModule` (in your IDE, source is retrieved by Maven) to see how MATSim is plugged together.

- You will not be able to modify the existing MATSim source code. This is an advantage, since it improves scientific reproducibility. If you feel the need to modify the existing MATSim source code, please use [https://matsim.org/faq](https://matsim.org/faq) and we will try to help or implement missing extension points.
- You can generate a "clickable jar file" of your own code with `mvn package`. This could, for example, be passed on to students or clients for specific studies.

<!-- ### MATSim-example-project on GitHub -->

<!-- The recommended approach to getting started with MATSim is to clone the example project on GitHub. This approach targets programmers who are comfortable with Java and an IDE (e.g. Eclipse or IntelliJ). This will automatically download MATSim, allow you to browse the source code, and keep you up-to-date with releases or snapshots. -->

<!-- You will _not_ be able to modify the existing MATSim source code -- which, in most cases, should not be necessary. It is preferred that you contact the developers in such situations and we will try to help or implement missing extension points. -->

<!-- - [<i class="fa fa-github"></i> Clone the example project on GitHub](https://github.com/matsim-org/matsim-example-project) -->

<!-- ### MATSim-code-examples on GitHub -->

<!-- There is also a MATSim code examples project, which contains code examples of how to work with MATSim.  You can clone this project to have it locally on your computer, or browse the code in github directly.  This project is meant to be used in parallel with (1). -->

<!-- - [<i class="fa fa-github"></i> See the code examples on GitHub](https://github.com/matsim-org/matsim-code-examples) -->

</div>
</div>

<div id="gui"></div>

## Use the MATSim GUI

<div class="lead">

This "standalone" version is targeted to users who want to use MATSim by editing the input files, including config.xml directly. A basic GUI is provided.

</div>

<div class="grid" data-layout='50-50-reverse'>
<div>
	<img src="/assets/images/download/matsim-gui.webp">
</div>
<div>

1. Download [matsim-example-project](https://github.com/matsim-org/matsim-example-project) and unzip it. There is an option “download zipfile”; no need to use git.
1. A clickable jar file is no longer provided, since they make the git repo too large. Instead, follow the instructions under “Building and Running it locally” at [matsim-example-project](https://github.com/matsim-org/matsim-example-project).
1. As stated there, you will be able to double click on the generated MATSim jar file. What opens is what we call the MATSim GUI.
   - An example config file is in `scenarios/equil`.
   - Press `Run` to run MATSim.

The logfile contains, between a lot of other information, also a dump of the full
matsim configuration. If there are interesting parameters, you could try
to copy then into your own config file, modify them, and re-run.

In my (kn's) view, one can actually get quite far in this way, i.e. by editing the config file. The main problem is how to obtain the network and in particular the so-called initial demand for your own scenario. If you can't get that from somewhere else, it is probably better to go through the tutorial.

</div>
</div>

<div class="grid" data-layout="50-50">
<div>

#### Latest Stable Release

Version 15.0 "Spring 2023", released April 2023

- [Download ZIP](https://github.com/matsim-org/matsim-libs/releases/download/15.0/matsim-15.0-release.zip) ca. 60 MB
- [Older versions](https://github.com/matsim-org/matsim-libs/releases)
- [Even older versions (on sourceforge)](https://sourceforge.net/projects/matsim/files/MATSim/)

</div>
<div>

#### Development Version

This (= using a development version of MATSim via the GUI) is not recommended any longer. If you cannot work with a release, you should use the IDE and Maven.

</div>
</div>

<div id="maven"></div>

## Use MATSim as a dependency

<div class="lead">

The "Maven" version  (or alternatively also Gradle) is targeted to programmers who know about Maven, and want to include MATSim into an already existing Maven project. 

</div>

Similar to the "MATSim example project" above, the Maven approach will automatically download MATSim, allow you to browse the source code, and keep you up-to-date with releases or snapshots (depending on your pom.xml).

It will _not_ allow you to modify the existing MATSim code -- which, in most cases, also should not be necessary: it is preferred that you contact the developers in such situations and we will try to help or implement missing extension points.

<div class="grid" data-layout="50-50">

<div>

#### (Pre-)Release

```xml
<repositories>
  <repository>
    <id>matsim</id>
    <name>MATSim Maven repository</name>
    <url>https://repo.matsim.org/repository/matsim/</url>
  </repository>
</repositories>
<dependencies>
  <dependency>
    <groupId>org.matsim</groupId>
    <artifactId>matsim</artifactId>
    <version>15.0</version>
  </dependency>
</dependencies>
```

The [example project on GitHub](https://github.com/matsim-org/matsim-example-project) contains a valid `pom.xml`.

[Extensions](/extensions) can be added in the same way; see the `pom.xml` in the [code examples on GitHub](https://github.com/matsim-org/matsim-code-examples)

</div>
<div>

#### Automatic snapshot of development version

```xml
<repositories>
  <repository>
    <id>matsim</id>
    <name>MATSim Maven repository</name>
    <url>https://repo.matsim.org/repository/matsim/</url>
  </repository>
</repositories>
<dependencies>
  <dependency>
    <groupId>org.matsim</groupId>
    <artifactId>matsim</artifactId>
    <version>16.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```

These versions are typically less stable and don't come with up-to-date documenation, but may contain new features.

</div>
</div>

<div id="visualization"></div>

## Visualization

<div class="grid" data-layout='50-50-reverse'>
<div>
	<img src="/assets/images/download/via-analysis.webp">
</div>
<div>

When the simulation ran, many files were created in its output
directory. Note that the GUI has a button to reach the output
directory. One of the files is a so-called events file, typically
generated for every 10th iteration. The events file for the zeroth
iteration is located in `.../ITERS/it.0/...0.events.xml.gz`. This
contains a lot of information that can be visualized.

The easiest way to visualize MATSim output is to use VIA. A free
version, with a limit on the number of agents, is [available for
download](http://simunto.com/via). If you start VIA, you should see a
large, black area. This is where the traffic will be visualized. On
the left side of this area, you see a smaller area with 4 icons on the
top ("Controls"). Click the first icon (Data Sources). Now you can
either drag and drop files into this section (e.g. a `network.xml`, or
`events.xml.gz`), or click the "+" at the bottom to select a file to
be added. Use either option to add first `network.xml` to the list of
available data and then `events.xml.gz`. Now the visualizer knows
about our data, and we can tell it how to visualize it.

Next, click on the second icon ("Layers") in the Controls section.
Initially, you will see only the background layer listed. Click on
the '+' to select the data you want to have displayed. It should already
suggest to visualize the network with the loaded `network.xml`, so just
click `Add`. After a short moment, the network should be shown in the
visualization area. Click the '+' again, but this time choose Vehicles as
layer type. The `events.xml.gz` file will be already pre-selected.
Click on `Add`. As any layer depending on the events, a
`Load Data` button will appear at the bottom of the layer tag.
Click it to extract the vehicles' positions from the events.

</div>
</div>

<div id="releases"></div>

## About releases

We normally release together with our summer term class taught at TU Berlin:

1. A pre-release in March/April.
1. Possible bugfix versions while the class is running.
1. In June/July, the last bugfix version becomes the stable release.

In consequence, the "latest (pre-)release" may be more modern than the "latest stable release".


## Open Data Models

There are a few MATSim models available freely that you can use to get started, play around,
or test your own algorithms with. Have a look at our [dedicated page for open data models](/install/open-data-models)
to see what models are available.

## Benchmark

[Download Benchmark](/files/benchmark/matsim-benchmark-2.0.0.zip) ZIP, ca. 180 MB

More information about the [MATSim Benchmark](/benchmark).

