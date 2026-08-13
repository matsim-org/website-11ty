---
title: 'From Prompt to Pull Request — MATSim Association Seminar'
description: 'A one-hour online seminar for MATSim Association members: "From Prompt to Pull Request: Best Programming Practices in the Age of LLMs", presented by Martin Peris Martorell. This event took place on 13 August 2026.'
layout: page
templateEngineOverride: njk
permalink: /events/agentic-ai-seminar-2026/register/
---

{#
  Post-event version of this page. The sign-up form, its JavaScript and all
  calls to the eventRegistration API have been removed — the event is over and
  there is nothing left to register for.

  The permalink is deliberately unchanged, even though it reads ".../register/":
  it is the URL in the announcement email, the news post and the LinkedIn post,
  so it needs to keep resolving.
#}

<style>
  /* Inherit the site's fluid type scale and flow rhythm rather than setting
     our own sizes, so this page matches the rest of the website. Widths and
     spacing tokens mirror the .prose block. */
  .event-shell {
    --flow-space: var(--space-m-l);
    max-inline-size: 55rem;
  }

  .event-shell :is(h2, h3) {
    --flow-space: var(--space-m-l);
  }

  .event-shell :is(h2, h3) + * {
    --flow-space: var(--space-s-m);
  }

  .event-lead {
    color: var(--color-fg-dark-2);
  }

  .event-facts {
    display: grid;
    gap: 0.35rem;
    padding: 1rem 1.1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-matsim-light-1);
    background: var(--color-fg-light-2);
  }

  .event-facts div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .event-facts dt {
    font-weight: 700;
    color: var(--color-matsim-dark-2);
    min-width: 7rem;
  }

  .event-facts dd {
    margin: 0;
  }

  .event-status {
    padding: 1rem 1.1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-matsim-accent-1);
    background: var(--color-matsim-accent-1-light);
  }

  .event-note {
    color: var(--color-fg-dark-2);
  }
</style>

<div class="event-shell flow">
  <div class="event-status">
    <strong>This seminar has taken place.</strong>
    <p class="event-note">It ran on 13 August 2026 and went very well — thank you to everyone who joined, and to Martin for giving up his evening in Japan to do it.</p>
  </div>

  <div class="event-lead flow">
    <p>Martin Peris Martorell spoke on <strong>"From Prompt to Pull Request: Best Programming Practices in the Age of LLMs"</strong> — a practical hour on using agentic AI tools well on MATSim work, from processing and analysing output, through extending the API, to building larger systems.</p>

    <dl class="event-facts">
      <div><dt>Speaker</dt><dd>Martin Peris Martorell, Cyberdyne Inc., Tsukuba, Japan</dd></div>
      <div><dt>Date</dt><dd>13 August 2026</dd></div>
      <div><dt>Format</dt><dd>Online, one-hour presentation</dd></div>
    </dl>

    <h2>Follow-up questions</h2>
    <p>Martin is happy to be contacted directly about the talk. You can reach him on LinkedIn at <a href="https://www.linkedin.com/in/martinperis/" target="_blank" rel="noopener">linkedin.com/in/martinperis</a>.</p>

    <h2>About the speaker</h2>
    <p>Martin Peris Martorell is a robotics systems architect at Cyberdyne in Tsukuba, Japan, where he has spent more than a decade building autonomous robots that run in real customer environments — multi-floor navigation and elevator integration, stereo vision and perception pipelines, and fleet operations.</p>
    <p>He also led the establishment of Cyberdyne's company-wide robotics software engineering standards, covering CI/CD, code quality, reliability engineering and AI-assisted development methodology. That is the experience this talk drew on: agentic AI from the perspective of someone who has to maintain what it produces, on a team, in production.</p>
    <p>He holds an MSc in artificial intelligence, pattern recognition and digital imaging from the Polytechnic University of Valencia, and began his research career at the University of Tsukuba's computer vision laboratory.</p>

    <p class="event-note">Seminars like this one are a MATSim Association member benefit. If you would like to hear about future events, you are very welcome to <a href="/association/membership/?source=agentic-ai-seminar-2026">join the Association</a>.</p>
  </div>
</div>
