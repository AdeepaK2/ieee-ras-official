import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EnvelopeIcon, 
  MapPinIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

/* ── SVG Brand Icons ── */
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1AimXnk5FG/',
    icon: <FacebookIcon />,
    hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ieeeras-uom/',
    icon: <LinkedInIcon />,
    hoverClass: 'hover:bg-blue-700 hover:text-white hover:border-blue-700',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                      University of Moratuwa,<br />
                      Katubedda, Sri Lanka,<br />
                      10400
                    </p>
                  </div>
                </li>
              </ul>

              {/* Social Links with icons */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ label, href, icon, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm transition-all duration-200 ${hoverClass}`}
                    >
                      {icon}
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Map — always grayscale */}
            <div className="glass overflow-hidden h-[300px] relative rounded-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.514781745423!2d79.88934571167123!3d6.797743265747653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7ec255%3A0x6b772c68f2736203!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1709400000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale opacity-80 group-hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 bg-white/60 dark:bg-black/40 backdrop-blur-xl flex flex-col justify-center min-h-[500px]">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12 px-6 flex flex-col items-center justify-center"
                >
                  <CheckCircleIcon className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium max-w-sm">
                    Thank you for reaching out to UOM IEEE RAS. Our committee will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-all shadow-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all text-sm font-medium"
                          placeholder="Kasun"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={status === 'submitting'}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all text-sm font-medium"
                          placeholder="Perera"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all text-sm font-medium"
                        placeholder="yourname@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all text-sm font-medium"
                        placeholder="Collaboration Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message <span className="text-red-500">*</span></label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-primary-dark outline-none dark:text-white transition-all resize-none text-sm font-medium"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-semibold px-2 animate-pulse">
                        <ExclamationTriangleIcon className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full btn-primary hover:shadow-primary-dark/30 shadow-md flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
