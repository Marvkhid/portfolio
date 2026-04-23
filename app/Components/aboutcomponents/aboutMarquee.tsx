import { marqueeTopics } from "@/app/data/aboutData";

export default function AboutMarquee() {
  return (
    <div className="bg-sky-500/8 border-b border-sky-100 py-3 overflow-hidden">
      <div
        className="flex whitespace-nowrap gap-10"
        style={{ animation: 'marquee 32s linear infinite' }}
      >
        {marqueeTopics.map((t, i) => (
          <span
            key={i}
            className={`text-xs tracking-widest uppercase flex-shrink-0 ${
              i % 4 === 1 ? 'text-sky-400' : 'text-slate-300'
            }`}
          >
            {i % 5 === 2 ? '✦' : t}
          </span>
        ))}
      </div>
    </div>
  );
}