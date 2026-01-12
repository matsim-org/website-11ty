---
title: Membership Signup
layout: page
---

<style>
    /* --- General Page Layout --- */
    .signup-container {
        width: 100%;
        margin: 0;
        padding: 1rem 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .signup-intro {
        margin-bottom: 1.5rem;
        line-height: 1.6;
        color: var(--color-matsim-dark-2);
    }

    /* --- Info Cards (Process & Pricing) --- */
    .info-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }
    
    .info-card {
        background: var(--color-fg-light-2); /* using light grey var */
        border: 1px solid var(--color-matsim-light-1);
        border-radius: var(--border-radius);
        padding: 1.5rem;
    }

    .info-card h3 {
        margin-top: 0;
        color: var(--color-matsim-dark-1);
        border-bottom: 2px solid var(--color-matsim-light-1);
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
        border-bottom: 1px dashed var(--color-matsim-light-1);
        padding-bottom: 0.25rem;
        color: var(--color-fg-dark-2);
    }
    
    .process-list li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.75rem;
        color: var(--color-fg-dark-2);
    }
    
    .process-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--color-matsim-accent-1-dark); /* Darker green for visibility */
        font-weight: bold;
    }

    /* --- Form Styling --- */
    #membership-form-container {
        background: #ffffff; /* Keeping pure white for form contrast */
        border: 1px solid var(--color-matsim-light-1);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); /* kept subtle rgba for softness */
        border-radius: var(--border-radius);
        padding: 2rem;
    }

    .form-section {
        margin-bottom: 1.5rem;
    }

    .section-title {
        font-weight: bold;
        font-size: 1.2rem;
        color: var(--color-matsim-dark-2);
        margin: 0 0 1rem 0;
        border-bottom: 1px solid var(--color-matsim-light-1-bg);
        padding-bottom: 0.5rem;
    }

    /* SINGLE COLUMN LAYOUT */
    .form-stack {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    label {
        font-weight: 600;
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
        color: var(--color-matsim-dark-2);
    }

    input, select, textarea {
        padding: 0.6rem 0.75rem;
        border: 1px solid var(--color-matsim-light-1);
        border-radius: var(--border-radius);
        font-size: 1rem;
        transition: border-color var(--transition-duration) var(--transition-timing);
        background-color: #fff;
        width: 100%;
        box-sizing: border-box;
        color: var(--color-fg-dark-2);
    }

    input:focus, select:focus, textarea:focus {
        border-color: var(--color-matsim-medium);
        outline: none;
        box-shadow: 0 0 0 3px var(--color-matsim-light-1); /* Subtle ring effect */
    }

    button[type="submit"] {
        background-color: var(--color-matsim-accent-1);
        color: white;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 1rem 2rem;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        width: 100%;
        transition: background-color var(--transition-duration) var(--transition-timing);
        margin-top: 0.5rem;
    }

    button[type="submit"]:hover {
        background-color: var(--color-matsim-accent-1-dark);
    }
    
    button:disabled {
        background-color: var(--color-matsim-light-1);
        cursor: not-allowed;
    }

    /* --- Response Messages --- */
    .response-box {
        padding: 1.5rem;
        border-radius: var(--border-radius);
        margin-top: 2rem;
        border: 1px solid transparent;
    }

    .response-success { 
        background: var(--color-matsim-accent-1-light); 
        border-color: var(--color-matsim-accent-1); 
        color: var(--color-matsim-accent-1-dark); 
    }
    
    .response-payment { 
        background: var(--color-matsim-light-1-bg); 
        border-color: var(--color-matsim-light-1); 
        color: var(--color-matsim-dark-1); 
    }
    
    /* New class for Error messages to replace inline styles */
    .response-error {
        background: var(--color-matsim-accent-red-bg);
        border-color: var(--color-matsim-accent-red-light);
        color: var(--color-matsim-accent-red-dark);
    }

    .security-warning {
        background: #fff; /* Keep white to stand out inside blue box */
        border-left: 4px solid var(--color-matsim-accent-red);
        padding: 1rem;
        margin: 1rem 0;
        color: var(--color-matsim-accent-red-dark);
        font-size: 0.9rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .pay-button {
        display: inline-block;
        background: var(--color-matsim-medium);
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: var(--border-radius);
        font-weight: bold;
        margin-top: 10px;
        transition: background-color var(--transition-duration) var(--transition-timing);
    }

    .pay-button:hover { 
        background: var(--color-matsim-dark-1); 
        color: white; 
        text-decoration: none; 
    }

    .invoice-ref { 
        font-family: monospace; 
        background: #fff; 
        padding: 2px 6px; 
        border-radius: 4px; 
        font-weight: bold; 
        border: 1px solid var(--color-matsim-light-1);
        color: var(--color-matsim-dark-2);
    }

    .help-text {
        font-size: 0.85rem;
        color: #666;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }

    /* Mobile tweak */
    @media (max-width: 768px) {
        .info-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="signup-container">

    <div class="signup-intro">
        <p>Join the MATSim community to support the development of the framework and gain voting rights in the association.</p>
        <p>The MATSim Association offers a tiered membership structure designed to support researchers, startups, 
        and large organizations within the global transport simulation community. All members receive core benefits such as 
        voting rights in the Association General Assembly, free attendance at user meetings, and access to exclusive communications 
        like a quarterly newsletter. Individual members further benefit from publication listings and priority access to learning 
        materials. Organizational tiers (Small and Large Teams) expand on these perks by providing corporate visibility 
        through logo placements on the MATSim website, featured project posts on LinkedIn, and priority GitHub issue tagging to 
        facilitate development support. Large teams enjoy additional high-level engagement opportunities, including the ability 
        to host regional meetings and create dedicated showcase pages to highlight their institutional work.</p>
        <p/>
        <div class="info-grid">
            <div class="info-card">
                <h3>Membership Options</h3>
                <ul class="pricing-list">
                    <li><span>Individual</span> <strong>120 CHF</strong></li>
                    <li><span>Small Team (2-5 FTEs)</span> <strong>1000 CHF</strong></li>
                    <li><span>Large Team (6+ FTEs)</span> <strong>2500 CHF</strong></li>
                </ul>
                <p style="font-size: 0.85rem; color: var(--color-shadow); margin-top: 1rem;">
                    <em>* Membership fees are not subject to VAT.</em>
                </p>
            <a href="images/matsim-assoc-benefits.pdf" target="_blank" class="download-link">
                <span style="margin-right: 6px; font-size: 1.2em;">📥</span> 
                Download Benefits Brochure (PDF)
            </a>
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
                        <select id="membership_type" name="membership_type" required onchange="toggleTeamFields(this.value)">
                            <option value="" disabled selected>Select a tier...</option>
                            <option value="Individual">Individual (120 CHF)</option>
                            <option value="Small Team">Small Team (1000 CHF)</option>
                            <option value="Large Team">Large Team (2500 CHF)</option>
                        </select>
                    </div>

                    <div id="team-members-wrapper" style="display: none;">
                        <div class="form-group">
                            <label for="team_members">Included Team Members</label>
                            <div class="help-text">Please list names and emails of team members to be included.<br>Format: <code>Name Surname &lt;email@example.com&gt;</code> (one per line)</div>
                            <textarea id="team_members" name="team_members" rows="4" placeholder="Alice Smith <alice@example.com>&#10;Bob Jones <bob@example.com>"></textarea>
                        </div>
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
                        <div class="help-text">Max 300 characters. This text will appear on your final invoice.</div>
                        <textarea id="custom_notes" name="custom_notes" rows="3" maxlength="300"></textarea>
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

    function toggleTeamFields(tier) {
        const wrapper = document.getElementById('team-members-wrapper');
        const textarea = document.getElementById('team_members');
        if (tier === 'Small Team' || tier === 'Large Team') {
            wrapper.style.display = 'block';
        } else {
            wrapper.style.display = 'none';
            textarea.value = '';
        }
    }

    // ✅ Using the Cloud Run URL from your working curl test
    const API_URL = 'https://membershipsignup-4lr3qlg7ya-oa.a.run.app';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // 1. Reset UI
        formResponse.innerHTML = ''; 
        // Remove old classes
        formResponse.className = '';
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 2. Client-side Validation
        if (data.email !== data.email_confirm) {
            formResponse.className = 'response-box response-error';
            formResponse.innerHTML = '<h3 style="margin-top:0">Validation Error</h3><p>Email addresses do not match.</p>';
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
                    formResponse.className = 'response-box response-payment';
                    formResponse.innerHTML = `
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
                    `;
                } else {
                    // === SCENARIO 2: BANK TRANSFER ===
                    formResponse.className = 'response-box response-success';
                    formResponse.innerHTML = `
                        <h3 style="margin-top:0;">Application Received</h3>
                        <p>Thank you for your application! An invoice has been generated.</p>
                        <p><strong>Invoice Number:</strong> <span class="invoice-ref">${result.invoiceNumber}</span></p>
                        <p>We have sent the PDF invoice and payment instructions to <strong>${data.email}</strong>.</p>
                        <p>Please check your spam folder if you do not see it within a few minutes.</p>
                    `;
                }
                
                formResponse.scrollIntoView({ behavior: 'smooth' });

            } else {
                // Backend returned an error
                console.error('Backend Error:', result);
                formResponse.className = 'response-box response-error';
                formResponse.innerHTML = `<h3 style="margin-top:0">Error</h3><p>${result.error || 'Request failed'}</p>`;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Complete Signup';
            }

        } catch (error) {
            console.error('Network Error:', error);
            formResponse.className = 'response-box response-error';
            formResponse.innerHTML = '<h3 style="margin-top:0">Connection Error</h3><p>Could not connect to the server. Please try again later.</p>';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Complete Signup';
        }
    });
</script>