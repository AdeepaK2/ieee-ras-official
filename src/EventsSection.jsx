import React from 'react';

const events = [
  {
    type: 'Upcoming',
    title: 'Robotics Workshop 2026',
    date: 'Oct 15, 2026',
    desc: 'An intensive two-day hands-on workshop covering advanced ROS integration and autonomous navigation.',
    objectives: 'Introduce ROS concepts, practical node communication, and map generation algorithms.',
    highlights: ['Expert Speakers', '10+ Hours of Practical Sessions', 'Certification of Completion'],
    img: '🤖', // Placeholder for image, using emoji for demo
  },
  {
    type: 'Flagship Event',
    title: 'MaxeX 1.0 - Micromouse Competition',
    date: 'Dec 05, 2026',
    desc: 'Our premier annual competition where teams build autonomous micromouse robots to navigate a complex maze.',
    objectives: 'Fostering innovation in autonomous navigation and hardware design among university undergraduates.',
    highlights: ['50+ Participating Teams', 'LKR 150,000 Prize Pool', 'Industry Sponsorships'],
    img: '🏁',
  },
  {
    type: 'Past',
    title: 'Innovators Talk Series #4',
    date: 'Aug 20, 2026',
    desc: 'A panel discussion with industry leaders on the future of AI in industrial automation.',
    objectives: 'Bridge the gap between academia and the rapidly evolving industrial robotics sector.',
    highlights: ['3 Guest Speakers from Top Tech Firms', 'Interactive Q&A Session', 'Networking Opportunities'],
    img: '🎤',
  }
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Join us in shaping the future of robotics.</p>
        </div>

        <div className="space-y-16">
          {events.map((evt, idx) => (
            <div key={idx} className="glass overflow-hidden flex flex-col md:flex-row bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary-light/20">

              {/* Event Visual placeholder */}
              <div className="md:w-1/3 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center min-h-[250px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/10 to-transparent"></div>
                <span className="text-8xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">{evt.img}</span>
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-dark dark:text-primary-light border border-black/5 dark:border-white/10 uppercase tracking-wide">
                  {evt.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white capitalize leading-tight group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">{evt.title}</h3>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full shrink-0 mt-1">{evt.date}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {evt.desc}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Objectives</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{evt.objectives}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Highlights</h4>
                    <ul className="flex flex-wrap gap-2">
                      {evt.highlights.map((hlt, i) => (
                        <li key={i} className="bg-primary-dark/5 dark:bg-primary-light/10 text-primary-dark dark:text-primary-light border border-primary-dark/20 dark:border-primary-light/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                          {hlt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
