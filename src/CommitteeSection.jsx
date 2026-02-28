import React from 'react';

const committeeMembers = [
  { name: 'John Doe', position: 'Chairperson', bio: 'Passionate about autonomous systems and leading the chapter towards innovation.' },
  { name: 'Jane Smith', position: 'Vice Chairperson', bio: 'Focuses on organizing large-scale robotics competitions and workshops.' },
  { name: 'Alex Johnson', position: 'Secretary', bio: 'Ensures smooth communication and documentation of all chapter activities.' },
  { name: 'Emily Davis', position: 'Treasurer', bio: 'Manages finances and funding for chapter projects and events.' },
  { name: 'Michael Brown', position: 'Director of PR', bio: 'Handles public relations, social media, and outreach programs.' },
  { name: 'Sarah Wilson', position: 'Editor', bio: 'Oversees the publication of newsletters and technical articles.' },
];

const CommitteeSection = () => {
  return (
    <section id="committee" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Executive <span className="text-gradient">Committee</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Current Term 25/26</p>
        </div>

        {/* Faculty Advisor */}
        <div className="flex justify-center mb-16">
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl text-center max-w-sm w-full">
            <div className="w-24 h-24 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full mb-4 shadow-inner overflow-hidden flex items-center justify-center">
              <span className="text-gray-500 text-3xl">👨‍🏫</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dr. Simal Rathnayake</h3>
            <p className="text-primary-dark dark:text-primary-light font-medium mb-3">Faculty Advisor</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guiding the chapter with academic excellence and industry insights.</p>
          </div>
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="glass p-6 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full shrink-0 shadow-sm flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-dark group-hover:to-primary-light transition-all">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary-dark/80 dark:text-primary-light/80 uppercase tracking-wider">{member.position}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
