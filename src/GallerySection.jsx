import React, { useState } from 'react';

const galleryMoments = [
  {
    title: 'Robotics Day',
    category: 'Flagship gathering',
    image: '/gallery/robotics-day/RoboticsDay1.jpg',
  },
  {
    title: 'Robotics Day',
    category: 'Panel discussion',
    image: '/gallery/robotics-day/RoboticsDay4.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Interactive session',
    image: '/gallery/bot-talk/BotTalk1.jpg',
  },
  {
    title: 'IEEE Robotics Day',
    category: 'Audience engagement',
    image: '/gallery/robotics-day/RoboticsDay2.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Hands-on moment',
    image: '/gallery/bot-talk/BotTalk5.jpg',
  },
  {
    title: 'IEEE Robotics Day',
    category: 'Live Q&A',
    image: '/gallery/robotics-day/RoboticsDay5.jpg',
  },
  {
    title: 'Gammeddata IEEE API',
    category: 'Community workshop',
    image: '/gallery/gammeddata/GammeddataIEEEApi1.jpeg',
  },
  {
    title: 'IEEE Robotics Day',
    category: 'Closing highlight',
    image: '/gallery/robotics-day/RoboticsDay3.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Audience focus',
    image: '/gallery/bot-talk/BotTalk2.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Live demo',
    image: '/gallery/bot-talk/BotTalk3.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Technical session',
    image: '/gallery/bot-talk/BotTalk4.jpg',
  },
  {
    title: 'Bot Talk 2.0',
    category: 'Workshop moment',
    image: '/gallery/bot-talk/BotTalk6.jpg',
  },
  {
    title: 'Gammeddata IEEE API',
    category: 'Workshop series',
    image: '/gallery/gammeddata/GammeddataIEEEApi2.jpeg',
  },
  {
    title: 'Gammeddata IEEE API',
    category: 'Audience session',
    image: '/gallery/gammeddata/GammeddataIEEEApi3.jpeg',
  },
  {
    title: 'Robotics Day',
    category: 'Event highlight',
    image: '/gallery/robotics-day/RoboticsDay6.jpg',
  },
  {
    title: 'Robotics Day',
    category: 'Community moment',
    image: '/gallery/robotics-day/RoboticsDay7.jpg',
  },
  {
    title: 'Robotics Day',
    category: 'Stage capture',
    image: '/gallery/robotics-day/RoboticsDay8.jpg',
  },
  {
    title: 'Robotics Day',
    category: 'Closing frame',
    image: '/gallery/robotics-day/RoboticsDay9.jpg',
  },
];

const GallerySection = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoaded = (idx) => {
    setLoadedImages((prev) => {
      if (prev[idx]) return prev;
      return { ...prev, [idx]: true };
    });
  };

  return (
    <section id="gallery" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(151,1,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(98,18,107,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]"></div>
        <div className="absolute -top-24 left-10 w-72 h-72 bg-primary-dark/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-primary-dark/10 dark:bg-primary-light/10 text-primary-dark dark:text-primary-light border border-primary-dark/20 dark:border-primary-light/20 backdrop-blur-sm mb-6">
            Curated moments
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-gray-50">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A visual record of robotics talks, workshops, and community gatherings that define the chapter's energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {galleryMoments.map((moment, idx) => (
            <article
              key={`${moment.title}-${idx}`}
              className="group relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-dark/10 border border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-xl"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <div className="relative h-72 sm:h-80 lg:h-80">
                {!loadedImages[idx] && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-200/70 via-gray-100/80 to-gray-200/70 dark:from-zinc-800/70 dark:via-zinc-700/80 dark:to-zinc-800/70 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 via-transparent to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={moment.image}
                  alt={`${moment.title} - ${moment.category}`}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${loadedImages[idx] ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  fetchPriority={idx < 3 ? 'high' : 'auto'}
                  decoding="async"
                  onLoad={() => handleImageLoaded(idx)}
                  onError={() => handleImageLoaded(idx)}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 ${loadedImages[idx] ? 'opacity-90' : 'opacity-75'}`} />
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex items-end">
                  <div className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase bg-white/10 text-white border border-white/15 backdrop-blur-md">
                      {moment.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white tracking-tight">
                      {moment.title}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
