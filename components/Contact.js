import Link from 'next/link'

import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube  } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
 
const Contact = () => {
  
  return (
    <div id='contact' className='bg-[#f9f9f9] p-10 w-full h-full flex items-center justify-evenly overflow-x-hidden'>
      <div className="md:w-[70%] w-[90%] flex items-center justify-between">
        <div className='  w-full'>
          <p className='text-[#555555] text-xl font-semibold italic'>Hire Me</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold'>Get in touch</p>
          <p className='md:w-[70%] mb-4 w-full text-[#555555] text-sm md:text-lg'>I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact.</p>

        </div>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div>
            <p className='text-[#2d2e32] text-lg font-bold'>SAY HELLO</p>
            <div className='flex md:justify-between space-x-4'>
              <p className='text-[#555555]'>Mail to me at : nikhileshbisht2002@gmail.com</p>
        { /* <CiMail   className='text-2xl hover:scale-125 duration-300' />*/}
       
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
