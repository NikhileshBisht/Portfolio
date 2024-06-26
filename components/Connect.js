import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube  } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

const Connect = () => {
  return (
    <div >
        <div className='flex flex-row'>
            <Link href={"https://www.linkedin.com/in/nikhilesh-bisht-407670228/"} target="blank">
                <CiLinkedin className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://github.com/NikhileshBisht"} target="blank">
                <FiGithub className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://www.upwork.com/freelancers/~0134954ff49bb853b3"} target="blank">
                <SiUpwork className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://www.youtube.com/channel/UCkogP6r2VVK1eYuboXKmBLw"} target="blank">
                <FaYoutube  className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://www.instagram.com/9teeskido_o/?hl=en"} target="blank">
                <FaInstagram className="hover:scale-125 duration-300" />
            </Link>
        </div>
        
    </div>
  )
}

export default Connect
