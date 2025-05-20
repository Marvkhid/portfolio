// app/components/Hero.tsx
"use client";

import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-pink-600">
          <Image
            src="/profile.jpg"
            alt="Marvel"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Hi,I&apos;m Adeniyi Marvellous Emmanuel
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            A passionate Front-end Developer with a B.Eng in Computer Engineering. With over 2 years of hands-on experience building modern, responsive web applications using React, Next.js, and TypeScript,i have strong technical skills and a keen eye for design, I thrive in collaborative environments, delivering innovative solutions and seamless user experiences. I&apos;m driven to grow, learn, and make meaningful impact through tech.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 mt-6">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg">
              <Link href="/contact">Hire Me</Link>
            </Button>
            <Button variant="outline" className="border-white text-white px-6 py-3 rounded-full text-lg">
              <a href="/Adeniyi Marvellous Emmanuel resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-6 mt-8 text-2xl">
            <a href="https://github.com/Marvkhid" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/adeniyi-marvellous-528b17329" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Marvel_Aden" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
            <a href="https://wa.me/2348107387326" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
