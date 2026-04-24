"use client";

export default function FilterBar({
  filters,
  active,
  setActive,
}: {
  filters: string[];
  active: string;
  setActive: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            active === f
              ? "bg-blue-500 text-white border-blue-400"
              : "text-blue-200 border-white/20 hover:border-blue-400"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}