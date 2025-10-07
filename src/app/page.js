"use client"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="text-xl font-bold">Portfolio</div>
        <ul className="flex space-x-8">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">About</li>
          <li className="hover:text-pink-400 cursor-pointer">Projects</li>
          <li className="hover:text-pink-400 cursor-pointer">Skills</li>
          <li className="hover:text-pink-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16">
        {/* Avatar */}
        <div className="rounded-full border-4 border-pink-500 w-40 h-40 flex items-center justify-center mb-6">
          <span className="text-6xl">🧑‍🎓</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-pink-400">Anushree</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl font-medium text-gray-300 mb-4">
          Full Stack Developer & UI/UX Designer
        </h2>

        {/* Description */}
        <p className="max-w-xl text-sm sm:text-base text-gray-400 mb-10">
          I create beautiful, functional, and user-centered digital experiences. Let&apos;s build something amazing together.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            View My Work →
          </a>
          <a
            href="/Prakash_CV.pdf" // Replace with your actual file
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
