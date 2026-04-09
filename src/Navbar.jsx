import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/committee', label: 'Committee' },
  { to: '/events',    label: 'Events' },
  { to: '/projects',  label: 'Projects' },
  { to: '/gallery',   label: 'Gallery' },
];

/* ── Inline SVG icons ──────────────────────────── */
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

/* Animated hamburger — morphs into ✕ */
const HamburgerIcon = ({ open }) => (
  <span className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
    <span
      className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 origin-center ${
        open ? 'rotate-45 translate-y-[7px]' : ''
      }`}
    />
    <span
      className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 ${
        open ? 'opacity-0 scale-x-0' : ''
      }`}
    />
    <span
      className={`block h-0.5 w-6 rounded bg-current transition-all duration-300 origin-center ${
        open ? '-rotate-45 -translate-y-[7px]' : ''
      }`}
    />
  </span>
);

export default function Navbar() {
  const [isDark,    setIsDark]    = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location = useLocation();
  const menuRef  = useRef(null);

  /* ── Theme init ─────────────────────────────── */
  useEffect(() => {
    const saved  = localStorage.getItem('theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark   = saved === 'dark' || (!saved && sysDark);
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /* ── Close menu on route change ─────────────── */
  useEffect(() => { setMenuOpen(false); }, [location]);

  /* ── Close menu on outside click ────────────── */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <nav
      ref={menuRef}
      className="glass sticky top-4 z-50 mx-4 transition-all duration-300 hover:shadow-xl dark:bg-black/40 dark:border-white/10 dark:backdrop-blur-xl"
    >
      {/* ── Top bar ─────────────────────────────── */}
      <div className="px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="h-12 w-auto flex items-center shrink-0">
          <img src="/RAS_logo_light.png" alt="RAS Logo" className="h-full w-auto object-contain dark:hidden scale-[1.35] origin-left" />
          <img src="/RAS_logo_dark.png"  alt="RAS Logo" className="h-full w-auto object-contain hidden dark:block brightness-0 invert scale-[1.35] origin-left" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center text-gray-700 dark:text-gray-300">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="font-semibold hover:text-primary-dark dark:hover:text-primary-light transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle — always visible */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Contact Us — desktop only */}
          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Contact Us
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ─────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-gray-200 dark:border-white/10">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="py-3 px-4 rounded-xl font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-primary-dark dark:hover:text-primary-light transition-all"
            >
              {label}
            </Link>
          ))}

          {/* Contact Us inside mobile menu */}
          <Link
            to="/contact"
            className="btn-primary mt-3 text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
