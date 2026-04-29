// app/api/contact/route.ts  ← CORRECT FILE. Old file used GMAIL_USER — delete that one.
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ─── Label map: form field names → human-readable labels ─────────────────
   Every field from every intent form is listed here so the email renders
   cleanly. Any field NOT in this map is still included — just title-cased.
──────────────────────────────────────────────────────────────────────────── */
const FIELD_LABELS: Record<string, string> = {
  intent_type:       "Inquiry Type",
  full_name:         "Full Name",
  email:             "Email Address",
  phone:             "Phone Number",
  org_name:          "Organisation Name",
  business_age:      "Business Operating Duration",
  website_type:      "Website Type Needed",
  project_goals:     "Project Goals",
  budget:            "Estimated Budget",
  has_brand_identity:"Existing Brand Identity?",
  challenge:         "Challenge / Problem",
  preferred_datetime:"Preferred Date & Time",
  duration:          "Session Duration",
  consult_topic:     "Consultation Topic",
  team_name:         "Company / Team Name",
  project_desc:      "Project Description",
  role_needed:       "Role Needed",
  timeline:          "Project Timeline",
  budget_range:      "Budget Range",
  event_org:         "Organisation / Event Name",
  event_type:        "Event Type",
  topic:             "Talk Topic / Theme",
  event_date:        "Event Date",
  audience_size:     "Audience Size",
  event_notes:       "Event Additional Details",
  referral:          "How They Heard About Marvel",
  service_type:      "Service Type Selected",
  extra_notes:       "Additional Notes",
};

/* ─── Intent display names ─────────────────────────────────────────────── */
const INTENT_LABELS: Record<string, string> = {
  website: "🌐 Need a Website",
  consult: "💡 Consult Me",
  project: "🤝 Add Me to a Project",
  speak:   "🎤 Invite Me to Speak",
};

/* ─── Utility: turn a field name into a title if not in map ────────────── */
function toTitle(key: string): string {
  return FIELD_LABELS[key] ?? key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ─── Build the plain-text email body from ALL submitted fields ─────────── */
function buildEmailBody(data: Record<string, string>): string {
  const { intent_type, ...rest } = data;
  const intentLabel = INTENT_LABELS[intent_type] ?? intent_type;

  const lines = Object.entries(rest)
    .filter(([, v]) => v && v.trim() !== "")   // skip empty/blank fields
    .map(([k, v]) => `${toTitle(k)}: ${v}`)
    .join("\n");

  return `New inquiry via Marvel Studio contact form.

Inquiry Type: ${intentLabel}

─────────────────────────────

${lines}

─────────────────────────────
Sent from marvels.studio/contact`;
}

/* ─── Build HTML version for richer email clients ──────────────────────── */
function buildEmailHTML(data: Record<string, string>): string {
  const { intent_type, ...rest } = data;
  const intentLabel = INTENT_LABELS[intent_type] ?? intent_type;

  const rows = Object.entries(rest)
    .filter(([, v]) => v && v.trim() !== "")
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 14px;background:#f0f9ff;border-radius:6px;font-weight:700;
                   color:#0369a1;font-size:12px;text-transform:uppercase;letter-spacing:.08em;
                   white-space:nowrap;vertical-align:top;width:38%;">${toTitle(k)}</td>
        <td style="padding:10px 14px;color:#0c4a6e;font-size:14px;vertical-align:top;">${v}</td>
      </tr>
      <tr><td colspan="2" style="height:6px;"></td></tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;font-family:'DM Sans',Arial,sans-serif;background:#f0f9ff;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:16px;
              overflow:hidden;box-shadow:0 8px 40px rgba(14,165,197,.12);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#38bdf8,#0ea5c5);padding:28px 32px;">
      <p style="margin:0;font-size:11px;color:rgba(255,255,255,.75);text-transform:uppercase;
                letter-spacing:.12em;">Marvel Studio</p>
      <h1 style="margin:6px 0 0;color:#fff;font-size:22px;font-weight:700;">
        🔥 New Portfolio Hire Request
      </h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,.85);font-size:14px;">
        ${intentLabel}
      </p>
    </div>

    <!-- Body -->
    <div style="padding:28px 32px 36px;">
      <table style="width:100%;border-collapse:separate;border-spacing:0 0;">
        ${rows}
      </table>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px;background:#f0f9ff;border-top:1px solid rgba(14,165,197,.15);">
      <p style="margin:0;font-size:11px;color:rgba(3,105,161,.5);">
        Submitted via marvels.studio/contact
      </p>
    </div>
  </div>
</body>
</html>`;
}

/* ─── POST handler ─────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  try {
    const data: Record<string, string> = await req.json();

    // Guard: must have at minimum a name and email
    if (!data.full_name || !data.email) {
      return NextResponse.json(
        { error: "Missing required fields: full_name, email" },
        { status: 400 }
      );
    }

    const senderName  = data.full_name;
    const senderEmail = data.email;
    const intentType  = data.intent_type ?? "unknown";
    const intentLabel = INTENT_LABELS[intentType] ?? intentType;

    /* ── Nodemailer transporter ──────────────────────────────────────────
       Uses SMTP_* env vars set in .env.local — works with Gmail, Resend,
       Brevo, Mailgun, etc.
       
       For Gmail: enable "App Passwords" in your Google account and use
       that 16-char password as SMTP_PASS.
    ─────────────────────────────────────────────────────────────────── */
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST!,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from:    `"Marvel Studio" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_EMAIL!,      // your receiving inbox
      replyTo: `"${senderName}" <${senderEmail}>`,
      subject: `🔥 New Portfolio Hire Request — ${intentLabel} from ${senderName}`,
      text:    buildEmailBody(data),
      html:    buildEmailHTML(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/contact] error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Check server logs." },
      { status: 500 }
    );
  }
}