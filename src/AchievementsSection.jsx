import React from 'react';

const achievements = [
  {
    category: 'Competition Wins',
    title: 'Champions - Sri Lanka Robotics Challenge 2025',
    desc: 'Secured 1st place in the university category with our autonomous search and rescue robot design.',
    icon: '🏆'
  },
  {
    category: 'IEEE Awards',
    title: 'Outstanding Student Chapter Award',
    desc: 'Awarded by IEEE RAS Global for exceptional activity and member engagement in the APAC region.',
    icon: '🎖️'
  },
  {
    category: 'Conference Publications',
    title: 'Best Paper Award - ICRA 2025',
    desc: 'Recognized for our research regarding scalable swarm robotics frameworks.',
    icon: '📜'
  },
  {
    category: 'Member Achievements',
    title: '15+ Richard E. Merwin Scholarships',
    desc: 'Our members have consistently secured prestigious IEEE CS scholarships over the past 3 years.',
    icon: '🎓'
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Celebrating excellence and dedication within our chapter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achieve, idx) => (
            <div key={idx} className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl flex items-start gap-6 group hover:shadow-2xl transition-all duration-300 hover:border-primary-light/30">
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-primary-dark/10 to-primary-light/10 dark:from-primary-dark/20 dark:to-primary-light/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                {achieve.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-primary-dark dark:text-primary-light uppercase tracking-wider mb-2 block">{achieve.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{achieve.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {achieve.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
