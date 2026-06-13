'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const skills = [
  { title: 'Languages',     items: ['C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'] },
  { title: 'Frameworks',    items: ['React.js', 'Next.js', 'Angular', 'Node.js', 'Express.js', 'Redux', 'Tailwind CSS'] },
  { title: 'Core Concepts', items: ['DSA', 'Networking', 'OOP'] },
  { title: 'Databases',     items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { title: 'Tools',         items: ['Docker', 'Git', 'Linux', 'VS Code', 'Jira', 'Azure Boards'] },
];

/* ─────────────────────────────────────────────────────
   Stick figure — faces RIGHT, walks forward, 
   right arm stretched FORWARD (pulling rope ahead of it)
───────────────────────────────────────────────────── */
function StickFigure() {
  return (
    <motion.div
      animate={{
        x: [0, -2, 0],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        flexShrink: 0,
        width: 90,
        height: 110,
      }}
    >
      <svg width="90" height="110" viewBox="0 0 90 110">
        {/* Head */}
        <circle
          cx="25"
          cy="20"
          r="10"
          stroke="#2d2e32"
          strokeWidth="3"
          fill="none"
        />

        {/* Leaning body */}
        <line
          x1="25"
          y1="30"
          x2="42"
          y2="70"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Pulling arms */}
        <line
          x1="36"
          y1="45"
          x2="85"
          y2="40"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <line
          x1="38"
          y1="48"
          x2="85"
          y2="44"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Front support leg */}
        <motion.line
          x1="42"
          y1="70"
          x2="60"
          y2="100"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            x2: [60, 55, 60],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />

        {/* Rear pushing leg */}
        <motion.line
          x1="42"
          y1="70"
          x2="15"
          y2="100"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
          animate={{
            x2: [15, 20, 15],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />

        {/* Foot */}
        <line
          x1="10"
          y1="100"
          x2="25"
          y2="100"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <line
          x1="55"
          y1="100"
          x2="70"
          y2="100"
          stroke="#2d2e32"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────
   Animated wavy rope
───────────────────── */
function Rope() {
  return (
    <svg
      width="50"
      height="20"
      viewBox="0 0 50 20"
      fill="none"
      style={{
        flexShrink: 0,
        alignSelf: 'center',
        marginBottom: '6px',
      }}
    >
      <motion.path
        stroke="#2d2e32"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        animate={{
          d: [
            'M0 10 Q12 8 25 10 Q38 12 50 10',
            'M0 10 Q12 2 25 10 Q38 18 50 10',
            'M0 10 Q12 8 25 10 Q38 12 50 10',
          ],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}

/* ─────────────
   Skill card
───────────── */
function SkillCard({ title, items }) {
  return (
    <div
      style={{ flexShrink: 0, width: '200px' }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4"
    >
      <h3 className="text-[#2d2e32] font-bold text-xs mb-3 tracking-widest uppercase">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="px-2 py-0.5 text-xs bg-[#2d2e32] text-white rounded-md">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Main export
   
   HOW THE LOOP WORKS:
   - trainWidth  = total pixel width of figure + ropes + cards
   - The train starts at x = containerWidth (fully off-screen RIGHT)
   - It moves to x = -trainWidth (fully off-screen LEFT)
   - Then instantly resets back to x = containerWidth → repeat
   - This creates an infinite left-to-right conveyor illusion
═══════════════════════════════════════════════════════ */
export default function TechnicalSkills() {
  const sectionRef   = useRef(null);
  const containerRef = useRef(null);
  const controls     = useAnimation();
  const inView       = useInView(sectionRef, { once: false, margin: '0px 0px -80px 0px' });

  // Approx train width: figure(60) + 5 ropes(50*5) + 5 cards(200*5) + gaps
  const TRAIN_W   = 60 + 5 * 50 + 5 * 200 + 40; // ~1400px
  const DURATION  = 14; // seconds to cross the screen — slower = heavier feel

  useEffect(() => {
    if (!inView) {
      controls.stop();
      return;
    }

    const container = containerRef.current;
    const viewW = container ? container.offsetWidth : 900;

    async function runLoop() {
      // Jump to start (off-screen right) instantly
      await controls.set({ x: viewW });
      // Animate to off-screen left
      await controls.start({
        x: -TRAIN_W,
        transition: { duration: DURATION, ease: 'linear' },
      });
      // Loop
      runLoop();
    }

    runLoop();

    return () => controls.stop();
  }, [inView, controls]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-[#f5f5f5]"
      style={{ overflow: 'hidden' }}
    >
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2d2e32] text-4xl font-extrabold mb-10"
        >
          Technical Skills
        </motion.h2>

        {/* Container — needed to measure viewport width */}
        <div ref={containerRef} style={{ position: 'relative' }}>

          {/* Ground line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2d2e32] opacity-15" />

          {/* ── THE TRAIN ── */}
          <motion.div
            animate={controls}
            style={{ display: 'flex', alignItems: 'flex-end', gap: 0, paddingBottom: '8px', width: 'max-content' }}
          >
            {/* Figure */}
            <StickFigure />

            {/* Rope from figure to first card */}
            <Rope />

            {/* Cards with ropes between them */}
            {skills.map((skill, i) => (
              <React.Fragment key={skill.title}>
                <SkillCard title={skill.title} items={skill.items} />
                {i < skills.length - 1 && <Rope />}
              </React.Fragment>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}