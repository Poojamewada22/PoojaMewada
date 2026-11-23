"use client";

import { Mail, Download, ArrowUpRight } from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-w-0 overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 md:px-10 md:py-24"
    >
      {/* Glow Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[140px] md:h-[500px] md:w-[500px] md:blur-[180px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-500/20 blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[140px] md:h-[400px] md:w-[400px] md:blur-[180px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl min-w-0">
        {/* Small Heading */}
        <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8">
          <div className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gray-400" />

          <span className="text-[10px] uppercase tracking-[3px] text-gray-500 sm:text-[11px] sm:tracking-[4px]">
            Get In Touch
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Let's build something
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text italic text-transparent">
            together.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-gray-400 sm:mt-8 sm:text-[15px]">
          Open to full-time roles, freelance projects and exciting
          collaborations. Let's create something amazing together.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 md:mt-12">
          {/* Email Button */}
          <a
            href="mailto:poojamewada02@gmail.com"
            className="inline-flex min-w-0 items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.02] sm:px-7 sm:text-base md:px-8"
          >
            <Mail size={18} className="shrink-0" />

            <span className="break-all">pooojamewada02@gmail.com</span>
          </a>

          {/* Resume Download Button */}
          <a
            href="\Pooja Mawada .pdf"
            download="Pooja-Mewada-Resume.pdf"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-4 text-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 sm:px-7 sm:text-base md:px-8"
          >
            <Download size={18} className="shrink-0" />

            <span>Download Resume</span>
          </a>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid min-w-0 grid-cols-1 gap-4 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2">
          {/* Email Card */}
          <a
            href="mailto:pooojamewada02@gmail.com"
            className="group flex min-h-[88px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 p-4 transition-colors duration-300 hover:border-cyan-500 sm:min-h-[100px] sm:gap-4 sm:p-5"
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:h-12 sm:w-12">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-gray-500 sm:text-[11px]">
                  Email
                </p>

                <h3 className="break-all text-sm font-medium leading-5 sm:text-base">
                  pooojamewada02@gmail.com
                </h3>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
            />
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/poooja-mewada-951552342/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[88px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/10 p-4 transition-colors duration-300 hover:border-purple-500 sm:min-h-[100px] sm:gap-4 sm:p-5"
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:h-12 sm:w-12">
                <FaLinkedinIn size={20} />
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-gray-500 sm:text-[11px]">
                  LinkedIn
                </p>

                <h3 className="break-words text-sm font-medium sm:text-base">
                  Pooja Mewada
                </h3>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              className="shrink-0 text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
