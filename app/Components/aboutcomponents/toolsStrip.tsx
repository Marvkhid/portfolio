import { tools } from "@/app/data/aboutData";

export default function ToolsStrip() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 border-t border-sky-100">
      <div className="text-xs tracking-widest uppercase text-slate-300 text-center mb-8">
        Also fluent in
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {tools.map(({ icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-sky-500 transition-colors group cursor-default"
          >
            <div className="w-12 h-12 bg-white border border-sky-100 rounded-2xl flex items-center justify-center group-hover:border-sky-300 group-hover:shadow-md group-hover:shadow-sky-100 transition-all">
              {icon}
            </div>
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}