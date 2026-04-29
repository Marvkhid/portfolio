'use client';

import type { Category } from "./types";
    import { categories } from "./blogdata";

type Props = {
  active: Category;
  onChange: (c: Category) => void;
};

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '8px 18px',
              borderRadius: 99,
              border: isActive
                ? '1px solid rgba(14,165,233,0.6)'
                : '1px solid rgba(255,255,255,0.1)',
              background: isActive
                ? 'rgba(14,165,233,0.15)'
                : 'rgba(255,255,255,0.04)',
              color: isActive ? '#38bdf8' : 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              if (isActive) return;
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.22)';
              el.style.color = 'rgba(255,255,255,0.75)';
              el.style.background = 'rgba(255,255,255,0.07)';
            }}
            onMouseLeave={(e) => {
              if (isActive) return;
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(255,255,255,0.1)';
              el.style.color = 'rgba(255,255,255,0.45)';
              el.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}