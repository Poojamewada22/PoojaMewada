"use client";

import {
  Globe,
  Code2,
  Database,
  MonitorSmartphone,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";

const services = [
  {
    icon: <Code2 size={30} />,
    title: "Full Stack Development",
    desc: "Building scalable web applications using React, Next.js, Node.js and MongoDB.",
  },
 
  {
    icon: <Globe size={30} />,
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes and business solutions.",
  },
  {
    icon: <ShoppingCart size={30} />,
    title: "E-Commerce Solutions",
    desc: "Online stores with payment integration and admin dashboard.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 md:py-28 px-5 md:px-20 "
    >
      <div className="max-w-7xl mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 ">
          
          {/* Left Side */}
          <div>
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
              className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-tight"
            />

            {/* Gradient Line */}
            <div className="w-40 h-1 mt-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-red-500" />

            <p className="mt-8 text-gray-400 max-w-md text-3xl md:text-xl leading-relaxed">
              I provide professional web development and WordPress
              solutions that help businesses grow online.
            </p>

            {/* Explore Circle */}
            <div className="mt-15 relative flex justify-center lg:justify-start">
              <div className="w-20 h-20 md:w-25 md:h-25 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-red-500 flex flex-col justify-center items-center shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                
                <span className="text-sm sm:text-sm md:text-base text-white">
                  Let's
                </span>

                <h3 className="text-sm sm:text-xl  md:text-xl  mt-2">
                  EXPLORE
                </h3>

                <span className="text-[10px]  sm:text-xl md:text-2xl mt-1">
                  ALL.
                </span>
              </div>

              {/* <div className="absolute bottom-0 right-0 md:right-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                <ArrowUpRight size={32} />
              </div> */}
            </div>
          </div>

          {/* Right Side */}
          <div>
            {services.map((service, index) => (
              <div
                key={index}
                className="border-b border-white/10 py-8 flex items-center justify-between gap-4 group"
              >
                <div className="flex gap-5">
                  <div className="text-gray-300 mt-1">
                    {service.icon}
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent mt">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 mt-3 max-w-lg text-sm">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <button className="min-w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 hover:border-transparent hover:scale-110">
                  <ArrowUpRight />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}