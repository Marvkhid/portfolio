"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "HTML",       image: "/html5.png",      color: "from-orange-50 to-orange-100/60",  border: "border-orange-200/60"  },
  { name: "CSS",        image: "/css.png",         color: "from-blue-50 to-blue-100/60",      border: "border-blue-200/60"    },
  { name: "JavaScript", image: "/javascript.png",  color: "from-yellow-50 to-yellow-100/60",  border: "border-yellow-200/60"  },
  { name: "TypeScript", image: "/tsx.jpg",          color: "from-sky-50 to-sky-100/60",        border: "border-sky-200/60"     },
  { name: "React",      image: "/react.png",        color: "from-cyan-50 to-cyan-100/60",      border: "border-cyan-200/60"    },
  { name: "Next.js",    image: "/next.png",         color: "from-slate-50 to-slate-100/60",    border: "border-slate-200/60"   },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function SkillsPreview() {
  const { ref, visible } = useInView(0.1);

  return (
    <section className="py-24 px-4 sm:px-8 bg-gradient-to-b from-white via-sky-50/40 to-blue-50 relative overflow-hidden">

      {/* background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto text-center">

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-sky-500 bg-sky-50 border border-sky-200 px-4 py-2 rounded-full mb-5 font-semibold"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          What I Work With
        </motion.div>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-sm max-w-md mx-auto mb-14"
        >
          The core technologies I use daily to design, build, and ship production-ready web experiences.
        </motion.p>

        {/* skill cards */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.92 }}
              animate={visible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.06 }}
              className={`
                group w-full flex flex-col items-center gap-3 p-5 rounded-2xl
                bg-gradient-to-b ${skill.color}
                border ${skill.border}
                shadow-sm hover:shadow-md hover:shadow-sky-100/80
                cursor-default transition-shadow duration-300
              `}
            >
              {/* icon wrapper */}
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="object-contain w-auto h-auto max-w-[48px] max-h-[48px] drop-shadow-sm"
                />
              </div>

              {/* label */}
              <span className="text-xs font-semibold text-slate-600 tracking-wide group-hover:text-sky-600 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center gap-4 my-10 max-w-xs mx-auto"
        >
          <div className="flex-1 h-px bg-sky-100" />
          <span className="text-xs text-slate-300 tracking-widest uppercase">and more</span>
          <div className="flex-1 h-px bg-sky-100" />
        </motion.div>

        {/* secondary pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {["Node.js", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Git", "Figma", "PostgreSQL", "Framer Motion"].map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-500 bg-white/80 border border-sky-100 px-3 py-1.5 rounded-full hover:border-sky-300 hover:text-sky-600 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm border border-sky-200 bg-white/70 hover:bg-sky-50 hover:border-sky-300 px-6 py-3 rounded-2xl transition-all duration-200 hover:scale-105 shadow-sm group"
          >
            Explore my full tech stack
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}