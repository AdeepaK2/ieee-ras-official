import React from 'react';
import { RocketLaunchIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const JoinUsSection = () => {
  return (
    <section id="join" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Join <span className="text-gradient">IEEE RAS</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Become a part of a global community dedicated to robotics and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Why Join & Benefits */}
          <div className="space-y-8">
            <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Join IEEE RAS?</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                The IEEE Robotics and Automation Society (RAS) Student Branch Chapter at the University of Moratuwa invites all undergraduates passionate about robotics, automation, and intelligent systems to join our professional community. We provide a platform to bridge the gap between academic theory and industry-standard application.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white px-2">Membership Benefits</h4>
              {[
                { title: 'Networking', desc: 'Connect with a diverse network of peers, academic researchers, and industry experts within the University of Moratuwa and the wider IEEE Sri Lanka Section.' },
                { title: 'Technical Exposure', desc: 'Gain access to specialized workshops, guest lectures, and hands-on projects focusing on hardware design, control systems, and AI integration.' },
                { title: 'Leadership Opportunities', desc: 'Participate in organizing committee roles for national-level competitions and events, fostering essential project management and soft skills.' },
                { title: 'Global IEEE Community', desc: 'Access the IEEE Xplore® digital library, RAS publications, and discounted registration for prestigious international conferences and symposiums.' },
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 glass bg-white/40 dark:bg-black/20 hover:bg-white/60 dark:hover:bg-black/40 transition-colors">
                  <div className="text-primary-dark dark:text-primary-light mt-1">
                    <RocketLaunchIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">{benefit.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Application Info */}
          <div className="glass p-10 bg-gradient-to-br from-primary-dark/10 via-white/50 to-primary-light/10 dark:from-primary-dark/20 dark:via-black/50 dark:to-primary-light/20 backdrop-blur-2xl text-center rounded-3xl border border-primary-dark/20">
            <div className="w-20 h-20 mx-auto bg-white dark:bg-black rounded-full shadow-xl flex items-center justify-center mb-6">
              <UserPlusIcon className="w-10 h-10 text-primary-dark dark:text-primary-light" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Ready to Innovate?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
              Join a dynamic group of innovators. Fill out the membership form and kickstart your journey in robotics and automation.
            </p>

            <div className="space-y-4">
              <a href="#" className="block w-full btn-primary text-lg shadow-primary-dark/30 shadow-lg">
                Membership Form Link -&gt;
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                *Open exclusively to University of Moratuwa undergraduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
