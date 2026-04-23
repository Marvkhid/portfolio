"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { X, CheckCircle, ChevronDown } from "lucide-react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

/* ─── Types ──────────────────────────────────────────────────── */
type Intent = "website" | "consult" | "project" | "speak";

const INTENTS: { id: Intent; label: string; icon: string; desc: string }[] = [
  { id: "website",  label: "Need a Website",      icon: "🌐", desc: "Build or redesign" },
  { id: "consult",  label: "Consult Me",           icon: "💡", desc: "Strategy session" },
  { id: "project",  label: "Add Me to a Project",  icon: "🤝", desc: "Collaboration" },
  { id: "speak",    label: "Invite Me to Speak",   icon: "🎤", desc: "Events & talks" },
];

/* ─── Floating label input ───────────────────────────────────── */
function FloatInput({
  name, label, type = "text", required = true,
  placeholder = "",
}: {
  name: string; label: string; type?: string;
  required?: boolean; placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);

  const active = focused || filled;

  return (
    <div style={{ position: "relative" }}>
      <input
        name={name} type={type} required={required}
        placeholder={focused ? placeholder : ""}
        onFocus={() => setFocused(true)}
        onBlur={(e)  => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => setFilled(!!e.target.value)}
        style={{
          width: "100%",
          padding: "22px 18px 9px",
          borderRadius: 12,
          border: `1.5px solid ${focused ? "#38bdf8" : "rgba(14,165,197,0.35)"}`,
          background: focused ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          color: "#0c4a6e",
          fontSize: "0.95rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          outline: "none",
          boxShadow: focused
            ? "0 0 0 3px rgba(56,189,248,0.2), 0 4px 16px rgba(14,165,197,0.12)"
            : "0 2px 8px rgba(14,165,197,0.08)",
          transition: "all 0.28s ease",
          boxSizing: "border-box",
        }}
      />
      <label style={{
        position: "absolute", left: 18,
        top: active ? 7 : "50%",
        transform: active ? "none" : "translateY(-50%)",
        fontSize: active ? "0.67rem" : "0.93rem",
        fontWeight: active ? 700 : 400,
        color: focused ? "#0ea5c5" : active ? "#0369a1" : "rgba(3,105,161,0.6)",
        letterSpacing: active ? "0.1em" : "0.01em",
        textTransform: active ? "uppercase" : "none",
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
        transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {label}
      </label>
    </div>
  );
}

/* ─── Floating label select ──────────────────────────────────── */
function FloatSelect({
  name, label, options, required = true,
}: {
  name: string; label: string;
  options: string[]; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);
  const [val,     setVal]     = useState("");
  const active = focused || filled;

  return (
    <div style={{ position: "relative" }}>
      <select
        name={name} required={required}
        defaultValue=""
        onFocus={() => setFocused(true)}
        onBlur={(e)  => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => { setFilled(!!e.target.value); setVal(e.target.value); }}
        style={{
          width: "100%",
          padding: "22px 40px 9px 18px",
          borderRadius: 12,
          border: `1.5px solid ${focused ? "#38bdf8" : "rgba(14,165,197,0.35)"}`,
          background: focused ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          color: val ? "#0c4a6e" : "transparent",
          fontSize: "0.95rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          outline: "none",
          appearance: "none",
          WebkitAppearance: "none",
          boxShadow: focused
            ? "0 0 0 3px rgba(56,189,248,0.2)"
            : "0 2px 8px rgba(14,165,197,0.08)",
          transition: "all 0.28s ease",
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "#0c4a6e", background: "#fff" }}>{o}</option>
        ))}
      </select>
      <div style={{
        position: "absolute", right: 14, top: "50%",
        transform: "translateY(-50%)", pointerEvents: "none", color: "#0ea5c5",
      }}>
        <ChevronDown size={16} />
      </div>
      <label style={{
        position: "absolute", left: 18,
        top: active ? 7 : "50%",
        transform: active ? "none" : "translateY(-50%)",
        fontSize: active ? "0.67rem" : "0.93rem",
        fontWeight: active ? 700 : 400,
        color: focused ? "#0ea5c5" : active ? "#0369a1" : "rgba(3,105,161,0.6)",
        letterSpacing: active ? "0.1em" : "0.01em",
        textTransform: active ? "uppercase" : "none",
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
        transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {label}
      </label>
    </div>
  );
}

/* ─── Floating label textarea ────────────────────────────────── */
function FloatTextarea({
  name, label, rows = 4, required = true,
}: {
  name: string; label: string; rows?: number; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);
  const active = focused || filled;

  return (
    <div style={{ position: "relative" }}>
      <textarea
        name={name} rows={rows} required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e)  => { setFocused(false); setFilled(!!e.target.value); }}
        onChange={(e) => setFilled(!!e.target.value)}
        style={{
          width: "100%",
          padding: "28px 18px 12px",
          borderRadius: 12,
          border: `1.5px solid ${focused ? "#38bdf8" : "rgba(14,165,197,0.35)"}`,
          background: focused ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          color: "#0c4a6e",
          fontSize: "0.95rem",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
          outline: "none",
          resize: "vertical",
          boxShadow: focused
            ? "0 0 0 3px rgba(56,189,248,0.2)"
            : "0 2px 8px rgba(14,165,197,0.08)",
          transition: "all 0.28s ease",
          lineHeight: 1.65,
          boxSizing: "border-box",
        }}
      />
      <label style={{
        position: "absolute", left: 18,
        top: active ? 8 : 20,
        fontSize: active ? "0.67rem" : "0.93rem",
        fontWeight: active ? 700 : 400,
        color: focused ? "#0ea5c5" : active ? "#0369a1" : "rgba(3,105,161,0.6)",
        letterSpacing: active ? "0.1em" : "0.01em",
        textTransform: active ? "uppercase" : "none",
        fontFamily: "'DM Sans', sans-serif",
        pointerEvents: "none",
        transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {label}
      </label>
    </div>
  );
}

/* ─── Yes/No toggle ──────────────────────────────────────────── */
function YesNoToggle({ name, label }: { name: string; label: string }) {
  const [val, setVal] = useState<"yes" | "no" | null>(null);
  return (
    <div>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem",
        fontWeight: 700, color: "#0369a1", letterSpacing: "0.1em",
        textTransform: "uppercase", margin: "0 0 10px",
      }}>{label}</p>
      <div style={{ display: "flex", gap: 10 }}>
        {(["yes", "no"] as const).map((v) => (
          <button
            key={v} type="button"
            onClick={() => setVal(v)}
            style={{
              padding: "10px 28px", borderRadius: 99,
              border: `1.5px solid ${val === v ? "#0ea5c5" : "rgba(14,165,197,0.3)"}`,
              background: val === v
                ? "linear-gradient(135deg, #38bdf8, #0ea5c5)"
                : "rgba(255,255,255,0.7)",
              color: val === v ? "#fff" : "#0369a1",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "0.88rem",
              cursor: "pointer",
              transition: "all 0.22s ease",
              textTransform: "capitalize",
            }}
          >{v === "yes" ? "✓ Yes" : "✗ No"}</button>
        ))}
      </div>
      <input type="hidden" name={name} value={val ?? ""} required />
    </div>
  );
}

/* ─── Section divider ────────────────────────────────────────── */
function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0 22px" }}>
      <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, transparent, rgba(14,165,197,0.3))" }} />
      <span style={{
        fontSize: "0.68rem", fontWeight: 700, color: "#0ea5c5",
        letterSpacing: "0.14em", fontFamily: "'DM Sans', sans-serif",
        textTransform: "uppercase", whiteSpace: "nowrap",
        padding: "4px 12px",
        background: "rgba(14,165,197,0.08)",
        borderRadius: 99,
        border: "1px solid rgba(14,165,197,0.2)",
      }}>
        {label}
      </span>
      <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, rgba(14,165,197,0.3), transparent)" }} />
    </div>
  );
}

/* ─── Basic Info Block (shared across all forms) ─────────────── */
function BasicInfo() {
  return (
    <>
      <SectionDivider label="Your Details" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput name="full_name"  label="Full Name" />
        <FloatInput name="email"      label="Email Address" type="email" />
        <FloatInput name="phone"      label="Phone Number"  type="tel" />
      </div>
    </>
  );
}

/* ─── Shared Tail Block (all forms) ──────────────────────────── */
function SharedTail() {
  return (
    <>
      <SectionDivider label="A Few More Things" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput
          name="referral" label="How did you hear about Marvel?" required={false}
        />
        <FloatSelect
          name="service_type" label="Select Service Type" required={false}
          options={[
            "Get Me Online",
            "Website",
            "Glow Up / Revamp",
            "One-Day Website",
            "Ecommerce (Shop & Sell)",
            "Do It All For Me",
          ]}
        />
      </div>
      <FloatTextarea
        name="extra_notes" label="Additional questions or information?" rows={3} required={false}
      />
    </>
  );
}

/* ─── Form: Need a Website ───────────────────────────────────── */
function WebsiteForm() {
  return (
    <>
      <BasicInfo />
      <SectionDivider label="Web Project Details" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput name="business_age"   label="How long has your business been operating?" />
        <FloatInput name="org_name"       label="Name of Organisation" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="website_type" label="What type of website do you need?"
          options={["Ecommerce", "Portfolio", "Brand Website", "Landing Page", "Blog", "Other"]}
        />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatTextarea
          name="project_goals"
          label="How can a new or redesigned website help you achieve your goals?"
          rows={4}
        />
      </div>
      <SectionDivider label="Budget & Brand" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatSelect
          name="budget" label="Estimated Budget (USD)"
          options={["$150–$300", "$300–$500", "$500–$1000", "$1000–$2000", "$2000+"]}
        />
        <YesNoToggle name="has_brand_identity" label="Do you have an existing brand identity? (Logo, colours, fonts)" />
      </div>
      <SharedTail />
    </>
  );
}

/* ─── Form: Consult Me ───────────────────────────────────────── */
function ConsultForm() {
  return (
    <>
      <BasicInfo />
      <SectionDivider label="Consultation Details" />
      <div style={{ marginBottom: 14 }}>
        <FloatInput name="org_name" label="Name of Organisation" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="challenge" label="Briefly explain your challenge" rows={4} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput name="preferred_datetime" label="Preferred Date / Time" type="datetime-local" />
        <FloatSelect
          name="duration" label="Select Duration"
          options={["15 mins", "30 mins", "60 mins"]}
        />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="consult_topic" label="What do you need help with?"
          options={[
            "Website Review",
            "Technical Advice",
            "Design Feedback",
            "Branding Strategy",
            "Something Else",
          ]}
        />
      </div>
      <SharedTail />
    </>
  );
}

/* ─── Form: Add Me to a Project ──────────────────────────────── */
function ProjectForm() {
  return (
    <>
      <BasicInfo />
      <SectionDivider label="Project Information" />
      <div style={{ marginBottom: 14 }}>
        <FloatInput name="team_name" label="Company / Team Name" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="project_desc" label="Project Description" rows={4} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatSelect
          name="role_needed" label="Your Role Needed"
          options={["Frontend Dev", "Fullstack Dev", "UI/UX", "Web Designer", "Other"]}
        />
        <FloatInput name="timeline" label="Project Timeline" placeholder="e.g. 6 weeks" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatSelect
          name="budget_range" label="Budget Range (USD)"
          options={["$500–$1000", "$1000–$3000", "$3000–$5000", "$5000–$10000", "$10000+"]}
        />
      </div>
      <SharedTail />
    </>
  );
}

/* ─── Form: Invite Me to Speak ───────────────────────────────── */
function SpeakForm() {
  return (
    <>
      <BasicInfo />
      <SectionDivider label="Event Details" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput name="event_org"  label="Organisation / Event Name" />
        <FloatSelect
          name="event_type" label="Event Type"
          options={["Conference", "Webinar", "Workshop", "Panel", "Podcast", "Other"]}
        />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatInput name="topic" label="Topic or Theme" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 14, marginBottom: 14 }}>
        <FloatInput name="event_date"     label="Event Date"     type="date" />
        <FloatInput name="audience_size"  label="Audience Size"  type="number" />
      </div>
      <div style={{ marginBottom: 14 }}>
        <FloatTextarea name="event_notes" label="Additional Details" rows={4} />
      </div>
      <SharedTail />
    </>
  );
}

/* ─── Canvas animation ───────────────────────────────────────── */
function AmbientCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.12, y: 0.18, r: 280, h: 200, s: 0.0006, p: 0 },
      { x: 0.8,  y: 0.7,  r: 230, h: 210, s: 0.0008, p: 1.3 },
      { x: 0.5,  y: 0.9,  r: 190, h: 195, s: 0.001,  p: 2.5 },
      { x: 0.9,  y: 0.12, r: 160, h: 220, s: 0.0012, p: 0.7 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t++;
      orbs.forEach((o) => {
        const cx = o.x * canvas.width  + Math.sin(t * o.s + o.p) * 50;
        const cy = o.y * canvas.height + Math.cos(t * o.s * 0.7 + o.p) * 40;
        const r  = o.r + Math.sin(t * o.s * 2) * 18;
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `hsla(${o.h},88%,68%,0.11)`);
        g.addColorStop(0.5, `hsla(${o.h},78%,58%,0.06)`);
        g.addColorStop(1, `hsla(${o.h},68%,48%,0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={ref} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />
  );
}

/* ─── Success Screen ─────────────────────────────────────────── */
function SuccessScreen({ onBack }: { onBack: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "linear-gradient(160deg,#f0f9ff,#e0f2fe,#bae6fd)" }}>
      <Navbar />
      <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        <div style={{
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(24px)",
          border: "1.5px solid rgba(14,165,197,0.25)",
          borderRadius: 28,
          padding: "56px 44px",
          textAlign: "center",
          maxWidth: 440,
          width: "100%",
          boxShadow: "0 32px 80px rgba(14,165,197,0.14)",
          opacity: show ? 1 : 0,
          transform: show ? "scale(1) translateY(0)" : "scale(0.92) translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
          <div style={{
            width: 76, height: 76, borderRadius: "50%",
            background: "rgba(34,197,94,0.1)",
            border: "2px solid rgba(34,197,94,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px",
          }}>
            <CheckCircle size={38} color="#22c55e" />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "2rem", color: "#0c4a6e", marginBottom: 12, letterSpacing: "-0.02em",
          }}>
            Message Sent! 🎉
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "1rem",
            color: "#0369a1", lineHeight: 1.7, marginBottom: 34, opacity: 0.85,
          }}>
            We&apos;ll review your details and get back to you within 24 hours.
            Looking forward to building something great together.
          </p>
          <button
            onClick={onBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 34px", borderRadius: 99,
              background: "linear-gradient(135deg,#38bdf8,#0ea5c5)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.95rem",
              border: "none", cursor: "pointer",
              boxShadow: "0 8px 28px rgba(14,165,197,0.38)",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.06) translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─── Intent Switcher Tabs ───────────────────────────────────── */
function IntentTabs({
  active, onChange,
}: { active: Intent; onChange: (i: Intent) => void }) {
  return (
    <div style={{
      display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 38,
      justifyContent: "center",
    }}>
      {INTENTS.map((intent) => {
        const isActive = active === intent.id;
        return (
          <button
            key={intent.id}
            onClick={() => onChange(intent.id)}
            type="button"
            style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              padding: "12px 22px", borderRadius: 16,
              border: `1.5px solid ${isActive ? "#0ea5c5" : "rgba(14,165,197,0.28)"}`,
              background: isActive
                ? "linear-gradient(135deg,#38bdf8,#0ea5c5)"
                : "rgba(255,255,255,0.75)",
              backdropFilter: "blur(10px)",
              color: isActive ? "#fff" : "#0369a1",
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: isActive
                ? "0 8px 28px rgba(14,165,197,0.38)"
                : "0 2px 10px rgba(14,165,197,0.1)",
              transform: isActive ? "translateY(-2px)" : "none",
              minWidth: 130,
            }}
            onMouseEnter={e => {
              if (!isActive) {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 22px rgba(14,165,197,0.2)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,197,0.5)";
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 10px rgba(14,165,197,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,165,197,0.28)";
              }
            }}
          >
            <span style={{ fontSize: 22, marginBottom: 4 }}>{intent.icon}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>{intent.label}</span>
            <span style={{
              fontSize: "0.7rem", fontWeight: 400, opacity: 0.75, marginTop: 2,
            }}>{intent.desc}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Animated form wrapper ──────────────────────────────────── */
function FormSlide({ children, visible }: { children: React.ReactNode; visible: boolean }) {
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.38s ease, transform 0.42s cubic-bezier(0.22,1,0.36,1)",
      pointerEvents: visible ? "auto" : "none",
    }}>
      {children}
    </div>
  );
}

/* ─── Submit button ──────────────────────────────────────────── */
function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "15px 40px", borderRadius: 99,
        background: loading
          ? "rgba(14,165,197,0.4)"
          : "linear-gradient(135deg,#38bdf8,#0ea5c5)",
        color: "#fff",
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
        fontSize: "1rem", letterSpacing: "0.03em",
        border: "none", cursor: loading ? "not-allowed" : "pointer",
        boxShadow: loading ? "none" : "0 8px 28px rgba(14,165,197,0.4)",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        if (!loading) {
          e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,197,0.5)";
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(14,165,197,0.4)";
      }}
    >
      {loading ? (
        <>
          <svg style={{ animation: "spin 0.8s linear infinite" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
          </svg>
          Sending…
        </>
      ) : (
        <>
          Send Request
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </>
      )}
    </button>
  );
}

/* ─── Intent header copy ─────────────────────────────────────── */
const INTENT_COPY: Record<Intent, { title: string; sub: string }> = {
  website: {
    title: "Let&apos;s Build Your Dream Website",
    sub:   "Tell me about your project and I&apos;ll craft the perfect digital home for your brand.",
  },
  consult: {
    title: "Book a Strategy Session",
    sub:   "Got a challenge? Let&apos;s solve it together — one focused session at a time.",
  },
  project: {
    title: "Add Marvel to Your Team",
    sub:   "Looking for a skilled collaborator? Share the scope and let&apos;s create something remarkable.",
  },
  speak: {
    title: "Invite Me to Your Event",
    sub:   "Conferences, webinars, workshops — let&apos;s get your audience inspired.",
  },
};

/* ─── Main Contact Page ──────────────────────────────────────── */
export default function ContactPage() {
  const router = useRouter();
  const [intent,    setIntent]    = useState<Intent>("website");
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [show,      setShow]      = useState(false);
  const [formKey,   setFormKey]   = useState(0); // reset form on tab switch
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  const switchIntent = useCallback((next: Intent) => {
    if (next === intent) return;
    setTransitioning(true);
    setTimeout(() => {
      setIntent(next);
      setFormKey(k => k + 1);
      setTransitioning(false);
    }, 220);
  }, [intent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const fd   = new FormData(e.currentTarget);
    const data: Record<string, string> = { intent_type: intent };
    fd.forEach((v, k) => { data[k] = v.toString(); });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (res.ok) setSubmitted(true);
      else alert("Something went wrong. Please try again or reach out via WhatsApp.");
    } catch {
      setLoading(false);
      alert("Network error. Please try again.");
    }
  };

  if (submitted) return <SuccessScreen onBack={() => router.push("/")} />;

  const copy = INTENT_COPY[intent];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulseGlow { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(1.5); } }
        * { box-sizing: border-box; }
        select option { color: #0c4a6e; background: #f0f9ff; }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 45%,#bae6fd 100%)", overflow: "hidden" }}>
        <Navbar />
        <AmbientCanvas />

        {/* Subtle grid texture */}
        <div style={{
          position: "fixed", inset: 0,
          backgroundImage: "radial-gradient(rgba(14,165,197,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Page content */}
        <div style={{
          flexGrow: 1, position: "relative", zIndex: 1,
          padding: "52px 5% 72px",
          display: "flex", flexDirection: "column", alignItems: "center",
        }}>

          {/* Page title badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 18px", borderRadius: 99,
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(14,165,197,0.3)",
            backdropFilter: "blur(10px)",
            marginBottom: 20,
            opacity: show ? 1 : 0,
            transform: show ? "none" : "translateY(10px)",
            transition: "all 0.6s ease",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "pulseGlow 2s infinite" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#0ea5c5", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Let&apos;s Work Together
            </span>
          </div>

          {/* Page headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 700,
            fontSize: "clamp(2rem,5vw,3.2rem)", color: "#0c4a6e",
            textAlign: "center", lineHeight: 1.1, margin: "0 0 10px",
            letterSpacing: "-0.02em",
            opacity: show ? 1 : 0, transform: show ? "none" : "translateY(16px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            What can I do for you?
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "#0369a1",
            lineHeight: 1.7, marginBottom: 44, maxWidth: 520, textAlign: "center", opacity: show ? 0.82 : 0,
            transition: "opacity 0.7s ease 0.18s",
          }}>
            Select an option below and I&apos;ll personalise the form for your exact need.
          </p>

          {/* Intent tabs */}
          <div style={{ width: "100%", maxWidth: 860, opacity: show ? 1 : 0, transition: "opacity 0.7s ease 0.25s" }}>
            <IntentTabs active={intent} onChange={switchIntent} />
          </div>

          {/* Form card */}
          <div style={{
            width: "100%", maxWidth: 860,
            opacity: show ? 1 : 0,
            transform: show ? "none" : "translateY(24px)",
            transition: "opacity 0.75s ease 0.3s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s",
          }}>
            {/* Shimmer top bar */}
            <div style={{
              height: 4, borderRadius: "12px 12px 0 0",
              background: "linear-gradient(90deg,#38bdf8,#0ea5c5,#7dd3fc,#0284c7,#38bdf8)",
              backgroundSize: "200% auto",
              animation: "shimmer 3s linear infinite",
            }} />

            <div style={{
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(28px)",
              border: "1.5px solid rgba(14,165,197,0.2)",
              borderTop: "none",
              borderRadius: "0 0 24px 24px",
              boxShadow: "0 32px 80px rgba(14,165,197,0.12), 0 4px 16px rgba(14,165,197,0.06)",
              padding: "40px 36px 44px",
              position: "relative",
            }}>
              {/* Close button */}
              <button
                onClick={() => router.push("/")}
                type="button"
                style={{
                  position: "absolute", top: 18, right: 18,
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(14,165,197,0.08)",
                  border: "1px solid rgba(14,165,197,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", color: "#0ea5c5",
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.12) rotate(90deg)";
                  e.currentTarget.style.background = "rgba(14,165,197,0.15)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.background = "rgba(14,165,197,0.08)";
                }}
              >
                <X size={15} />
              </button>

              {/* Dynamic intent header */}
              <div style={{ marginBottom: 8 }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif", fontWeight: 700,
                  fontSize: "clamp(1.4rem,3vw,2rem)", color: "#0c4a6e",
                  letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 8px",
                  transition: "all 0.3s ease",
                }}
                  dangerouslySetInnerHTML={{ __html: copy.title }}
                />
                <p style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.97rem",
                  color: "#0369a1", lineHeight: 1.65, opacity: 0.8, margin: 0,
                }}
                  dangerouslySetInnerHTML={{ __html: copy.sub }}
                />
              </div>

              {/* Animated form body */}
              <form key={formKey} onSubmit={handleSubmit}>
                <input type="hidden" name="intent_type" value={intent} />

                <FormSlide visible={!transitioning}>
                  {intent === "website" && <WebsiteForm />}
                  {intent === "consult" && <ConsultForm />}
                  {intent === "project" && <ProjectForm />}
                  {intent === "speak"   && <SpeakForm />}
                </FormSlide>

                {/* Actions row */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 16, flexWrap: "wrap", marginTop: 32,
                  paddingTop: 24,
                  borderTop: "1px solid rgba(14,165,197,0.15)",
                }}>
                  <SubmitButton loading={loading} />

                  <a
                    href="https://wa.me/2348107387326"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "13px 24px", borderRadius: 99,
                      background: "rgba(34,197,94,0.08)",
                      border: "1.5px solid rgba(34,197,94,0.3)",
                      color: "#16a34a",
                      fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
                      fontSize: "0.88rem", textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.16)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.08)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.37 0 0 5.373 0 12c0 2.117.554 4.1 1.523 5.824L.057 23.986l6.304-1.654A11.94 11.94 0 0 0 12 24c6.628 0 12-5.373 12-12S18.626 0 11.998 0zm.002 21.818a9.818 9.818 0 0 1-5.012-1.374l-.36-.213-3.735.979 1-3.648-.233-.374A9.816 9.816 0 0 1 2.18 12c0-5.42 4.402-9.818 9.82-9.818 5.42 0 9.82 4.398 9.82 9.818 0 5.42-4.4 9.818-9.82 9.818z"/>
                    </svg>
                    WhatsApp Direct
                  </a>
                </div>
              </form>
            </div>

            {/* Below-card trust notes */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 28, marginTop: 22, flexWrap: "wrap",
            }}>
              {["🔒 Your details are safe", "⚡ We respond within 24hrs", "💬 No spam, ever"].map((note) => (
                <span key={note} style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem",
                  color: "rgba(3,105,161,0.65)", fontWeight: 500,
                }}>{note}</span>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}