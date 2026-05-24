---
title: MUM2026 Non-Member Registration
layout: page
templateEngineOverride: njk
permalink: /conferences/mum2026/nonmember-registration/
---

<style>
  .mum2026-shell {
    display: grid;
    gap: 1.5rem;
    max-width: 860px;
  }

  .mum2026-card {
    background: #fff;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    box-shadow: 0 18px 44px rgba(13, 43, 88, 0.08);
    padding: 1.5rem;
  }

  .mum2026-note {
    color: var(--color-fg-dark-2);
    line-height: 1.6;
  }

  .mum2026-form {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }

  .mum2026-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mum2026-field {
    display: grid;
    gap: 0.35rem;
  }

  .mum2026-field label {
    font-weight: 600;
    color: var(--color-matsim-dark-2);
  }

  .mum2026-field input,
  .mum2026-field textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    padding: 0.75rem 0.9rem;
    font: inherit;
    background: #fff;
  }

  .mum2026-field textarea {
    min-height: 110px;
  }

  .mum2026-check {
    display: flex;
    gap: 0.65rem;
    align-items: flex-start;
    padding: 0.9rem 1rem;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    background: var(--color-fg-light-2);
  }

  .mum2026-check input {
    margin-top: 0.2rem;
  }

  .mum2026-radio-group {
    display: grid;
    gap: 0.65rem;
  }

  .mum2026-radio {
    display: grid;
    grid-template-columns: 1.1rem minmax(0, 1fr);
    column-gap: 0.8rem;
    align-items: start;
    padding: 0.9rem 1rem;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    background: var(--color-fg-light-2);
  }

  .mum2026-radio input {
    margin-top: 0.2rem;
    align-self: start;
  }

  .mum2026-radio > span {
    min-width: 0;
    display: block;
    line-height: 1.45;
  }

  .mum2026-radio > span > strong,
  .mum2026-radio > span > .mum2026-note {
    display: block;
  }

  .mum2026-honeypot {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .mum2026-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .mum2026-button,
  .mum2026-button-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0.8rem 1.1rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 700;
    border: 1px solid transparent;
  }

  .mum2026-button {
    background: var(--color-matsim-accent-1);
    color: #fff;
  }

  .mum2026-button-secondary {
    background: #fff;
    color: var(--color-matsim-dark-2);
    border-color: var(--color-matsim-light-1);
  }

  .mum2026-message {
    padding: 1rem 1.1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-matsim-light-1);
    background: var(--color-fg-light-2);
  }

  .mum2026-message.is-success {
    background: var(--color-matsim-accent-1-light);
    border-color: var(--color-matsim-accent-1);
  }

  .mum2026-message.is-warning {
    background: #fff8e8;
    border-color: #e8c76a;
  }

  .mum2026-message.is-error {
    background: var(--color-matsim-accent-red-bg);
    border-color: var(--color-matsim-accent-red-light);
  }

  @media (max-width: 720px) {
    .mum2026-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="mum2026-shell">
  <div class="mum2026-card">
    <div id="nonmember-message" class="mum2026-message is-success">
      <strong>Non-member registration for MUM2026</strong>
      <p class="mum2026-note">Non-members are very welcome. If you want to join the MATSim Association instead, that is often the more economical option and also supports the community. We will email an invoice for both payment methods.</p>
    </div>

    <form id="nonmember-registration-form" class="mum2026-form" style="display:none;">
      <div class="mum2026-honeypot" aria-hidden="true">
        <label for="website">Website</label>
        <input id="website" name="website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <div class="mum2026-grid">
        <div class="mum2026-field">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required placeholder="Jane Doe">
        </div>
        <div class="mum2026-field">
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" required placeholder="jane@example.com">
        </div>
      </div>

      <div class="mum2026-field">
        <label for="institution">Affiliation / institution (optional)</label>
        <input id="institution" name="institution" type="text" autocomplete="organization" placeholder="ETH Zurich">
      </div>

      <div class="mum2026-field">
        <label for="address">Billing address</label>
        <textarea id="address" name="address" required placeholder="Street, postal code, city, country"></textarea>
        <small class="mum2026-note">We use this address for the invoice we will email to you.</small>
      </div>

      <div class="mum2026-check">
        <input id="attendanceConfirmed" name="attendanceConfirmed" type="checkbox" checked required>
        <label for="attendanceConfirmed" style="font-weight:500; margin:0;">I confirm that I will attend MUM2026.</label>
      </div>

      <div class="mum2026-check">
        <input id="gdprAccepted" name="gdprAccepted" type="checkbox" required>
        <label for="gdprAccepted" style="font-weight:500; margin:0;">
          I consent to the MATSim Association processing my personal data for registration, invoicing, and MUM2026 communication.
        </label>
      </div>

      <div class="mum2026-field">
        <label>Payment method</label>
        <div class="mum2026-radio-group">
          <label class="mum2026-radio">
            <input type="radio" name="paymentMethod" value="online" checked>
            <span><strong>Online payment</strong><br><span class="mum2026-note">Pay CHF 100 online and receive the Payrexx checkout link immediately.</span></span>
          </label>
          <label class="mum2026-radio">
            <input type="radio" name="paymentMethod" value="bank">
            <span><strong>Bank transfer</strong><br><span class="mum2026-note">We will record the registration and keep the payment status pending.</span></span>
          </label>
        </div>
      </div>

      <div class="mum2026-actions">
        <button class="mum2026-button" type="submit">Submit Non-Member Registration</button>
        <a class="mum2026-button-secondary" href="/association/membership/?source=mum2026">Become a Member Instead</a>
      </div>
    </form>
  </div>
</div>

<script type="module">
  const API_BASE = {{ meta.mum2026.apiBaseUrl | toJson | safe }};
  const STORAGE_KEY = 'mum2026.registration.identity';
  const LOOKUP_RESULT_KEY = 'mum2026.registration.lookupResult';
  const COMPLETION_URL = '/conferences/mum2026/registration-complete/';
  const FORM = document.getElementById('nonmember-registration-form');
  const MESSAGE_BOX = document.getElementById('nonmember-message');
  const NAME_INPUT = document.getElementById('name');
  const EMAIL_INPUT = document.getElementById('email');
  const INSTITUTION_INPUT = document.getElementById('institution');
  const ADDRESS_INPUT = document.getElementById('address');
  const WEBSITE_INPUT = document.getElementById('website');

  function getStoredJson(key) {
    try {
      const raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setStoredJson(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  function getStoredIdentity() {
    return getStoredJson(STORAGE_KEY);
  }

  function getStoredLookupResult() {
    return getStoredJson(LOOKUP_RESULT_KEY);
  }

  function setStoredIdentity(value) {
    setStoredJson(STORAGE_KEY, value);
  }

  function setStoredLookupResult(value) {
    setStoredJson(LOOKUP_RESULT_KEY, value);
  }

  function isMemberStatus(value) {
    return value === 'member' || value === 'organization-member';
  }

  function showMessage(kind, html) {
    MESSAGE_BOX.className = `mum2026-message ${kind}`;
    MESSAGE_BOX.innerHTML = html;
  }

  function buildMembershipLink(email) {
    const params = new URLSearchParams({ source: 'mum2026' });
    if (email) params.set('email', email);
    return `/association/membership/?${params.toString()}`;
  }

  function buildStatusCheckLink(email) {
    const params = new URLSearchParams({ source: 'mum2026' });
    if (email) params.set('email', email);
    return `/conferences/mum2026/register/?${params.toString()}`;
  }

  const params = new URLSearchParams(window.location.search);
  const storedIdentity = getStoredIdentity();
  const identity = {
    name: params.get('name') || storedIdentity?.name || '',
    email: params.get('email') || storedIdentity?.email || '',
    institution: params.get('institution') || storedIdentity?.institution || '',
  };
  const lookup = getStoredLookupResult();
  const registrationStatus = lookup?.registrationStatus || lookup?.eventRegistrationStatus || null;
  const isActiveMember = isMemberStatus(lookup?.memberStatus);

  if (identity.name) NAME_INPUT.value = identity.name;
  if (identity.email) EMAIL_INPUT.value = identity.email;
  if (identity.institution) INSTITUTION_INPUT.value = identity.institution;

  if (identity.email) {
    setStoredIdentity(identity);
  }

  function renderLookupRequired() {
    showMessage('is-warning', `
      <strong>Please start with the membership status check.</strong>
      <p class="mum2026-note">We need the lookup result from the first page before we can continue here.</p>
      <div class="mum2026-actions">
        <a class="mum2026-button" href="/conferences/mum2026/register/">Go to Status Check</a>
      </div>
    `);
    FORM.style.display = 'none';
  }

  function renderMemberRedirect() {
    showMessage('is-warning', `
      <strong>Your membership is active.</strong>
      <p class="mum2026-note">Members register free of charge on the member registration page.</p>
      <div class="mum2026-actions">
        <a class="mum2026-button" href="/conferences/mum2026/member-registration/?source=mum2026&email=${encodeURIComponent(identity.email)}">Go to Member Registration</a>
        <a class="mum2026-button-secondary" href="${buildMembershipLink(identity.email)}">Become a Member Instead</a>
      </div>
    `);
    FORM.style.display = 'none';
  }

  function renderAlreadyRegistered() {
    showMessage('is-success', `
      <strong>Your non-member registration is already on file.</strong>
      <p class="mum2026-note">We have recorded your registration and will email the invoice to you.</p>
    `);
    FORM.style.display = 'none';
  }

  function renderNonMemberForm() {
    showMessage('is-success', `
      <strong>We are ready to continue as a non-member.</strong>
      <p class="mum2026-note">If you would rather join the MATSim Association first, that is usually the best value and keeps the event free.</p>
      <div class="mum2026-actions">
        <a class="mum2026-button" href="${buildMembershipLink(identity.email)}">Become a Member and Attend Free</a>
      </div>
    `);
    FORM.style.display = 'grid';
  }

  if (!identity.email) {
    renderLookupRequired();
  } else if (!lookup) {
    renderLookupRequired();
  } else if (isActiveMember) {
    renderMemberRedirect();
  } else if (registrationStatus === 'registered') {
    renderAlreadyRegistered();
  } else {
    renderNonMemberForm();
  }

  FORM.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!document.getElementById('attendanceConfirmed').checked) {
      showMessage('is-error', '<strong>Please confirm that you will attend MUM2026.</strong>');
      return;
    }

    if (!document.getElementById('gdprAccepted').checked) {
      showMessage('is-error', '<strong>Please confirm the GDPR declaration.</strong>');
      return;
    }

    const payload = {
      name: NAME_INPUT.value.trim(),
      email: EMAIL_INPUT.value.trim(),
      institution: INSTITUTION_INPUT.value.trim(),
      address: ADDRESS_INPUT.value.trim(),
      attendanceConfirmed: true,
      gdprAccepted: true,
      paymentMethod: FORM.querySelector('input[name="paymentMethod"]:checked')?.value || 'online',
      website: WEBSITE_INPUT.value.trim(),
    };

    const submitButton = FORM.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
      const response = await fetch(`${API_BASE}/register-nonmember`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        showMessage('is-error', `
          <strong>Could not save the registration.</strong>
          <p>${result.error || 'Please try again later.'}</p>
        `);
        return;
      }

      setStoredLookupResult({
        ...(lookup || {}),
        registrationStatus: result.registrationStatus || 'registered',
        eventRegistrationStatus: result.registrationStatus || 'registered',
        registrationFinalized: Boolean(result.registrationFinalized),
        registrationId: result.registrationId || lookup?.registrationId || null,
        paymentStatus: result.paymentStatus || 'pending',
        invoiceNumber: result.invoiceNumber || lookup?.invoiceNumber || null,
      });

      if (result.payrexx_url) {
        window.location.href = result.payrexx_url;
        return;
      }

      const completionParams = new URLSearchParams({
        type: 'non-member',
        status: 'pending',
        registrationId: result.registrationId || '',
        email: payload.email,
      });
      if (result.invoiceNumber) {
        completionParams.set('invoiceNumber', result.invoiceNumber);
      }
      window.location.href = `${COMPLETION_URL}?${completionParams.toString()}`;
    } catch {
      showMessage('is-error', '<strong>Network error.</strong><p>Please try again in a moment.</p>');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Submit Non-Member Registration';
    }
  });
</script>
