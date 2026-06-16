"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPlay,
  FaPause,
  FaVolumeUp,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

export default function Navbar() {
  const navList = [
    { name: "Home", link: "/home" },
    { name: "Education", link: "/education" },
    { name: "Experience", link: "/experience" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const playlist = [
    { title: "Song 1", src: "/music/song1.mp3" },
    { title: "Song 2", src: "/music/song2.mp3" },
    { title: "Song 3", src: "/music/song3.mp3" },
  ];

  const [time, setTime] = useState("");
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  const audioRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentSong(
      (prev) => (prev - 1 + playlist.length) % playlist.length
    );
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm px-4 sm:px-8 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">

          {/* Logo */}
          <Link href="/">
            <p className="font-[Papyrus] font-extrabold text-3xl cursor-pointer">
              NB
            </p>
          </Link>

          {/* Socials + Clock + Music */}
          <div className="flex items-center gap-4 text-2xl text-gray-700 flex-wrap">

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
          {/* Clock */}
          <div className="font-mono text-sm sm:text-lg font-bold text-gray-700">
            {time}
          </div>

          {/* Music Player */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-md">

            <button
              onClick={prevSong}
              className="hover:scale-110 duration-200"
            >
              <MdSkipPrevious size={20} />
            </button>

            <button
              onClick={togglePlay}
              className="hover:scale-110 duration-200"
            >
              {isPlaying ? (
                <FaPause size={14} />
              ) : (
                <FaPlay size={14} />
              )}
            </button>

            <button
              onClick={nextSong}
              className="hover:scale-110 duration-200"
            >
              <MdSkipNext size={20} />
            </button>

            <div className="hidden md:flex flex-col">
              <span className="text-xs font-medium text-gray-700">
                {playlist[currentSong].title}
              </span>
              <span className="text-[10px] text-gray-400">
                Playlist
              </span>
            </div>

            <div className="h-5 w-px bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <FaVolumeUp
                size={14}
                className="text-gray-600"
              />

              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) =>
                  setVolume(Number(e.target.value))
                }
                className="w-20 accent-black cursor-pointer"
              />
            </div>

            <audio
              ref={audioRef}
              onEnded={nextSong}
            >
              <source
                src={playlist[currentSong].src}
                type="audio/mpeg"
              />
            </audio>

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