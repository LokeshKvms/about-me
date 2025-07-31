import React from "react";
import SectionHeading from "./SectionHeading";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "VVIT Connect – Alumni Social Portal",
    description:
      "A full-stack social platform for alumni interaction with real-time notifications, media sharing, and user profiles.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Clerk Auth",
      "Cloudinary",
    ],
    github: "https://github.com/kvmslokesh/vvit-connect",
    live: "https://vvitcon.onrender.com",
  },
  {
    title: "L'sBuzzz – Real-time Chat App",
    description:
      "A minimal, glassmorphic chat app with login, media messaging, and block/unblock functionality using Firebase.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "https://github.com/kvmslokesh/lsbuzzz",
    live: "#",
  },
  {
    title: "CNN-Powered DDoS Detection",
    description:
      "A machine learning system to detect DDoS attacks from network traffic using TensorFlow and Scikit-learn.",
    tech: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    github: "https://github.com/kvmslokesh/ddos-detection",
    live: "#",
  },
  {
    title: "Traxp – Expense Tracker",
    description:
      "Laravel-based finance manager with calendar view, detailed history, and secure real-time summaries.",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    github: "https://github.com/kvmslokesh/traxp",
    live: "#",
  },
  {
    title: "Qref – Smart Link Manager",
    description:
      "Organize and search saved links with tags, groups, and filters in a personal dashboard.",
    tech: ["Laravel", "Bootstrap", "jQuery"],
    github: "https://github.com/kvmslokesh/qref",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mx-4 px-6 py-16 bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-colors duration-500"
    >
      <SectionHeading level="h2">
        Projects
        <span className="ml-[3px] text-slate-500 dark:text-slate-300">.</span>
      </SectionHeading>

      <div className="grid gap-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="relative group w-full">
            <div className="absolute inset-0 z-0 bg-neutral-950 dark:bg-white-heat/90 transition-transform duration-300 ease-in-out" />

            <div className="relative z-10 h-full flex flex-col justify-between p-6 border-2 border-neutral-950 dark:border-white-heat/90 bg-white-heat dark:bg-black-sheep text-typo dark:text-white-heat transition-transform duration-300 ease-in-out -translate-x-0.5 -translate-y-0.5 group-hover:-translate-x-2 group-hover:-translate-y-2 active:translate-x-0 active:translate-y-0">
              <h3 className="text-xl font-semibold mb-2 group-hover:underline underline-offset-4 decoration-typo dark:decoration-white-heat">
                {project.title}
              </h3>

              <p className="text-sm text-typo/90 dark:text-white-heat/90 leading-relaxed font-semibold mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-slate-500 dark:bg-slate-300 px-3 py-1 rounded-full text-sm border-2 shadow-xl border-typo font-bold text-white-heat dark:text-black-sheep"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-lg text-typo dark:text-white-heat mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <FaGithub />
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
