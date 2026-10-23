"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-0 overflow-hidden bg-black text-white sm:min-h-[80svh]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

     

      
<div className="relative z-10 flex items-center justify-center px-4 py-4 sm:min-h-[90svh] sm:px-6 sm:py-0">

        <div className="max-w-5xl text-center">
          {/* Status */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 mt-25 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:mb-8 sm:mt-30 sm:px-5"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
            <span className="text-xs text-gray-300 sm:text-sm">
              Available for Opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold"
          >
            Hey, I am{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Pooja
            </span>
            <span className="animate-pulse"> |</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm md:text-xl text-gray-400"
          >
            Full Stack Developer & WordPress Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-sm md:text-lg text-gray-500"
          >
            I build modern, scalable web applications and WordPress solutions
            that help businesses grow online.
          </motion.p>

          {/* Current Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center justify-center gap-2 text-cyan-400 text-sm md:text-base"
          >
            <Sparkles size={18} />
            <span>
              Currently building MERN Stack projects and exploring Next.js & AI.
            </span>
          </motion.div>

          {/* Buttons */}

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-5 sm:px-0">
            <motion.a
              href="#skills"
              initial={{ opacity: 0, x: -120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full max-w-xs items-center justify-center rounded-full bg-white px-8 py-3 text-center font-medium text-black transition hover:bg-cyan-400 sm:w-auto"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex w-full max-w-xs items-center justify-center rounded-full border border-white/20 px-8 py-3 text-center font-medium text-white transition hover:border-cyan-400 hover:text-cyan-400 sm:w-auto"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Scroll */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-20 flex flex-col items-center text-gray-500"
          >
            <span>scroll</span>
            <ArrowDown className="mt-3 animate-bounce" />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-5 flex flex-col items-center pb-2 text-gray-500 sm:mt-20 sm:pb-0"
          >
            <span>scroll</span>
            <ArrowDown className="mt-2 animate-bounce sm:mt-3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
