"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 shadow-md bg-black bg-opacity-20 backdrop-blur-md">
        <div className="text-2xl font-bold text-pink-400">Anushree</div>
        <ul className="flex space-x-6 text-sm sm:text-base font-medium">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-pink-400 transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28">
        {/* Avatar with Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-full border-4 border-pink-500 w-40 h-40 flex items-center justify-center mb-6 bg-white/10"
        >
          <span className="text-6xl">🧑‍🎓</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-pink-400">Anushree</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl font-medium text-gray-300 mb-4"
        >
          Full Stack Developer & UI/UX Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-sm sm:text-base text-gray-400 mb-10"
        >
          I create beautiful, functional, and user-centered digital experiences.
          Let&apos;s build something amazing together.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#projects"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            View My Work →
          </a>
          <a
            href="/Prakash_CV.pdf" // Make sure this file is in your /public folder
            download
            className="border-2 border-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition flex items-center space-x-2"
          >
            <span>Download CV</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
