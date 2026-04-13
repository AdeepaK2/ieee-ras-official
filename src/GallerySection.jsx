import React, { useState, useMemo } from 'react';
import galleryData from './data/galleryData.json';

const galleryImageModules = import.meta.glob('./assets/gallery/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

const galleryImageUrlsByName = Object.entries(galleryImageModules).reduce((acc, [modulePath, moduleUrl]) => {
  const fileName = modulePath.split('/').pop();
  if (fileName) {
    acc[fileName] = moduleUrl;
  }
  return acc;
}, {});

const resolveImageUrl = (fileName) => {
  return fileName ? galleryImageUrlsByName[fileName] || '' : '';
};

const GallerySection = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const eventGalleries = useMemo(() => {
    return galleryData.events.map((event) => ({
      ...event,
      images: event.images.map((img, idx) => ({
        ...img,
        globalIdx: `${event.id}-${idx}`,
      })),
    }));
  }, []);

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

        <div className="space-y-20 relative z-10">
          {eventGalleries.map((event) => (
            <div key={event.id} className="space-y-8">
              {/* Event Header */}
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>

              {/* Event Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.images.map((image) => (
            <article
              key={image.globalIdx}
              className="group relative overflow-hidden rounded-3xl glass transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-dark/10 border border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur-xl"
              style={{ animationDelay: `${0}ms` }}
            >
              <div className="relative h-72 sm:h-80 lg:h-80">
                {!loadedImages[image.globalIdx] && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-200/70 via-gray-100/80 to-gray-200/70 dark:from-zinc-800/70 dark:via-zinc-700/80 dark:to-zinc-800/70 animate-pulse" />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/5 via-transparent to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={resolveImageUrl(image.name)}
                  alt={`${image.title} - ${image.category}`}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${loadedImages[image.globalIdx] ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                  loading="lazy"
                  fetchPriority="auto"
                  decoding="async"
                  onLoad={() => handleImageLoaded(image.globalIdx)}
                  onError={() => handleImageLoaded(image.globalIdx)}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 ${loadedImages[image.globalIdx] ? 'opacity-90' : 'opacity-75'}`} />
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 flex items-end">
                  <div className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase bg-white/10 text-white border border-white/15 backdrop-blur-md">
                      {image.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white tracking-tight">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
                ))}
              </div>

              {/* View More Button */}
              <div className="flex justify-center pt-4">
                <a
                  href={event.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-gray-900 dark:text-white bg-white/70 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/15 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/5"
                >
                  View More on Facebook
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
