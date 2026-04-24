'use client';

import { useEffect, useRef, useState } from 'react';
import type { SkillCategory } from './skills';
import SkillCard from './skillsCard';

type Props = {
  category: SkillCategory;
  index: number;
};

export default function SkillsCategory({ category, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setHeaderVisible(true);
          setTimeout(() => setVisible(true), 120);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
        border: `1px solid rgba(255,255,255,0.08)`,
        borderRadius: 24,
        padding: '32px 28px',
        opacity: headerVisible ? 1 : 0,
        transform: headerVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Category header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          {/* Accent line */}
          <div
            style={{
              width: 3,
              height: 32,
              borderRadius: 99,
              background: `linear-gradient(180deg, ${category.accentHex}, ${category.accentHex}44)`,
              flexShrink: 0,
            }}
          />
          <div>
            {/* Category icon + title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <span
                style={{
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  color: category.accentHex,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {category.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  fontWeight: 700,
                  color: '#fff',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                {category.title}
              </h3>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: 'rgba(255,255,255,0.4)',
                margin: 0,
                letterSpacing: '0.04em',
              }}
            >
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Thin divider */}
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, ${category.accentHex}44, transparent)`,
            marginTop: 16,
          }}
        />
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
          gap: 12,
        }}
      >
        {category.skills.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            accentHex={category.accentHex}
            index={i}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}