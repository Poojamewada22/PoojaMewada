"use client";

import {
  Code2,
  Database,
  Wrench,
  Globe,
  Brain,
} from "lucide-react";

const skillCategories = [
  {
    icon: <Code2 size={26} />,
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
    icon: <Database size={26} />,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MongoDB",
    ],
  },
  {
    icon: <Wrench size={26} />,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Render",
    ],
  },
  {
    icon: <Globe size={26} />,
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
    icon: <Brain size={26} />,
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
      className="bg-black text-white py-24 px-6 text-[12px]"
    >
      <div className="max-w-6xl  mx-auto ">

        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-gray-400 rotate-45"></div>
          <span className="uppercase tracking-[4px] text-gray-500 text-[10px]">
            Skills
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-5xl font-semibold tracking-tight mb-16">
          Tools I use to{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">
            build
          </span>{" "}
          amazing projects.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-[#080808] p-7 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-white/4 hover:bg-purple-600 flex items-center justify-center text-cyan-400 hover:text-white mb-5">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-semibold mb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-400 group-hover:text-gray-300 transition"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}