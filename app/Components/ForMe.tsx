"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";


/* ─── Marvel.dev — Who I Work With data ─────────────────────── */
const cards = [
  {
    id: "creators",
    title: "Content Creators",
    description:
      "You've spent hours trying to build a portfolio that looks as good as your work — but it still doesn't. Let me fix that for you.",
    cta: "Let's Fix That",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    bg: "#e8f6ff",
    accent: "#0ea5e9",
    delay: 0,
  },
  {
    id: "brand",
    title: "Personal Brand",
    description:
      "You know exactly who you are and what you offer — but your site doesn't say it yet. I'll build the digital identity that matches your vision.",
    cta: "Let's Launch It",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    bg: "#dff4ff",
    accent: "#0284c7",
    delay: 120,
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description:
      "You want a store that handles products, carts, and payments seamlessly — so you can focus on selling, not debugging broken integrations.",
    cta: "Let's Upgrade It",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    bg: "#e0f2fe",
    accent: "#0369a1",
    delay: 240,
  },
  {
    id: "service",
    title: "Service Providers",
    description:
      "You want to show dream clients exactly how great you are — with a site that turns visitors into booked appointments, consistently.",
    cta: "Let's Build It",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bg: "#bfdbfe",
    accent: "#1d4ed8",
    delay: 360,
  },
];

/* ─── Tilt Card ──────────────────────────────────────────────── */
function TiltCard({
  card,
  visible,
}: {
  card: (typeof cards)[0];
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    });
  };

  const rx = hovered ? (mouse.y - 0.5) * -14 : 0;
  const ry = hovered ? (mouse.x - 0.5) * 14 : 0;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMouse({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={onMove}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px) scale(1.035)`
            : "perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)"
          : "perspective(900px) translateY(32px) scale(0.95)",
        transition: visible
          ? hovered
            ? `opacity 0.65s ease ${card.delay}ms, transform 0.1s ease-out, box-shadow 0.2s ease`
            : `opacity 0.65s ease ${card.delay}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease`
          : `opacity 0.65s ease ${card.delay}ms, transform 0.65s ease ${card.delay}ms`,
        boxShadow: hovered
          ? `0 30px 65px rgba(14,165,233,0.24), 0 6px 20px rgba(14,165,233,0.12)`
          : `0 4px 22px rgba(14,165,233,0.08)`,
        borderRadius: 22,
        background: card.bg,
        border: `1px solid rgba(14,165,233,0.2)`,
        padding: "26px 24px 22px",
        cursor: "default",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cursor-following glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 22,
          background: `radial-gradient(200px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(14,165,233,0.16), transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          borderRadius: "22px 22px 0 0",
          background: `linear-gradient(90deg, transparent, ${card.accent}66, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Icon */}
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            background: "rgba(255,255,255,0.85)",
            border: `1px solid rgba(14,165,233,0.22)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: card.accent,
            marginBottom: 16,
            transform: hovered
              ? "scale(1.14) rotate(-5deg)"
              : "scale(1) rotate(0deg)",
            transition:
              "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {card.icon}
        </div>

        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: "1.12rem",
            color: "#071b2e",
            marginBottom: 10,
            letterSpacing: "-0.02em",
          }}
        >
          {card.title}
        </h3>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "0.82rem",
            color: "#3a5a72",
            lineHeight: 1.68,
            marginBottom: 20,
          }}
        >
          {card.description}
        </p>

        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 20px",
            borderRadius: 99,
            background: hovered ? card.accent : "#071b2e",
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.77rem",
            letterSpacing: "0.04em",
            border: "none",
            cursor: "pointer",
            transition:
              "background 0.3s ease, transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
        >
          {card.cta}
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function ThisIsForYou() {
  const [visible, setVisible] = useState(false);
  const [imgIn, setImgIn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setImgIn(true), 350);
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,500&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.96); opacity: 0.55; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.96); opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .marvelbtn:hover { opacity: 0.9; transform: scale(1.07) translateY(-2px) !important; }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          position: "relative",
          padding: "96px 20px 108px",
          background:
            "linear-gradient(145deg, #ddf0fa 0%, #ebf7ff 38%, #f2faff 68%, #e4f3fd 100%)",
          overflow: "hidden",
        }}
      >
        {/* ── Atmospheric glows ── */}
        <div style={{ position: "absolute", width: 650, height: 650, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.13) 0%, transparent 68%)", top: -240, left: -210, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.11) 0%, transparent 65%)", bottom: -190, right: -170, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(186,230,253,0.42) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

        {/* ── Dot grid ── */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(14,165,233,0.11) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1160, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div
            style={{
              marginBottom: 52,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 14px",
                borderRadius: 99,
                background: "rgba(14,165,233,0.11)",
                border: "1px solid rgba(14,165,233,0.28)",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#0ea5e9",
                  animation: "pulseRing 2.2s ease-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  color: "#0284c7",
                  letterSpacing: "0.13em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Who I Work With
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(2.1rem, 5vw, 3.5rem)",
                color: "#071b2e",
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                margin: 0,
              }}
            >
              This Is For You{" "}
              <em style={{ fontStyle: "italic", color: "#0ea5e9" }}>If…</em>
            </h2>
          </div>

          {/* ── 3-col layout ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr clamp(190px, 20vw, 272px) 1fr",
              gap: 26,
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <TiltCard card={cards[0]} visible={visible} />
              <TiltCard card={cards[2]} visible={visible} />
            </div>

            {/* CENTER — Marvel photo */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Pulse rings */}
              <div style={{ position: "absolute", inset: -16, borderRadius: 30, border: "2px solid rgba(14,165,233,0.28)", animation: "pulseRing 3s ease-out infinite", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: -32, borderRadius: 38, border: "1.5px solid rgba(14,165,233,0.14)", animation: "pulseRing 3s ease-out infinite 1s", pointerEvents: "none" }} />

              {/* Spinning dashes */}
              <div style={{ position: "absolute", top: -22, right: -22, width: 52, height: 52, borderRadius: "50%", border: "2px dashed rgba(14,165,233,0.38)", animation: "spinSlow 14s linear infinite", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -18, left: -18, width: 36, height: 36, borderRadius: "50%", border: "2px dashed rgba(2,132,199,0.28)", animation: "spinReverse 9s linear infinite", pointerEvents: "none" }} />

              {/* Photo */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  borderRadius: 26,
                  overflow: "hidden",
                  border: "2.5px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 32px 72px rgba(14,165,233,0.28), 0 8px 26px rgba(0,0,0,0.1)",
                  opacity: visible ? 1 : 0,
                  transform: imgIn ? "scale(1) translateY(0)" : "scale(0.86) translateY(20px)",
                  transition:
                    "opacity 0.85s ease 0.25s, transform 1s cubic-bezier(0.34,1.56,0.64,1) 0.25s",
                  animation: imgIn ? "floatY 5.5s ease-in-out infinite 1.2s" : "none",
                }}
              >
                <Image
                  src="/coren.jfif"
                  alt="Marvel — Full-Stack Developer"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority
                />
                {/* Bottom gradient over photo */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "42%",
                    background:
                      "linear-gradient(to top, rgba(7,27,46,0.38), transparent)",
                  }}
                />
                {/* Name badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    borderRadius: 99,
                    padding: "6px 16px",
                    whiteSpace: "nowrap",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.7rem",
                    color: "#0284c7",
                    letterSpacing: "0.04em",
                    border: "1px solid rgba(14,165,233,0.28)",
                    boxShadow: "0 4px 16px rgba(14,165,233,0.18)",
                  }}
                >
                  Marvel.dev ✦ Front-end Dev
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <TiltCard card={cards[1]} visible={visible} />
              <TiltCard card={cards[3]} visible={visible} />
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div
            style={{
              marginTop: 62,
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
            }}
          >
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(1rem, 2.4vw, 1.28rem)",
                color: "#2a5a78",
                marginBottom: 26,
                letterSpacing: "-0.01em",
              }}
            >
              Sound like you? Let&apos;s build something exceptional together.
            </p>
            <a
              href="#contact"
              className="marvelbtn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 32px",
                borderRadius: 99,
                background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.87rem",
                letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(14,165,233,0.38)",
                transition:
                  "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, opacity 0.2s",
              }}
            >
              Start a Project with Marvel
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}