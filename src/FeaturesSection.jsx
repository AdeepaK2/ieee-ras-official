import React from 'react';

const features = [
  {
    title: 'Workshops & Training',
    desc: 'Hands-on sessions covering ROS, microcontroller programming, machine learning, and CAD design to equip you with industry-ready skills.',
    icon: '🔧'
  },
  {
    title: 'Competitions',
    desc: 'Participate in local and international robotics challenges, from line followers to autonomous drones, representing the University of Moratuwa.',
    icon: '🏆'
  },
  {
    title: 'Research & Innovation',
    desc: 'Collaborate with peers and faculty on cutting-edge research projects, publishing papers and pushing the boundaries of automation technology.',
    icon: '🔬'
  },
  {
    title: 'Networking & Growth',
    desc: 'Connect with industry leaders, alumni, and fellow enthusiasts through talks, panel discussions, and IEEE professional networks.',
    icon: '🌐'
  },
];

export default function FeaturesSection() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a student chapter of the IEEE Robotics & Automation Society, our mission is to cultivate a vibrant community of innovators and problem solvers at the University of Moratuwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass p-8 group hover:-translate-y-4 hover:shadow-2xl hover:border-primary-light/40 transition-all duration-500 cursor-pointer relative overflow-hidden bg-white/60 dark:bg-black/40 backdrop-blur-xl"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Hover gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/0 via-primary-dark/5 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-dark to-primary-light mb-8 flex items-center justify-center shadow-lg shadow-primary-dark/30 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-3xl">{feat.icon}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative z-10 group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors duration-300">
                {feat.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
