import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import CommitteeSection from './CommitteeSection';
import EventsSection from './EventsSection';
import ProjectsSection from './ProjectsSection';
import GallerySection from './GallerySection';
import JoinUsSection from './JoinUsSection';
import ContactSection from './ContactSection';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app w-full min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="main-content flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
            </>
          } />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/committee" element={<CommitteeSection />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/join" element={<JoinUsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </main>
      <footer className="glass m-8 p-8 text-center rounded-2xl">
        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          © 2026 IEEE RAS Student Chapter - UOM. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
