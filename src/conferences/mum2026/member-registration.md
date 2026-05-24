---
title: MUM2026 Member Registration
layout: page
templateEngineOverride: njk
permalink: /conferences/mum2026/member-registration/
---

<style>
  .mum2026-shell {
    display: grid;
    gap: 1.5rem;
    max-width: 840px;
  }

  .mum2026-card {
    background: #fff;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    box-shadow: 0 18px 44px rgba(13, 43, 88, 0.08);
    padding: 1.5rem;
  }

  .mum2026-summary {
    padding: 1rem 1.1rem;
    border-left: 4px solid var(--color-matsim-accent-1);
    background: var(--color-matsim-accent-1-light);
    border-radius: var(--border-radius);
  }

  .mum2026-form {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
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
</style>

<div class="mum2026-shell">
  <div class="mum2026-card">
    <div class="mum2026-summary" id="member-summary">
      <strong>Checking your membership status.</strong>
      <p class="mum2026-note">This page is only for current MATSim Association members. If your membership is not yet active, you will see the alternative options here.</p>
    </div>

    <div id="member-message" class="mum2026-message" style="display:none;"></div>

    <form id="member-registration-form" class="mum2026-form" style="display:none;">
      <div class="mum2026-field">
        <label for="attendanceConfirmed">Attendance confirmation</label>
        <div class="mum2026-check">
          <input id="attendanceConfirmed" name="attendanceConfirmed" type="checkbox" checked required>
          <label for="attendanceConfirmed" style="font-weight:500; margin:0;">I confirm that I will attend MUM2026.</label>
        </div>
      </div>

      <div class="mum2026-field">
        <label for="institution">Affiliation / institution (optional)</label>
        <input id="institution" name="institution" type="text" autocomplete="organization" placeholder="ETH Zurich">
      </div>

      <div class="mum2026-actions">
        <button class="mum2026-button" type="submit">Confirm Registration</button>
        <a class="mum2026-button-secondary" href="/conferences/mum2026/register/">Back to Status Check</a>
      </div>
    </form>
  </div>
</div>

<script type="module">
  const API_BASE = {{ meta.mum2026.apiBaseUrl | toJson | safe }};
  const STORAGE_KEY = 'mum2026.registration.identity';
  const LOOKUP_RESULT_KEY = 'mum2026.registration.lookupResult';
  const COMPLETION_URL = '/conferences/mum2026/registration-complete/';
  const STATUS_BOX = document.getElementById('member-message');
  const FORM = document.getElementById('member-registration-form');
  const SUMMARY = document.getElementById('member-summary');
  const INSTITUTION = document.getElementById('institution');
  const SUPPORT_ENDPOINT = `${API_BASE}/report-lookup-issue`;
  const FINALIZATION_CUTOFF_MS = new Date('2026-09-14T00:00:00+02:00').getTime();
  const FINALIZATION_LABEL = 'September 14, 2026';

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

  function isRegistrationFinalized(lookup) {
    if (lookup && typeof lookup.registrationFinalized === 'boolean') {
      return lookup.registrationFinalized;
    }
    return Date.now() >= FINALIZATION_CUTOFF_MS;
  }

  function showMessage(kind, html) {
    STATUS_BOX.className = `mum2026-message ${kind}`;
    STATUS_BOX.innerHTML = html;
    STATUS_BOX.style.display = 'block';
  }

  function activeLinks(email) {
    const params = new URLSearchParams({ source: 'mum2026' });
    if (email) params.set('email', email);
    return {
      membership: `/association/membership/?${params.toString()}`,
      nonMember: `/conferences/mum2026/nonmember-registration/?${params.toString()}`,
      check: `/conferences/mum2026/register/?${params.toString()}`,
      complete: `${COMPLETION_URL}?type=member${email ? `&email=${encodeURIComponent(email)}` : ''}`,
    };
  }

  async function sendSupportRequest(context) {
    const payload = {
      ...context,
      name: identity.name,
      email: identity.email,
      institution: INSTITUTION.value.trim(),
    };

    Object.keys(payload).forEach((key) => {
      if (payload[key] === null || payload[key] === undefined || payload[key] === '') {
        delete payload[key];
      }
    });

    const response = await fetch(SUPPORT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || 'Please try again later.');
    }
    return result;
  }

  const params = new URLSearchParams(window.location.search);
  const paramIdentity = {
    name: params.get('name') || '',
    email: params.get('email') || '',
    institution: params.get('institution') || '',
  };
  const storedIdentity = getStoredIdentity();
  const identity = {
    name: paramIdentity.name || storedIdentity?.name || '',
    email: paramIdentity.email || storedIdentity?.email || '',
    institution: paramIdentity.institution || storedIdentity?.institution || '',
  };
  const lookup = getStoredLookupResult();
  const registrationStatus = lookup?.registrationStatus || lookup?.eventRegistrationStatus || null;
  const lookupIsMember = isMemberStatus(lookup?.memberStatus);
  const registrationFinalized = isRegistrationFinalized(lookup);

  if (identity.email) {
    setStoredIdentity(identity);
  }
  if (identity.institution) {
    INSTITUTION.value = identity.institution;
  }

  function renderLookupRequired() {
    SUMMARY.innerHTML = `
      <strong>Please start with the membership status check.</strong>
      <p class="mum2026-note">We need your name and email address from the first page so we can confirm your membership status without re-checking it here.</p>
      <div class="mum2026-actions">
        <a class="mum2026-button" href="/conferences/mum2026/register/">Go to Status Check</a>
      </div>
    `;
    FORM.style.display = 'none';
    STATUS_BOX.style.display = 'none';
  }

  function renderNonActiveLookup() {
    const links = activeLinks(identity.email);
    SUMMARY.innerHTML = `
      <strong>Your membership is not active yet.</strong>
      <p class="mum2026-note">If you recently paid, you may need to wait until the membership is confirmed.</p>
    `;
    FORM.style.display = 'none';
    showMessage('is-warning', `
      <p>We cannot offer the free member registration form yet.</p>
      <div class="mum2026-actions">
        <a class="mum2026-button" href="${links.membership}">Become a Member</a>
        <a class="mum2026-button-secondary" href="${links.nonMember}">Continue as Non-Member</a>
        <button class="mum2026-button-secondary" type="button" id="contact-support-button">Contact us</button>
      </div>
    `);

    const contactButton = document.getElementById('contact-support-button');
    if (contactButton) {
      contactButton.addEventListener('click', async () => {
        contactButton.disabled = true;
        contactButton.textContent = 'Sending...';

        try {
          await sendSupportRequest({
            page: 'member-registration',
            lookupMemberStatus: lookup?.memberStatus || null,
            lookupMembershipType: lookup?.membershipType || null,
            lookupOrganization: lookup?.organization || null,
            lookupMembershipValidUntil: lookup?.membershipValidUntil || null,
            lookupRegistrationStatus: registrationStatus,
            lookupRegistrationFinalized: registrationFinalized,
          });

          showMessage('is-success', `
            <strong>Thanks. We have notified the MATSim Association admins.</strong>
            <p class="mum2026-note">We will review the membership record and follow up if needed.</p>
            <div class="mum2026-actions">
              <a class="mum2026-button" href="${links.membership}">Become a Member</a>
              <a class="mum2026-button-secondary" href="${links.nonMember}">Continue as Non-Member</a>
            </div>
          `);
        } catch (error) {
          showMessage('is-error', `<strong>Could not contact us.</strong><p>${error.message || 'Please try again later.'}</p>`);
        }
      });
    }
  }

  function renderRegisteredLookup() {
    const links = activeLinks(identity.email);
    SUMMARY.innerHTML = `
      <strong>You are already registered for MUM2026.</strong>
      <p class="mum2026-note">${registrationFinalized ? `Registration is final for catering as of ${FINALIZATION_LABEL}.` : `You can de-register until ${FINALIZATION_LABEL}. After that date we consider attendance final for catering.`}</p>
    `;
    FORM.style.display = 'none';
    showMessage(registrationFinalized ? 'is-warning' : 'is-success', `
      <p>${registrationFinalized ? 'Your registration is already final and cannot be changed online.' : 'If you no longer plan to attend, you can de-register here.'}</p>
      <div class="mum2026-actions">
        ${registrationFinalized ? '' : '<button class="mum2026-button" type="button" id="deregister-button">De-register</button>'}
        <a class="mum2026-button-secondary" href="${links.membership}">Membership page</a>
      </div>
    `);

    const deregisterButton = document.getElementById('deregister-button');
    if (deregisterButton) {
      deregisterButton.addEventListener('click', async () => {
        if (!window.confirm('Do you want to de-register from MUM2026?')) {
          return;
        }

        deregisterButton.disabled = true;
        deregisterButton.textContent = 'De-registering...';

        try {
          const response = await fetch(`${API_BASE}/cancel-registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: identity.name,
              email: identity.email,
              institution: INSTITUTION.value.trim(),
            }),
          });
          const result = await response.json();

          if (!response.ok) {
            showMessage('is-error', `
              <strong>Could not cancel your registration.</strong>
              <p>${result.error || 'Please try again later.'}</p>
            `);
            return;
          }

          setStoredLookupResult({
            ...(lookup || {}),
            registrationStatus: 'cancelled',
            eventRegistrationStatus: 'cancelled',
            registrationFinalized: false,
          });

          SUMMARY.innerHTML = `
            <strong>Your MUM2026 registration has been cancelled.</strong>
            <p class="mum2026-note">You can return to the status check if you want to register again before ${FINALIZATION_LABEL}.</p>
          `;
          showMessage('is-warning', `
            <p>Your registration has been removed from the attendee list.</p>
            <div class="mum2026-actions">
              <a class="mum2026-button" href="/conferences/mum2026/register/">Back to Status Check</a>
            </div>
          `);
        } catch {
          showMessage('is-error', '<strong>Network error.</strong><p>Please try again in a moment.</p>');
        } finally {
          deregisterButton.disabled = false;
          deregisterButton.textContent = 'De-register';
        }
      });
    }
  }

  function renderMemberForm() {
    SUMMARY.innerHTML = `
      <strong>Thank you for supporting the MATSim Association.</strong>
      <p class="mum2026-note">Your membership includes free attendance to MUM2026.</p>
      <p class="mum2026-note">Registration can be changed until ${FINALIZATION_LABEL}. After that, we consider it final for catering.</p>
    `;
    FORM.style.display = 'grid';
    STATUS_BOX.style.display = 'none';
  }

  if (!identity.email) {
    renderLookupRequired();
  } else if (!lookup) {
    renderLookupRequired();
  } else if (!lookupIsMember) {
    renderNonActiveLookup();
  } else if (registrationStatus === 'registered') {
    renderRegisteredLookup();
  } else {
    renderMemberForm();
  }

  FORM.addEventListener('submit', async (event) => {
    event.preventDefault();
    const attendanceConfirmed = document.getElementById('attendanceConfirmed').checked;
    if (!attendanceConfirmed) {
      showMessage('is-error', '<strong>Please confirm that you will attend MUM2026.</strong>');
      return;
    }

    const payload = {
      ...identity,
      institution: INSTITUTION.value.trim(),
      attendanceConfirmed: true,
    };

    setStoredIdentity({ ...identity, institution: payload.institution });
    const submitButton = FORM.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    try {
      const response = await fetch(`${API_BASE}/register-member`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        showMessage('is-error', `
          <strong>Could not save your registration.</strong>
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
      });

      window.location.href = `${COMPLETION_URL}?type=member&status=registered&registrationId=${encodeURIComponent(result.registrationId || '')}&email=${encodeURIComponent(identity.email)}`;
    } catch {
      showMessage('is-error', '<strong>Network error.</strong><p>Please try again in a moment.</p>');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Confirm Registration';
    }
  });
</script>
