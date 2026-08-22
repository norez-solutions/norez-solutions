"use server";

import { Resend } from "resend";

type SubmitResult = { ok: true } | { ok: false; reason: "not_configured" | "send_failed" };

interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

// Subject is generated here rather than asked for on the form -- one fewer
// field for a visitor to fill in, and every submission already has a
// natural subject (who it's from).
export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

  if (!apiKey || !fromEmail || !notifyEmail) {
    console.error(
      "[contact-form] Missing RESEND_API_KEY, CONTACT_FROM_EMAIL, or CONTACT_NOTIFY_EMAIL",
    );
    return { ok: false, reason: "not_configured" };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: notifyEmail,
    replyTo: data.email,
    subject: `New message from ${data.name} via norezsolutions.com`,
    text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
  });

  if (error) {
    console.error("[contact-form] Resend error:", error);
    return { ok: false, reason: "send_failed" };
  }

  return { ok: true };
}
