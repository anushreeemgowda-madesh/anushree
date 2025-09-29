"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-purple-900 to-[#0f172a] text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 30 ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-6 hidden md:block">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 pt-36 pb-24"
      >
        {/* Profile Emoji */}
        <div className="mb-8">
          <div className="w-40 h-40 rounded-full border-4 border-pink-400 flex items-center justify-center text-6xl bg-slate-900 shadow-lg">
            🎓
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Anushree 
          </span>
        </h1>

        {/* Subtext */}
        <h2 className="text-2xl text-gray-300 mb-4">
          Full Stack Developer & UI/UX Designer
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mb-10">
          I create beautiful, functional, and user-centered digital experiences.
          Let's build something amazing together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View My Work →
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition duration-300 flex items-center justify-center gap-2"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
