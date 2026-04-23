import StatCard from './statCard';
import { stats } from '@/app/data/aboutData';


export default function StatsRow() {
  return (
    <section className="px-6 md:px-16 lg:px-24 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} icon={s.icon} />
        ))}
      </div>
    </section>
  );
}