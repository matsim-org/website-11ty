---
title: MUM2026 Registration Complete
layout: page
templateEngineOverride: njk
permalink: /conferences/mum2026/registration-complete/
---

<style>
  .complete-shell {
    max-width: 780px;
    display: grid;
    gap: 1.25rem;
  }

  .complete-card {
    background: #fff;
    border: 1px solid var(--color-matsim-light-1);
    border-radius: var(--border-radius);
    box-shadow: 0 18px 44px rgba(13, 43, 88, 0.08);
    padding: 1.5rem;
  }

  .complete-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    background: var(--color-matsim-accent-1-light);
    border: 1px solid var(--color-matsim-accent-1);
    color: var(--color-matsim-dark-2);
    font-weight: 700;
    font-size: 0.92rem;
  }

  .complete-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .complete-button,
  .complete-button-secondary {
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

  .complete-button {
    background: var(--color-matsim-accent-1);
    color: #fff;
  }

  .complete-button-secondary {
    background: #fff;
    color: var(--color-matsim-dark-2);
    border-color: var(--color-matsim-light-1);
  }

  .complete-note {
    color: var(--color-fg-dark-2);
    line-height: 1.65;
  }
</style>

<div class="complete-shell">
  <div class="complete-card">
    <div id="status-badge" class="complete-badge">Registration received</div>
    <h2 id="heading" style="margin-top: 0.8rem;">Your MUM2026 registration is complete.</h2>
    <div id="body" class="complete-note"></div>
    <div id="actions" class="complete-actions"></div>
  </div>
</div>

<script type="module">
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'member';
  const status = params.get('status') || 'registered';
  const registrationId = params.get('registrationId') || '';
  const email = params.get('email') || '';
  const invoiceNumber = params.get('invoiceNumber') || '';
  const heading = document.getElementById('heading');
  const body = document.getElementById('body');
  const badge = document.getElementById('status-badge');
  const actions = document.getElementById('actions');

  function actionLinks() {
    return `
      <a class="complete-button" href="/conferences/mum2026/register/">Back to MUM2026 status check</a>
      <a class="complete-button-secondary" href="/conferences/mum2026/">Return to conference page</a>
    `;
  }

  if (type === 'non-member') {
    if (status === 'paid') {
      badge.textContent = 'Payment received';
      heading.textContent = 'Your non-member MUM2026 registration is complete.';
      body.innerHTML = `
        <p>Thank you. Your online payment has been confirmed and your attendance record has been stored.</p>
        ${registrationId ? `<p><strong>Registration reference:</strong> ${registrationId}</p>` : ''}
        ${invoiceNumber ? `<p><strong>Invoice number:</strong> ${invoiceNumber}</p>` : ''}
        ${email ? `<p>Confirmation will be associated with <strong>${email}</strong>.</p>` : ''}
      `;
    } else if (status === 'cancelled') {
      badge.textContent = 'Payment cancelled';
      heading.textContent = 'The payment was cancelled.';
      body.innerHTML = `
        <p>Your registration draft is still available, but the payment has not been completed yet.</p>
        ${registrationId ? `<p><strong>Registration reference:</strong> ${registrationId}</p>` : ''}
        ${invoiceNumber ? `<p><strong>Invoice number:</strong> ${invoiceNumber}</p>` : ''}
      `;
    } else if (status === 'failed') {
      badge.textContent = 'Payment failed';
      heading.textContent = 'The payment could not be completed.';
      body.innerHTML = `
        <p>Your registration has been recorded, but payment is still pending. You can try again or contact the MATSim Association if needed.</p>
        ${registrationId ? `<p><strong>Registration reference:</strong> ${registrationId}</p>` : ''}
        ${invoiceNumber ? `<p><strong>Invoice number:</strong> ${invoiceNumber}</p>` : ''}
      `;
    } else {
      badge.textContent = 'Registration pending';
      heading.textContent = 'Your non-member registration has been received.';
      body.innerHTML = `
        <p>Your attendance record is stored and the payment status is still pending.</p>
        ${registrationId ? `<p><strong>Registration reference:</strong> ${registrationId}</p>` : ''}
        ${invoiceNumber ? `<p><strong>Invoice number:</strong> ${invoiceNumber}</p>` : ''}
      `;
    }
  } else {
    badge.textContent = 'Registration confirmed';
    heading.textContent = 'Your member registration is complete.';
    body.innerHTML = `
      <p>Thank you for confirming your attendance as a MATSim Association member.</p>
      ${registrationId ? `<p><strong>Registration reference:</strong> ${registrationId}</p>` : ''}
      ${email ? `<p>We will use <strong>${email}</strong> for any follow-up about the meeting.</p>` : ''}
    `;
  }

  actions.innerHTML = actionLinks();
</script>
