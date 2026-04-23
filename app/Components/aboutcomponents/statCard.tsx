'use client';

import type { ReactNode } from 'react';
import { useInView } from '@/app/hooks/useInView';

type Props = {
  value: string;
  label: string;
  icon: ReactNode;
};

export default function StatCard({ value, label, icon }: Props) {
  const { ref, visible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`bg-white/70 backdrop-blur rounded-2xl border border-sky-100 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:shadow-sky-100 hover:-translate-y-1 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="text-sky-400">{icon}</div>
      <div className="text-3xl font-bold text-slate-800 tracking-tight">{value}</div>
      <div className="text-xs text-slate-400 tracking-wide uppercase">{label}</div>
    </div>
  );
}