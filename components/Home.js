'use client';
import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaCss3, FaHtml5, FaInstagram, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiUpwork } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import DeveloperAnimation from './DeveloperAnimation';
import Connect from './Connect';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-evenly md:h-[70vh] h-[70vh] bg-[#f3f3f3] space-y-10'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='flex flex-col justify-evenly space-y-4'>
          <DeveloperAnimation />
          <p className="text-[#555555] text-xl md:text-3xl font-medium">
            <span className="hover:text-black">
              <Typewriter
                options={{
                  strings: ["Hi, I'm Nikhilesh Bisht"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </p>

        </div>
        <div className='w-[60%] md:w-[40%] relative mx-auto mt-[-4rem] hover:scale-110 duration-300'>
          <div className=' rounded-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-full border-4 border-black animate-spin md:hidden xl:block'></div>
            <div className='absolute top-0 left-0 w-[101%] h-[101%] rounded-full border-4 border-black animate-spin md:hidden xl:block'></div>
            <img className='' src="/homePic.jpg" alt="picture" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
