import React from "react";
import Home from "@/app/home/page";
import Service from "./service/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Experience from "./experience/page";
const page = () => {
  return (
    <div>
      <Home />
      <Service />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default page;
