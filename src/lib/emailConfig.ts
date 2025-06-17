// EmailJS Configuration for CleanMax Pro Order System
//
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail recommended)
// 3. Create an email template with these variables:
//    {{customer_name}}, {{customer_phone}}, {{delivery_address}},
//    {{package_type}}, {{package_price}}, {{payment_method}},
//    {{additional_notes}}, {{order_date}}, {{order_time}}
// 4. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  serviceId: "service_7frndf5", // ✅ Your actual EmailJS service ID
  templateId: "template_i3dcuml", // ✅ Your actual EmailJS template ID
  publicKey: "616UcV5M_5HjSDiY5", // ✅ Your actual EmailJS public key
};

// Email template example for EmailJS:
/*
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
*/

export const sendOrderEmail = async (orderData: any) => {
  // This function can be used to send emails via EmailJS
  // Import emailjs from '@emailjs/browser' and use this function

  const templateParams = {
    to_email: "dlecomails@gmail.com",
    ...orderData,
  };

  // Example usage:
  // return emailjs.send(
  //   EMAILJS_CONFIG.serviceId,
  //   EMAILJS_CONFIG.templateId,
  //   templateParams,
  //   EMAILJS_CONFIG.publicKey
  // );
};
