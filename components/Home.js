import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaCss3, FaHtml5, FaInstagram, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiUpwork } from "react-icons/si";
import { FaYoutube  } from "react-icons/fa6";
import Connect from './Connect';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-evenly md:h-[90vh] h-[90vh] w-screen bg-[#f9f9f9] space-y-10'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='flex flex-col justify-evenly space-y-4'>
          <p className='text-[#2d2e32] text-4xl md:text-6xl font-extrabold mt-4 mx-auto' >Front-End React Developer 👋</p>
          <p className='text-[#555555] text-sm md:text-lg'>Hi, I'm <span className='hover:text-black'>Nikhilesh Bisht</span>. A passionate Front-end React Developer based in Delhi, India. 📍</p>
          <div className="flex space-x-2 md:space-x-4 text-4xl mx-auto">
            {/* <Connect /> */}
            <Link href={"https://www.linkedin.com/in/nikhilesh-bisht-407670228/"} target="blank">
                <CiLinkedin className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://github.com/NikhileshBisht"} target="blank">
                <FiGithub className="hover:scale-125 duration-300" />
            </Link>
             
            <Link href={"https://www.youtube.com/channel/UCkogP6r2VVK1eYuboXKmBLw"} target="blank">
                <FaYoutube  className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://www.instagram.com/9teeskido_o/?hl=en"} target="blank">
                <FaInstagram className="hover:scale-125 duration-300" />
            </Link>
          </div>
        </div>
        <div className='w-[80%] md:w-[60%] relative mx-auto mt-[-4rem] hover:scale-110 duration-300'>
          <div className=' rounded-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-full border-4 border-black animate-spin md:hidden xl:block'></div>
            <div className='absolute top-0 left-0 w-[101%] h-[101%] rounded-full border-4 border-black animate-spin md:hidden xl:block'></div>
            <img className='' src="/homePic.jpg" alt="picture" srcset="" />
            <div className='absolute top-[-0.25rem] left-1 w-[100%] h-[100%] rounded-full border-4 border-black animate-spin md:hidden xl:block'></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
