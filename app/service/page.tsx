"use client";

import {
  Globe,
  Code2,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

const services = [
  {
    icon: <Code2 size={26} />,
    title: "Full Stack Development",
    desc: "Building scalable web applications using React, Next.js, Node.js and MongoDB.",
  },
  {
    icon: <Globe size={26} />,
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes and business solutions.",
  },
  {
    icon: <ShoppingCart size={26} />,
    title: "E-Commerce Solutions",
    desc: "Online stores with payment integration and admin dashboard.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-w-0 overflow-hidden bg-black px-4 py-14 text-white sm:px-6 sm:py-16 md:px-30 lg:px-30 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left Side */}
          <div className="flex min-w-0 flex-col">
            <TypeAnimation
              sequence={[
                "Service That I Offer.",
                2500,
                "",
                500,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="block max-w-full text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            />

            {/* Gradient Line */}
            <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-red-500 sm:mt-6 sm:w-40" />

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl">
              I provide professional web development and WordPress
              solutions that help businesses grow online.
            </p>

            {/* Explore Circle */}
            <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12 lg:justify-start">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-red-500 text-center shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28">
                <span className="text-xs text-white sm:text-sm">
                  Let's
                </span>

                <h3 className="mt-1 text-sm font-semibold text-white sm:text-base">
                  EXPLORE
                </h3>

                <span className="mt-1 text-xs text-white sm:text-sm">
                  ALL.
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="min-w-0 w-full">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group flex min-w-0 items-start gap-3 border-b border-white/10 py-6 transition-colors duration-300 sm:gap-5 sm:py-8"
              >
                {/* Service Icon */}
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center text-gray-300 transition-colors duration-300 group-hover:text-cyan-400 sm:h-12 sm:w-12">
                  {service.icon}
                </div>

                {/* Service Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="mt-0 break-words text-lg font-semibold leading-snug transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent sm:text-xl md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-lg break-words text-sm leading-6 text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
                    {service.desc}
                  </p>
                </div>

                {/* Arrow Button */}
                <button
                  type="button"
                  aria-label={`Explore ${service.title}`}
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:text-black sm:h-10 sm:w-10"
                >
                  <ArrowUpRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
