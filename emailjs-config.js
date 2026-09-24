/*
  EmailJS configuration.

  This powers the "account created" notification email that gets sent
  to a user's inbox right after they sign up.

  HOW TO SET THIS UP (takes ~5 minutes):
  1) Go to https://www.emailjs.com and create a free account.
  2) Email Services -> Add New Service -> connect Gmail/Outlook/etc.
     Copy the "Service ID" it gives you.
  3) Email Templates -> Create New Template. Build a "Welcome" email.
     - Set the template "To email" field to: {{to_email}}
     - Use variables like {{to_name}} and {{to_email}} in the body,
       e.g. "Hi {{to_name}}, your Nexora AI account was created
       with {{to_email}}."
     Copy the "Template ID" it gives you.
  4) Account -> General -> copy your "Public Key".
  5) Paste all three values below.

  This file is safe to use in a browser (same as the Firebase config) —
  it does not contain a private/secret key.
*/
(function () {
  window.EMAILJS_CONFIG = {
    publicKey: "Z4rKsloYbjrqkbfYh",
    serviceId: "service_a5m79m8",
    templateId: "template_oitpqh7"
  };
})();
