"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    name: "Boldo",
    image: "/boldo.png",
    description:
      "Designed to improve website logistics and enhance traffic conversion. Optimized for user flow and performance.",
    tech: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    name: "Ekiti Tourism Project",
    image: "/ekiti.png",
    description:
      "Official site promoting tourism in Ekiti State — features destinations, history, and a dynamic admin CMS.",
    tech: ["Next.js", "MongoDB", "Clerk", "Tailwind"],
  },
  {
    name: "Babs Security",
    image: "/babs.png",
    description:
      "A secure client-based web app for safety alerts, identity access, and private monitoring systems.",
    tech: ["React", "Node.js", "Tailwind", "Firebase"],
  },
  {
    name: "Online Education Platform",
    image: "/online.png",
    description:
      "An intuitive learning platform for remote classes, assessments, and certification.",
    tech: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    name: "TravelSite",
    image: "/travel.png",
    description:
      "A travel and tourism site for exploring destinations and planning trips seamlessly.",
    tech: ["Next.js", "OpenAI API", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="py-10 px-4 bg-gray-200 sm:px-6 md:px-8 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-700 mb-10">
          Projects I&apos;ve Built
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          loop
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-5 h-full flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-3">{project.description}</p>
                <div className="mt-auto text-xs text-gray-500">
                  Built with: {project.tech.join(", ")}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Summary */}
        <div className="mt-10 max-w-3xl mx-auto text-center px-2 sm:px-4">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fade-in-up">
            Building Beyond Code
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed animate-fade-in delay-200">
            These projects reflect my hands-on experience solving real problems with tech — from user-friendly dashboards
            and secure platforms to educational tools and creative AI interfaces. I combine clean design with performance-driven code to create experiences that work beautifully.
          </p>
        </div>
      </div>
    </section>
  );
}
