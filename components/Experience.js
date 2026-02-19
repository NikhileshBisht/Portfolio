'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Experience = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [activeTab, setActiveTab] = useState(null);

    const experiences = [
        {
            role: "Software Developer",
            company: "Polestar Analytics",
            companyUrl: "https://www.polestaranalytics.com/", // Placeholder URL
            duration: "Oct 2024 - Dec 2025",
            description: "Developed and optimized a B2B analytics SaaS platform by building scalable frontend and backend features, enhancing data governance modules, and improving performance through architectural refactoring and API optimizations."
        },
        {
            role: "Web Developer",
            company: "modern men life",
            companyUrl: "https://modernmenlife.com", // Placeholder URL
            duration: "May 2024 - Aug 2025",
            description: "Developed and maintained dynamic website features using PHP and MySQL. Implemented content and layout updates for blog and social media sections to improve user engagement.Worked on backend database operations, data handling, and performance optimization"
        }
    ];

    const handleTabClick = (index) => {
        if (activeTab === index) {
            setActiveTab(null);
            setIsFlipped(false);
        } else {
            setActiveTab(index);
            setIsFlipped(true);
        }
    };

    return (
        <div
        id="experience"
        className="w-full py-10 bg-[#f3f3f3] flex flex-col items-center justify-center space-y-10 rounded-tl-[100px] rounded-br-[100px]"
      >
            <div className='flex flex-col mx-auto'>
                <p className='text-md md:text-4xl mx-auto text-[black] rounded-full font-mono px-2 py-1 md:px-8 md:py-4 my-4'>Experience</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-20 w-full max-w-6xl">
                {/* Left Side: Flippable Image/Text Card */}
                <div className="relative w-80 h-96 [perspective:1000px] group">
                    <div
                        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                    >
                        {/* Front Side (Image) */}
                        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-xl overflow-hidden shadow-xl">
                            <img
                                src="/pole.jpeg"
                                alt="Experience"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Back Side (Text Content) */}
                        <div className="absolute inset-0 w-full h-full bg-[#2d2e32] text-white [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-xl p-6 flex flex-col justify-center items-center shadow-xl">
                            {activeTab !== null && (
                                <>
                                    <h3 className="text-2xl font-bold mb-4 text-center">{experiences[activeTab].role}</h3>

                                    {/* Company Name Button */}
                                    <Link href={experiences[activeTab].companyUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="bg-white text-[#2d2e32] px-6 py-2 rounded-full font-bold mb-4 hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-md">
                                            {experiences[activeTab].company}
                                        </button>
                                    </Link>

                                    <p className="text-sm text-center italic mb-4 text-gray-300">{experiences[activeTab].duration}</p>
                                    <p className="text-center text-sm leading-relaxed text-gray-100">
                                        {experiences[activeTab].description}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side: Tab "LI UI" */}
                <div className="flex flex-col space-y-4 w-full md:w-auto">
                    <ul className="flex flex-col space-y-4">
                        {experiences.map((exp, index) => (
                            <li
                                key={index}
                                onClick={() => handleTabClick(index)}
                                className={`cursor-pointer px-6 py-4 border-l-4 transition-all duration-300 w-full md:w-80 ${activeTab === index
                                    ? 'border-[#2d2e32] bg-gray-100 text-[#2d2e32] translate-x-2'
                                    : 'border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-[#2d2e32]'
                                    }`}
                            >
                                <h4 className="text-xl font-bold">{exp.role}</h4>
                                <p className="text-sm">{exp.company}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
