import { FaInstagram, FaLinkedin ,FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Connect from "./Connect";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
 


export default function Footer() {
    return(
        <div className="bg-[#2d2e32] flex flex-col sm:flex-row justify-center sm:justify-evenly h-[20vh] items-center w-full">
            <div className="text-white font-extrabold" >Copyright © 2024. All rights are reserved</div>
            <div className="flex text-white space-x-4 text-2xl">
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
            <Link href={"https://www.instagram.com/nikhilesh105754/?hl=en"} target="blank">
                <FaInstagram className="hover:scale-125 duration-300" />
            </Link>
            </div>
        </div>
    )
}