'use client';

import { useScrollReveal } from '@/app/hooks/usescrollreveal';

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealBlock({ children, className = '', delay = 0 }: Props) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}