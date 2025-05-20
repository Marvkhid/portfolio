// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white">Marvel.dev</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Home</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Projects</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-white focus:outline-none">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">
          <Link href="/" className="block text-gray-800 dark:text-gray-200">Home</Link>
          <Link href="#projects" className="block text-gray-800 dark:text-gray-200">Projects</Link>
          <Link href="/contact" className="block text-gray-800 dark:text-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}
