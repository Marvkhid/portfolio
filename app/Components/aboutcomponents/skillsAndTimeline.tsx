'use client';

import SkillPill from './skillPill';
import TimelineItem from './timelineItem';
import { skillsList, timeline } from '@/app/data/aboutData';
import { useInView } from '@/app/hooks/useInView';

export default function SkillsAndTimeline() {
  const { ref, visible } = useInView(0.1);

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 lg:px-24 py-20 border-t border-sky-100 grid grid-cols-1 md:grid-cols-2 gap-16 items-start transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Skills */}
      <div>
        <div className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-3">Toolkit</div>
        <h2 className="font-serif text-4xl font-bold text-slate-800 mb-8">What I Work With</h2>
        <div className="flex flex-col gap-3">
          {skillsList.map((s) => (
            <SkillPill key={s.label} label={s.label} level={s.level} />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-3">Journey</div>
        <h2 className="font-serif text-4xl font-bold text-slate-800 mb-8">Experience</h2>
        <div className="relative">
          {timeline.map((t) => (
            <TimelineItem
              key={t.year}
              year={t.year}
              title={t.title}
              company={t.company}
              desc={t.desc}
              delay={t.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}