"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const stats = [
    {
      title: "2",
      subtitle: "years Experience",
    },
    {
      title: "4+",
      subtitle: "Projects Completed",
    },
    {
      title: "MERN",
      subtitle: "Stack Developer",
    },
    {
      title: "WP",
      subtitle: "WordPress Developer",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full min-w-0 overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 md:px-30 md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        {/* Heading Section */}
        <div className="mb-10 grid min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:mb-16 lg:grid-cols-2 lg:gap-10">
          {/* Left Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0"
          >
            <p className="mb-4 mt-2 text-[10px] uppercase tracking-[2px] text-gray-500 sm:mt-4">
              ◆ Work Experience
            </p>

            <h2 className="font-family-Satoshi text-3xl font-bold italic leading-tight sm:text-4xl md:text-5xl">
              Where I've{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                worked
              </span>
              <br />
              and built real projects.
            </h2>
          </motion.div>

          {/* Right Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex min-w-0 items-center lg:justify-end"
          >
            <p className="w-full max-w-md text-sm leading-7 text-gray-400 sm:text-[15px]">
              2 years of hands-on experience building modern web applications
              using the MERN Stack and WordPress. Worked on 4+ real-world
              projects, developing responsive user interfaces, integrating APIs,
              and building scalable web solutions. Passionate about learning new
              technologies, solving technical challenges, and continuously
              improving development skills.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="min-w-0 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-black p-4 sm:rounded-3xl sm:p-6 md:p-8"
          >
            {/* Date and Status */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 sm:mb-8">
              <span className="text-xs text-gray-500 sm:text-sm">
                2025 - Present
              </span>

              <span className="rounded-full border border-cyan-500/30 px-3 py-1.5 text-[10px] text-cyan-400 sm:px-4 sm:py-2 sm:text-xs">
                CURRENT
              </span>
            </div>

            {/* Title Animation */}
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-3 break-words text-2xl font-bold leading-tight sm:mb-4 sm:text-3xl md:text-4xl"
            >
              Full Stack Developer
            </motion.h3>

            {/* Company */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 break-words text-sm text-cyan-400 sm:mb-8 sm:text-[15px]"
            >
              Freelance & Personal Projects
            </motion.p>

            {/* Description */}
            <p className="mb-6 text-sm leading-7 text-gray-400 sm:mb-8 sm:text-[15px] sm:leading-8">
              Building responsive websites, dashboards, WordPress solutions and
              MERN Stack applications. Focused on creating scalable and
              user-friendly digital products.
            </p>

            {/* Responsibilities */}
            <ul className="space-y-3 text-sm leading-6 text-gray-400 sm:space-y-4 sm:leading-7">
              <li>• Developed 4+ Full Stack Projects</li>
              <li>• Built Responsive UI using React.js & Next.js</li>
              <li>• Created REST APIs with Node.js & Express.js</li>
              <li>• Integrated MongoDB Databases</li>
              <li>• Developed Professional WordPress Websites</li>
            </ul>

            {/* Skills */}
            <div className="mt-7 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind",
                "WordPress",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="max-w-full break-words rounded-full border border-cyan-500/20 px-3 py-2 text-xs text-cyan-400 sm:px-4 sm:text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-1">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex min-w-0 flex-col justify-center rounded-2xl border border-white/10 p-3 transition-colors duration-300 hover:border-cyan-500/30 sm:rounded-3xl sm:p-5 md:p-6 lg:p-8"
              >
                <h3 className="break-words text-2xl text-cyan-400 sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 break-words text-[9px] uppercase leading-5 tracking-wider text-gray-500 sm:mt-3 sm:text-[11px] sm:tracking-widest md:text-xs">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
