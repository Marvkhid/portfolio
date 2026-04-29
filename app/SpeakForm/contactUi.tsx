// app/contact/components/ContactUI.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, X } from "lucide-react";
// import { useRouter } from "next/navigation";
import { INTENTS, type Intent } from "../contact/data/intent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

/* ─── Intent Tabs ─────────────────────────────────────────────────────── */
export function IntentTabs({
  active,
  onChange,
}: {
  active: Intent;
  onChange: (i: Intent) => void;
}) {
  return (
    <div style={{
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 38,
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "12px 22px",
              borderRadius: 16,
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
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 22px rgba(14,165,197,0.2)";
                e.currentTarget.style.borderColor = "rgba(14,165,197,0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(14,165,197,0.1)";
                e.currentTarget.style.borderColor = "rgba(14,165,197,0.28)";
              }
            }}
          >
            <span style={{ fontSize: 22, marginBottom: 4 }}>{intent.icon}</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 700, lineHeight: 1.2 }}>
              {intent.label}
            </span>
            <span style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.75, marginTop: 2 }}>
              {intent.desc}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Ambient Canvas animation ────────────────────────────────────────── */
export function AmbientCanvas() {
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
        g.addColorStop(0,   `hsla(${o.h},88%,68%,0.11)`);
        g.addColorStop(0.5, `hsla(${o.h},78%,58%,0.06)`);
        g.addColorStop(1,   `hsla(${o.h},68%,48%,0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* ─── Form slide animation wrapper ───────────────────────────────────── */
export function FormSlide({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) {
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

/* ─── Submit Button ───────────────────────────────────────────────────── */
export function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "15px 40px",
        borderRadius: 99,
        background: loading
          ? "rgba(14,165,197,0.4)"
          : "linear-gradient(135deg,#38bdf8,#0ea5c5)",
        color: "#fff",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize: "1rem",
        letterSpacing: "0.03em",
        border: "none",
        cursor: loading ? "not-allowed" : "pointer",
        boxShadow: loading ? "none" : "0 8px 28px rgba(14,165,197,0.4)",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        if (!loading) {
          e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,197,0.5)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(14,165,197,0.4)";
      }}
    >
      {loading ? (
        <>
          <svg
            style={{ animation: "spin 0.8s linear infinite" }}
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          Sending…
        </>
      ) : (
        <>
          Send Request
          <svg width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </>
      )}
    </button>
  );
}

/* ─── Close (X) button ────────────────────────────────────────────────── */
export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
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
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.12) rotate(90deg)";
        e.currentTarget.style.background = "rgba(14,165,197,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
        e.currentTarget.style.background = "rgba(14,165,197,0.08)";
      }}
    >
      <X size={15} />
    </button>
  );
}

/* ─── Success Screen ──────────────────────────────────────────────────── */
export function SuccessScreen({ onBack }: { onBack: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <div style={{
      display: "flex", flexDirection: "column", minHeight: "100vh",
      background: "linear-gradient(160deg,#f0f9ff,#e0f2fe,#bae6fd)",
    }}>
      <Navbar />
      <div style={{
        flexGrow: 1, display: "flex",
        alignItems: "center", justifyContent: "center",
        padding: "40px 20px",
      }}>
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
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700, fontSize: "2rem",
            color: "#0c4a6e", marginBottom: 12, letterSpacing: "-0.02em",
          }}>
            Message Sent! 🎉
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem", color: "#0369a1",
            lineHeight: 1.7, marginBottom: 34, opacity: 0.85,
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
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "0.95rem",
              border: "none", cursor: "pointer",
              boxShadow: "0 8px 28px rgba(14,165,197,0.38)",
              transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06) translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1) translateY(0)"; }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}