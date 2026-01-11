---
title: Membership Signup
layout: page
---

<style>
    /* --- General Page Layout --- */
    .signup-container {
        max-width: 800px; /* Slightly narrower for better readability on single col */
        margin: 0 auto;
        padding: 2rem 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .signup-intro {
        margin-bottom: 2rem;
        line-height: 1.6;
        color: #2d3748;
    }

    /* --- Info Cards (Process & Pricing) --- */
    /* We keep this as a grid because it displays static content, not form inputs */
    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 3rem;
    }
    
    .info-card {
        background: #f7fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1.5rem;
    }

    .info-card h3 {
        margin-top: 0;
        color: #2c5282;
        border-bottom: 2px solid #bee3f8;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }

    .pricing-list, .process-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .pricing-list li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        border-bottom: 1px dashed #cbd5e0;
        padding-bottom: 0.25rem;
    }
    
    .process-list li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
    }
    
    .process-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #38a169;
        font-weight: bold;
    }

    /* --- Form Styling --- */
    #membership-form-container {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 2rem;
    }

    .form-section {
        margin-bottom: 2.5rem;
    }

    .section-title {
        font-weight: bold;
        font-size: 1.2rem;
        color: #2d3748;
        margin: 0 0 1.5rem 0;
        border-bottom: 1px solid #edf2f7;
        padding-bottom: 0.5rem;
    }

    /* SINGLE COLUMN LAYOUT: Flex column ensures perfect stacking */
    .form-stack {
        display: flex;
        flex-direction: column;
        gap: 1.5rem; /* Consistent spacing between every field */
    }

    .form-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
        color: #4a5568;
    }

    input, select, textarea {
        padding: 0.75rem;
        border: 1px solid #cbd5e0;
        border-radius: 4px;
        font-size: 1rem;
        transition: border-color 0.2s;
        background-color: #fff;
        width: 100%;
        box-sizing: border-box; 
    }

    input:focus, select:focus, textarea:focus {
        border-color: #3182ce;
        outline: none;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
    }

    button[type="submit"] {
        background-color: #2b6cb0;
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 1rem 2rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.2s;
        margin-top: 1rem;
    }

    button[type="submit"]:hover {
        background-color: #2c5282;
    }
    
    button:disabled {
        background-color: #a0aec0;
        cursor: not-allowed;
    }

    /* --- Response Messages --- */
    .response-box {
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 2rem;
        border: 1px solid #ccc;
    }
    .response-success { background: #f0fff4; border-color: #c6f6d5; color: #2f855a; }
    .response-payment { background: #ebf8ff; border-color: #bee3f8; color: #2c5282; }
    .security-warning {
        background: #fffaf0;
        border-left: 4px solid #ed8936;
        padding: 1rem;
        margin: 1rem 0;
        color: #744210;
        font-size: 0.9rem;
    }
    .pay-button {
        display: inline-block;
        background: #3182ce;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
    }
    .pay-button:hover { background: #2c5282; color: white; text-decoration: none; }
    .invoice-ref { font-family: monospace; background: #edf2f7; padding: 2px 6px; border-radius: 4px; font-weight: bold; }

    /* Mobile tweak */
    @media (max-width: 768px) {
        .info-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="signup-container">

    <div class="signup-intro">
        <h1>MATSim Association Membership</h1>
        <p>Join the MATSim community to support the development of the framework and gain voting rights in the association.</p>
        
        <div class="info-grid">
            <div class="info-card">
                <h3>Membership Options</h3>
                <ul class="pricing-list">
                    <li><span>Individual</span> <strong>120 CHF</strong></li>
                    <li><span>Small Team (Organization)</span> <strong>1000 CHF</strong></li>
                    <li><span>Large Team (Organization)</span> <strong>2500 CHF</strong></li>
                </ul>
                <p style="font-size: 0.85rem; color: #718096; margin-top: 1rem;">
                    <em>* Membership fees are not subject to VAT.</em>
                </p>
            </div>
            <div class="info-card">
                <h3>How it Works</h3>
                <ul class="process-list">
                    <li>Fill out the form below.</li>
                    <li>Choose <strong>Online Payment</strong> for instant credit card processing via Payrexx.</li>
                    <li>Choose <strong>Bank Transfer</strong> to receive an invoice via email.</li>
                    <li>Receive confirmation and invoice PDF immediately.</li>
                </ul>
            </div>
        </div>
    </div>

    <div id="membership-form-container">
        <form id="membership-form">
            
            <div class="form-section">
                <div class="section-title">1. Contact Information</div>
                <div class="form-stack">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required placeholder="Jane Doe">
                    </div>

                    <div class="form-group">
                        <label for="country">Country *</label>
                        <input type="text" id="country" name="country" required placeholder="Switzerland">
                    </div>

                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required placeholder="jane@example.com">
                    </div>

                    <div class="form-group">
                        <label for="email_confirm">Confirm Email *</label>
                        <input type="email" id="email_confirm" name="email_confirm" required>
                    </div>

                    <div class="form-group">
                        <label for="address">Full Postal Address (for Invoice) *</label>
                        <textarea id="address" name="address" rows="3" required placeholder="Institute for Transport Planning&#10;University Name&#10;Street 123&#10;8000 City"></textarea>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <div class="section-title">2. Membership Details</div>
                <div class="form-stack">
                    <div class="form-group">
                        <label for="membership_type">Membership Tier *</label>
                        <select id="membership_type" name="membership_type" required>
                            <option value="" disabled selected>Select a tier...</option>
                            <option value="Individual">Individual (120 CHF)</option>
                            <option value="Small Team">Small Team (1000 CHF)</option>
                            <option value="Large Team">Large Team (2500 CHF)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="payment_method">Payment Method *</label>
                        <select id="payment_method" name="payment_method" required>
                            <option value="" disabled selected>Select payment method...</option>
                            <option value="online">Online (Credit Card, TWINT, etc.)</option>
                            <option value="bank">Bank Transfer (Invoice)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="organization">Organization Name</label>
                        <input type="text" id="organization" name="organization">
                    </div>
                    
                     <div class="form-group">
                        <label for="org_type">Organization Type</label>
                        <input type="text" id="org_type" name="org_type" placeholder="e.g., Academic, Commercial, NGO">
                    </div>

                    <div class="form-group">
                        <label for="institute">Institute / Department</label>
                        <input type="text" id="institute" name="institute">
                    </div>
                    
                    <div class="form-group">
                        <label for="vat_number">VAT Number (Optional)</label>
                        <input type="text" id="vat_number" name="vat_number" placeholder="e.g. CHE-123.456.789">
                    </div>

                    <div class="form-group">
                        <label for="member_list">Public Member List</label>
                        <select id="member_list" name="member_list">
                            <option value="true">Yes, list my name / organization on matsim.org</option>
                            <option value="false">No, keep my membership private</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-section">
                <div class="section-title">3. Additional Notes</div>
                <div class="form-stack">
                    <div class="form-group">
                        <label for="custom_notes">Notes for Invoice (PO Number, Ref, etc.)</label>
                        <textarea id="custom_notes" name="custom_notes" rows="2"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="comments">General Comments</label>
                        <textarea id="comments" name="comments" rows="2"></textarea>
                    </div>
                </div>
            </div>

            <button type="submit">Complete Signup</button>
        </form>
        
        <div id="form-response"></div>
    </div>
</div>

<script>
    const form = document.getElementById('membership-form');
    const formResponse = document.getElementById('form-response');
    const submitBtn = form.querySelector('button[type="submit"]');

    // ✅ Using the Cloud Run URL from your working curl test
    const API_URL = 'https://membershipsignup-4lr3qlg7ya-oa.a.run.app';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // 1. Reset UI
        formResponse.innerHTML = ''; 
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 2. Client-side Validation
        if (data.email !== data.email_confirm) {
            formResponse.innerHTML = '<p style="color: #e53e3e; background: #fff5f5; padding: 1rem; border-radius: 4px;">Error: Email addresses do not match.</p>';
            formResponse.scrollIntoView({ behavior: 'smooth' });
            submitBtn.disabled = false;
            submitBtn.textContent = 'Complete Signup';
            return;
        }

        try {
            // 3. Send Request
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // 4. Handle Response
            if (response.ok) {
                // Hide the form on success
                form.style.display = 'none';

                if (result.payrexx_url) {
                    // === SCENARIO 1: ONLINE PAYMENT ===
                    formResponse.innerHTML = `
                        <div class="response-box response-payment">
                            <h3 style="margin-top:0;">Signup Successful</h3>
                            <p>Thank you! Your application has been registered.</p>
                            <p><strong>Invoice Number:</strong> <span class="invoice-ref">${result.invoiceNumber}</span></p>
                            
                            <div class="security-warning">
                                <strong>⚠️ Security Check:</strong><br>
                                You are about to be redirected to our payment partner.<br>
                                Please ensure the URL is exactly: <code>matsim.payrexx.com</code>.<br>
                                Do not follow links to any other domain.
                            </div>

                            <p>We have also sent this link and your invoice to <strong>${data.email}</strong>.</p>

                            <a href="${result.payrexx_url}" class="pay-button">
                                Proceed to Payment (matsim.payrexx.com) &rarr;
                            </a>
                        </div>
                    `;
                } else {
                    // === SCENARIO 2: BANK TRANSFER ===
                    formResponse.innerHTML = `
                        <div class="response-box response-success">
                            <h3 style="margin-top:0;">Application Received</h3>
                            <p>Thank you for your application! An invoice has been generated.</p>
                            <p><strong>Invoice Number:</strong> <span class="invoice-ref">${result.invoiceNumber}</span></p>
                            <p>We have sent the PDF invoice and payment instructions to <strong>${data.email}</strong>.</p>
                            <p>Please check your spam folder if you do not see it within a few minutes.</p>
                        </div>
                    `;
                }
                
                formResponse.scrollIntoView({ behavior: 'smooth' });

            } else {
                // Backend returned an error
                console.error('Backend Error:', result);
                formResponse.innerHTML = `<p style="color: #c53030; background: #fff5f5; padding: 1rem; border: 1px solid #fc8181; border-radius: 4px;">Error: ${result.error || 'Request failed'}</p>`;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Complete Signup';
            }

        } catch (error) {
            console.error('Network Error:', error);
            formResponse.innerHTML = '<p style="color: #c53030; background: #fff5f5; padding: 1rem; border: 1px solid #fc8181; border-radius: 4px;">Could not connect to the server. Please try again later.</p>';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Complete Signup';
        }
    });
</script>