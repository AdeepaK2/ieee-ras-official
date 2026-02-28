import React from 'react';

const projects = [
  {
    status: 'Ongoing',
    title: 'Autonomous Quadruped Robot',
    team: 'Team Alpha Robotics',
    overview: 'Developing a highly agile, terrain-adaptive quadruped robot capable of autonomous navigation in unstructured environments. Focused on real-time SLAM and dynamic balance optimization.',
    technologies: ['ROS 2', 'C++', 'Python', 'Computer Vision', 'Reinforcement Learning'],
    outcomes: 'Currently in the prototype testing phase; achieved stable walking gaits on uneven terrain.',
    github: '#'
  },
  {
    status: 'Completed',
    title: 'Smart Agribot V2',
    team: 'GreenTech UoM',
    overview: 'An automated agricultural robot designed for precision pesticide spraying and crop health monitoring using multispectral imaging.',
    technologies: ['Arduino Mega', 'Raspberry Pi', 'OpenCV', 'TensorFlow', 'IoT'],
    outcomes: 'Successfully deployed in a pilot greenhouse; reduced pesticide usage by 30% while maintaining crop yield.',
    github: '#'
  },
  {
    status: 'Research',
    title: 'Swarm Intelligence for Search & Rescue',
    team: 'SwarmLab UoM',
    overview: 'Investigating decentralized coordination algorithms for a swarm of micro-drones to rapidly map and locate survivors in disaster zones.',
    technologies: ['Swarm Robotics', 'C++', 'Gazebo Simulation', 'Path Planning'],
    outcomes: 'Published a paper at the IEEE ICRA 2026 conference detailing a novel collision-avoidance technique.',
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300">

              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider mb-3 ${proj.status === 'Ongoing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                      proj.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                    }`}>
                    {proj.status}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">{proj.title}</h3>
                  <p className="text-sm font-semibold text-primary-dark dark:text-primary-light">{proj.team}</p>
                </div>
              </div>

              <div className="flex-grow space-y-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{proj.overview}</p>

                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Outcomes / Results</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">"{proj.outcomes}"</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
                <a
                  href={proj.github}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Repository
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
