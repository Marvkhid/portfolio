"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/75 backdrop-blur-xl border-b border-sky-100 shadow-sm shadow-sky-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="group flex items-center gap-1 z-10">
            <motion.span
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-xl font-bold text-slate-800 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Marvel
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                .dev
              </span>
            </motion.span>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, -1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-sky-600" : "text-slate-500 group-hover:text-sky-600"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* hover bg pill */}
                  <span className="absolute inset-0 rounded-xl bg-sky-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* active underline dot */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-sky-200 hover:shadow-sky-300 transition-shadow duration-200"
              >
                Start a Project <ArrowUpRight size={14} />
              </motion.button>
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl border border-sky-200 bg-white/70 backdrop-blur text-slate-700 shadow-sm z-10"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm md:hidden"
            />

            {/* drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden bg-white/95 backdrop-blur-2xl border border-sky-100 rounded-3xl shadow-2xl shadow-sky-100/60 overflow-hidden"
            >
              {/* links */}
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-sky-50 text-sky-600 border border-sky-200"
                            : "text-slate-600 hover:bg-sky-50/60 hover:text-sky-600"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="px-4 pb-5"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-sm py-3.5 rounded-2xl shadow-md shadow-sky-200"
                >
                  Hire Me <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}