import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Check if env vars are even loading
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS exists:", !!process.env.GMAIL_APP_PASSWORD);

    const body = await req.json();
    const { recruiter_name, recruiter_email, phone, role, budget, duration, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify connection BEFORE sending
    await transporter.verify();
    console.log("✅ Transporter verified");

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "🔥 New Portfolio Hire Request",
      html: `
        <p><b>Name:</b> ${recruiter_name}</p>
        <p><b>Email:</b> ${recruiter_email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Duration:</b> ${duration}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const err = error as Error & { code?: string; command?: string };
    console.error("❌ ERROR MESSAGE:", err.message);
    console.error("❌ ERROR CODE:", err.code);
    console.error("❌ ERROR COMMAND:", err.command);

    return NextResponse.json(
      { error: err.message }, 
      { status: 500 }
    );
  }
}