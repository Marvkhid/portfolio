'use client';

import { useInView } from "@/app/hooks/useInView";
type Props = {
  year: string;
  title: string;
  company: string;
  desc: string;
  delay: number;
};

export default function TimelineItem({ year, title, company, desc, delay }: Props) {
  const { ref, visible } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`relative pl-8 pb-10 last:pb-0 transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-sky-400 border-2 border-white shadow-sm shadow-sky-200" />
      <div className="absolute left-[5px] top-5 bottom-0 w-px bg-sky-100" />
      <div className="text-xs text-sky-500 font-semibold tracking-widest uppercase mb-1">{year}</div>
      <div className="text-base font-bold text-slate-800">{title}</div>
      <div className="text-xs text-slate-400 mb-2">{company}</div>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}