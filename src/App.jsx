import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CommitteeSection from './CommitteeSection';
import EventsSection from './EventsSection';
import ProjectsSection from './ProjectsSection';
import GallerySection from './GallerySection';
import JoinUsSection from './JoinUsSection';
import ContactSection from './ContactSection';
import './App.css';

function App() {
  return (
    <div className="app w-full overflow-x-hidden">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <CommitteeSection />
        <EventsSection />
        <ProjectsSection />
        <GallerySection />
        <JoinUsSection />
        <ContactSection />
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
