---
title: Register for MUM2026
layout: page
templateEngineOverride: njk
permalink: /conferences/mum2026/register/
---

<style>
  .mum2026-shell {
    display: grid;
    gap: 1.5rem;
    max-width: 880px;
  }

  .mum2026-lead {
    font-size: 1.08rem;
    line-height: 1.7;
    color: var(--color-fg-dark-2);
  }

  .mum2026-card {
    background: #fff;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    box-shadow: 0 18px 44px rgba(13, 43, 88, 0.08);
    padding: 1.5rem;
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

  .mum2026-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
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

  .mum2026-button:hover,
  .mum2026-button-secondary:hover {
    text-decoration: none;
  }

  .mum2026-status {
    margin-top: 1.25rem;
    padding: 1rem 1.1rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-matsim-light-1);
    background: var(--color-fg-light-2);
  }

  .mum2026-status.is-success {
    background: var(--color-matsim-accent-1-light);
    border-color: var(--color-matsim-accent-1);
  }

  .mum2026-status.is-warning {
    background: #fff8e8;
    border-color: #e8c76a;
  }

  .mum2026-status.is-error {
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

  .mum2026-note {
    color: var(--color-fg-dark-2);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 720px) {
    .mum2026-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="mum2026-shell">
  <div class="mum2026-lead">
    <p>The MATSim User Meeting is free for current MATSim Association members.</p>
    <p>Use this form to check your membership status first. If you are not yet a member, you can still attend as a non-member or join the Association and come for free.</p>
  </div>

  <div class="mum2026-card">
    <form id="membership-check-form">
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

      <div class="mum2026-field" style="margin-top:1rem;">
        <label for="institution">Institution (optional)</label>
        <input id="institution" name="institution" type="text" autocomplete="organization" placeholder="ETH Zurich">
      </div>

      <div class="mum2026-field" style="margin-top:1rem;">
        <label>Verification</label>
        <div class="recaptcha-wrapper">
          <div id="mum2026-lookup-recaptcha"></div>
          <div id="recaptcha-fallback" class="recaptcha-fallback">
            CAPTCHA could not be loaded. Please reload the page or disable blockers for Google reCAPTCHA.
          </div>
        </div>
      </div>

      <div class="mum2026-actions">
        <button class="mum2026-button" type="submit">Check Membership Status</button>
        <a class="mum2026-button-secondary" href="/association/membership/?source=mum2026">Become a Member Instead</a>
      </div>
    </form>

    <div id="status-box" class="mum2026-status" style="display:none;"></div>
  </div>

  <p class="mum2026-note">
    If we cannot find an active membership, we will still give you the option to continue as a non-member for CHF 100.
    If you recently paid membership dues, you may need to come back here once the membership is active.
  </p>
</div>

<script>
  const API_BASE = {{ meta.mum2026.apiBaseUrl | toJson | safe }};
  const MEMBERSHIP_URL = {{ meta.mum2026.membershipUrl | toJson | safe }};
  const MEMBER_REGISTRATION_URL = '/conferences/mum2026/member-registration/';
  const NON_MEMBER_REGISTRATION_URL = '/conferences/mum2026/nonmember-registration/';
  const STORAGE_KEY = 'mum2026.registration.identity';
  const LOOKUP_RESULT_KEY = 'mum2026.registration.lookupResult';
  const SUPPORT_ENDPOINT = `${API_BASE}/report-lookup-issue`;
  const RECAPTCHA_SITE_KEY = {{ meta.membership.recaptchaSiteKey | toJson | safe }};

  const form = document.getElementById('membership-check-form');
  const statusBox = document.getElementById('status-box');
  const submitButton = form.querySelector('button[type="submit"]');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const institutionInput = document.getElementById('institution');
  const finalizationLabel = 'September 14, 2026';
  let recaptchaWidgetId = null;

  function getStoredIdentity() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function getStoredLookupResult() {
    try {
      const raw = sessionStorage.getItem(LOOKUP_RESULT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function setStoredIdentity(value) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  }

  function setStoredLookupResult(value) {
    sessionStorage.setItem(LOOKUP_RESULT_KEY, JSON.stringify(value));
  }

  function renderStatus(kind, html) {
    statusBox.className = `mum2026-status ${kind}`;
    statusBox.innerHTML = html;
    statusBox.style.display = 'block';
    statusBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showRecaptchaFallback() {
    const fallback = document.getElementById('recaptcha-fallback');
    if (fallback) {
      fallback.style.display = 'block';
    }
  }

  function buildContinueLinks(email, institution) {
    const params = new URLSearchParams();
    params.set('source', 'mum2026');
    if (email) params.set('email', email);
    if (institution) params.set('institution', institution);
    const query = params.toString();

    return {
      member: `${MEMBER_REGISTRATION_URL}?${query}`,
      nonMember: `${NON_MEMBER_REGISTRATION_URL}?${query}`,
      membership: `${MEMBERSHIP_URL}${MEMBERSHIP_URL.includes('?') ? '&' : '?'}source=mum2026${email ? `&email=${encodeURIComponent(email)}` : ''}`,
    };
  }

  async function sendSupportRequest(context) {
    const payload = {
      ...context,
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      institution: institutionInput.value.trim(),
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

  window.onMum2026LookupRecaptchaLoad = function () {
    if (!window.grecaptcha || typeof window.grecaptcha.render !== 'function') {
      showRecaptchaFallback();
      return;
    }

    try {
      recaptchaWidgetId = window.grecaptcha.render('mum2026-lookup-recaptcha', {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    } catch (error) {
      console.error('Failed to render MUM2026 lookup reCAPTCHA:', error);
      showRecaptchaFallback();
    }
  };

  if (!document.getElementById('mum2026-lookup-recaptcha-script')) {
    const recaptchaScript = document.createElement('script');
    recaptchaScript.id = 'mum2026-lookup-recaptcha-script';
    recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?onload=onMum2026LookupRecaptchaLoad&render=explicit';
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.head.appendChild(recaptchaScript);
  }

  const storedIdentity = getStoredIdentity();
  if (storedIdentity) {
    if (storedIdentity.name && !nameInput.value) nameInput.value = storedIdentity.name;
    if (storedIdentity.email && !emailInput.value) emailInput.value = storedIdentity.email;
    if (storedIdentity.institution && !institutionInput.value) institutionInput.value = storedIdentity.institution;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusBox.style.display = 'none';
    submitButton.disabled = true;
    submitButton.textContent = 'Checking...';

    const identity = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      institution: institutionInput.value.trim(),
    };

    setStoredIdentity(identity);

    try {
      if (!window.grecaptcha || typeof window.grecaptcha.getResponse !== 'function' || recaptchaWidgetId === null) {
        renderStatus('is-error', `<strong>Security verification is not ready.</strong><p>Please reload the page and try again.</p>`);
        return;
      }

      const recaptchaToken = window.grecaptcha.getResponse(recaptchaWidgetId);
      if (!recaptchaToken) {
        renderStatus('is-error', `<strong>Please complete the CAPTCHA verification.</strong>`);
        return;
      }

      const response = await fetch(`${API_BASE}/check-membership`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...identity,
          recaptchaToken,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        renderStatus('is-error', `<strong>Could not check membership.</strong><p>${result.error || 'Please try again later.'}</p>`);
        return;
      }

      setStoredLookupResult(result);
      setStoredIdentity({ ...identity, ...result });
      const links = buildContinueLinks(identity.email, identity.institution);

      const registrationStatus = result.registrationStatus || result.eventRegistrationStatus || null;

      if (result.memberStatus === 'member' || result.memberStatus === 'organization-member') {
        if (registrationStatus === 'registered') {
          window.location.href = `/conferences/mum2026/member-registration/?source=mum2026&email=${encodeURIComponent(identity.email)}${identity.institution ? `&institution=${encodeURIComponent(identity.institution)}` : ''}`;
          return;
        }

        window.location.href = `${links.member}`;
        return;
      }

      if (result.memberStatus === 'expired') {
        renderStatus('is-warning', `
          <strong>We found a previous membership for this email address, but it does not look active right now.</strong>
          <p class="mum2026-note">If you recently renewed, you can try again later. If you would like to renew, the membership page is the quickest way forward.</p>
          <div class="mum2026-actions">
            <a class="mum2026-button" href="${links.membership}">Renew Membership</a>
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
                page: 'register',
                lookupMemberStatus: result.memberStatus,
                lookupMembershipType: result.membershipType || null,
                lookupOrganization: result.organization || null,
                lookupMembershipValidUntil: result.membershipValidUntil || null,
                lookupRegistrationStatus: result.registrationStatus || result.eventRegistrationStatus || null,
                lookupRegistrationFinalized: Boolean(result.registrationFinalized),
              });

              renderStatus('is-success', `
                <strong>Thanks. We have notified the MATSim Association admins.</strong>
                <p class="mum2026-note">We will check whether your membership record needs a manual review and follow up if necessary.</p>
                <div class="mum2026-actions">
                  <a class="mum2026-button" href="${links.membership}">Renew Membership</a>
                  <a class="mum2026-button-secondary" href="${links.nonMember}">Continue as Non-Member</a>
                </div>
              `);
            } catch (error) {
              renderStatus('is-error', `<strong>Could not contact us.</strong><p>${error.message || 'Please try again later.'}</p>`);
            }
          });
        }
        return;
      }

      renderStatus('is-success', `
        <strong>We could not find an active MATSim Association membership for this email address.</strong>
        <p class="mum2026-note">MATSim Association members attend MUM2026 free of charge as part of their membership benefits. Non-members are also very welcome.</p>
        <p class="mum2026-note">Registration changes can be made until ${finalizationLabel}. After that we consider attendance final for catering.</p>
        <div class="mum2026-actions">
          <a class="mum2026-button" href="${links.membership}">Become a Member and Attend Free</a>
          <a class="mum2026-button-secondary" href="${links.nonMember}">Continue as Non-Member (CHF 100)</a>
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
              page: 'register',
              lookupMemberStatus: result.memberStatus,
              lookupMembershipType: result.membershipType || null,
              lookupOrganization: result.organization || null,
              lookupMembershipValidUntil: result.membershipValidUntil || null,
              lookupRegistrationStatus: result.registrationStatus || result.eventRegistrationStatus || null,
              lookupRegistrationFinalized: Boolean(result.registrationFinalized),
            });

            renderStatus('is-success', `
              <strong>Thanks. We have notified the MATSim Association admins.</strong>
              <p class="mum2026-note">We will check whether your membership record needs a manual review and follow up if necessary.</p>
              <div class="mum2026-actions">
                <a class="mum2026-button" href="${links.membership}">Become a Member and Attend Free</a>
                <a class="mum2026-button-secondary" href="${links.nonMember}">Continue as Non-Member (CHF 100)</a>
              </div>
            `);
          } catch (error) {
            renderStatus('is-error', `<strong>Could not contact us.</strong><p>${error.message || 'Please try again later.'}</p>`);
          }
        });
      }
    } catch (error) {
      renderStatus('is-error', `<strong>Network error.</strong><p>Please try again in a moment.</p>`);
    } finally {
      if (window.grecaptcha && typeof window.grecaptcha.reset === 'function' && recaptchaWidgetId !== null) {
        window.grecaptcha.reset(recaptchaWidgetId);
      }
      submitButton.disabled = false;
      submitButton.textContent = 'Check Membership Status';
    }
  });
</script>
