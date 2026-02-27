import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500 pt-20">

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(151,1,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(98,18,107,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-70"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary-light/10 dark:bg-primary-light/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-primary-dark/10 dark:bg-primary-dark/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-[-15vh] md:mt-[-20vh]">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge / Overline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-primary-dark/10 dark:bg-primary-light/10 text-primary-dark dark:text-primary-light border border-primary-dark/20 dark:border-primary-light/20 backdrop-blur-sm shadow-[0_0_15px_rgba(151,1,45,0.1)]">
              Welcome To
            </span>
          </motion.div>

          {/* Main Society Name */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 tracking-tight font-heading leading-tight drop-shadow-sm">
            IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary-light filter drop-shadow-md">Robotics & Automation</span> Society
          </motion.h1>

          {/* University Name */}
          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-2 tracking-wider uppercase font-body">
            University of Moratuwa
          </motion.h2>

          <motion.h3 variants={itemVariants} className="text-md md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-12 tracking-[0.3em] uppercase">
            Sri Lanka
          </motion.h3>

          {/* Premium Slogan */}
          <motion.div variants={itemVariants} className="relative py-4 px-8 mt-4 glass border-white/20 shadow-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/5 to-primary-light/5 dark:from-primary-dark/10 dark:to-primary-light/10 transform opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 font-medium font-heading tracking-wide relative z-10">
              Inspired by <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary-dark">Passion</span> to Transform beyond <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary-light">Excellence</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Abstract Tech Core Animation at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[45vh] md:h-[55vh] z-0 pointer-events-none flex items-end justify-center mix-blend-luminosity opacity-80 dark:opacity-50">
        <svg viewBox="0 0 1000 400" className="w-[120vw] min-w-[1200px] h-full object-cover origin-bottom" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">

          <defs>
            <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="rgba(151,1,45,0)" />
              <stop offset="0.5" stopColor="rgba(151,1,45,0.8)" />
              <stop offset="1" stopColor="rgba(98,18,107,0)" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="rgba(98,18,107,0.4)" />
              <stop offset="100%" stopColor="rgba(98,18,107,0)" />
            </radialGradient>
          </defs>

          {/* Surrounding curved data rings */}
          <g className="origin-[500px_400px] animate-spin-slow">
            <ellipse cx="500" cy="400" rx="400" ry="200" stroke="url(#glowLine)" strokeWidth="1" fill="none" className="opacity-40" />
            <path d="M 100 400 A 400 200 0 0 1 900 400" stroke="#97012d" strokeWidth="2" strokeDasharray="10 30" fill="none" className="opacity-50 animate-draw-line" />
            <ellipse cx="500" cy="400" rx="300" ry="150" stroke="url(#glowLine)" strokeWidth="2" fill="none" className="opacity-60" />
            <path d="M 200 400 A 300 150 0 0 0 800 400" stroke="#62126b" strokeWidth="3" strokeDasharray="5 15" fill="none" className="opacity-70 animate-draw-line" style={{ animationDirection: 'reverse' }} />
          </g>

          {/* Geometric floating nodes */}
          <g className="origin-[500px_400px]">
            {/* Center Core */}
            <circle cx="500" cy="400" r="150" fill="url(#coreGlow)" className="animate-pulse-slow" />
            <path d="M 450 400 L 500 320 L 550 400 Z" fill="rgba(151,1,45,0.15)" stroke="#97012d" strokeWidth="1" className="animate-float" />
            <path d="M 450 400 L 500 480 L 550 400 Z" fill="rgba(98,18,107,0.15)" stroke="#62126b" strokeWidth="1" className="animate-float animation-delay-1000" />

            {/* Inner rotating hexagon ring */}
            <g className="origin-[500px_400px] animate-spin-slow-reverse">
              {[...Array(6)].map((_, i) => (
                <polygon key={i} points="500,280 515,300 500,320 485,300" fill="none" stroke="#d1d5db" strokeWidth="1" className="opacity-50 dark:opacity-30" transform={`rotate(${i * 60} 500 400)`} />
              ))}
              <circle cx="500" cy="400" r="120" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 8" fill="none" className="opacity-40" />
            </g>

            {/* Connecting Rays */}
            <path d="M 500 400 L 300 250 M 500 400 L 700 250 M 500 400 L 500 150" stroke="url(#glowLine)" strokeWidth="2" strokeDasharray="10 5" fill="none" className="opacity-40 animate-draw-line" />

            {/* Floating particles */}
            <g className="animate-float">
              <circle cx="300" cy="250" r="4" fill="#97012d" className="animate-pulse-slow" />
              <circle cx="700" cy="250" r="4" fill="#62126b" className="animate-pulse-slow animation-delay-2000" />
              <circle cx="500" cy="150" r="6" fill="#f8fafc" className="dark:fill-zinc-300 animate-pulse-slow animation-delay-4000" />
            </g>
          </g>

        </svg>
      </div>
    </section>
  );
}
