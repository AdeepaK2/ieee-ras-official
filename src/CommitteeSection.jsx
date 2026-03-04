import React from 'react';
import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline';

const execCommittee = [
  { name: 'Sahas Eashan', position: 'President' },
  { name: 'Binidu Tishan', position: 'Vice President' },
  { name: 'Rashmitha Hansamal', position: 'Secretary' },
  { name: 'Pankaja Balasooriya', position: 'Treasurer' },
  { name: 'Adeepa Kularathna', position: 'Web Master' },
  { name: 'Sasindu Hasanga', position: 'Assistant Secretary' },
];

const subCommittees = [
  {
    name: 'Web & Marketing Committee',
    leads: [{ name: 'Ishan Sasanka', role: 'Lead' }],
    members: ['Buddhima Gayashan', 'Sahan Harshajith', 'Mishal Safeek', 'Thennakoon T.M.S.S.', 'Akash Gandhawa', 'Inuka Gunathilake', 'Sadeep Herath', 'Chandupa Hulangamuwa']
  },
  {
    name: 'Design Committee',
    leads: [{ name: 'Chamod Wijesinghe', role: 'Co-Lead' }, { name: 'Imal Wickrama Arachchi', role: 'Co-Lead' }],
    members: ['Rajitha Lakshan', 'Senuja Dilmith', 'Akash Gandhawa', 'Chamoth Liyanaarachchi', 'Akhila Nisal']
  },
  {
    name: 'Editorial Committee',
    leads: [{ name: 'Thanuja Mahalingam', role: 'Lead' }],
    members: ['Minothma Sithumini', 'Sarjana Shanmugarajah', 'Nimasha Amarathunga', 'Ravichandran Sobatharsan']
  },
  {
    name: 'Programme & Logistics Committee',
    leads: [{ name: 'Lithmin Karunarathna', role: 'Co-Lead' }, { name: 'Chaniru Dewnitha', role: 'Co-Lead' }],
    members: ['Helshi Saseka', 'Kavindu Nethsara', 'Sisuru Navod', 'Jaindu Devnaka', 'Nipun Sankalana', 'K.B.L.S. Akalanka', 'Shalini Madhuka', 'Anusha Dananjaya', 'Kavindu Lakshan', 'Kavindu Ekanayaka']
  },
  {
    name: 'Volunteer Management Committee',
    leads: [{ name: 'Laksandi Denipitiya', role: 'Lead' }],
    members: ['W.G.R Heshan', 'Chanuka Gimhan', 'Nimsika Bosilu', 'Chanupa Gurusinghe', 'Thiseni Rathnayake']
  },
  {
    name: 'Finance Committee',
    leads: [{ name: 'Suvindu Ranchigoda', role: 'Lead' }],
    members: ['Dulsika Mendis', 'Sasindu Siyath', 'Induwara Ranaweera', 'Chalin Vanderslott', 'Thisangi Dewmini', 'Thiseni Abeykoon']
  }
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
              <AcademicCapIcon className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Dr. Simal Rathnayake</h3>
            <p className="text-primary-dark dark:text-primary-light font-medium mb-3">Faculty Advisor</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Guiding the chapter with academic excellence and industry insights.</p>
          </div>
        </div>

        {/* Exec Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {execCommittee.map((member, idx) => (
            <div key={idx} className="glass p-6 bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-sm flex items-center justify-center text-gray-500 mb-4">
                <UserIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-dark group-hover:to-primary-light transition-all">{member.name}</h3>
              <p className="text-sm font-semibold text-primary-dark/80 dark:text-primary-light/80 uppercase tracking-wider">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Sub Committees */}
        <div className="space-y-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white">
              Working Committees
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-dark to-primary-light mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {subCommittees.map((committee, idx) => (
              <div key={idx} className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-white/10 text-center">
                  {committee.name}
                </h3>

                <div className="mb-6">
                  {committee.leads.map((lead, i) => (
                    <div key={i} className="flex justify-between items-center mb-2 px-4 py-2 bg-primary-dark/5 dark:bg-primary-light/5 rounded-lg">
                      <span className="font-bold text-gray-900 dark:text-white">{lead.name}</span>
                      <span className="text-xs font-bold text-primary-dark dark:text-primary-light uppercase tracking-wider bg-white/50 dark:bg-black/50 px-2 py-1 rounded">{lead.role}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">Members</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 px-2">
                    {committee.members.map((member, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-dark/50 dark:bg-primary-light/50"></span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommitteeSection;
