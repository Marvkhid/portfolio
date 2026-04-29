// app/contact/page.tsx
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { INTENT_COPY,  type Intent } from "../contact/data/intent";
import {
  AmbientCanvas,
  CloseButton,
  FormSlide,
  IntentTabs,
  SubmitButton,
  SuccessScreen,
} from "../SpeakForm/contactUi";
import {
  ConsultForm,
  ProjectForm,
  SpeakForm,
  WebsiteForm,
} from "../YesNoToggle/intentForms";
import { useContactForm } from "../contact/hooks/useContactForm";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ─── Main Page ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const router = useRouter();
  const { loading, submitted, handleSubmit } = useContactForm();

  const [intent,       setIntent]       = useState<Intent>("website");
  const [show,         setShow]         = useState(false);
  const [formKey,      setFormKey]      = useState(0);
  const [transitioning,setTransitioning]= useState(false);

  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  const switchIntent = useCallback((next: Intent) => {
    if (next === intent) return;
    setTransitioning(true);
    setTimeout(() => {
      setIntent(next);
      setFormKey((k) => k + 1);
      setTransitioning(false);
    }, 220);
  }, [intent]);

  if (submitted) return <SuccessScreen onBack={() => router.push("/")} />;

  const copy = INTENT_COPY[intent];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes spin       { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer    { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulseGlow  { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.45; transform:scale(1.5); } }
        * { box-sizing: border-box; }
        select option { color: #0c4a6e; background: #f0f9ff; }
      `}</style>

      <div style={{
        display: "flex", flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(160deg,#f0f9ff 0%,#e0f2fe 45%,#bae6fd 100%)",
        overflow: "hidden",
      }}>
        <Navbar />
        <AmbientCanvas />

        {/* Subtle dot-grid texture */}
        <div style={{
          position: "fixed", inset: 0,
          backgroundImage: "radial-gradient(rgba(14,165,197,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* ── Page content ────────────────────────────────────────────── */}
        <div style={{
          flexGrow: 1, position: "relative", zIndex: 1,
          padding: "52px 5% 72px",
          display: "flex", flexDirection: "column", alignItems: "center",
        }}>

          {/* Live badge */}
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
            <span style={{
              width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
              display: "inline-block", animation: "pulseGlow 2s infinite",
            }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem", fontWeight: 700,
              color: "#0ea5c5", letterSpacing: "0.14em", textTransform: "uppercase",
            }}>
              Let&apos;s Work Together
            </span>
          </div>

          {/* Page headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(2rem,5vw,3.2rem)",
            color: "#0c4a6e",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 10px",
            letterSpacing: "-0.02em",
            opacity: show ? 1 : 0,
            transform: show ? "none" : "translateY(16px)",
            transition: "all 0.7s ease 0.1s",
          }}>
            What can I do for you?
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.05rem", color: "#0369a1",
            lineHeight: 1.7, marginBottom: 44,
            maxWidth: 520, textAlign: "center",
            opacity: show ? 0.82 : 0,
            transition: "opacity 0.7s ease 0.18s",
          }}>
            Select an option below and I&apos;ll personalise the form for your exact need.
          </p>

          {/* Intent tabs */}
          <div style={{
            width: "100%", maxWidth: 860,
            opacity: show ? 1 : 0,
            transition: "opacity 0.7s ease 0.25s",
          }}>
            <IntentTabs active={intent} onChange={switchIntent} />
          </div>

          {/* ── Form card ─────────────────────────────────────────────── */}
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
              <CloseButton onClick={() => router.push("/")} />

              {/* Dynamic intent header */}
              <div style={{ marginBottom: 8 }}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem,3vw,2rem)",
                    color: "#0c4a6e",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    margin: "0 0 8px",
                    transition: "all 0.3s ease",
                  }}
                  dangerouslySetInnerHTML={{ __html: copy.title }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.97rem",
                    color: "#0369a1",
                    lineHeight: 1.65,
                    opacity: 0.8,
                    margin: 0,
                  }}
                  dangerouslySetInnerHTML={{ __html: copy.sub }}
                />
              </div>

              {/* ── Form body ────────────────────────────────────────── */}
              <form key={formKey} onSubmit={(e) => handleSubmit(e, intent)}>
                {/* intent_type is also collected in the hook, but this
                    ensures it's always in FormData as well */}
                <input type="hidden" name="intent_type" value={intent} />

                <FormSlide visible={!transitioning}>
                  {intent === "website" && <WebsiteForm />}
                  {intent === "consult" && <ConsultForm />}
                  {intent === "project" && <ProjectForm />}
                  {intent === "speak"   && <SpeakForm />}
                </FormSlide>

                {/* Actions row */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                  marginTop: 32,
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
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600, fontSize: "0.88rem",
                      textDecoration: "none",
                      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.16)";
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
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

            {/* Trust notes */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: 28, marginTop: 22, flexWrap: "wrap",
            }}>
              {["🔒 Your details are safe", "⚡ We respond within 24hrs", "💬 No spam, ever"].map((note) => (
                <span key={note} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(3,105,161,0.65)",
                  fontWeight: 500,
                }}>
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}