import React from 'react'
import { FaCss3, FaHtml5,   FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

function SkillsAnimate({iconSize}) {
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className=' overflow-x-hidden w-[80vw] pt-2 pb-2'>
      <div className='pDiv flex items-center justify-center'>
        {
          tempArray.map((item, index) => {
            return(
              <div key={index} className={`transDiv flex mx-auto`}>
                <FaHtml5 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
                <FaCss3 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
                <IoLogoJavascript className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
                <FaNodeJs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
                <FaReact className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
                <TbBrandNextjs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`} />
                <SiChakraui className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              </div>
            )
          })
        }
            {/* <div className={`transDiv flex mx-auto`}>
              <FaHtml5 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaCss3 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <IoLogoJavascript className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaNodeJs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaJava className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaReact className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <TbBrandNextjs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`} />
              <SiChakraui className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
            </div> */}
      </div>
    </div>
  )
}

export default SkillsAnimate
