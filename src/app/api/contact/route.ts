import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const NOTIFY_EMAIL = process.env.CONTACT_EMAIL || "ericgeorge1606@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const from = "onboarding@resend.dev"; // Resend free tier: use this or verify your domain
    const to = NOTIFY_EMAIL;
    const subject = `Portfolio contact from ${name.trim()}`;
    const html = `
      <p><strong>From:</strong> ${name.trim()}<br/>
      <strong>Email:</strong> ${email.trim()}</p>
      <p><strong>Message:</strong></p>
      <p>${message.trim().replace(/\n/g, "<br/>")}</p>
    `;

    if (!resend) {
      console.error("[Contact form] RESEND_API_KEY is not set — email not sent.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const { error } = await resend.emails.send({ from, to, subject, html, replyTo: email.trim() });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
