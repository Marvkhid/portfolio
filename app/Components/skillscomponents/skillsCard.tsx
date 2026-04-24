'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { Skill } from '@/app/Components/skillscomponents/skills';
import { levelConfig } from '@/app/Components/skillscomponents/skillsdata';
type Props = {
  skill: Skill;
  accentHex: string;
  index: number;
  visible: boolean;
};

export default function SkillCard({ skill, accentHex, index, visible }: Props) {
  const [hovered, setHovered] = useState(false);
  const level = levelConfig[skill.level];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `rgba(255,255,255,0.07)`
          : `rgba(255,255,255,0.04)`,
        border: `1px solid ${hovered ? accentHex + '55' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16,
        padding: '16px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        cursor: 'default',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: `opacity 0.5s ease ${0.1 + index * 0.06}s, transform 0.5s ease ${0.1 + index * 0.06}s, background 0.25s, border-color 0.25s, box-shadow 0.25s`,
        boxShadow: hovered ? `0 8px 28px ${accentHex}22` : 'none',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: hovered ? `${accentHex}22` : 'rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.25s',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {skill.useImage ? (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={28}
            height={28}
            className="object-contain"
            style={{ maxWidth: 28, maxHeight: 28 }}
          />
        ) : (
          <span style={{ fontSize: 22 }}>{skill.icon}</span>
        )}
      </div>

      {/* Name */}
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: hovered ? '#fff' : 'rgba(255,255,255,0.75)',
          textAlign: 'center',
          lineHeight: 1.3,
          transition: 'color 0.2s',
          letterSpacing: '0.02em',
        }}
      >
        {skill.name}
      </span>

      {/* Level dots */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: dot <= level.bars
                ? accentHex
                : 'rgba(255,255,255,0.12)',
              transition: 'background 0.2s',
              boxShadow: dot <= level.bars && hovered
                ? `0 0 6px ${accentHex}`
                : 'none',
            }}
          />
        ))}
      </div>

      {/* Level label — shows on hover */}
      <span
        style={{
          fontSize: 10,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          color: accentHex,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'opacity 0.2s, transform 0.2s',
          height: 14,
        }}
      >
        {level.label}
      </span>
    </div>
  );
}