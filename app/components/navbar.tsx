"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "experience" },
    { name: "Service", path: "/service" },
    // { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="flex justify-center px-4 py-3">
        {/* <nav className="w-full max-w-6xl rounded-full border border-white/10 bg-black/70 backdrop-blur-md shadow-[0_0_30px_rgba(0,150,255,0.15)]"> */}

        <nav
  className={`w-full max-w-6xl border text-[13px] border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_30px_rgba(0,150,255,0.15)]
  ${isOpen ? "rounded-2xl" : "rounded-full md:rounded-full rounded-2xl"}`}
>

          <div className="flex items-center justify-between px-6 py-3">

            {/* Logo */}
            {/* <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Pooja.dev
            </Link> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Button */}
            <Link
              href="/contact"
              className="hidden md:flex px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Let's Talk
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-[500px] pb-5" : "max-h-0"
            }`}
          >
            <div className="flex flex-col items-center gap-5 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 rounded-full bg-white text-black font-medium"
              >
                Let's Talk
              </Link>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}