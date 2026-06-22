"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const stats = [
    {
      title: "8+",
      subtitle: "Months Experience",
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
      className="min-h-screen  bg-black text-white px-6 md:px-10 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Left Heading */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[2px] text-gray-500 text-[10px] mb-4 mt-8">
              ◆ Work Experience
            </p>

            <h2 className="text-2xl md:text-5xl font-bold leading-tight italic font-family-Satoshi">
              Where I've{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent italic">
                worked
              </span>
              <br />
              and built real
             
              projects.
            </h2>
          </motion.div>

          {/* Right Description */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex items-center lg:justify-end"
          >
            <p className="text-gray-400 max-w-md leading-7 text-[15px]">
              8+ months of hands-on experience building modern web
              applications using MERN Stack and WordPress.
              Worked on 4+ real-world projects and continuously
              improving my development skills.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border  border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-black p-30 md:p-5"
          >
            <div className="flex items-center justify-between mb-8 ">
              <span className="text-gray-500 text-sm">
                2025 - Present
              </span>

              <span className="px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-xs">
                CURRENT
              </span>
            </div>

            {/* Title Animation */}
            <motion.h3
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold mb-4"
            >
              Full Stack Developer
            </motion.h3>

            {/* Company Animation */}
            <motion.p
              className="text-cyan-400 text-[15px] mb-8"
            >
              Freelance & Personal Projects
            </motion.p>

            <p className="text-gray-400 leading-8 mb-8 text-[14px]">
              Building responsive websites, dashboards,
              WordPress solutions and MERN Stack applications.
              Focused on creating scalable and user-friendly
              digital products.
            </p>

            <ul className="space-y-4 text-gray-400 text-[14px]">
              <li>• Developed 4+ Full Stack Projects</li>
              <li>• Built Responsive UI using React.js & Next.js</li>
              <li>• Created REST APIs with Node.js & Express.js</li>
              <li>• Integrated MongoDB Databases</li>
              <li>• Developed Professional WordPress Websites</li>
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-10">
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full border border-cyan-500/20 text-cyan-400 text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 p-6 md:p-8 hover:border-cyan-500/30 transition"
              >
                <h3 className="text-2xl md:text-3xl  text-cyan-400 ">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3 uppercase tracking-widest text-[10px] md:text-xs">
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