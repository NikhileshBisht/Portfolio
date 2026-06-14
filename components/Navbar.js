import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

export default function Navbar() {
  const navList = [
    { name: "Home", link: "/home" },
    { name: "Education", link: "/education" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-8 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo + Socials */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <Link href="/">
            <p className="font-[Papyrus] font-extrabold text-3xl">
              NB
            </p>
          </Link>

          <div className="flex items-center gap-4 text-2xl text-gray-700">
            <Link
              href="https://www.linkedin.com/in/nikhilesh-bisht-407670228/"
              target="_blank"
            >
              <CiLinkedin className="hover:text-blue-600 hover:scale-125 duration-300" />
            </Link>

            <Link
              href="https://github.com/NikhileshBisht"
              target="_blank"
            >
              <FiGithub className="hover:text-black hover:scale-125 duration-300" />
            </Link>

            <Link
              href="https://www.youtube.com/@NikhileshBisht-y5c"
              target="_blank"
            >
              <FaYoutube className="hover:text-red-600 hover:scale-125 duration-300" />
            </Link>

            <Link
              href="https://www.instagram.com/9teeskido_o/?hl=en"
              target="_blank"
            >
              <FaInstagram className="hover:text-pink-600 hover:scale-125 duration-300" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-sm sm:text-lg font-semibold hover:scale-105 duration-300 block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}