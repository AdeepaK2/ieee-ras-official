import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import './App.css';

function App() {
  return (
    <div className="app w-full overflow-x-hidden">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <FeaturesSection />
      </main>
      <footer className="glass m-8 p-8 text-center rounded-2xl">
        <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">
          © 2026 Nexus Digital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
