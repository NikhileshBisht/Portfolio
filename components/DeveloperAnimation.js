'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DeveloperAnimation() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const runAnimation = () => {
            setPhase(0);
            setTimeout(() => setPhase(1), 1000); // D falls
            setTimeout(() => setPhase(2), 2000); // eveloper shifts
            setTimeout(() => setPhase(3), 3000); // stick figure appears
            setTimeout(() => setPhase(4), 5000); // fix complete
        };

        runAnimation();

        const interval = setInterval(() => {
            runAnimation();
        }, 8000); // Loop every 8 seconds (5s animation + 3s wait)

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center text-[#2d2e32] text-4xl md:text-6xl font-extrabold mt-4 px-4 relative h-32 w-full max-w-4xl mx-auto">
            <span className="whitespace-pre"> Software&nbsp;</span>

            <div className="relative inline-flex items-center justify-center">
                {/* D */}
                <motion.span
                    className="inline-block origin-bottom-right"
                    animate={{
                        rotate: phase >= 1 && phase < 4 ? 90 : 0,
                        y: phase >= 1 && phase < 4 ? 40 : 0,
                        x: phase >= 1 && phase < 4 ? 10 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    D
                </motion.span>

                {/* Stick Figure */}
                <AnimatePresence>
                    {phase >= 3 && phase < 4 && (
                        <motion.svg
                            key="stick"
                            width="60"
                            height="100" // Reduced height slightly to fit better
                            viewBox="0 0 80 160"
                            className="absolute left-1/2 -ml-[30px] bottom-[-20px] z-10" // Centering logic
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* head */}
                            <circle cx="40" cy="20" r="10" stroke="#2d2e32" strokeWidth="4" fill="none" />
                            {/* body */}
                            <line x1="40" y1="30" x2="40" y2="80" stroke="#2d2e32" strokeWidth="4" />
                            {/* arms */}
                            <motion.line
                                x1="40"
                                y1="45"
                                x2="65"
                                y2="55"
                                stroke="#2d2e32"
                                strokeWidth="4"
                                animate={{ x2: [65, 55, 65] }}
                                transition={{ repeat: Infinity, duration: 0.6 }}
                            />
                            <line x1="40" y1="45" x2="15" y2="55" stroke="#2d2e32" strokeWidth="4" />
                            {/* legs */}
                            <line x1="40" y1="80" x2="20" y2="120" stroke="#2d2e32" strokeWidth="4" />
                            <line x1="40" y1="80" x2="60" y2="120" stroke="#2d2e32" strokeWidth="4" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </div>

            <motion.span
                className="inline-block"
                animate={{ x: phase >= 2 && phase < 4 ? 10 : 0 }}
                transition={{ type: "spring", stiffness: 120 }}
            >
                eveloper
            </motion.span>

            {/* Reset to fixed state/Success message if needed, or simply loop? 
          User's code had "Fixed ✅". I'll skip it to keep the title clean 
          after animation, as it resets to normal state. */}
        </div>
    );
}
