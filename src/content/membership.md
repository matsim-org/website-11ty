---
title: Membership Signup
layout: page
---

<style>
    /* specific styles for the response messages to keep them clean */
    .response-box {
        padding: 2rem;
        border-radius: 8px;
        margin-top: 1rem;
        border: 1px solid #ccc;
    }
    .response-success {
        background-color: #f0fff4; /* light green */
        border-color: #c6f6d5;
        color: #2f855a;
    }
    .response-payment {
        background-color: #ebf8ff; /* light blue */
        border-color: #bee3f8;
        color: #2c5282;
    }
    .security-warning {
        background-color: #fffaf0; /* light orange */
        border-left: 4px solid #ed8936;
        padding: 1rem;
        margin: 1rem 0;
        color: #744210;
        font-size: 0.95rem;
    }
    .pay-button {
        display: inline-block;
        background-color: #3182ce;
        color: white;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 10px;
    }
    .pay-button:hover {
        background-color: #2b6cb0;
        color: white;
        text-decoration: none;
    }
    .invoice-ref {
        font-family: monospace;
        background: #edf2f7;
        padding: 2px 6px;
        border-radius: 4px;
    }
</style>

<div id="membership-form-container">
    <h2>MATSim Membership Signup</h2>
    <form id="membership-form">
        <label for="name">Full Name*</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email*</label>
        <input type="email" id="email" name="email" required>

        <label for="email_confirm">Confirm Email*</label>
        <input type="email" id="email_confirm" name="email_confirm" required>

        <label for="address">Full Postal Address*</label>
        <textarea id="address" name="address" required></textarea>

        <label for="country">Country*</label>
        <input type="text" id="country" name="country" required>

        <label for="membership_type">Membership Type*</label>
        <select id="membership_type" name="membership_type" required>
            <option value="Individual">Individual (120 CHF)</option>
            <option value="Small Team">Small Team (1000 CHF)</option>
            <option value="Large Team">Large Team (2500 CHF)</option>
        </select>

        <label for="payment_method">Payment Method*</label>
        <select id="payment_method" name="payment_method" required>
            <option value="online">Online (Credit Card, etc.)</option>
            <option value="bank">Bank Transfer</option>
        </select>

        <hr>

        <label for="organization">Organization</label>
        <input type="text" id="organization" name="organization">

        <label for="institute">Institute</label>
        <input type="text" id="institute" name="institute">

        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone">

        <label for="org_type">Organization Type</label>
        <input type="text" id="org_type" name="org_type" placeholder="e.g., Academic, Commercial">

        <label for="member_list">Public Member List</label>
        <select id="member_list" name="member_list">
            <option value="true">Yes, list my name</option>
            <option value="false">No, keep my membership private</option>
        </select>
        
        <label for="vat_number">VAT Number</label>
        <input type="text" id="vat_number" name="vat_number">

        <label for="custom_notes">Custom Notes for Invoice</label>
        <textarea id="custom_notes" name="custom_notes"></textarea>

        <label for="comments">Additional Comments</label>
        <textarea id="comments" name="comments"></textarea>

        <button type="submit">Submit</button>
    </form>
    
    <div id="form-response"></div>
</div>

<script>
    const form = document.getElementById('membership-form');
    const formResponse = document.getElementById('form-response');
    const submitBtn = form.querySelector('button[type="submit"]');

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
            formResponse.innerHTML = '<p style="color: red;">Emails do not match.</p>';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
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
                    // Instead of redirecting, we show a confirmation with a link
                    formResponse.innerHTML = `
                        <div class="response-box response-payment">
                            <h3>Signup Successful</h3>
                            <p>Thank you! Your application has been registered.</p>
                            <p><strong>Invoice Number:</strong> <span class="invoice-ref">${result.invoiceNumber}</span></p>
                            
                            <div class="security-warning">
                                <strong>⚠️ Security Check:</strong><br>
                                You are about to be redirected to our payment partner.<br>
                                Please ensure the URL is exactly: <code>matsim.payrexx.com</code>.<br>
                                Do not follow links to any other domain.
                            </div>

                            <p>We have also sent this link and your invoice to your email address.</p>

                            <a href="${result.payrexx_url}" class="pay-button">
                                Proceed to Payment (matsim.payrexx.com) &rarr;
                            </a>
                        </div>
                    `;
                } else {
                    // === SCENARIO 2: BANK TRANSFER ===
                    formResponse.innerHTML = `
                        <div class="response-box response-success">
                            <h3>Application Received</h3>
                            <p>Thank you for your application! An invoice has been generated and sent to your email address.</p>
                            <p><strong>Invoice Number:</strong> <span class="invoice-ref">${result.invoiceNumber}</span></p>
                            <p>Please check your inbox for payment instructions.</p>
                        </div>
                    `;
                }
                
                // Scroll to the message so the user sees it
                formResponse.scrollIntoView({ behavior: 'smooth' });

            } else {
                // Backend returned an error (400, 500, 502)
                console.error('Backend Error:', result);
                formResponse.innerHTML = `<p style="color: red;">Error: ${result.error || 'Request failed'}</p>`;
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit';
            }

        } catch (error) {
            // Network or CORS error
            console.error('Network Error:', error);
            formResponse.innerHTML = '<p style="color: red;">Could not connect to the server. Please try again later.</p>';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit';
        }
    });
</script>