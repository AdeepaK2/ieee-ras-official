import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // We will install heroicons

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial user preference or system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="glass sticky top-4 z-50 mx-4 px-6 py-4 flex justify-between items-center transition-all duration-300 hover:shadow-xl dark:bg-black/40 dark:border-white/10 dark:backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <a href="#home" className="h-16 w-auto flex items-center">
          {/* Light Theme Logo */}
          <img
            src="/RAS_SB_2 (1).PNG"
            alt="RAS Logo Light"
            className="h-full w-auto object-contain dark:hidden scale-[1.35] origin-left"
          />
          {/* Dark Theme Logo -> Use brightness-0 invert to make it pure white on dark mode */}
          <img
            src="/RAS_SB_1.PNG"
            alt="RAS Logo Dark"
            className="h-full w-auto object-contain hidden dark:block brightness-0 invert scale-[1.35] origin-left"
          />
        </a>
      </div>

      <div className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300">
        <a href="#home" className="font-semibold hover:text-primary-dark dark:hover:text-primary-light transition-colors">Home</a>
        <a href="#events" className="font-semibold hover:text-primary-dark dark:hover:text-primary-light transition-colors">Events</a>
        <a href="#about" className="font-semibold hover:text-primary-dark dark:hover:text-primary-light transition-colors">About</a>
        <a href="#awards" className="font-semibold hover:text-primary-dark dark:hover:text-primary-light transition-colors">Awards</a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>
        <button className="btn-primary">
          Contact Us
        </button>
      </div>
    </nav>
  );
}
