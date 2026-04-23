'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/app/hooks/useInView';

type Props = {
  icon: ReactNode;
  title: string;
  body: string;
  delay: number;
};

export default function ValueCard({ icon, title, body, delay }: Props) {
  const { ref, visible } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white/70 backdrop-blur rounded-2xl border border-sky-100 p-7 hover:shadow-md hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-500 mb-5">
        {icon}
      </div>
      <div className="text-base font-bold text-slate-800 mb-2">{title}</div>
      <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
    </div>
  );
}