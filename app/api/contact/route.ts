import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = ["name","email","phone","company","service","message"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim().length < 2) {
        return NextResponse.json({ error: `Please provide ${field}.` }, { status: 400 });
      }
    }

    // Email delivery is intentionally disabled until SMTP credentials are configured.
    // This prevents the site from falsely claiming an enquiry was emailed.
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({
        error: "The consultation form is not connected to email yet. Configure SMTP environment variables in Netlify before production use."
      }, { status: 503 });
    }

    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_TO || "info@risingsolution.in",
      replyTo: String(body.email),
      subject: `Rising Solution enquiry — ${body.service}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone}`,
        `Company: ${body.company}`,
        `Service: ${body.service}`,
        "",
        String(body.message)
      ].join("\n")
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process the enquiry." }, { status: 500 });
  }
}
