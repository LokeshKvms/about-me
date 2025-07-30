import React from "react";
import TheNav from "./TheNav";
import ThemeToggler from "./ThemeToggler";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-colors duration-500">
      <TheNav />

      <div className="max-w-7xl mx-auto px-4 py-25">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-2 flex justify-center items-center fade-in-up-scale delay-profile">
            <div className="relative w-3/5 max-w-xs md:max-w-sm aspect-square flex justify-center items-center">
              <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 sm:translate-x-1/2 -sm:-translate-y-1/2 z-10 transition-all duration-300">
                <ThemeToggler />
              </div>

              <div className="group w-full h-full rounded-full overflow-hidden border-4 border-neutral-950 dark:border-white-heat shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                  src={"https://placehold.co/100x100?text=LOKESH"}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 flex flex-col items-center md:items-center justify-center text-center md:text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter fade-in-up delay-0">
              K.V.M.S. LOKESH
            </h1>
            <h2 className="text-2xl font-semibold text-slate-600 dark:text-slate-300 fade-in-up delay-1">
              Frontend Developer
            </h2>
            <p className="text-base md:text-lg max-w-md mx-auto md:mx-0 fade-in-up delay-2">
              Passionate about building beautiful, accessible web interfaces
              with React and Tailwind CSS.
            </p>

            <div className="flex justify-center md:justify-start space-x-6 text-3xl fade-in-up delay-3">
              <a
                href="mailto:kvmslokesh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/kvmslokesh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/kvmslokesh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="relative group w-fit fade-in-up delay-4">
              <div className="absolute inset-0 z-0 bg-neutral-950 dark:bg-white-heat transition-transform duration-300 ease-in-out" />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block px-6 py-3 font-semibold border-2 border-neutral-950 dark:border-white-heat bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-transform duration-300 ease-in-out -translate-x-0.5 -translate-y-0.5 group-hover:-translate-x-2 group-hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
