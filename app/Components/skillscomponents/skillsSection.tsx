'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { skillCategories } from './skillsdata';
import SkillsCategory from './skillsCategory';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function SkillsSection() {
  const hero = useInView(0.05);

  return (
    <section
      style={{
        background: 'linear-gradient(160deg, #060d1a 0%, #0a1628 35%, #060d1a 70%, #0c1020 100%)',
        padding: '100px 5% 120px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Atmospheric blobs ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: -200, left: '10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', bottom: -150, right: '8%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

        {/* ── Section header ── */}
        <div
          ref={hero.ref}
          style={{
            textAlign: 'center',
            marginBottom: 72,
            opacity: hero.visible ? 1 : 0,
            transform: hero.visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(14,165,233,0.1)',
            border: '1px solid rgba(14,165,233,0.25)',
            borderRadius: 50, padding: '6px 18px', marginBottom: 24,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block' }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              fontWeight: 700, color: '#38bdf8',
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Capabilities &amp; Expertise
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.1, letterSpacing: '-0.02em',
              margin: '0 0 18px',
            }}
          >
            More Than a{' '}
            <span style={{
              background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              Frontend Dev
            </span>
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 16, color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.8, maxWidth: 540, margin: '0 auto',
          }}>
            A versatile professional with deep technical roots and real-world
            capabilities across engineering, data, operations, and people.
          </p>

          {/* Legend */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 24, marginTop: 36, flexWrap: 'wrap',
          }}>
            {[
              { dots: 5, label: 'Expert',       color: '#0ea5e9' },
              { dots: 4, label: 'Advanced',      color: '#10b981' },
              { dots: 3, label: 'Intermediate',  color: '#f59e0b' },
            ].map(({ dots, label, color }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[1,2,3,4,5].map((d) => (
                    <div key={d} style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: d <= dots ? color : 'rgba(255,255,255,0.12)',
                    }} />
                  ))}
                </div>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11, color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.06em',
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Categories grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillsCategory key={category.id} category={category} index={i} />
          ))}
        </div>

        {/* ── Secondary pills strip ── */}
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 18,
          }}>
            Also comfortable with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['Node.js', 'Redux Toolkit', 'REST APIs', 'Framer Motion', 'PostgreSQL',
              'Vercel', 'Figma', 'Shadcn/ui', 'Docker'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12, fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '6px 14px', borderRadius: 99,
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = '#38bdf8';
                  el.style.borderColor = 'rgba(14,165,233,0.35)';
                  el.style.background = 'rgba(14,165,233,0.08)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'rgba(255,255,255,0.45)';
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                  el.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/about"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(14,165,233,0.12)',
              border: '1px solid rgba(14,165,233,0.3)',
              color: '#38bdf8',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, fontWeight: 700,
              padding: '14px 28px', borderRadius: 16,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(14,165,233,0.2)';
              el.style.borderColor = 'rgba(14,165,233,0.55)';
              el.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'rgba(14,165,233,0.12)';
              el.style.borderColor = 'rgba(14,165,233,0.3)';
              el.style.transform = 'translateY(0)';
            }}
          >
            See full profile &amp; story
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}