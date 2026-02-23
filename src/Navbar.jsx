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
    <nav className="glass sticky top-4 z-50 mx-4 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Placeholder for Logo, will use the provided images later based on theme */}
        <div className="w-10 h-10 bg-gradient-to-br from-primary-dark to-primary-light rounded-lg shadow flex items-center justify-center text-white font-bold text-xl">
          R
        </div>
        <div className="text-2xl font-extrabold text-gradient hidden sm:block">
          RAS
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center text-gray-600 dark:text-gray-300">
        <a href="#home" className="font-medium hover:text-primary-dark dark:hover:text-primary-light transition-colors">Home</a>
        <a href="#services" className="font-medium hover:text-primary-dark dark:hover:text-primary-light transition-colors">Services</a>
        <a href="#about" className="font-medium hover:text-primary-dark dark:hover:text-primary-light transition-colors">About</a>
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
