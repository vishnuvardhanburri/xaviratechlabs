# Email Notification Setup Guide

## Overview
This guide will help you set up email notifications for both Contact Form submissions and Career Applications using Supabase Edge Functions and Resend (or any email service).

## Prerequisites
- Supabase project set up
- Email service account (Resend, SendGrid, or Mailgun recommended)

## Option 1: Using Resend (Recommended)

### Step 1: Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Get your API key from the dashboard

### Step 2: Create Supabase Edge Functions

#### Install Supabase CLI
```bash
npm install -g supabase
supabase login
```

#### Initialize Edge Functions
```bash
cd your-project
supabase functions new send-contact-email
supabase functions new send-application-email
```

### Step 3: Configure Edge Functions

#### File: `supabase/functions/send-contact-email/index.ts`
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { name, email, subject, message } = await req.json()

    // Send email to company
    const companyEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Xavira Tech Labs <noreply@yourdomain.com>',
        to: ['xavira.group@gmail.com'],
        subject: `New Contact Form: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><small>This email was sent from Xavira Tech Labs contact form</small></p>
        `,
      }),
    })

    // Send confirmation to user
    const userEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Xavira Tech Labs <noreply@yourdomain.com>',
        to: [email],
        subject: 'Thank you for contacting Xavira Tech Labs',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We've received your message and will get back to you within 24-48 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <br>
          <p>Best regards,<br>Xavira Tech Labs Team</p>
          <hr>
          <p><small>Xavira Group: Tech Labs | xavira.group@gmail.com</small></p>
        `,
      }),
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
```

#### File: `supabase/functions/send-application-email/index.ts`
```typescript
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { 
      applicantName, 
      applicantEmail, 
      jobTitle, 
      division,
      phone,
      linkedin,
      portfolio,
      experience,
      coverLetter,
      resumeUrl
    } = await req.json()

    // Send email to company
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Xavira Tech Labs Careers <careers@yourdomain.com>',
        to: ['xavira.group@gmail.com'],
        subject: `New Application: ${jobTitle} - ${applicantName}`,
        html: `
          <h2>New Career Application Received</h2>
          
          <h3>Position Applied For</h3>
          <p><strong>Job Title:</strong> ${jobTitle}</p>
          <p><strong>Division:</strong> ${division}</p>
          
          <h3>Candidate Information</h3>
          <p><strong>Name:</strong> ${applicantName}</p>
          <p><strong>Email:</strong> ${applicantEmail}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
          <p><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
          <p><strong>Experience:</strong> ${experience}</p>
          
          <h3>Cover Letter</h3>
          <p>${coverLetter}</p>
          
          <h3>Resume</h3>
          <p><a href="${resumeUrl}">Download Resume</a></p>
          
          <hr>
          <p><small>Application submitted via Xavira Tech Labs Careers page</small></p>
        `,
      }),
    })

    // Send confirmation to applicant
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Xavira Tech Labs <careers@yourdomain.com>',
        to: [applicantEmail],
        subject: `Application Received: ${jobTitle}`,
        html: `
          <h2>Thank you for your application!</h2>
          <p>Dear ${applicantName},</p>
          <p>We've received your application for the <strong>${jobTitle}</strong> position in our ${division}.</p>
          
          <h3>What's Next?</h3>
          <ul>
            <li>Our team will review your application within 3-5 business days</li>
            <li>If your profile matches our requirements, we'll contact you for an interview</li>
            <li>You'll receive updates about your application status via email</li>
          </ul>
          
          <p>In the meantime, feel free to explore more about Xavira Tech Labs on our website.</p>
          
          <br>
          <p>Best regards,<br>
          Vishnu Vardhan Burri<br>
          CEO & Founder<br>
          Xavira Group: Tech Labs</p>
          
          <hr>
          <p><small>
            Xavira Group: Tech Labs<br>
            Email: xavira.group@gmail.com<br>
            Website: https://xaviratechlabs.com
          </small></p>
        `,
      }),
    })

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
```

### Step 4: Deploy Edge Functions
```bash
# Set environment variable
supabase secrets set RESEND_API_KEY=your_resend_api_key

# Deploy functions
supabase functions deploy send-contact-email
supabase functions deploy send-application-email
```

### Step 5: Update Your Components

The Contact and Careers components are already set up to call these endpoints. Just ensure your Supabase project URL is correct in `/lib/supabase.ts`.

## Option 2: Using Database Triggers + External Service

### Step 1: Create Database Function
```sql
-- Function to call external email service
CREATE OR REPLACE FUNCTION send_notification_webhook()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url text;
BEGIN
  webhook_url := 'https://your-email-service.com/api/send';
  
  PERFORM net.http_post(
    url := webhook_url,
    body := jsonb_build_object(
      'table', TG_TABLE_NAME,
      'operation', TG_OP,
      'data', row_to_json(NEW)
    )
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### Step 2: Create Triggers
```sql
-- Trigger for contact form submissions
CREATE TRIGGER on_contact_form_insert
AFTER INSERT ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION send_notification_webhook();

-- Trigger for career applications
CREATE TRIGGER on_career_application_insert
AFTER INSERT ON career_applications
FOR EACH ROW
EXECUTE FUNCTION send_notification_webhook();
```

## Testing

### Test Contact Form Email
```bash
curl -X POST 'https://your-project.supabase.co/functions/v1/send-contact-email' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### Test Career Application Email
```bash
curl -X POST 'https://your-project.supabase.co/functions/v1/send-application-email' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "applicantName": "John Doe",
    "applicantEmail": "john@example.com",
    "jobTitle": "Senior Developer",
    "division": "Technology"
  }'
```

## Alternative Email Services

### Using SendGrid
Replace Resend API calls with SendGrid:
```typescript
const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${SENDGRID_API_KEY}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    personalizations: [{
      to: [{ email: 'xavira.group@gmail.com' }],
    }],
    from: { email: 'noreply@yourdomain.com' },
    subject: 'Email subject',
    content: [{
      type: 'text/html',
      value: 'Email HTML content',
    }],
  }),
})
```

### Using Mailgun
```typescript
const formData = new FormData()
formData.append('from', 'Xavira Tech Labs <noreply@yourdomain.com>')
formData.append('to', 'xavira.group@gmail.com')
formData.append('subject', 'Email subject')
formData.append('html', 'Email HTML content')

const response = await fetch(
  'https://api.mailgun.net/v3/yourdomain.com/messages',
  {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`,
    },
    body: formData,
  }
)
```

## Email Templates

### Professional Email Template Structure
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #7E22CE 0%, #1E3A8A 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>XAVIRA TECH LABS</h1>
      <p>Part of Xavira Group</p>
    </div>
    <div class="content">
      <!-- Your email content here -->
    </div>
    <div class="footer">
      <p>Xavira Group: Tech Labs</p>
      <p>Email: xavira.group@gmail.com</p>
    </div>
  </div>
</body>
</html>
```

## Monitoring & Logging

### Enable Email Logs in Supabase
1. Go to Supabase Dashboard → Functions
2. View logs for each function
3. Monitor success/failure rates

### Create Log Table
```sql
CREATE TABLE email_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email_type text NOT NULL,
  recipient_email text NOT NULL,
  subject text,
  status text,
  error_message text,
  created_at timestamp with time zone DEFAULT now()
);
```

## Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check API keys are set correctly
   - Verify domain is verified in email service
   - Check Supabase function logs

2. **Emails going to spam**
   - Verify your domain with SPF/DKIM records
   - Use a custom domain instead of free email
   - Add unsubscribe link

3. **Rate limiting**
   - Implement delay between emails
   - Use email service with higher limits
   - Add retry logic

## Next Steps

1. Set up custom email domain
2. Create branded email templates
3. Implement email tracking
4. Add unsubscribe functionality
5. Set up automated email sequences

## Support

For help with setup:
- **Email**: xavira.group@gmail.com
- **CEO**: Vishnu Vardhan Burri (vishnuvardhanburri19@gmail.com)
