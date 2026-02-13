import Link from "next/link";


export default function Navbar() {

  const navList = [
    { name: 'About', link: '#about' },
    // { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ]
  return (
    <div className='flex flex-col sm:flex-row w-full h-[10vh] justify-center sm:justify-between items-center bg-white drop-shadow-sm' >
      <Link href={'/'}>
        <p className="sm:ml-[70%] font-[Papyrus] font-extrabold text-center sm:text-left text-3xl" >NB</p>
      </Link>
      <ul className="flex list-none space-x-2 sm:pr-10 justify-center sm:justify-normal" >
        {navList.map((item, index) => {
          return (
            <Link key={index} href={item.link} className="scroll-smooth">
              <li className="sm:text-base font-semibold text-sm hover:scale-105 duration-300">{item.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  );
}