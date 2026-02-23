import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="bg-glow glow-top-right mix-blend-screen dark:mix-blend-plus-lighter"></div>
      <div className="bg-glow glow-bottom-left mix-blend-screen dark:mix-blend-plus-lighter"></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUwLCAxNTAsIDE1MCwgMC4yKSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none opacity-50 dark:opacity-20 z-0"></div>

      <div className="max-w-5xl z-10 animate-fade-in relative">
        <div className="inline-block px-5 py-2 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 border border-primary-dark/30 dark:border-primary-light/30 text-primary-dark dark:text-primary-light font-bold mb-8 text-sm md:text-base shadow-sm backdrop-blur-sm">
          ⚙️ IEEE Robotics & Automation Society
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight mb-6 drop-shadow-xl font-extrabold leading-tight">
          Pioneering the Future of <br />
          <span className="text-gradient">Robotics & Automation</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 delay-100 font-medium leading-relaxed">
          University of Moratuwa Student Branch. We are dedicated to fostering innovation, enhancing technical skills, and inspiring the next generation of engineers and researchers.
        </p>

        <div className="flex flex-wrap gap-5 justify-center delay-200">
          <button className="btn-primary text-lg px-10 py-4 shadow-primary-dark/30 shadow-lg">
            Join Us Now
          </button>
          <button className="glass font-bold text-lg px-10 py-4 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors border-gray-300 dark:border-gray-700">
            Upcoming Events
          </button>
        </div>
      </div>

      {/* Decorative SVG Element for tech vibe */}
      <div className="absolute bottom-10 left-10 opacity-30 dark:opacity-20 pointer-events-none hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L100 50L50 100L0 50L50 0Z" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="text-primary-dark" />
          <circle cx="50" cy="50" r="20" border="currentColor" strokeWidth="2" className="text-primary-light" />
        </svg>
      </div>
    </section>
  );
}
