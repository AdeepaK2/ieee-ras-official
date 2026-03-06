import React from 'react';

const galleryCategories = [
  { name: 'Events', imgClass: 'from-blue-500/20 to-cyan-500/20' },
  { name: 'Workshops', imgClass: 'from-purple-500/20 to-pink-500/20' },
  { name: 'Competitions', imgClass: 'from-orange-500/20 to-red-500/20' },
  { name: 'Community Outreach', imgClass: 'from-emerald-500/20 to-teal-500/20' },
];

// Creating placeholder blocks to represent images
const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Glimpses of our vibrant community in action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryCategories.map((cat, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl glass aspect-square transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Image Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.imgClass} group-hover:scale-110 transition-transform duration-700 ease-out`}></div>

              {/* Placeholder text (until real images are added) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-50 font-medium text-gray-500 dark:text-gray-300 mix-blend-overlay">
                [Image / {cat.name}]
              </div>

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white tracking-wide">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" button to indicate more photos would exist */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full font-semibold text-gray-900 dark:text-white bg-white/10 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-md transition-all duration-300">
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
