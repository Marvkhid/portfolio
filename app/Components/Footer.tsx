"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ─── Nav links ──────────────────────────────────────────────── */
const navLinks = [
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#promise" },
  { label: "Contact us", href: "#contact" },
];

/* ─── Social icons ───────────────────────────────────────────── */
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Marvkhid",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adeniyi-marvellous",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
    {
      label: "WhatsApp",
      href: "https://wa.me/2348107387326",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.647.863 5.09 2.32 7.06L4 29l7.164-2.285A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 21.818c-1.933 0-3.815-.52-5.45-1.503l-.39-.232-4.25 1.356 1.387-4.142-.254-.414A9.74 9.74 0 0 1 6.26 15c0-5.382 4.378-9.76 9.741-9.76 5.382 0 9.76 4.378 9.76 9.76 0 5.382-4.378 9.818-9.76 9.818zm5.376-7.297c-.294-.147-1.736-.857-2.006-.955-.27-.099-.467-.148-.664.148-.197.294-.763.955-.936 1.152-.173.197-.346.222-.64.074-.294-.147-1.24-.457-2.362-1.458-.873-.778-1.462-1.736-1.635-2.03-.173-.294-.018-.453.13-.6.133-.132.294-.346.44-.519.147-.173.197-.294.294-.49.099-.197.05-.37-.025-.518-.074-.147-.664-1.603-.91-2.195-.24-.578-.485-.5-.664-.51l-.566-.01c-.197 0-.518.074-.788.37-.27.294-1.03 1.006-1.03 2.45 0 1.445 1.055 2.84 1.202 3.037.147.197 2.078 3.172 5.037 4.445.705.305 1.255.487 1.684.624.707.226 1.35.194 1.858.118.567-.085 1.736-.709 1.98-1.394.246-.684.246-1.27.173-1.394-.074-.123-.27-.197-.566-.346z"/>
        </svg>
      ),
    },
  {
    label: "Twitter / X",
    href: "https://twitter.com/Marvel_Aden",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:adeniyimarv@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

/* ─── Social icon button ─────────────────────────────────────── */
function SocialBtn({ s }: { s: (typeof socials)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={s.href}
      target={s.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={s.label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 40, height: 40, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: hov ? "#0ea5e9" : "rgba(255,255,255,0.18)",
        border: `1.5px solid ${hov ? "#0ea5e9" : "rgba(255,255,255,0.35)"}`,
        color: hov ? "#fff" : "rgba(255,255,255,0.85)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "scale(1.18) translateY(-3px)" : "scale(1) translateY(0)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {s.icon}
    </Link>
  );
}

/* ─── Nav link ───────────────────────────────────────────────── */
function NavLink({ l }: { l: (typeof navLinks)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={l.href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: hov ? 500 : 300,
        fontSize: "0.82rem",
        color: hov ? "#fff" : "rgba(255,255,255,0.72)",
        textDecoration: "none",
        letterSpacing: "0.03em",
        transition: "color 0.2s ease, font-weight 0.2s ease",
        paddingLeft: hov ? 6 : 0,
        display: "inline-block",
      }}
    >
      {hov ? "→ " : ""}{l.label}
    </Link>
  );
}

/* ─── Main Footer ────────────────────────────────────────────── */
export default function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,500&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.55; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <footer
        ref={ref}
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* ── Wavy SVG top border ── */}
        <div style={{ display: "block", lineHeight: 0 }}>
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: 72, display: "block" }}
          >
            <path
              d="M0,40 C180,72 360,8 540,40 C720,72 900,8 1080,40 C1260,72 1380,24 1440,40 L1440,72 L0,72 Z"
              fill="#071828"
            />
          </svg>
        </div>

        {/* ── Footer body ── */}
        <div
          style={{
            background: "#071828",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Atmospheric glows */}
          <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 68%)", top: -200, left: -160, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(3,105,161,0.1) 0%, transparent 65%)", bottom: -160, right: -130, pointerEvents: "none" }} />

          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(14,165,233,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

          <div
            style={{
              position: "relative",
              maxWidth: 1160,
              margin: "0 auto",
              padding: "56px 24px 40px",
            }}
          >
            {/* ── Main grid: links | brand | socials ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: 40,
                alignItems: "start",
                marginBottom: 52,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(22px)",
                transition: "opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s",
              }}
            >
              {/* LEFT — nav links */}
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.68rem",
                  color: "#0ea5e9",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}>
                  Helpful Links
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {navLinks.map((l) => <NavLink key={l.label} l={l} />)}
                </div>
              </div>

              {/* CENTER — brand */}
              <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                {/* Logo wordmark */}
                <div>
                  <div style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 300,
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    color: "rgba(255,255,255,0.95)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}>
                    marvel
                  </div>
                  <div style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 500,
                    fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    .dev
                  </div>
                </div>

                {/* Shimmer underline */}
                <div style={{
                  height: 2,
                  width: 80,
                  borderRadius: 99,
                  background: "linear-gradient(90deg, transparent, #0ea5e9, #38bdf8, transparent)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 2.5s linear infinite",
                }} />

                {/* Tagline */}
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}>
                  Web Developer
                </p>

                {/* Open-to-work pill */}
                <div style={{
                  marginTop: 6,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "5px 14px",
                  borderRadius: 99,
                  background: "rgba(14,165,233,0.13)",
                  border: "1px solid rgba(14,165,233,0.3)",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "pulseRing 2s ease-out infinite" }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.75)",
                    letterSpacing: "0.06em",
                  }}>
                    Open to opportunities
                  </span>
                </div>
              </div>

              {/* RIGHT — socials + short bio */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 20 }}>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                  textAlign: "right",
                  maxWidth: 240,
                }}>
                  Building scalable, clean, and modern web experiences — focused on performance, usability, and real-world impact.
                </p>

                {/* Social icons */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {socials.map((s) => <SocialBtn key={s.label} s={s} />)}
                </div>
              </div>
            </div>

            {/* ── Divider ── */}
            <div style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.3), transparent)",
              marginBottom: 28,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.7s ease 0.4s",
            }} />

            {/* ── Bottom bar ── */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
                transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
              }}
            >
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.04em",
                margin: 0,
              }}>
                © {new Date().getFullYear()} Adeniyi Marvellous Emmanuel · All rights reserved.
              </p>

              <p style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "0.75rem",
                color: "rgba(14,165,233,0.55)",
                margin: 0,
                letterSpacing: "0.02em",
              }}>
                Designed &amp; built by Marvel.dev
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}