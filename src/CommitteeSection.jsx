import React, { useRef } from 'react';
import { AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline';
import {
  facultyAdvisors,
  execCommittee,
  subCommittees,
} from './data/committeeData';

/* ─── Mouse-tracking spotlight card ─────────────────────────────────── */
const CommitteeCard = ({ name, position, image, photo, large = false }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Reset to centre so glow fades gracefully
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`committee-card glass bg-white/60 dark:bg-black/40 backdrop-blur-xl text-center w-full ${
        large ? 'max-w-sm p-8' : 'max-w-xs p-6'
      }`}
    >
      {/* Spotlight layer */}
      <div className="committee-card__spotlight" />

      {/* Avatar with glow ring */}
      <div
        className={`committee-avatar mx-auto rounded-full shadow-sm overflow-hidden flex items-center justify-center text-gray-500 mb-4 ${
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

      {/* Name with gradient on hover */}
      <h3 className="committee-card__name text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
        {name}
      </h3>

      <p className="text-sm font-semibold text-primary-dark/80 dark:text-primary-light/80 uppercase tracking-wider mt-1">
        {position}
      </p>
    </div>
  );
};

/* ─── Faculty Advisor card (larger, special treatment) ───────────────── */
const FacultyCard = ({ advisor }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="committee-card glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl text-center max-w-sm w-full flex flex-col"
    >
      <div className="committee-card__spotlight" />
      <div className="committee-avatar w-24 h-24 mx-auto rounded-full mb-4 shadow-inner overflow-hidden flex items-center justify-center shrink-0">
        {advisor.image || advisor.photo ? (
          <img
            src={advisor.image || advisor.photo}
            alt={advisor.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <AcademicCapIcon className="w-12 h-12 text-gray-500" />
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="committee-card__name text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {advisor.name}
        </h3>
        <p className="text-sm font-bold text-primary-dark/80 dark:text-primary-light/80 uppercase tracking-wider mb-4 min-h-[3rem] flex items-center justify-center">
          {advisor.position}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {advisor.description}
        </p>
      </div>
    </div>
  );
};

/* ─── Section ────────────────────────────────────────────────────────── */
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

        {/* Faculty Advisors & Counselors */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {facultyAdvisors.map((advisor, idx) => (
            <FacultyCard key={idx} advisor={advisor} />
          ))}
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
