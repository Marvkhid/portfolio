type Props = {
  label: string;
  level: number;
};

export default function SkillPill({ label, level }: Props) {
  return (
    <div className="flex items-center justify-between bg-white/60 border border-sky-100 rounded-xl px-4 py-3 hover:border-sky-300 hover:bg-sky-50/60 transition-all duration-200 group">
      <span className="text-sm text-slate-700 font-medium">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i <= level ? 'bg-sky-400' : 'bg-sky-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}