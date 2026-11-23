"use client";

import { Code2, Database, Wrench, Globe, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
  {
    icon: Globe,
    title: "WordPress",
    skills: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "Theme Customization",
      "Plugin Setup",
    ],
  },
  {
    icon: Brain,
    title: "Learning",
    skills: [
      "TypeScript",
      "Next.js",
      "AI Tools",
      "SEO",
      "Performance Optimization",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Tag */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2 w-2 rotate-45 bg-gray-400" />
          <span className="text-[10px] uppercase tracking-[4px] text-gray-500">
            Skills
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-16 text-2xl font-semibold tracking-tight md:text-5xl">
          Tools I use to{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text italic text-transparent">
            build
          </span>{" "}
          amazing projects.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-[#080808] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-cyan-400 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mb-5 text-[20px] font-semibold text-white">
                  {category.title}
                </h3>

                {/* Skills */}
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
                    >
                      <span className="mr-2 text-cyan-500">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
