import ThemeToggler from "./ThemeToggler";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    const splitTitle = new SplitText(".title", { type: "words" });

    gsap.set(splitTitle.words, {
      opacity: 0,
      y: 30,
    });

    tl.to(splitTitle.words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "back.out(3.5)",
      stagger: 0.1,
    });

    tl.from(
      ".subtitle",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "back.out(3.5)",
      },
      "-=0.4"
    );

    tl.from(
      ".hero-desc",
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "back.out(3.5)",
      },
      "-=0.4"
    );

    tl.from(
      ".hero-icon",
      {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: "back.out(3.5)",
        stagger: 0.1,
      },
      "-=0.3"
    );

    tl.from(
      ".resume-btn",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "back.out(3.5)",
      },
      "-=0.3"
    );

    tl.from(
      ".profile-pic",
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1,
        ease: "back.out(3.5)",
      },
      0
    );
  }, []);

  return (
    <section className="mx-4 py-16 md:py-24 bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-colors duration-500">
      <div className="mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center">
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-48 md:w-96 aspect-square profile-pic">
              <div className="absolute -top-2 -right-2 translate-x-1/3 -translate-y-1/3 sm:translate-x-1/2 -sm:-translate-y-1/2 z-10">
                <ThemeToggler />
              </div>

              <div className="group w-full h-full rounded-full overflow-hidden border-4 border-neutral-950 dark:border-white-heat shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 flex flex-col items-center md:items-center justify-center text-center md:text-center space-y-6">
            <h1 className="title text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Venkata Mani Sai Lokesh Kollapudi
            </h1>

            <h2 className="subtitle text-2xl font-semibold text-slate-600 dark:text-slate-300">
              Web Developer
            </h2>

            <p className="hero-desc text-base md:text-lg max-w-md font-medium">
              Passionate about building beautiful, accessible web interfaces with React, Laravel and Tailwind CSS.
            </p>

            <div className="flex justify-center md:justify-start space-x-6 text-3xl">
              <a
                href="mailto:kvmslokesh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/kvmslokesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/kvmslokesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon transition-transform duration-300 hover:scale-110 hover:text-slate-600 dark:hover:text-slate-300"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="relative group w-fit resume-btn">
              <div className="absolute inset-0 z-0 bg-neutral-950 dark:bg-white-heat/90 transition-transform duration-300 ease-in-out" />
              <a
                href="/kvmslokesh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block px-6 py-3 font-semibold border-2 border-neutral-950 dark:border-white-heat/90 bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-transform duration-300 ease-in-out -translate-x-0.5 -translate-y-0.5 hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
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
