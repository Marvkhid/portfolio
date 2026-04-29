"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, ArrowUpRight, ChevronRight } from "lucide-react";

const images = ["/marvelblue.jpg", "/marvel2.jpeg", "/profile.jpg"];

const roles = [
  "Frontend Engineer",
  "Project Manager",
  "React/Next.js Specialist",
  "UI Craftsman",
  "Brand Promoter"
];

/* ── TYPEWRITER ── */
function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
      {displayed}
      <span className="animate-pulse text-sky-400">|</span>
    </span>
  );
}

/* ── FLOATING BADGE ── */
function FloatingBadge({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`absolute bg-white/90 backdrop-blur-md border border-sky-100 rounded-2xl px-3 py-2 shadow-lg shadow-sky-100/60 z-20 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ── SOCIAL LINK ── */
function SocialLink({
  href,
  icon,
  hoverColor,
  delay,
}: {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`w-10 h-10 rounded-xl bg-white/70 border border-sky-100 flex items-center justify-center text-slate-500 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-200 ${hoverColor}`}
    >
      {icon}
    </motion.a>
  );
}

/* ══════════ HERO ══════════ */
export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  // auto-cycle images
  useEffect(() => {
    const t = setInterval(() => setImgIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-14 pt-24 pb-16 bg-gradient-to-br from-white via-sky-50 to-blue-100 overflow-hidden">

      {/* ── BACKGROUND BLOBS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-300/25 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-100/30 rounded-full blur-3xl" />

        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── IMAGE COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center w-full lg:w-auto shrink-0"
        >
          {/* spinning ring */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ animation: "spin 18s linear infinite" }}
          >
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-sky-300/50" />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ animation: "spin 28s linear infinite reverse" }}
          >
            <div className="w-[240px] h-[240px] sm:w-[295px] sm:h-[295px] md:w-[350px] md:h-[350px] rounded-full border border-sky-200/40" />
          </div>

          {/* floating badges */}
          <FloatingBadge className="-top-2 -right-4 sm:right-2" delay={0.8}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">Available</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="bottom-8 -left-4 sm:left-0" delay={1.0}>
            <div className="flex items-center gap-1.5">
              <span className="text-sky-500 text-xs">⚡</span>
              <span className="text-xs font-semibold text-slate-700">React · Next.js</span>
            </div>
          </FloatingBadge>

          <FloatingBadge className="top-1/2 -right-6 sm:-right-4 -translate-y-1/2" delay={1.2}>
            <div className="text-center">
              <div className="text-base font-bold text-slate-800">3+</div>
              <div className="text-[10px] text-slate-400 leading-tight">yrs exp</div>
            </div>
          </FloatingBadge>

          {/* image circle — clickable to cycle */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setImgIndex((i) => (i + 1) % images.length)}
            className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-sky-200 cursor-pointer z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={images[imgIndex]}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[imgIndex]}
                  alt="Marvel Adeniyi"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* overlay shimmer */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/15 via-transparent to-transparent" />

            {/* click hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur text-[10px] text-slate-500 px-2 py-1 rounded-full border border-sky-100 flex items-center gap-1">
              <ChevronRight size={10} /> tap to switch
            </div>
          </motion.div>

          {/* dot indicators */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === imgIndex
                    ? "w-5 h-2 bg-sky-500"
                    : "w-2 h-2 bg-sky-200 hover:bg-sky-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* ── TEXT COLUMN ── */}
        <div className="w-full max-w-2xl text-center lg:text-left space-y-6">

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Frontend Engineer · Lagos, Nigeria
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-800"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Building Modern<br />
            Web Experiences<br />
            as a{" "}
            <Typewriter words={roles} />
          </motion.h1>

          {/* body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Hi, I&apos;m <b className="text-blue-600 font-bold font-weight">Marvel Adeniyi</b>. Need a website that actually represents your brand and works as hard as you do? Welcome to Marvel.dev. 
            I design and build fast, scalable web applications that help businesses look professional, 
            deliver smooth user experiences, and convert visitors into real customers.
          </motion.p>

          {/* stack pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((s, i) => (
              <span
                key={s}
                className="text-xs text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full font-medium"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-sky-200 hover:scale-105 hover:shadow-sky-300 transition-all duration-200">
                Start a Project <ArrowUpRight size={15} />
              </button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center gap-2 border border-sky-200 bg-white/70 backdrop-blur text-sky-600 font-semibold text-sm px-7 py-3.5 rounded-2xl hover:bg-sky-50 hover:border-sky-300 transition-all duration-200">
                <Download size={15} /> Download Resume
              </button>
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex gap-3 justify-center lg:justify-start pt-1"
          >
            <SocialLink
              href="https://github.com/Marvkhid"
              icon={<FaGithub size={17} />}
              hoverColor="hover:text-slate-800 hover:border-slate-300"
              delay={0.92}
            />
            <SocialLink
              href="https://linkedin.com/in/adeniyi-marvellous-528b17329"
              icon={<FaLinkedin size={17} />}
              hoverColor="hover:text-blue-600 hover:border-blue-200"
              delay={1.0}
            />
            <SocialLink
              href="https://x.com/Marvel_Aden"
              icon={<FaTwitter size={17} />}
              hoverColor="hover:text-sky-500 hover:border-sky-200"
              delay={1.08}
            />
            <SocialLink
              href="https://wa.me/2348107387326"
              icon={<FaWhatsapp size={17} />}
              hoverColor="hover:text-green-500 hover:border-green-200"
              delay={1.16}
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}