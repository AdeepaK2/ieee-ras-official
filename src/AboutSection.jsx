import React from 'react';
import { EyeIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

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
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Who We Are
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              We are part of a global professional community dedicated to shaping the future of robotics and automation. Through technical activities, research engagement, and knowledge sharing, we connect students and professionals who are passionate about intelligent systems, modern automation, and emerging technologies. Our platform encourages collaboration, creativity, and the development of skills that contribute to both industry and society.
            </p>
          </div>
          <div className="space-y-6">
            <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                Introduction to IEEE RAS
              </h3>
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                The IEEE Robotics and Automation Society (RAS) is a specialized body within IEEE that focuses on advancing robotics and automation as scientific and engineering disciplines. It promotes innovation in areas where machines sense, think, and act—either independently or alongside humans.
                RAS supports the growth of both theoretical and practical knowledge by encouraging cutting-edge research, publishing high-quality technical content, organizing events, and maintaining strong professional standards. Its work spans intelligent robotic systems, autonomous technologies, and efficient automated solutions that improve productivity, reliability, and quality of life.
              </p>
            </div>
            <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                About the UoM Student Chapter
              </h3>
              <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                The RAS Student Chapter of the University of Moratuwa serves as a dynamic hub for students who are enthusiastic about robotics and automation. It creates opportunities for members to explore modern technologies through workshops, competitions, research discussions, and industry collaborations.
                The chapter aims to bridge academic knowledge with real-world applications, build technical and leadership skills, foster teamwork and innovation, and connect students with the global RAS community. Through these initiatives, it empowers students to become future technology leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/80 to-primary-light/80 mb-6 flex items-center justify-center shadow-sm text-white">
              <EyeIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              To be the most recognized and respected global organization in Robotics and Automation.
            </p>
          </div>

          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/80 to-primary-light/80 mb-6 flex items-center justify-center shadow-sm text-white">
              <RocketLaunchIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              To foster the development and facilitate the exchange of scientific and technological knowledge in Robotics and Automation that benefits members, the profession and humanity.
            </p>
          </div>

          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark/80 to-primary-light/80 mb-6 flex items-center justify-center shadow-sm text-white">
              <SparklesIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Values</h3>
            <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2 list-none">
              <li><strong className="text-gray-900 dark:text-white">Innovation</strong> – Encouraging new ideas and creative solutions</li>
              <li><strong className="text-gray-900 dark:text-white">Collaboration</strong> – Working together to achieve greater impact</li>
              <li><strong className="text-gray-900 dark:text-white">Excellence</strong> – Striving for high-quality outcomes</li>
              <li><strong className="text-gray-900 dark:text-white">Integrity</strong> – Maintaining professionalism and ethics</li>
              <li><strong className="text-gray-900 dark:text-white">Inclusivity</strong> – Ensuring opportunities for everyone to learn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
