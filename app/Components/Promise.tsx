"use client";

import { useRef, useState, useEffect } from "react";

/* ─── Marvel.dev Promise data ────────────────────────────────── */
const promises = [
  {
    id: "transparency",
    title: "Transparency",
    description:
      "Working with me means consistent delivery, transparent communication, and a relentless focus on quality. I don&apos;t just build websites—I partner with you from the first conversation through launch and beyond, ensuring the final product exceeds expectations and drives real results.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    bg: "#fef3f8",
    accent: "#e879a0",
    rotate: "-2.5deg",
    delay: 0,
  },
  {
    id: "simplicity",
    title: "Simplicity",
    description:
      "I prioritize simplicity at every stage. From planning to launch, I keep the process clear, structured, and easy to follow—without overwhelming you with technical jargon. You&apos;ll always feel informed, confident, and comfortable asking questions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    bg: "#fef9ec",
    accent: "#f59e0b",
    rotate: "1.8deg",
    delay: 80,
  },
  {
    id: "impact",
    title: "Impact",
    description:
      "Your website should do more than exist—it should perform. I design with a clear focus on your business goals, building impactful, high-performing solutions that attract attention and drive real growth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    bg: "#f0f9ff",
    accent: "#0ea5e9",
    rotate: "-1.5deg",
    delay: 160,
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Exceptional websites are the result of true collaboration. You bring the knowledge of your business, and I bring the technical and creative expertise—together, we build a website that not only matches your vision but elevates it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bg: "#fdf4ff",
    accent: "#a855f7",
    rotate: "2.2deg",
    delay: 240,
  },
  {
    id: "aesthetics",
    title: "Aesthetics",
    description:
      "Standing out in today&apos;s digital space requires more than aesthetics—it requires intention. I bring creativity and strategy together to design unique experiences that capture your brand&apos;s identity and stay with users long after they leave.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5"/><circle cx="19" cy="13" r="2.5"/><circle cx="6" cy="14" r="2.5"/><circle cx="10.5" cy="19.5" r="2.5"/><path d="M13.5 9L19 10.5M13.5 9L10.5 17M19 15.5L10.5 17M8.5 13.5L10.5 17"/>
      </svg>
    ),
    bg: "#fff7f0",
    accent: "#f97316",
    rotate: "-2deg",
    delay: 320,
  },
  {
    id: "support",
    title: "Support",
    description:
      "I don&apos;t disappear after delivery. From launch and beyond, I stay involved—providing support, updates, and guidance whenever you need it. Your success isn&apos;t a one-time goal; it&apos;s a long-term commitment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    bg: "#f0fdf4",
    accent: "#22c55e",
    rotate: "1.5deg",
    delay: 400,
  },
];

/* ─── Promise Card ───────────────────────────────────────────── */
function PromiseCard({
  item,
  visible,
  isMobile,
}: {
  item: (typeof promises)[0];
  visible: boolean;
  index: number;
  isMobile: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMouse({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  // Disable tilt on mobile — too janky on touch
  const rx = hovered && !isMobile ? (mouse.y - 0.5) * -12 : 0;
  const ry = hovered && !isMobile ? (mouse.x - 0.5) * 12 : 0;

  // On mobile, flatten the rotate so stacked cards don't clip/overflow
  const baseRotate = isMobile ? "0deg" : item.rotate;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMouse({ x: 0.5, y: 0.5 }); }}
      onMouseMove={onMove}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-10px) scale(1.04) rotate(0deg)`
            : `perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1) rotate(${baseRotate})`
          : `perspective(900px) translateY(36px) scale(0.94) rotate(${baseRotate})`,
        transition: visible
          ? hovered
            ? `opacity 0.6s ease ${item.delay}ms, transform 0.1s ease-out, box-shadow 0.2s ease`
            : `opacity 0.6s ease ${item.delay}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease`
          : `opacity 0.6s ease ${item.delay}ms, transform 0.6s ease ${item.delay}ms`,
        boxShadow: hovered
          ? `0 28px 60px rgba(0,0,0,0.13), 0 6px 18px rgba(0,0,0,0.08)`
          : `0 6px 28px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)`,
        borderRadius: 18,
        background: item.bg,
        border: `1px solid rgba(0,0,0,0.06)`,
        padding: "28px 26px 26px",
        cursor: "default",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Cursor glow */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 18,
        background: `radial-gradient(180px circle at ${mouse.x * 100}% ${mouse.y * 100}%, ${item.accent}22, transparent 70%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s", pointerEvents: "none",
      }} />

      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        borderRadius: "18px 18px 0 0",
        background: `linear-gradient(90deg, transparent, ${item.accent}88, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.35s",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Icon + Title row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(255,255,255,0.7)",
            border: `1.5px solid ${item.accent}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.accent,
            flexShrink: 0,
            transform: hovered ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}>
            {item.icon}
          </div>

          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "0.78rem",
            color: "#071b2e",
            margin: 0,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}>
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: "0.82rem",
          color: "#3a4a5a",
          lineHeight: 1.7,
          margin: 0,
        }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function MyPromiseToYou() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,500&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.6; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        .promise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 24px;
        }

        /* 2-column on tablets */
        @media (max-width: 900px) {
          .promise-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 18px;
          }
        }

        /* 1-column on phones */
        @media (max-width: 560px) {
          .promise-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* Tighter section padding on mobile */
        @media (max-width: 640px) {
          .promise-section {
            padding: 64px 16px 80px !important;
          }
          .promise-header {
            margin-bottom: 36px !important;
          }
          .promise-footer {
            margin-top: 44px !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="promise-section"
        style={{
          position: "relative",
          padding: "96px 20px 110px",
          background: "linear-gradient(145deg, #ddf0fa 0%, #ebf7ff 38%, #f2faff 68%, #e4f3fd 100%)",
          overflow: "hidden",
        }}
      >
        {/* ── Atmospheric glows ── */}
        <div style={{ position: "absolute", width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 68%)", top: -230, left: -200, pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 65%)", bottom: -180, right: -160, pointerEvents: "none" }} />

        {/* ── Dot grid ── */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(14,165,233,0.1) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1160, margin: "0 auto" }}>

          {/* ── Header ── */}
          <div
            className="promise-header"
            style={{
              marginBottom: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(22px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "5px 14px", borderRadius: 99,
              background: "rgba(14,165,233,0.11)",
              border: "1px solid rgba(14,165,233,0.28)",
              marginBottom: 18,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0ea5e9", animation: "pulseRing 2.2s ease-out infinite" }} />
              <span style={{
                fontSize: "0.68rem", fontWeight: 600, color: "#0284c7",
                letterSpacing: "0.13em", textTransform: "uppercase" as const,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                What You Can Expect
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(2.1rem, 5vw, 3.5rem)",
              color: "#071b2e",
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              margin: 0,
            }}>
              My Promise to{" "}
              <em style={{ fontStyle: "italic", color: "#0ea5e9" }}>You…</em>
            </h2>
          </div>

          {/* ── Cards grid ── */}
          <div className="promise-grid">
            {promises.map((item, i) => (
              <PromiseCard key={item.id} item={item} visible={visible} index={i} isMobile={isMobile} />
            ))}
          </div>

          {/* ── Bottom note ── */}
          <div
            className="promise-footer"
            style={{
              marginTop: 60,
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
            }}
          >
            <p style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
              color: "#2a5a78",
              marginBottom: 26,
              letterSpacing: "-0.01em",
            }}>
              Ready to experience the Marvel.dev difference?
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "13px 32px", borderRadius: 99,
                background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: "0.87rem", letterSpacing: "0.04em",
                textDecoration: "none",
                boxShadow: "0 8px 30px rgba(14,165,233,0.38)",
                transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.07) translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 16px 42px rgba(14,165,233,0.46)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(14,165,233,0.38)";
              }}
            >
              Let&apos;s Work Together
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}