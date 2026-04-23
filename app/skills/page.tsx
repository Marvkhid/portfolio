"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const skills = [
  {
    name: "HTML5",
    image: "/html5.png",
    description: "Semantic, accessible, and standards-compliant markup.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS & Tailwind",
    image: "/css.png",
    description: "Responsive UI with Tailwind and modern CSS techniques.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
    description: "Core language for dynamic and interactive web apps.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: "/tsx.jpg",
    description: "Strong typing for scalable and maintainable applications.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    image: "/react.png",
    description: "Component-based architecture for modern UI development.",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    image: "/next.png",
    description: "Fullstack React framework with SSR and routing.",
    url: "https://nextjs.org",
  },
  {
    name: "Redux Toolkit",
    image: "/redux.png",
    description: "Efficient and scalable state managnement.",
    url: "https://redux-toolkit.js.org/",
  },
  {
    name: "REST APIs",
    image: "/restapi.png",
    description: "Fetching and integrating external and custom APIs.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API",
  },
  {
    name: "Node.js",
    image: "/node.png",
    description: "Backend basics for APIs and fullstack integration.",
    url: "https://nodejs.org/",
  },
  {
    name: "Git & GitHub",
    image: "/github.png",
    description: "Version control and collaboration workflows.",
    url: "https://github.com/",
  },
  {
    name: "UI Libraries (MUI)",
    image: "/material.png",
    description: "Building consistent and scalable design systems.",
    url: "https://mui.com/",
  },
  {
    name: "Video Editing",
    image: "/video.jfif",
    description: "Creating engaging visual content to complement digital products.",
    url: "#",
  },
];

export default function SkillsPage() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-sky-100">
      <Navbar />
      <div className="max-w-6xl mx-auto space-y-12 text-center">

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          My Skills
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={70}
                height={70}
                className="mx-auto mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {skill.description}
              </p>

              {skill.url !== "#" && (
                <Link
                  href={skill.url}
                  target="_blank"
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Learn more →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
      
    </section>
  );
}