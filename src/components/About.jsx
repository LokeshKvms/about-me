import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const container = useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".heading", {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });

      tl.from(
        ".line",
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.6"
      );

      tl.from(
        ".about-para",
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
          duration: 0.7,
          ease: "back.out(1.7)",
          stagger: 0.25,
        },
        "-=0.5"
      );

      function animateSkillBadges(section) {
        const isMobile = window.innerWidth < 768;

        gsap.from(section.querySelectorAll(".skill-badge"), {
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          scale: isMobile ? 1 : 0.95,
          duration: 0.7,
          ease: "back.out(2)",
          stagger: {
            amount: isMobile ? 0.25 : 0.6,
            from: "start",
          },
        });
      }

      const skillSections = gsap.utils.toArray(".skill-section");
      skillSections.forEach((section) => {
        animateSkillBadges(section);
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const workSkills = [
    "Html",
    "CSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "Laravel",
    "MySql",
    "Bootstrap",
    "React",
    "Tailwind CSS",
    "Vite",
    "Git",
    "Github",
    "Statamic",
  ];
  const funSkills = [
    "GSAP",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Figma",
    "Power BI",
    "Java",
    "Python",
    "Excel",
  ];

  return (
    <section
      ref={container}
      className="mx-4 px-6 py-10 flex flex-col md:flex-row md:gap-8"
    >
      <div className="w-full md:w-[70%] space-y-6">
        <SectionHeading level="h2" className="heading">
          About
          <span className="ml-[3px] text-slate-500 dark:text-slate-300 font-extrabold">
            .
          </span>
        </SectionHeading>

        {[
          `I’m a recent Computer Science graduate from VVIT (June 2025) and currently wrapping up a six-month Web Development Internship at Vivenns Global Pvt. Ltd., Hyderabad.`,
          `During this internship, I’ve worked on real-world projects where I implemented security features like CAPTCHA and middleware access control in Laravel, contributed to UI enhancements, and built responsive landing pages in React.`,
          `Beyond work, I explore modern web technologies and animation libraries to push the boundaries of user experience.`,
          `Now, as my internship concludes, I’m looking for full-time roles where I can contribute meaningfully and grow alongside a passionate team.`,
        ].map((para, i) => (
          <p
            key={i}
            className="about-para text-typo dark:text-white-heat leading-relaxed font-semibold"
          >
            {para}
          </p>
        ))}
      </div>

      <div className="w-full md:w-[30%] mt-10 md:mt-0 flex flex-col gap-8 justify-between">
        <div className="skill-section">
          <SectionHeading level="h3" className="heading">
            At work
            <span className="ml-[3px] text-slate-500 dark:text-slate-300 text-xl font-extrabold">
              .
            </span>
          </SectionHeading>
          <div className="flex flex-wrap gap-2">
            {workSkills.map((skill) => (
              <span
                key={skill}
                className="skill-badge will-change-transform bg-slate-500 dark:bg-slate-300 px-3 py-1 rounded-full text-sm border-2 shadow-xl border-typo font-bold text-white-heat dark:text-black-sheep"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-section">
          <SectionHeading level="h3" className="heading">
            For fun
            <span className="ml-[3px] text-slate-500 dark:text-slate-300 text-xl font-extrabold">
              .
            </span>
          </SectionHeading>
          <div className="flex flex-wrap gap-2">
            {funSkills.map((skill) => (
              <span
                key={skill}
                className="skill-badge will-change-transform bg-slate-500 dark:bg-slate-300 px-3 py-1 rounded-full text-sm border-2 shadow-xl border-typo font-bold text-white-heat dark:text-black-sheep"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
