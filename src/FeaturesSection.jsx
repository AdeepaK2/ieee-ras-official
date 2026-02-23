import React from 'react';

const features = [
  { title: 'Stunning Aesthetics', desc: 'Crafted with pixel-perfect precision and modern design trends for ultimate visual appeal.' },
  { title: 'Lightning Fast', desc: 'Optimized for speed and performance to keep users engaged and reduce bounce rates.' },
  { title: 'Fully Responsive', desc: 'Seamless and flawless experience across mobile, tablet, and desktop screens.' },
  { title: 'Interactive Flow', desc: 'Micro-animations and fluid transitions that bring your application to life.' },
];

export default function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Why Choose <span className="text-gradient">Brand</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We combine art and technology to deliver digital solutions that stand out in crowded markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass p-8 group hover:-translate-y-4 hover:shadow-2xl hover:border-primary-light/30 transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/0 via-primary-dark/0 to-primary-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-dark to-primary-light mb-6 flex items-center justify-center shadow-lg shadow-primary-dark/20 text-white relative z-10 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">✦</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white relative z-10 group-hover:text-primary-light transition-colors duration-300">
                {feat.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
