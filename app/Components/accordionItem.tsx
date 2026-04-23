'use client';

import { useState } from 'react';
import type { FAQ } from '../services/types';

export default function AccordionItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderTop: '1px solid rgba(14,165,197,0.15)', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 8,
        }}
      >
        <span
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: '#0369a1' }}
        >
          {faq.q}
        </span>
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: '50%',
            background: open ? 'linear-gradient(135deg,#38bdf8,#0ea5c5)' : 'rgba(14,165,197,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.25s, transform 0.3s',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke={open ? '#fff' : '#0ea5c5'} strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="2" x2="6" y2="10" />
            <line x1="2" y1="6" x2="10" y2="6" />
          </svg>
        </span>
      </button>

      <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
        <div style={{ paddingBottom: 14 }}>
          {faq.isList ? (
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#0c4a6e', lineHeight: 1.65 }}>
              <p style={{ margin: '0 0 8px', opacity: 0.85 }}>{faq.prefix}</p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {faq.listItems?.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6, opacity: 0.85 }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #38bdf8, #0ea5c5)',
                      flexShrink: 0, marginTop: 1,
                    }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="2 5 4.5 7.5 8 3" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#0c4a6e', lineHeight: 1.65, margin: 0, opacity: 0.85 }}>
              {faq.a}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}