# EmailJS Setup for CleanMax Pro Order System

## Quick Setup Guide

### 1. Create EmailJS Account

- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service

- Go to Email Services
- Click "Add New Service"
- Choose "Gmail" (recommended)
- Connect your Gmail account
- Name it "CleanMax Pro Orders"
- Note the Service ID (e.g., `service_xyz123`)

### 3. Create Email Template

- Go to Email Templates
- Click "Create New Template"
- Use this template:

```
Subject: New CleanMax Pro Order - {{customer_name}}

New Order Received!
==================

Customer Details:
- Name: {{customer_name}}
- Phone: {{customer_phone}}
- Address: {{delivery_address}}

Order Details:
- Package: {{package_type}}
- Price: {{package_price}}
- Payment Method: {{payment_method}}
- Additional Notes: {{additional_notes}}

Order Information:
- Date: {{order_date}}
- Time: {{order_time}}

This order was automatically generated from the CleanMax Pro website.
Please contact the customer within 24 hours to confirm delivery details.

Best regards,
CleanMax Pro Order System
```

- Set "To Email" to: `dlecomails@gmail.com`
- Save and note the Template ID (e.g., `template_abc456`)

### 4. Get Public Key

- Go to Account > API Keys
- Copy your Public Key (e.g., `user_789xyz`)

### 5. Update Configuration

Edit `src/lib/emailConfig.ts` and replace:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: "your_service_id_here", // From step 2
  templateId: "your_template_id_here", // From step 3
  publicKey: "your_public_key_here", // From step 4
};
```

### 6. Test the System

- Fill out the order form on your website
- Check if emails arrive at dlecomails@gmail.com
- Verify all order details are included

## Alternative: Simple Email Service

If you prefer not to use EmailJS, you can set up a simple backend email service:

1. Use services like Netlify Functions, Vercel API routes, or a simple Node.js server
2. Use nodemailer or similar library to send emails
3. Update the fetch endpoint in the OrderForm component

## Troubleshooting

**Emails not sending?**

- Check EmailJS service is connected
- Verify template variables match exactly
- Check browser console for errors
- Ensure public key is correct

**Wrong email format?**

- Verify template in EmailJS dashboard
- Check all {{variable}} names match
- Test template with EmailJS test feature

**Rate limiting?**

- EmailJS free plan: 200 emails/month
- Upgrade to paid plan if needed
- Consider backend email service for high volume

## Security Notes

- EmailJS public key is safe to expose in frontend
- Do not include private/secret keys in frontend code
- Consider backend email service for sensitive data
- Monitor EmailJS usage to prevent abuse
