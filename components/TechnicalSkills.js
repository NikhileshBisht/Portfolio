"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// SAFE + STABLE ICON PACKS
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiJira,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  FaCode,
  FaNetworkWired,
  FaCubes,
  FaServer,
} from "react-icons/fa";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: FaCode },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: FaServer },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { name: "DSA", icon: FaCode },
      { name: "Networking", icon: FaNetworkWired },
      { name: "OOP", icon: FaCubes },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: VscVscode },
      { name: "Jira", icon: SiJira },
    ],
  },
];

export default function TechnicalSkills() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full py-20 px-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#2d2e32] text-3xl sm:text-4xl font-extrabold text-center ">
          Technical Skills
        </h2>

        <div
          className="relative min-h-[250px] flex justify-center items-center overflow-hidden"
          style={{ marginTop: "25px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl bg-white rounded-tl-3xl rounded-tr-3xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-[#2d2e32] mb-8 text-center">
                {skills[index].title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {skills[index].items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 px-4 py-3 bg-[#2d2e32] text-white rounded-full text-sm sm:text-base hover:scale-105 transition duration-300"
                    >
                      <span className="text-lg sm:text-xl">
                        <Icon />
                      </span>
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {skills.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${i === index
                ? "bg-black scale-125"
                : "bg-gray-400 hover:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}