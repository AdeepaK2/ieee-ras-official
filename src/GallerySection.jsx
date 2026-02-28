import React from 'react';

const galleryItems = [
  { id: 1, type: 'Events', img: '📸 Event 1', cols: 'col-span-1 md:col-span-2', rows: 'row-span-2' },
  { id: 2, type: 'Workshops', img: '📸 Workshop 1', cols: 'col-span-1', rows: 'row-span-1' },
  { id: 3, type: 'Competitions', img: '🏆 Comp 1', cols: 'col-span-1', rows: 'row-span-1' },
  { id: 4, type: 'Community Outreach', img: '🤝 Outreach', cols: 'col-span-1 md:col-span-2', rows: 'row-span-1' },
  { id: 5, type: 'Events', img: '📸 Event 2', cols: 'col-span-1', rows: 'row-span-1' },
  { id: 6, type: 'Workshops', img: '📸 Workshop 2', cols: 'col-span-1', rows: 'row-span-1' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 px-6 relative z-10 bg-gray-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Glimpses of our vibrant community in action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[600px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer bg-gray-200 dark:bg-gray-800 ${item.cols} ${item.rows} shadow-lg`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400 dark:text-gray-600 group-hover:scale-110 transition-transform duration-700 ease-in-out">
                {item.img}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-primary-light font-bold text-xs uppercase tracking-wider block mb-1">{item.type}</span>
                  <h3 className="text-white font-bold text-lg">View Album</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
