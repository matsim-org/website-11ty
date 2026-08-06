---
title: 'From Prompt to Pull Request — MATSim Association Seminar'
description: 'A one-hour online seminar for MATSim Association members: "From Prompt to Pull Request: Best Programming Practices in the Age of LLMs", presented by Martin Peris Martorell.'
layout: page
templateEngineOverride: njk
permalink: /events/agentic-ai-seminar-2026/register/
---

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

  .event-card {
    background: #fff;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    box-shadow: 0 18px 44px rgba(13, 43, 88, 0.08);
    padding: 1.5rem;
  }

  .event-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .event-field {
    display: grid;
    gap: 0.35rem;
  }

  .event-field label {
    font-weight: 600;
    color: var(--color-matsim-dark-2);
  }

  .event-field input,
  .event-field textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    padding: 0.75rem 0.9rem;
    font: inherit;
    background: #fff;
  }

  .event-field textarea {
    min-height: 110px;
  }

  .event-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .event-button,
  .event-button-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0.8rem 1.1rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 700;
    border: 1px solid transparent;
    cursor: pointer;
  }

  .event-button {
    background: var(--color-matsim-accent-1);
    color: #fff;
  }

  .event-button-secondary {
    background: #fff;
    color: var(--color-matsim-dark-2);
    border-color: var(--color-matsim-light-1);
  }

  .event-button:hover,
  .event-button-secondary:hover {
    text-decoration: none;
  }

  .event-status {
    padding: 1rem 1.1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-matsim-light-1);
    background: var(--color-fg-light-2);
  }

  .event-status.is-success {
    background: var(--color-matsim-accent-1-light);
    border-color: var(--color-matsim-accent-1);
  }

  .event-status.is-warning {
    background: #fff8e8;
    border-color: #e8c76a;
  }

  .event-status.is-error {
    background: var(--color-matsim-accent-red-bg);
    border-color: var(--color-matsim-accent-red-light);
  }

  .recaptcha-wrapper {
    margin-top: 0.75rem;
    min-height: 78px;
  }

  .recaptcha-fallback {
    display: none;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--color-matsim-accent-red-dark);
  }

  .event-note {
    color: var(--color-fg-dark-2);
  }

  .event-honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  @media (max-width: 720px) {
    .event-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="event-shell flow">
  <div class="event-lead flow">
    <p>Agentic AI tools are turning more and more of us into software developers, whether or not we set out to be. This seminar is a practical look at how to use them well on MATSim work — from processing and analysing output, through extending the API, to building larger systems.</p>
    <p>It is aimed at the whole MATSim community, not only core developers. If you mostly use off-the-shelf tooling and have recently started leaning on AI assistants, this talk is very much for you.</p>

    <dl class="event-facts">
      <div><dt>Speaker</dt><dd>Martin Peris Martorell, Cyberdyne Inc., Tsukuba, Japan</dd></div>
      <div><dt>Date</dt><dd><span data-event-date>13 August 2026</span></dd></div>
      <div><dt>Time</dt><dd><span data-event-time>07:00–08:00 UTC (16:00–17:00 JST / 09:00–10:00 CEST)</span></dd></div>
      <div><dt>Format</dt><dd>Online, one-hour presentation</dd></div>
      <div><dt>Open to</dt><dd>MATSim Association members</dd></div>
    </dl>

    <h2>About the speaker</h2>
    <p>Martin Peris Martorell is a robotics systems architect at Cyberdyne in Tsukuba, Japan, where he has spent more than a decade building autonomous robots that run in real customer environments — multi-floor navigation and elevator integration, stereo vision and perception pipelines, and fleet operations.</p>
    <p>He also led the establishment of Cyberdyne's company-wide robotics software engineering standards, covering CI/CD, code quality, reliability engineering and AI-assisted development methodology. That is the experience this talk draws on: agentic AI from the perspective of someone who has to maintain what it produces, on a team, in production.</p>
    <p>He holds an MSc in artificial intelligence, pattern recognition and digital imaging from the Polytechnic University of Valencia, and began his research career at the University of Tsukuba's computer vision laboratory.</p>
  </div>

  <div class="event-card flow" id="lookup-card">
    <h2>Sign up</h2>
    <p class="event-note">This seminar is open to MATSim Association members. Check your membership below to book your place. If you are not yet a member, you are very welcome to <a href="/association/membership/?source=agentic-ai-seminar-2026">join the Association</a> and come along.</p>

    <form id="membership-check-form">
      <div class="event-grid">
        <div class="event-field">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required placeholder="Jane Doe">
        </div>
        <div class="event-field">
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required placeholder="jane@example.com">
        </div>
      </div>

      <div class="event-field" style="margin-top:1rem;">
        <label for="institution">Institution (optional)</label>
        <input id="institution" name="institution" type="text" autocomplete="organization" placeholder="ETH Zurich">
      </div>

      <div class="event-field" style="margin-top:1rem;">
        <label>Verification</label>
        <div class="recaptcha-wrapper">
          <div id="seminar-lookup-recaptcha"></div>
          <div id="lookup-recaptcha-fallback" class="recaptcha-fallback">
            CAPTCHA could not be loaded. Please reload the page or disable blockers for Google reCAPTCHA.
          </div>
        </div>
      </div>

      <div class="event-actions">
        <button class="event-button" type="submit">Check Membership Status</button>
        <a class="event-button-secondary" href="/association/membership/?source=agentic-ai-seminar-2026">Become a Member</a>
      </div>
    </form>

    <div id="lookup-status" class="event-status" style="display:none;"></div>
  </div>

  <div class="event-card flow" id="member-panel" style="display:none;">
    <h2>Confirm your place</h2>
    <p class="event-note" id="member-greeting"></p>
    <div class="event-actions">
      <button class="event-button" type="button" id="confirm-button">Confirm My Place</button>
      <button class="event-button-secondary" type="button" id="member-back-button">Use a Different Email</button>
    </div>
    <div id="member-status" class="event-status" style="display:none;"></div>
  </div>

  <div class="event-card flow" id="nonmember-panel" style="display:none;">
    <h2>Members only</h2>
    <p class="event-note">This seminar is open to MATSim Association members. We could not find an active membership for that email address.</p>
    <div class="event-actions">
      <a class="event-button" id="join-link" href="/association/membership/?source=agentic-ai-seminar-2026">Become a Member</a>
      <button class="event-button-secondary" type="button" id="nonmember-back-button">Use a Different Email</button>
    </div>

    <hr style="margin:1.5rem 0;border:0;border-top:1px solid var(--color-matsim-light-1);">

    <h3>Keep me posted</h3>
    <p class="event-note">Let us know you are interested and we will keep you posted about this seminar and future ones.</p>
    <form id="interest-form">
      <div class="event-grid">
        <div class="event-field">
          <label for="interest-name">Name</label>
          <input id="interest-name" name="name" type="text" autocomplete="name" required>
        </div>
        <div class="event-field">
          <label for="interest-email">Email address</label>
          <input id="interest-email" name="email" type="email" autocomplete="email" required>
        </div>
      </div>

      <div class="event-field" style="margin-top:1rem;">
        <label for="interest-note">Anything you would like us to know (optional)</label>
        <textarea id="interest-note" name="note" maxlength="500"></textarea>
      </div>

      <div class="event-honeypot" aria-hidden="true">
        <label for="interest-website">Website</label>
        <input id="interest-website" name="website" type="text" tabindex="-1" autocomplete="off">
      </div>

      <div class="event-field" style="margin-top:1rem;">
        <label>Verification</label>
        <div class="recaptcha-wrapper">
          <div id="seminar-interest-recaptcha"></div>
          <div id="interest-recaptcha-fallback" class="recaptcha-fallback">
            CAPTCHA could not be loaded. Please reload the page or disable blockers for Google reCAPTCHA.
          </div>
        </div>
      </div>

      <div class="event-actions">
        <button class="event-button-secondary" type="submit">Keep Me Posted</button>
      </div>
    </form>

    <div id="interest-status" class="event-status" style="display:none;"></div>
  </div>
</div>

<script>
  const API_BASE = {{ meta.seminar2026.apiBaseUrl | toJson | safe }};
  const MEMBERSHIP_URL = {{ meta.seminar2026.membershipUrl | toJson | safe }};
  const RECAPTCHA_SITE_KEY = {{ meta.membership.recaptchaSiteKey | toJson | safe }};
  const EVENT_ID = 'agentic-ai-seminar-2026';
  const STORAGE_KEY = 'seminar2026.identity';

  const lookupForm = document.getElementById('membership-check-form');
  const lookupCard = document.getElementById('lookup-card');
  const lookupStatus = document.getElementById('lookup-status');
  const lookupButton = lookupForm.querySelector('button[type="submit"]');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const institutionInput = document.getElementById('institution');

  const memberPanel = document.getElementById('member-panel');
  const memberGreeting = document.getElementById('member-greeting');
  const memberStatus = document.getElementById('member-status');
  const confirmButton = document.getElementById('confirm-button');

  const nonMemberPanel = document.getElementById('nonmember-panel');
  const joinLink = document.getElementById('join-link');
  const interestForm = document.getElementById('interest-form');
  const interestStatus = document.getElementById('interest-status');

  let lookupWidgetId = null;
  let interestWidgetId = null;
  let identity = { name: '', email: '', institution: '' };

  function renderStatus(box, kind, html) {
    box.className = `event-status ${kind}`;
    box.innerHTML = html;
    box.style.display = 'block';
  }

  function hide(el) {
    el.style.display = 'none';
  }

  function show(el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function formatEventDate(isoDate) {
    if (!isoDate) return null;
    const parsed = new Date(`${isoDate}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
    });
  }

  // Date and time come from the API (backed by Firestore) so they can change
  // without a site rebuild. The markup carries a fallback for the offline case.
  function applyEventDetails(event) {
    if (!event) return;
    const formattedDate = formatEventDate(event.eventDate);
    if (formattedDate) {
      document.querySelectorAll('[data-event-date]').forEach((el) => {
        el.textContent = formattedDate;
      });
    }
    if (event.eventTimeLabel) {
      document.querySelectorAll('[data-event-time]').forEach((el) => {
        el.textContent = event.eventTimeLabel;
      });
    }
  }

  async function postJson(route, payload) {
    const response = await fetch(`${API_BASE}${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    return { ok: response.ok, status: response.status, result };
  }

  function joinUrl(email) {
    const separator = MEMBERSHIP_URL.includes('?') ? '&' : '?';
    const emailPart = email ? `&email=${encodeURIComponent(email)}` : '';
    return `${MEMBERSHIP_URL}${separator}source=${EVENT_ID}${emailPart}`;
  }

  function storeIdentity(value) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch (error) {
      /* sessionStorage unavailable — not worth failing the flow over */
    }
  }

  function restoreIdentity() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const stored = JSON.parse(raw);
      if (stored.name) nameInput.value = stored.name;
      if (stored.email) emailInput.value = stored.email;
      if (stored.institution) institutionInput.value = stored.institution;
    } catch (error) {
      /* ignore malformed session data */
    }
  }

  function renderRegisteredState(event) {
    // The Zoom join details are never sent to the browser — they only ever
    // travel as the .ics calendar invite attached to the confirmation email.
    const surveyUrl = event && event.surveyUrl;
    const surveyHtml = surveyUrl ?
      `<p class="event-note">While you're here — if you haven't already, we'd love two minutes of your time for our <a href="${surveyUrl}" target="_blank" rel="noopener">user survey</a>.</p>` :
      '';

    renderStatus(memberStatus, 'is-success', `
      <strong>Your place is booked.</strong>
      <p class="event-note">Check your email for a confirmation with a calendar invite attached — open it to add the event (and the joining details) to your calendar.</p>
      ${surveyHtml}
      <div class="event-actions">
        <button class="event-button-secondary" type="button" id="cancel-button">Cancel My Place</button>
      </div>
    `);

    confirmButton.style.display = 'none';

    const cancelButton = document.getElementById('cancel-button');
    if (cancelButton) {
      cancelButton.addEventListener('click', async () => {
        cancelButton.disabled = true;
        cancelButton.textContent = 'Cancelling...';

        try {
          const { ok, result } = await postJson('/cancel-registration', {
            name: identity.name,
            email: identity.email,
          });

          if (!ok) {
            renderStatus(memberStatus, 'is-error', `<strong>Could not cancel.</strong><p class="event-note">${result.error || 'Please try again later.'}</p>`);
            return;
          }

          confirmButton.style.display = '';
          confirmButton.disabled = false;
          confirmButton.textContent = 'Confirm My Place';
          renderStatus(memberStatus, 'is-warning', `
            <strong>Your place has been cancelled.</strong>
            <p class="event-note">You can confirm again at any time while places remain.</p>
          `);
        } catch (error) {
          renderStatus(memberStatus, 'is-error', `<strong>Network error.</strong><p class="event-note">Please try again in a moment.</p>`);
        }
      });
    }
  }

  function showMemberPanel(result) {
    hide(lookupCard);
    hide(nonMemberPanel);
    memberGreeting.textContent =
      `Thanks ${identity.name}. Your MATSim Association membership is active, so you can book a place at this seminar.`;
    show(memberPanel);

    if (result.registrationStatus === 'registered') {
      renderRegisteredState(result.event);
    }
  }

  function showNonMemberPanel(result) {
    hide(lookupCard);
    hide(memberPanel);
    joinLink.href = joinUrl(identity.email);

    document.getElementById('interest-name').value = identity.name;
    document.getElementById('interest-email').value = identity.email;

    if (result.memberStatus === 'expired') {
      renderStatus(interestStatus, 'is-warning', `
        <strong>We found a previous membership for this address, but it does not look active right now.</strong>
        <p class="event-note">If you have just renewed, please try again shortly.</p>
      `);
    }

    show(nonMemberPanel);
    renderInterestRecaptcha();
  }

  function resetToLookup() {
    hide(memberPanel);
    hide(nonMemberPanel);
    hide(lookupStatus);
    hide(memberStatus);
    hide(interestStatus);
    confirmButton.style.display = '';
    confirmButton.disabled = false;
    confirmButton.textContent = 'Confirm My Place';
    show(lookupCard);
  }

  document.getElementById('member-back-button').addEventListener('click', resetToLookup);
  document.getElementById('nonmember-back-button').addEventListener('click', resetToLookup);

  function showRecaptchaFallback(id) {
    const fallback = document.getElementById(id);
    if (fallback) fallback.style.display = 'block';
  }

  function renderInterestRecaptcha() {
    if (interestWidgetId !== null) return;
    if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
      showRecaptchaFallback('interest-recaptcha-fallback');
      return;
    }
    try {
      interestWidgetId = window.grecaptcha.render('seminar-interest-recaptcha', {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    } catch (error) {
      showRecaptchaFallback('interest-recaptcha-fallback');
    }
  }

  window.onSeminarRecaptchaLoad = function () {
    if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
      showRecaptchaFallback('lookup-recaptcha-fallback');
      return;
    }
    try {
      lookupWidgetId = window.grecaptcha.render('seminar-lookup-recaptcha', {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    } catch (error) {
      showRecaptchaFallback('lookup-recaptcha-fallback');
    }
  };

  if (!document.getElementById('seminar-recaptcha-script')) {
    const script = document.createElement('script');
    script.id = 'seminar-recaptcha-script';
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onSeminarRecaptchaLoad&render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  restoreIdentity();

  postJson('/event-details', {})
    .then(({ ok, result }) => {
      if (ok) applyEventDetails(result.event);
    })
    .catch(() => { /* keep the fallback text baked into the page */ });

  lookupForm.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    hide(lookupStatus);
    lookupButton.disabled = true;
    lookupButton.textContent = 'Checking...';

    identity = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      institution: institutionInput.value.trim(),
    };
    storeIdentity(identity);

    try {
      if (!window.grecaptcha || typeof window.grecaptcha.getResponse !== 'function' || lookupWidgetId === null) {
        renderStatus(lookupStatus, 'is-error', `<strong>Security verification is not ready.</strong><p class="event-note">Please reload the page and try again.</p>`);
        return;
      }

      const recaptchaToken = window.grecaptcha.getResponse(lookupWidgetId);
      if (!recaptchaToken) {
        renderStatus(lookupStatus, 'is-error', `<strong>Please complete the CAPTCHA verification.</strong>`);
        return;
      }

      const payload = { name: identity.name, email: identity.email, recaptchaToken };
      if (identity.institution) payload.institution = identity.institution;

      const { ok, result } = await postJson('/check-membership', payload);
      if (!ok) {
        renderStatus(lookupStatus, 'is-error', `<strong>Could not check membership.</strong><p class="event-note">${result.error || 'Please try again later.'}</p>`);
        return;
      }

      applyEventDetails(result.event);

      if (result.memberStatus === 'member' || result.memberStatus === 'organization-member') {
        showMemberPanel(result);
        return;
      }

      showNonMemberPanel(result);
    } catch (error) {
      renderStatus(lookupStatus, 'is-error', `<strong>Network error.</strong><p class="event-note">Please try again in a moment.</p>`);
    } finally {
      if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && lookupWidgetId !== null) {
        window.grecaptcha.reset(lookupWidgetId);
      }
      lookupButton.disabled = false;
      lookupButton.textContent = 'Check Membership Status';
    }
  });

  confirmButton.addEventListener('click', async () => {
    confirmButton.disabled = true;
    confirmButton.textContent = 'Confirming...';
    hide(memberStatus);

    try {
      const payload = { name: identity.name, email: identity.email, attendanceConfirmed: true };
      if (identity.institution) payload.institution = identity.institution;

      const { ok, status, result } = await postJson('/register', payload);

      if (ok) {
        applyEventDetails(result.event);
        renderRegisteredState(result.event);
        return;
      }

      if (status === 409 && result.errorCode === 'ALREADY_REGISTERED') {
        renderRegisteredState(null);
        return;
      }

      if (status === 409 && result.errorCode === 'MEMBERSHIP_REQUIRED') {
        showNonMemberPanel(result);
        return;
      }

      renderStatus(memberStatus, 'is-error', `<strong>Could not confirm your place.</strong><p class="event-note">${result.error || 'Please try again later.'}</p>`);
    } catch (error) {
      renderStatus(memberStatus, 'is-error', `<strong>Network error.</strong><p class="event-note">Please try again in a moment.</p>`);
    } finally {
      if (confirmButton.style.display !== 'none') {
        confirmButton.disabled = false;
        confirmButton.textContent = 'Confirm My Place';
      }
    }
  });

  interestForm.addEventListener('submit', async (submitEvent) => {
    submitEvent.preventDefault();
    const interestButton = interestForm.querySelector('button[type="submit"]');
    interestButton.disabled = true;
    interestButton.textContent = 'Sending...';
    hide(interestStatus);

    try {
      if (!window.grecaptcha || typeof window.grecaptcha.getResponse !== 'function' || interestWidgetId === null) {
        renderStatus(interestStatus, 'is-error', `<strong>Security verification is not ready.</strong><p class="event-note">Please reload the page and try again.</p>`);
        return;
      }

      const recaptchaToken = window.grecaptcha.getResponse(interestWidgetId);
      if (!recaptchaToken) {
        renderStatus(interestStatus, 'is-error', `<strong>Please complete the CAPTCHA verification.</strong>`);
        return;
      }

      const payload = {
        name: document.getElementById('interest-name').value.trim(),
        email: document.getElementById('interest-email').value.trim(),
        recaptchaToken,
      };
      const note = document.getElementById('interest-note').value.trim();
      const honeypot = document.getElementById('interest-website').value.trim();
      if (note) payload.note = note;
      if (honeypot) payload.website = honeypot;

      const { ok, result } = await postJson('/register-interest', payload);
      if (!ok) {
        renderStatus(interestStatus, 'is-error', `<strong>Could not record your interest.</strong><p class="event-note">${result.error || 'Please try again later.'}</p>`);
        return;
      }

      renderStatus(interestStatus, 'is-success', `
        <strong>Thanks — we will keep you posted.</strong>
        <p class="event-note">If you join the Association, come back to this page to book your place.</p>
      `);
      interestForm.style.display = 'none';
    } catch (error) {
      renderStatus(interestStatus, 'is-error', `<strong>Network error.</strong><p class="event-note">Please try again in a moment.</p>`);
    } finally {
      if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && interestWidgetId !== null) {
        window.grecaptcha.reset(interestWidgetId);
      }
      interestButton.disabled = false;
      interestButton.textContent = 'Keep Me Posted';
    }
  });
</script>
