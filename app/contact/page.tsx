"use client";

import {
  Mail,
  // FaLinkedinIn,
  Download,
  ArrowUpRight,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[180px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Small Heading */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-1 h-1 bg-gray-400 rotate-45"></div>
          <span className="uppercase tracking-[4px] text-gray-500 text-[11px]">
            Get In Touch
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-6xl font-semibold tracking-tight">
          Let's build something
          <br />
          <span className="italic bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 text-[15px] mt-8 max-w-2xl mx-auto">
          Open to full-time roles, freelance projects and exciting
          collaborations. Let's create something amazing together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-12">

          {/* Email Button */}
          <a
            href="mailto:poojamewada02@gmail.com"
            className="px-8 py-4 rounded-full bg-white text-black flex items-center gap-3 font-medium hover:scale-105 transition"
          >
            <Mail size={18} />
            poojamewada02@gmail.com
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 flex items-center gap-3 transition"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-20">

          {/* Email Card */}
          <a
            href="mailto:poojamewada02@gmail.com"
            className="group border border-white/10 rounded-2xl p-5 h-[80px] flex items-center justify-between hover:border-cyan-500 transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Mail />
              </div>

              <div>
                <p className="text-gray-500 uppercase text-[11px] tracking-widest">
                  Email
                </p>

                <h3 className="text-lg font-medium">
                  pooojamewada02@gmail.com
                </h3>
              </div>
            </div>

            <ArrowUpRight />
          </a>

          <a
  href="https://www.linkedin.com/in/poooja-mewada-951552342/"
  target="_blank"
  rel="noopener noreferrer"
  className="group border border-white/10 rounded-2xl p-5 h-[80px] flex items-center justify-between hover:border-purple-500 transition"
>
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
      <FaLinkedinIn size={20} />
    </div>

    <div>
      <p className="text-gray-500 uppercase text-[11px] tracking-widest">
        LinkedIn
      </p>

      <h3 className="text-lg font-medium">
        Pooja Mewada
      </h3>
    </div>
  </div>

  <ArrowUpRight />
</a>
       

        </div>
      </div>
    </section>
  );
}