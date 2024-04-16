import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Home from '@/components/Home';
import Head from 'next/head';
import { MdArrowUpward } from "react-icons/md";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Nikhilesh</title>
        <meta name="keywords" content="Portfolio" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
