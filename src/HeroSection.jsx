import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center text-center px-6 py-16 relative overflow-hidden">
      <div className="bg-glow glow-top-right"></div>
      <div className="bg-glow glow-bottom-left"></div>

      <div className="max-w-4xl z-10 animate-fade-in">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 border border-primary-dark/20 dark:border-primary-light/20 text-primary-dark dark:text-primary-light font-semibold mb-8 text-sm">
          🚀 Next Generation Solutions
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 drop-shadow-lg">
          Transform Your <br />
          <span className="text-gradient">Digital Presence</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 delay-100">
          We blend state-of-the-art technology with stunning aesthetics to propel your business forward.
        </p>

        <div className="flex flex-wrap gap-4 justify-center delay-200">
          <button className="btn-primary text-lg px-8 py-4">
            Start a Project
          </button>
          <button className="glass font-semibold text-lg px-8 py-4 text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            View Work
          </button>
        </div>
      </div>
    </section>
  );
}
