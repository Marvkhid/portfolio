import ValueCard from './valueCard';
import { values } from '@/app/data/aboutData';

export default function ValuesSection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-sky-100">
      <div className="text-center mb-12">
        <div className="text-xs tracking-widest uppercase text-sky-500 font-semibold mb-3">
          What I Stand For
        </div>
        <h2 className="font-serif text-4xl font-bold text-slate-800">Work Philosophy</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {values.map((v) => (
          <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} delay={v.delay} />
        ))}
      </div>
    </section>
  );
}