'use client';

import { useScrollReveal  } from "@/app/hooks/usescrollreveal";

type Props = {
  children: React.ReactNode;
};

export default function StoryBlock({ children }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="relative my-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(12px)',
          border: '0.5px solid rgba(186,230,255,0.4)',
          borderRadius: '1rem',
          padding: '2.5rem',
        }}
      >
        {children}
      </div>
    </div>
  );
}