// app/components/Skill.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name: "HTML5",
    image: "/html5.png",
    description:
      "I structure the web like a pro — semantic, accessible, and standards-compliant. Every tag I write tells a story of order and clarity.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS & Frameworks",
    image: "/css.png",
    description:
      "From Tailwind to Bootstrap, I paint the web with precision and flair. My layouts are sleek, responsive, and visually impactful.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
    description:
      "I bring web pages to life with smooth logic and dynamic interactivity. With every function, I enhance the user's digital journey.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: "/tsx.jpg",
    description:
      "I write bug-resistant code with confidence using TypeScript’s strong typing. It’s like JavaScript with a shield and a compass.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "ReactJS",
    image: "/react.png",
    description:
      "Building seamless interfaces with reusable components is my superpower. I architect systems that scale gracefully and feel natural.",
    url: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    image: "/next.png",
    description:
      "From SSR to API routes, I build fullstack apps with blazing speed and scalability. I turn ideas into production-ready platforms.",
    url: "https://nextjs.org/",
  },
  {
    name: "Redux Toolkit",
    image: "/redux.png",
    description:
      "State management? Handled. I keep things predictable, scalable, and clean. It’s where data logic meets application harmony.",
    url: "https://redux-toolkit.js.org/",
  },
  {
    name: "Sanity",
    image: "/sanity.png",
    description:
      "Dynamic content made simple — I integrate Sanity for headless CMS magic. Clients stay in control while I focus on clean UIs.",
    url: "https://www.sanity.io/",
  },
  {
    name: "Canva",
    image: "/canva.jpg",
    description:
      "Visual storytelling is second nature — I use Canva to design stunning content effortlessly. A picture truly can speak louder than code.",
    url: "https://www.canva.com/",
  },
  {
    name: "Material Ui",
    image: "/material.jpg",
    description: 
    "With MUI, I don&apos;t just build interfaces — I accelerate development while maintaining design consistency and polish. It integrates smoothly with TypeScript and gives me the flexibility to customize themes to match any brand or vision.",
    url: " https://mui.com/",
  }
];

export default function Skill() {
  return (
   <section className="bg-gray-200 py-16 px-2 sm:py-20 sm:px-6 lg:px-8 text-white-600 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center overflow-hidden space-y-10 sm:space-y-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 animate-fade-in">
      My Skill Set
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 border transition-transform duration-300 hover:scale-105"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-5">
            <Image
              src={skill.image}
              alt={skill.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{skill.name}</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
            {skill.description}
          </p>
          <Link
            href={skill.url}
            target="_blank"
            className="text-blue-600 hover:underline font-semibold text-sm sm:text-base"
          >
            Learn More →
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
