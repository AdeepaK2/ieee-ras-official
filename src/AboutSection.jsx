import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Who We <span className="text-gradient">Are</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Introduction to IEEE RAS
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The IEEE Robotics and Automation Society (RAS) is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). It strives to advance innovation, education, and fundamental and applied research in robotics and automation.
            </p>
          </div>
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              About the UoM Student Chapter
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The IEEE RAS Student Chapter at the University of Moratuwa fosters a community of students passionate about robotics, automation, and intelligent systems. Since our inception, we have been dedicated to bridging the gap between theoretical knowledge and practical applications through workshops, competitions, and collaborative projects.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-dark to-primary-light mb-6 flex items-center justify-center shadow-lg text-white">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be the premier student-led community in Sri Lanka driving innovation and excellence in robotics and automation.
            </p>
          </div>

          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-dark to-primary-light mb-6 flex items-center justify-center shadow-lg text-white">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To empower students with the technical skills, knowledge, and practical experience needed to become leaders in the field of robotics and automation.
            </p>
          </div>

          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-dark to-primary-light mb-6 flex items-center justify-center shadow-lg text-white">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h3>
            <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 list-disc list-inside">
              <li>Innovation & Creativity</li>
              <li>Continuous Learning</li>
              <li>Collaboration & Teamwork</li>
              <li>Excellence & Quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
