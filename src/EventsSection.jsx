import React from 'react';

const eventBannerModules = import.meta.glob('./assets/event-banner/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const eventBannerUrlsByName = Object.entries(eventBannerModules).reduce((acc, [modulePath, moduleUrl]) => {
  const fileName = modulePath.split('/').pop();
  if (fileName) {
    acc[fileName] = moduleUrl;
  }
  return acc;
}, {});

const resolveEventBannerUrl = (fileName) => {
  return fileName ? eventBannerUrlsByName[fileName] || '' : '';
};

const events = [
  {
    type: 'Upcoming / Flagship',
    title: 'MazeX 1.0 – Micromouse Competition',
    date: 'Upcoming',
    desc: 'A competitive robotics challenge where students design and develop autonomous micromouse robots capable of navigating complex maze environments.',
    objectives: 'Promote hands-on learning in robotics, encourage innovation in autonomous navigation, and strengthen teamwork.',
    highlights: ['Custom-built maze arena', 'Technical mentoring sessions', 'Speed-based performance evaluation', 'Industry judging panel'],
    banner: 'MazeX.webp',
  },
  {
    type: 'Past',
    title: 'BotTalk 3.0',
    date: 'Past Event',
    desc: 'A technical knowledge-sharing session connecting students with industry experts and researchers to discuss emerging trends in robotics and automation.',
    objectives: 'Introduce students to modern robotics research and bridge academic concepts with industry practices.',
    highlights: ['100+ participants', 'Expert guest speakers', 'Exposure to industrial applications'],
    banner: 'BotTalk.webp',
  },
  {
    type: 'Past',
    title: 'IEEE Open Week',
    date: 'Past Event',
    desc: 'A platform to introduce our student chapter and its initiatives to new undergraduates, showcasing ongoing projects and flagship events.',
    objectives: 'Present the chapter’s vision, increase awareness of opportunities, and encourage new member engagement.',
    highlights: ['Strong freshers participation', 'Substantial membership growth'],
    banner: 'OpenWeek.webp',
  },
  {
    type: 'Past',
    title: 'Annual General Meeting 2025',
    date: 'Past Event',
    desc: 'The AGM marked the transition of leadership and reviewed the chapter’s activities, achievements, and future roadmap.',
    objectives: 'Present annual performance report, appoint new Executive Committee, outline plans for the upcoming term.',
    highlights: ['Leadership transition', 'Strong member engagement'],
    banner: 'AGM.webp',
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
          <p className="text-xl text-gray-600 dark:text-gray-300">Join us in shaping the future of robotics.</p>
        </div>

        <div className="space-y-16">
          {events.map((evt, idx) => (
            <div key={idx} className="glass overflow-hidden flex flex-col md:flex-row bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary-light/20">

              {/* Event Banner */}
              <div className="md:w-1/3 bg-gray-100 dark:bg-zinc-800 min-h-[250px] relative overflow-hidden">
                <img
                  src={resolveEventBannerUrl(evt.banner)}
                  alt={`${evt.title} banner`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-dark dark:text-primary-light border border-black/5 dark:border-white/10 uppercase tracking-wide">
                  {evt.type}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white capitalize leading-tight group-hover:text-primary-dark dark:group-hover:text-primary-light transition-colors">{evt.title}</h3>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded-full shrink-0 mt-1">{evt.date}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {evt.desc}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Objectives</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{evt.objectives}</p>
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
