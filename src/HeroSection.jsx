import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gray-50 dark:bg-zinc-950 transition-colors duration-500 pt-20">

      {/* Background Shapes and Color Gradients for Light Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-light/5 rotate-12 blur-3xl rounded-full mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-dark/5 -rotate-12 blur-3xl mix-blend-multiply"></div>

        {/* Subtle geometric lines abstracting "tech" background */}
        <div className="absolute top-20 right-20 opacity-30">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 400L400 0M50 400L400 50M100 400L400 100" stroke="#62126b" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-10 opacity-30">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300L300 0M0 250L250 0M0 200L200 0" stroke="#97012d" strokeOpacity="0.2" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Background Shapes and Color Gradients for Dark Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(98,18,107,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
      </div>

      {/* Main Content Container matching the reference image layout */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-[-5vh]">

        {/* "Welcome" in cursive */}
        <h1
          className="text-7xl md:text-[6rem] lg:text-[7rem] text-primary-dark dark:text-primary-light drop-shadow-sm mb-4"
          style={{ fontFamily: "'Great Vibes', cursive", fontWeight: 400 }}
        >
          Welcome
        </h1>

        {/* Main Society Name */}
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 tracking-wide font-heading">
          IEEE <span className="text-primary-dark dark:text-primary-light">Robotics & Automation</span> Society
        </h2>

        {/* University Name */}
        <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-1 tracking-wider uppercase">
          University of Moratuwa
        </h3>

        <h4 className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-16 tracking-widest">
          SRI LANKA
        </h4>

        {/* Slogan with mixed cursive and block text */}
        <div className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-200 mt-4 flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
          <span style={{ fontFamily: "'Great Vibes', cursive" }}>Inspired by</span>
          <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-primary-light dark:text-primary-light">Passion</span>
          <span className="bg-primary-dark dark:bg-zinc-800 text-white dark:text-gray-100 text-sm md:text-base font-bold px-4 py-2 rotate-[-5deg] shadow-lg rounded-sm inline-block">to</span>
          <span style={{ fontFamily: "'Great Vibes', cursive" }}>Transform beyond</span>
          <span style={{ fontFamily: "'Great Vibes', cursive" }} className="text-primary-light dark:text-primary-light">Excellence</span>
        </div>
      </div>

      {/* Illustrated Bottom Section (Gears / Automation Concept) - Themed in Purple/Red/Metallic */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] md:h-[50vh] z-0 pointer-events-none opacity-90 dark:opacity-40 flex items-end justify-center overflow-hidden">

        <svg viewBox="0 0 1600 500" className="w-[120vw] min-w-[1400px] h-full object-cover origin-bottom animate-pan" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">

          {/* BACKGROUND LAYER: Flowing data streams and circuits */}
          <path d="M 0 450 Q 400 350 800 450 T 1600 350" stroke="url(#chainGrad)" strokeWidth="4" strokeDasharray="10 20" fill="none" strokeLinecap="round" className="animate-draw-line dark:opacity-50" />
          <path d="M 0 400 Q 300 300 700 400 T 1600 300" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5 15" fill="none" className="dark:stroke-zinc-700 animate-draw-line" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

          <defs>
            <linearGradient id="chainGrad" x1="0" y1="0" x2="1600" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#62126b" stopOpacity="0.4" className="dark:stop-opacity-100" />
              <stop offset="0.5" stopColor="#97012d" stopOpacity="0.4" className="dark:stop-opacity-100" />
              <stop offset="1" stopColor="#62126b" stopOpacity="0.4" className="dark:stop-opacity-100" />
            </linearGradient>
            <radialGradient id="glowBtn" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 -20) rotate(90) scale(35)">
              <stop stopColor="#97012d" stopOpacity="0.8" />
              <stop offset="1" stopColor="#97012d" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* LEFT SYSTEM: Giant Drive Machinery */}
          <g transform="translate(150, 250) scale(1.8)" className="origin-center animate-spin-slow">
            {/* Outer casing */}
            <path d="M -90 0 A 90 90 0 1 1 90 0 A 90 90 0 1 1 -90 0" stroke="#e5e7eb" strokeWidth="20" strokeDasharray="30 10" fill="none" className="dark:stroke-zinc-800" />
            {/* Base Gear body */}
            <circle cx="0" cy="0" r="80" stroke="#d1d5db" strokeWidth="8" fill="#f8fafc" className="dark:fill-zinc-900 dark:stroke-zinc-700" />
            {/* Inner dashed ring */}
            <circle cx="0" cy="0" r="60" stroke="#9ca3af" strokeWidth="2" fill="none" className="dark:stroke-zinc-600" strokeDasharray="4 4" />
            {/* Inner solid ring */}
            <circle cx="0" cy="0" r="30" stroke="#62126b" strokeWidth="6" fill="#ffffff" className="dark:fill-black dark:stroke-primary-dark" />
            {/* Center dot */}
            <circle cx="0" cy="0" r="10" fill="#62126b" className="dark:fill-primary-dark animate-pulse-slow" />
            {/* Gear Teeth */}
            {[...Array(16)].map((_, i) => (
              <path key={`tooth1-${i}`} d="M -12 -80 L 12 -80 L 15 -98 L -15 -98 Z" fill="#d1d5db" transform={`rotate(${i * 22.5})`} className="dark:fill-zinc-700" />
            ))}
          </g>

          {/* MIDDLE SYSTEM: Conveyor/Transfer Gears */}
          <g transform="translate(550, 350) scale(1.4)" className="origin-center animate-spin-slow-reverse">
            <circle cx="0" cy="0" r="60" stroke="#e5e7eb" strokeWidth="12" fill="#e5e7eb" className="dark:fill-zinc-800 dark:stroke-zinc-700" />
            <circle cx="0" cy="0" r="20" stroke="#97012d" strokeWidth="4" fill="#f9fafb" className="dark:fill-zinc-900 dark:stroke-primary-light" />
            <circle cx="0" cy="0" r="8" fill="#97012d" className="dark:fill-primary-light" />
            {/* Gear Teeth */}
            {[...Array(12)].map((_, i) => (
              <circle key={`tooth2-${i}`} cx="0" cy="-65" r="8" fill="#d1d5db" transform={`rotate(${i * 30})`} className="dark:fill-zinc-700" />
            ))}
          </g>

          {/* Conveyor Belt connecting left to middle */}
          <path d="M 270 120 L 510 270" stroke="#9ca3af" strokeWidth="6" strokeDasharray="15 15" className="animate-draw-line dark:stroke-zinc-600" />
          <path d="M 310 370 L 490 410" stroke="#9ca3af" strokeWidth="6" strokeDasharray="15 15" className="animate-draw-line dark:stroke-zinc-600" />

          {/* RIGHT SYSTEM: Complex Robotic Assembly Arm */}
          <g transform="translate(1000, 380)">
            {/* Base Mount */}
            <path d="M -80 150 L -60 0 L 60 0 L 80 150 Z" fill="#e5e7eb" className="dark:fill-zinc-800" />
            <circle cx="0" cy="0" r="40" fill="#d1d5db" className="dark:fill-zinc-700" />

            {/* Main Arm moving up and down */}
            <g className="animate-[float_6s_ease-in-out_infinite_alternate] origin-bottom delay-1000">
              {/* Arm Beam 1 */}
              <path d="M -20 -20 L -180 -180 L -150 -200 L 10 -40 Z" fill="#9ca3af" className="dark:fill-zinc-600" />
              {/* Elbow Joint */}
              <circle cx="-165" cy="-190" r="30" fill="#62126b" className="dark:fill-primary-dark" />
              <circle cx="-165" cy="-190" r="10" fill="#ffffff" className="dark:fill-black" />

              {/* Arm Beam 2 */}
              <g transform="translate(-165, -190) rotate(20) ">
                <path d="M -20 -20 L 150 -60 L 160 -20 L 20 20 Z" fill="#d1d5db" className="dark:fill-zinc-700" />

                {/* Wrist/Effector Joint */}
                <circle cx="155" cy="-40" r="25" stroke="#97012d" strokeWidth="6" fill="#f3f4f6" className="dark:fill-zinc-800 dark:stroke-primary-light" />

                {/* Glowing Laser / Effector Tool */}
                <circle cx="155" cy="-40" r="30" fill="url(#glowBtn)" className="animate-pulse-slow" />
                <path d="M 175 -50 L 230 -70 M 170 -25 L 220 -15" stroke="#62126b" strokeWidth="8" strokeLinecap="round" className="dark:stroke-primary-dark" />
                {/* Laser Beam */}
                <line x1="230" y1="-42.5" x2="400" y2="-42.5" stroke="#ef4444" strokeWidth="4" strokeDasharray="20 10" className="animate-draw-line opacity-50" />
              </g>
            </g>
          </g>

          {/* BACKGROUND SYSTEM: Floating Drones / Chips */}
          <g transform="translate(1300, 150)" className="animate-float">
            <rect x="-40" y="-20" width="80" height="40" rx="10" fill="#ffffff" stroke="#d1d5db" strokeWidth="4" className="dark:fill-zinc-900 dark:stroke-zinc-700" />
            <circle cx="-20" cy="0" r="6" fill="#97012d" className="animate-pulse-slow" />
            <circle cx="0" cy="0" r="6" fill="#6b7280" />
            <circle cx="20" cy="0" r="6" fill="#62126b" />
            {/* Drone Props */}
            <path d="M -50 -30 L -30 -20 M 30 -20 L 50 -30" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round" className="dark:stroke-zinc-600" />
            <ellipse cx="-50" cy="-30" rx="20" ry="4" fill="#6b7280" className="dark:fill-zinc-700 animate-spin-fast" />
            <ellipse cx="50" cy="-30" rx="20" ry="4" fill="#6b7280" className="dark:fill-zinc-700 animate-spin-fast" />
          </g>
          <g transform="translate(850, 100)" className="animate-float" style={{ animationDelay: '2s' }}>
            <path d="M 0 -15 L 15 0 L 0 15 L -15 0 Z" fill="#97012d" className="animate-pulse-slow" />
            <path d="M -30 0 L -15 0 M 15 0 L 30 0 M 0 -30 L 0 -15 M 0 15 L 0 30" stroke="#d1d5db" strokeWidth="2" className="dark:stroke-zinc-700" />
          </g>

        </svg>

      </div>
    </section>
  );
}
