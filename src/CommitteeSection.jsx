import React from 'react';
import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline';
import {
  facultyAdvisor,
  execCommittee,
  subCommittees,
} from './data/committeeData';

const CommitteeCard = ({ name, position, image, photo, large = false }) => (
  <div
    className={`glass bg-white/60 dark:bg-black/40 backdrop-blur-xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl text-center w-full ${
      large ? 'max-w-sm p-8' : 'max-w-xs p-6'
    }`}
  >
    <div
      className={`mx-auto bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full shadow-sm overflow-hidden flex items-center justify-center text-gray-500 mb-4 ${
        large ? 'w-24 h-24' : 'w-20 h-20'
      }`}
    >
      {image || photo ? (
        <img
          src={image || photo}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <UserIcon className={large ? 'w-12 h-12' : 'w-10 h-10'} />
      )}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-dark group-hover:to-primary-light transition-all">
      {name}
    </h3>
    <p className="text-sm font-semibold text-primary-dark/80 dark:text-primary-light/80 uppercase tracking-wider">
      {position}
    </p>
  </div>
);

const CommitteeSection = () => {
  return (
    <section id="committee" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Executive <span className="text-gradient">Committee</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Current Term 25/26</p>
        </div>

        {/* Faculty Advisor */}
        <div className="flex justify-center mb-16">
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl text-center max-w-sm w-full">
            <div className="w-24 h-24 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full mb-4 shadow-inner overflow-hidden flex items-center justify-center">
              {facultyAdvisor.image || facultyAdvisor.photo ? (
                <img
                  src={facultyAdvisor.image || facultyAdvisor.photo}
                  alt={facultyAdvisor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <AcademicCapIcon className="w-12 h-12 text-gray-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{facultyAdvisor.name}</h3>
            <p className="text-primary-dark dark:text-primary-light font-medium mb-3">{facultyAdvisor.position}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{facultyAdvisor.description}</p>
          </div>
        </div>

        {/* Exec Committee Grid */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 mb-20">
          {execCommittee.map((member, idx) => (
            <CommitteeCard
              key={idx}
              name={member.name}
              position={member.position}
              image={member.image}
              photo={member.photo}
            />
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

          <div className="space-y-14">
            {subCommittees.map((committee, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {committee.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {committee.leads.map((lead, i) => (
                    <CommitteeCard
                      key={i}
                      name={lead.name}
                      position={lead.role}
                      image={lead.image}
                      photo={lead.photo}
                      large
                    />
                  ))}
                </div>

                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
                  {committee.members.map((member, i) => (
                    <CommitteeCard
                      key={i}
                      name={member.name}
                      position="Member"
                      image={member.image}
                      photo={member.photo}
                    />
                  ))}
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
