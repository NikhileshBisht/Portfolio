import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact,SiMysql } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

function Skills() {
  return (
    <div>
      <div className='flex flex-col items-center md:space-x-8 space-y-4 snap-x snap-mandatory'>
          <p className='text-4xl'>Tech Stack</p>
          {/* <p className='hidden md:block ml-4'>|</p> */}
          <p className='w-full h-0.5 bg-[#555555]'></p>
        {/* <div className='flex md:flex-row flex-col  text-lg md:text-xl text-[#555555]'></div> */}
        <div className='flex flex-col md:flex-row text-8xl md:space-x-4 space-y-4 md:space-y-0 items-center'>
          <div className='flex space-x-4 mx-auto animate-'>
            <FaHtml5 className='hover:animate-bounce'/>
            <FaCss3 className='hover:animate-bounce'/>
            <IoLogoJavascript className='hover:animate-bounce'/>
            <FaNodeJs className='hover:animate-bounce'/>
            <FaReact className='hover:animate-bounce'/>
            <TbBrandNextjs className='hover:animate-bounce' />
            <SiChakraui className='hover:animate-bounce'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
