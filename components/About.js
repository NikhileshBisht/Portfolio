import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import Skills from './Skills';
import SkillsAnimate from './SkillsAnimate';


const About = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-evenly md:h-[100vh] w-screen bg-white'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='relative mx-auto mt-4'>
            <img className='hover:scale-105 duration-300 md:w-full w-[50%] mx-auto border-solid rounded-2xl border-5 ' src="pic2.jpeg" alt="picture" srcset="" />
            <div className='flex justify-evenly mt-4'>
              <Link href={'#contact'}>
                <div className="font-mono hover:scale-105 duration-300 flex items-center justify-evenly space-x-2 md:h-10 border-solid px-2 py-1 rounded-md bg-[#2d2e32] text-white mr-1 ml-[-1rem]">
                  <FaCode /> 
                  <p>Hire Me</p>
                </div>
              </Link>

              <Link href={'https://docs.google.com/document/d/145XnfM2P0pFuAkHZXY_At8v3z4AG4tXmSm6fOdYiud4/edit?usp=sharing'} target='_blank'>
                <div className="font-mono hover:scale-105 duration-300 flex items-center justify-evenly space-x-2 md:h-10 px-2 py-1 border-solid rounded-md bg-[#2d2e32] text-white">
                  <IoDocumentText />
                  <p>Resume</p>
                </div>
              </Link>
            </div>
        </div>
        <div className='flex flex-col justify-evenly'>
          <div>
            <p className='text-[#555555] text-lg md:text-xl font-semibold mt-4 italic'>Who I am</p>
            <p className='text-[#2d2e32] text-4xl font-extrabold' >About /-</p>
          </div>
          <p className='text-[#555555] text-2xl md:text-3xl font-bold'>Hi, I ' m a Frontend Developer 🚀 from Delhi, India.</p>
          <p className='text-[#555555] text-sm md:text-lg'>I always have a great desire to learn about and experiment with new technologies, as well as keep up with the newest developments in web development 🚀. I am an expert in creating stunning and useful interfaces with ReactJS, JavaScript, Redux, and NextJS.</p>
          <p className='text-[#555555] text-sm md:text-lg'>Along with my expertise in web programming, I also have a strong eye for design and enjoy using programs like  Adobe Photoshop, Vegas Pro, Premium Pro, and others to realize my concepts and create engaging movies. When I'm not coding.</p>
        </div>
      </div>
      {/* Skills */}
      <div className='mt-4 md:mt-0'>
        <div className='flex flex-col mx-auto'>
          <p className='text-md md:text-4xl mx-auto bg-[#2d2e32] text-white rounded-full font-mono px-2 py-1 md:px-8 md:py-4 my-4'>Tech Stack</p>
        </div>
        <div className='m-4 text-[#2d2e32]'>
          <SkillsAnimate iconSize={'md:text-8xl text-6xl'}/>
        </div>
      </div>
    </div>
  )
}

export default About
