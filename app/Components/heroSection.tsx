'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(160deg, #e0f7ff 0%, #bae6fd 45%, #e0f7ff 100%)',
        padding: '80px 5% 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -100, left: -100,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, right: -80,
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14,165,197,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        gap: 70, flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {/* Text side */}
        <div style={{
          flex: '1 1 420px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.95s cubic-bezier(0.22,1,0.36,1)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(14,165,197,0.28)',
            borderRadius: 50, padding: '6px 18px', marginBottom: 26, backdropFilter: 'blur(8px)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0ea5c5', display: 'inline-block', animation: 'pulse 1.8s infinite' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: '#0ea5c5', letterSpacing: 1.2, textTransform: 'uppercase' }}>
              Web Design &amp; Development
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 5vw, 62px)',
            fontWeight: 700, color: '#0c4a6e', lineHeight: 1.15, margin: '0 0 20px',
          }}>
            Beautiful Websites
            <br />
            <span style={{ color: '#0ea5c5', fontStyle: 'italic' }}>Built for Your Brand</span>
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 17, color: '#0369a1',
            lineHeight: 1.8, margin: '0 0 36px', maxWidth: 480, opacity: 0.85,
          }}>
            I offer a range of services to cater for brands at all stages of their
            journey. Can&apos;t find something that is quite right? I&apos;m always happy to
            provide a bespoke quote tailored to you.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, #38bdf8, #0ea5c5)',
                color: '#fff', padding: '14px 30px', borderRadius: 50,
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 6px 22px rgba(14,165,197,0.38)',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 12px 32px rgba(14,165,197,0.52)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 6px 22px rgba(14,165,197,0.38)';
              }}
            >
              View Services →
            </a>
            <a
              href="tel:08107387326"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)',
                color: '#0c4a6e', padding: '14px 30px', borderRadius: 50,
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                border: '2px solid rgba(14,165,197,0.3)',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.borderColor = 'rgba(14,165,197,0.6)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(14,165,197,0.3)';
              }}
            >
              Book a Meeting
            </a>
          </div>
        </div>

        {/* Image side */}
        <div style={{
          flex: '0 0 auto',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 1s cubic-bezier(0.22,1,0.36,1) 0.2s',
          position: 'relative',
        }}>
          <div
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
            style={{
              width: 360, height: 440,
              borderRadius: imgHovered ? '24px' : '60% 40% 55% 45% / 50% 50% 50% 50%',
              overflow: 'hidden',
              boxShadow: imgHovered ? '0 30px 80px rgba(14,165,197,0.35)' : '0 30px 80px rgba(14,165,197,0.2)',
              border: imgHovered ? '5px solid white' : '5px solid transparent',
              transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              boxSizing: 'border-box',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            <Image
              src="/marvelsuit.jfif"
              alt="Marvel — Web Designer & Developer"
              fill
              sizes="360px"
              style={{
                objectFit: 'cover',
                transform: imgHovered ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          </div>

          {/* Floating badge */}
          <div style={{
            position: 'absolute', bottom: 18, right: -18,
            background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(14,165,197,0.2)', borderRadius: 16,
            padding: '10px 14px',
            boxShadow: '0 8px 32px rgba(14,165,197,0.14)',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative', border: '2px solid rgba(14,165,197,0.3)' }}>
              <Image src="/marvellaunch.jfif" alt="Marvel" fill sizes="36px" style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#0369a1', fontWeight: 600 }}>
              ⭐ 10+ Happy Clients
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}