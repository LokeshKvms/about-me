import React from "react";
import SectionHeading from "./SectionHeading";

const About = () => {
  const workSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "Laravel",
    "MySQL",
    "Bootstrap",
    "React",
    "Tailwind CSS",
    "Vite",
    "Git",
    "GitHub",
  ];

  const funSkills = [
    "GSAP",
    "Express.js",
    "Figma",
    "Node.js",
    "Power BI",
    "Java",
    "Python",
    "MongoDB",
  ];

  const SkillGroup = ({ title, skills }) => (
    <div>
      <SectionHeading level="h3">
        {title}
        <span className="ml-[3px] text-slate-500 dark:text-slate-300 text-xl font-extrabold">
          .
        </span>
      </SectionHeading>
      <ul
        className="flex flex-wrap gap-2"
        aria-label={`Skills used ${title.toLowerCase()}`}
      >
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-3 py-1 rounded-full text-sm font-semibold border-2 shadow-md bg-slate-200 dark:bg-slate-700 text-typo dark:text-white-heat border-typo dark:border-white-heat"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="px-4 md:px-8 py-12 flex flex-col md:flex-row md:gap-12 mx-4">
      <div className="w-full md:w-[70%] space-y-6">
        <SectionHeading level="h2">
          About
          <span className="ml-[3px] text-slate-500 dark:text-slate-300 font-extrabold">
            .
          </span>
        </SectionHeading>

        <p className="text-typo dark:text-white-heat leading-relaxed text-[1.05rem] font-medium">
          I’m a recent Computer Science graduate from VVIT (June 2025) and
          currently wrapping up a six-month web development internship at
          Vivenns Global Pvt. Ltd., Hyderabad.
          <br />
          <br />
          During my time here, I’ve worked on real-world projects involving both
          backend and frontend development. I’ve implemented security features
          like CAPTCHA integrations and access middleware, contributed to UI
          improvements, and built a responsive landing page using React.
          <br />
          <br />
          Outside of work, I enjoy exploring modern web technologies,
          animations, and tools that push the boundaries of interface design and
          user experience.
          <br />
          <br />
          As I near the end of my internship, I’m actively seeking full-time
          opportunities where I can contribute to impactful web applications and
          continue growing as a developer.
        </p>
      </div>

      <div className="w-full md:w-[30%] mt-12 md:mt-0 flex flex-col gap-10">
        <SkillGroup title="At work" skills={workSkills} />
        <SkillGroup title="For fun" skills={funSkills} />
      </div>
    </section>
  );
};

export default About;
