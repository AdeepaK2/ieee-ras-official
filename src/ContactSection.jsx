import React from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 flex items-center justify-center text-primary-dark dark:text-primary-light">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Email Us</h4>
                    <a href="mailto:ieee.ras.university.of.moratuwa@gmail.com" className="text-primary-dark dark:text-primary-light hover:underline font-medium break-all">ieee.ras.university.of.moratuwa@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary-dark/10 dark:bg-primary-light/10 flex items-center justify-center text-primary-dark dark:text-primary-light">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      University of Moratuwa,<br />
                      Katubedda, Sri Lanka,<br />
                      10400
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/1AimXnk5FG/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                    Facebook
                  </a>
                  <a href="https://www.linkedin.com/company/ieeeras-uom/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm hover:bg-blue-700 hover:text-white transition-all">
                    LinkedIn
                  </a>
                  <a href="#" className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold text-sm hover:bg-pink-600 hover:text-white transition-all">
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="glass overflow-hidden h-[300px] relative rounded-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.514781745423!2d79.88934571167123!3d6.797743265747653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7ec255%3A0x6b772c68f2736203!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1709400000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale dark:grayscale-0 opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all" placeholder="Collaboration Inquiry" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all resize-none" placeholder="Your message here..."></textarea>
              </div>

              <button type="submit" className="w-full btn-primary hover:shadow-primary-dark/30 shadow-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
