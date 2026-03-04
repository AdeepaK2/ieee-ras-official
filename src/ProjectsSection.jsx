import React from 'react';

const projects = [
  {
    status: 'Ongoing',
    title: 'MazeX Robotics Development Initiative',
    team: 'Micromouse Team',
    overview: 'Focuses on developing autonomous micromouse robots and building a standardized maze arena for competitions. Provides structured exposure to embedded systems and intelligent control.',
    technologies: ['C/C++', 'Arduino / STM platforms', 'IR / Ultrasonic Sensors', 'PID control systems'],
    outcomes: 'Functional micromouse prototypes, Custom maze infrastructure, Enhanced student expertise in autonomous robotics',
    github: '#'
  },
  {
    status: 'Completed',
    title: 'STEM Outreach Initiative - ගම්මැද්දට IEEE අපි',
    team: 'Community Outreach',
    overview: 'Outreach program introducing school students to robotics and STEM education through interactive workshops.',
    technologies: ['Arduino', 'Basic robotics modules', 'Interactive learning materials'],
    outcomes: 'Reached 100+ school students, Hands-on robotics demonstrations conducted, Strong volunteer participation and positive community impact',
    github: '#'
  },
  {
    status: 'Research',
    title: 'BotTalk Knowledge Series',
    team: 'Research & Innovation',
    overview: 'Series of sessions promoting research awareness and technical discussions in robotics and automation.',
    technologies: ['Technical Discussions', 'Knowledge Sharing', 'Research Presentations'],
    outcomes: 'Exposure to current research trends, Increased student participation in technical discussions, Encouraged research-oriented thinking among members',
    github: '#'
  },
  {
    status: 'Ongoing',
    title: 'Micromouse Robot Builds',
    team: 'Student Innovations',
    overview: 'Student-designed autonomous robots built for maze-solving challenges under MazeX.',
    technologies: ['Embedded microcontrollers', 'Path-planning algorithms', 'Sensor fusion techniques'],
    outcomes: 'Multiple working prototypes, Practical experience in real-time control systems',
    github: '#'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Projects</span> & Research
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Discover the innovative solutions developed by our members.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass p-10 bg-gradient-to-br from-white/90 to-white/50 dark:from-zinc-900/90 dark:to-zinc-800/50 backdrop-blur-xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-500 shadow-xl border border-gray-100 dark:border-white/5 hover:shadow-2xl hover:shadow-primary-dark/10 hover:border-primary-dark/20 rounded-3xl">

              <div className="flex flex-col mb-8">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full uppercase tracking-wider border ${proj.status === 'Ongoing' ? 'border-blue-200 text-blue-700 bg-blue-50/50 dark:border-blue-800 dark:text-blue-300 dark:bg-blue-900/20' :
                      proj.status === 'Completed' ? 'border-emerald-200 text-emerald-700 bg-emerald-50/50 dark:border-emerald-800 dark:text-emerald-300 dark:bg-emerald-900/20' :
                        'border-purple-200 text-purple-700 bg-purple-50/50 dark:border-purple-800 dark:text-purple-300 dark:bg-purple-900/20'
                    }`}>
                    {proj.status}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2 tracking-tight group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">{proj.title}</h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary-dark/80 dark:text-primary-light/80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  {proj.team}
                </div>
              </div>

              <div className="flex-grow space-y-8">
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">{proj.overview}</p>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold bg-white/50 dark:bg-black/30 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full shadow-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-primary-dark/5 dark:bg-primary-light/5 p-4 rounded-2xl border border-primary-dark/10 dark:border-primary-light/10">
                  <h4 className="text-xs font-bold text-primary-dark dark:text-primary-light uppercase tracking-widest mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Key Outcomes
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">"{proj.outcomes}"</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                <a
                  href={proj.github}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition-colors group/link"
                >
                  <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Explore Project Details <span className="text-primary-dark dark:text-primary-light ml-1 group-hover/link:translate-x-1 transition-transform">-&gt;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
