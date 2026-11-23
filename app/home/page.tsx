// "use client";

// import { ArrowDown, Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative min-h-0 overflow-hidden bg-black text-white sm:min-h-[80svh]">
//       {/* Grid Background */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Glow Effects */}
//       <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
//       <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
//       <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

// <div className="relative z-10 flex items-center justify-center px-4 py-4 sm:min-h-[90svh] sm:px-6 sm:py-0">

//         <div className="max-w-5xl text-center">
//           {/* Status */}

//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-5 mt-25 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:mb-8 sm:mt-30 sm:px-5"
//           >
//             <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
//             <span className="text-xs text-gray-300 sm:text-sm">
//               Available for Opportunities
//             </span>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 120 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-3xl md:text-5xl lg:text-6xl font-semibold"
//           >
//             Hey, I am{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//               Pooja
//             </span>
//             <span className="animate-pulse"> |</span>
//           </motion.h1>

//           {/* Subtitle */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-8 text-sm md:text-xl text-gray-400"
//           >
//             Full Stack Developer & WordPress Developer
//           </motion.p>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="mx-auto mt-6 max-w-2xl text-sm md:text-lg text-gray-500"
//           >
//             I build modern, scalable web applications and WordPress solutions
//             that help businesses grow online.
//           </motion.p>

//           {/* Current Status */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="mt-8 flex items-center justify-center gap-2 text-cyan-400 text-sm md:text-base"
//           >
//             <Sparkles size={18} />
//             <span>
//               Currently building MERN Stack projects and exploring Next.js & AI.
//             </span>
//           </motion.div>

//           {/* Buttons */}

//           <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-5 sm:px-0">
//             <motion.a
//               href="#skills"
//               initial={{ opacity: 0, x: -120 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.2 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex w-full max-w-xs items-center justify-center rounded-full bg-white px-8 py-3 text-center font-medium text-black transition hover:bg-cyan-400 sm:w-auto"
//             >
//               View My Work
//             </motion.a>

//             <motion.a
//               href="#contact"
//               initial={{ opacity: 0, x: 120 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.2 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="flex w-full max-w-xs items-center justify-center rounded-full border border-white/20 px-8 py-3 text-center font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:w-auto"
//             >
//               Contact Me
//             </motion.a>
//           </div>

//           {/* Scroll */}
//           {/* <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.8 }}
//             className="mt-20 flex flex-col items-center text-gray-500"
//           >
//             <span>scroll</span>
//             <ArrowDown className="mt-3 animate-bounce" />
//           </motion.div> */}

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.8 }}
//             className="mt-5 flex flex-col items-center pb-2 text-gray-500 sm:mt-20 sm:pb-0"
//           >
//             <span>scroll</span>
//             <ArrowDown className="mt-2 animate-bounce sm:mt-3" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import {
  ArrowUpRight,
  Send,
  Code2,
  Sparkles,
  Rocket,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";

const technologies = [
  "REACT.JS",
  "NODE.JS",
  "NEXT.JS",
  "MONGODB",
  "EXPRESS.JS",
  "JAVASCRIPT",
  "TAILWIND CSS",
  "WORDPRESS",
];

const highlights = [
  { icon: Rocket, text: "MERN Stack Projects" },
  { icon: Code2, text: "Full Stack Development" },
  { icon: Brain, text: "Exploring AI & Next.js" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 shadow-lg shadow-cyan-500/5 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-xs font-semibold tracking-wider text-gray-300 sm:text-sm">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Full Stack
              <br />
              Developer
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                &
              </span>
            </motion.h1>

            {/* Gradient Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl"
            >
              React.js, Node.js & Next.js
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-2xl text-sm leading-8 text-gray-400 sm:text-base"
            >
              Hi, I'm{" "}
              <span className="font-bold text-cyan-400">Pooja Mewada</span>, a
              Full Stack Developer passionate about building modern, scalable
              web applications and interactive digital experiences. I specialize
              in frontend development, backend APIs, MERN Stack applications and
              WordPress solutions.
            </motion.p>

            {/* Technology Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-7 flex max-w-2xl flex-wrap gap-2"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] font-bold tracking-wide text-gray-300 shadow-sm transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 sm:text-[11px]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="\Pooja Mawada .pdf"
                download
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(37,99,235,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
              >
                Get My Resume
                <Send size={18} />
              </motion.a>

              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Explore My Work
                <ArrowUpRight size={19} />
              </motion.a>
            </motion.div>

            {/* Resume Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="ml-1 mt-3 text-xs italic text-gray-500"
            >
              * Explore my resume to know more about my skills and experience.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-cyan-400/40"
                  >
                    <Icon size={17} className="text-cyan-400" />

                    <span className="text-xs font-semibold text-gray-300">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow */}
              <div className="absolute h-[310px] w-[310px] rounded-full bg-cyan-500/20 blur-3xl sm:h-[450px] sm:w-[450px]" />

              {/* Animated Gradient Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[290px] w-[290px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[5px] sm:h-[410px] sm:w-[410px]"
              >
                <div className="h-full w-full rounded-full bg-black" />
              </motion.div>

              {/* Profile Photo */}
              <div className="relative z-10 h-[276px] w-[276px] overflow-hidden rounded-full border-[6px] border-black bg-gradient-to-br from-gray-900 to-black shadow-[0_20px_60px_rgba(34,211,238,0.18)] sm:h-[390px] sm:w-[390px]">
                <img
                  src="/office.png"
                  alt="Pooja Mewada - Full Stack Developer"
                  className="h-full  w-full object-cover object-[center_20%]"
                />
              </div>

              {/* Floating Developer Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 right-[-10px] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#101010] px-4 py-3 shadow-xl sm:-right-8 sm:bottom-8"
              >
                <div className="rounded-md bg-cyan-400/10 p-1.5">
                  <Code2 size={18} className="text-cyan-400" />
                </div>

                <span className="text-xs font-bold tracking-wide text-white">
                  FULL STACK DEVELOPER
                </span>
              </motion.div>

              {/* Floating Sparkle */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -right-2 top-12 z-20 rounded-full border border-white/10 bg-[#101010] p-3 shadow-lg sm:-right-10"
              >
                <Sparkles className="text-cyan-400" size={20} />
              </motion.div>

              {/* Decorative Dots */}
              <div className="absolute -left-8 top-16 h-3 w-3 rounded-full bg-blue-400/60 blur-[1px]" />
              <div className="absolute -right-12 bottom-24 h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-purple-500/60" />
    </section>
  );
}
