'use client'
import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import TechStack from './TechStack';
import { useState } from 'react';
import Chatbot from './Chatbot';
import { FaRobot } from 'react-icons/fa';


const About = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div id='about' className='flex flex-col items-center justify-center py-20 w-full bg-white overflow-x-hidden'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='relative mx-auto mt-4'>
          {/* Bot Animation Trigger */}
          <img className='hover:scale-105 duration-300 md:w-full w-[50%] mx-auto border-solid rounded-2xl border-5 ' src="pic2.jpeg" alt="picture" srcset="" />
          <div className='flex justify-evenly mt-4'>
            <Link href={'#contact'}>
              <div className="font-mono hover:scale-105 duration-300 flex items-center justify-evenly space-x-2 md:h-10 border-solid px-2 py-1 rounded-md bg-[#2d2e32] text-white mr-1 ml-[-1rem]">
                <FaCode />
                <p>Hire Me</p>
              </div>
            </Link>

            <a href="/Nikhilesh Bisht Resume.pdf" download="Nikhilesh Bisht Resume.pdf">
              <div className="font-mono hover:scale-105 duration-300 flex items-center justify-evenly space-x-2 md:h-10 px-2 py-1 border-solid rounded-md bg-[#2d2e32] text-white">
                <IoDocumentText />
                <p>Resume</p>
              </div>
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-evenly relative'>
          {/* AI Chatbot Trigger */}
          <div className="absolute top-0 right-0 z-10">
            <div
              className="cursor-pointer animate-bounce"
              onClick={() => setShowChatbot(true)}
            >
              <div className="relative">
                <div className="bg-white border-2 border-black rounded-xl p-2 mb-2 shadow-lg absolute -top-12 -right-32 w-max opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-bold font-mono">AI Chatbot</p>
                  <div className="absolute -bottom-2 left-4 w-4 h-4 bg-white border-b-2 border-l-2 border-black transform rotate-45"></div>
                </div>
                <div className="bg-blue-500 p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-white">
                  <FaRobot className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='text-[#555555] text-lg md:text-xl font-semibold mt-4 italic'>Who I am</p>
            <p className='text-[#2d2e32] text-4xl font-extrabold' >About /-</p>
          </div>
          <p className='text-[#555555] text-2xl md:text-3xl font-bold'>Hi, I'm a Software Engineer  from 🌍 Delhi, India.</p>
          <p className='text-[#555555] text-sm md:text-lg'>I’m a tech enthusiast who thrives on challenges — the harder the problem, the more motivated I get to solve it. I love exploring new technologies, building cool things, and constantly pushing my limits. Beyond tech, I’m also a passionate gamer and streamer, and a big fan of sports. Whether it’s coding, gaming, or cheering for a great match, I’m always excited to stay active and keep learning.</p>
        </div>
      </div>
      {/* Skills */}
      {/* Skills */}
      <TechStack />
      {showChatbot && (
        <Chatbot 
          onClose={() => setShowChatbot(false)}
          modelProvider="ollama"
        />
      )}
    </div>
  )
}

export default About
