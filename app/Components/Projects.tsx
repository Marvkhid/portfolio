"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

/* ─── Data ──────────────────────────────────────────────────── */
const projects = [
  {
    name: "Boldo",
    image: "/boldo.png",
    description:
      "Improves website logistics and optimises user conversion flow for modern SaaS products.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://boldo-ml9g.vercel.app/",
    accent: "#2b9de8",
    index: "01",
  },
  {
    name: "Ekiti Tourism Project",
    image: "/ekiti.png",
    description:
      "Tourism platform showcasing destinations and cultural heritage across Ekiti State.",
    tech: ["Next.js", "MongoDB", "Clerk", "Tailwind"],
    link: "https://ekiti-tourist.vercel.app/",
    accent: "#0ea5e9",
    index: "02",
  },
  {
    name: "Babs Security",
    image: "/babs.png",
    description:
      "Secure monitoring system with identity-based access control and real-time alerts.",
    tech: ["React", "Node.js", "Firebase"],
    link: "https://babs-security-z57b.vercel.app/",
    accent: "#38bdf8",
    index: "03",
  },
  {
    name: "Online Education Platform",
    image: "/online.png",
    description:
      "Learning platform for structured courses, assessments, and professional certification.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    link: "https://online-education-page.vercel.app/",
    accent: "#7dd3fc",
    index: "04",
  },
  {
    name: "TravelSite",
    image: "/travel.png",
    description:
      "AI-assisted travel planning and destination discovery system with smart itineraries.",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    link: "https://travelsite-afpub12m4-adeniyi-marvellous-projects.vercel.app/",
    accent: "#0284c7",
    index: "05",
  },
  {
    name: "Curano",
    image: "/curano.png",
    description:
      "Healthcare dashboard with advanced analytics, patient management, and clinical insights.",
    tech: ["Next.js", "TypeScript", "Vercel"],
    link: "https://curano1.vercel.app",
    accent: "#bae6fd",
    index: "06",
  },
];

/* ─── Types ──────────────────────────────────────────────────── */
type Project = (typeof projects)[number];

/* ─── Helpers ────────────────────────────────────────────────── */
function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

/* ─── Card ───────────────────────────────────────────────────── */
function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    []
  );

  const rotateX = hovered ? (mousePos.y - 0.5) * -10 : 0;
  const rotateY = hovered ? (mousePos.x - 0.5) * 10 : 0;
  const glowX = mousePos.x * 100;
  const glowY = mousePos.y * 100;

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMousePos({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered
          ? `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`
          : "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
        transition: hovered
          ? "transform 0.12s ease-out, box-shadow 0.3s ease"
          : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s ease",
        boxShadow: hovered
          ? "0 30px 80px rgba(14,165,233,0.22), 0 8px 24px rgba(14,165,233,0.12), 0 2px 6px rgba(0,0,0,0.06)"
          : "0 4px 24px rgba(14,165,233,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      }}
      className="relative block rounded-2xl overflow-hidden no-underline"
    >
      {/* Glass card body */}
      <div
        className="relative h-full rounded-2xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(24px) saturate(1.6)",
          WebkitBackdropFilter: "blur(24px) saturate(1.6)",
          border: "1px solid rgba(255,255,255,0.88)",
        }}
      >
        {/* Cursor glow */}
        <div
          className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(14,165,233,0.13), transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Image */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority={priority}
            className="object-cover"
            style={{
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          />
          {/* Image overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(235,248,255,0) 40%, rgba(235,248,255,0.35) 100%)",
            }}
          />
          {/* Index tag */}
          <div
            className="absolute top-3 right-3 z-10 text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              color: "#0284c7",
              letterSpacing: "0.06em",
              border: "1px solid rgba(14,165,233,0.25)",
            }}
          >
            {project.index}
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5 space-y-3">
          {/* Title row */}
          <div className="flex items-start justify-between gap-2">
            <h3
              className="font-semibold leading-tight"
              style={{
                fontSize: "1.05rem",
                color: "#0a1f35",
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
              }}
            >
              {project.name}
            </h3>
            {/* Arrow */}
            <span
              className="mt-0.5 flex-shrink-0 transition-all duration-300"
              style={{
                color: "#0ea5e9",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
                fontSize: "1rem",
              }}
            >
              ↗
            </span>
          </div>

          <p
            className="leading-relaxed"
            style={{
              fontSize: "0.8rem",
              color: "#4a6580",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.68rem",
                  padding: "3px 10px",
                  borderRadius: 99,
                  background: "rgba(14,165,233,0.09)",
                  color: "#0284c7",
                  border: "1px solid rgba(14,165,233,0.22)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  fontFamily: "'DM Sans', sans-serif",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Shimmer divider */}
          <div
            className="transition-all duration-500"
            style={{
              height: 1,
              marginTop: 4,
              background: hovered
                ? "linear-gradient(90deg, transparent, rgba(14,165,233,0.4), transparent)"
                : "rgba(14,165,233,0.1)",
            }}
          />

          {/* CTA */}
          <div
            className="flex items-center gap-1.5 transition-all duration-300"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#0ea5e9",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(5px)",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            <span>View Project</span>
            <span style={{ fontSize: "0.85rem" }}>→</span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const perView =
    typeof window !== "undefined"
      ? window.innerWidth < 768
        ? 1
        : window.innerWidth < 1100
        ? 2
        : 3
      : 3;

  const maxIndex = Math.max(0, projects.length - perView);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(clamp(idx, 0, maxIndex));
      setTimeout(() => setIsAnimating(false), 650);
    },
    [isAnimating, maxIndex]
  );

  const next = useCallback(
    () => goTo(current >= maxIndex ? 0 : current + 1),
    [current, maxIndex, goTo]
  );
  const prev = useCallback(
    () => goTo(current <= 0 ? maxIndex : current - 1),
    [current, maxIndex, goTo]
  );

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    setMounted(true);
    resetAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [resetAuto]);

  /* drag */
  const onDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStart(clientX);
    setDragOffset(0);
  };
  const onDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - dragStart);
  };
  const onDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -55) { next(); resetAuto(); }
    else if (dragOffset > 55) { prev(); resetAuto(); }
    setDragOffset(0);
  };

  const cardWidthPct = 100 / perView;
  const gapPx = 22;
  const translateX =
    -current * (cardWidthPct / 100) * (trackRef.current?.offsetWidth ?? 0) -
    current * gapPx +
    (isDragging ? dragOffset : 0);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,300&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <section
        className="relative py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
        style={{
          background:
            "linear-gradient(140deg, #ddf0fa 0%, #eaf6ff 35%, #f4fbff 65%, #e8f4fd 100%)",
          minHeight: "100vh",
        }}
      >
        {/* ── Atmospheric blobs ── */}
        <div
          className="pointer-events-none absolute"
          style={{
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 68%)",
            top: -260,
            left: -220,
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 65%)",
            bottom: -200,
            right: -180,
          }}
        />
        <div
          className="pointer-events-none absolute"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(186,230,253,0.35) 0%, transparent 70%)",
            top: "45%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />

        {/* ── Subtle grid texture ── */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.04) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* ── Header ── */}
          <div
            className="mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  height: 1,
                  width: 40,
                  background:
                    "linear-gradient(90deg, transparent, #0ea5e9)",
                }}
              />
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  color: "#0284c7",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Selected Work
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 300,
                    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    color: "#071b2e",
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Happy{" "}
                  <em
                    style={{
                      fontStyle: "italic",
                      color: "#0ea5e9",
                    }}
                  >
                    Brands
                  </em>
                </h2>
                <p
                  className="mt-3 max-w-md"
                  style={{
                    fontSize: "0.9rem",
                    color: "#4a6580",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.65,
                  }}
                >
                  That trusted us with their web applications engineered for performance,
                  scalability, and lasting user experience.
                </p>
              </div>

              {/* Counter */}
              <div
                className="flex-shrink-0"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 300,
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  color: "rgba(14,165,233,0.18)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* ── Carousel ── */}
          <div
            className="overflow-hidden rounded-2xl"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.2s",
            }}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseMove={(e) => onDragMove(e.clientX)}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
            onTouchEnd={onDragEnd}
          >
            <div
              ref={trackRef}
              className="flex"
              style={{
                gap: gapPx,
                transform: `translateX(${translateX}px)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.62s cubic-bezier(0.25,0.46,0.45,0.94)",
                willChange: "transform",
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.name}
                  style={{
                    flex: `0 0 calc(${cardWidthPct}% - ${(gapPx * (perView - 1)) / perView}px)`,
                    minWidth: 0,
                  }}
                >
                  <ProjectCard project={p} priority={i < perView} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Controls ── */}
          <div
            className="mt-10 flex items-center justify-between"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 0.8s ease 0.35s",
            }}
          >
            {/* Dot track */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetAuto(); }}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    height: 6,
                    width: i === current ? 28 : 6,
                    borderRadius: 99,
                    background:
                      i === current
                        ? "#0ea5e9"
                        : "rgba(14,165,233,0.22)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition:
                      "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => { prev(); resetAuto(); }}
                aria-label="Previous"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid rgba(14,165,233,0.3)",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0284c7",
                  fontSize: "1.1rem",
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "#0ea5e9";
                  el.style.color = "#fff";
                  el.style.transform = "scale(1.1)";
                  el.style.borderColor = "#0ea5e9";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(255,255,255,0.7)";
                  el.style.color = "#0284c7";
                  el.style.transform = "scale(1)";
                  el.style.borderColor = "rgba(14,165,233,0.3)";
                }}
              >
                ←
              </button>
              <button
                onClick={() => { next(); resetAuto(); }}
                aria-label="Next"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid rgba(14,165,233,0.3)",
                  background: "#0ea5e9",
                  backdropFilter: "blur(10px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.1rem",
                  transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1.1)";
                  el.style.background = "#0284c7";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "scale(1)";
                  el.style.background = "#0ea5e9";
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}