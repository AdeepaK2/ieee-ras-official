import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  EnvelopeIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  SparklesIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function RegistrationClosed() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    
    // Simulate API call for premium micro-interaction
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative min-h-[85vh] w-full flex items-center justify-center py-16 px-4 overflow-hidden bg-gray-50/30 dark:bg-zinc-950/20">
      {/* Decorative Glow Blobs */}
      <div className="bg-glow glow-top-right"></div>
      <div className="bg-glow glow-bottom-left"></div>

      <div className="max-w-3xl w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-6 flex justify-start">
          <Link 
            to="/join" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors group"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Membership Info
          </Link>
        </div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-8 md:p-12 bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 shadow-2xl relative overflow-hidden rounded-3xl"
        >
          {/* Header/Badge */}
          <div className="flex justify-center mb-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400"
            >
              <CpuChipIcon className="w-3.5 h-3.5 animate-pulse" />
              Intake Standby Mode
            </motion.div>
          </div>

          {/* Animated SVG Graphic (Calibrating Robot Arm / Loading Gear Concept) */}
          <div className="w-32 h-32 mx-auto mb-8 relative flex items-center justify-center">
            {/* Gear Outer Ring */}
            <motion.svg 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute w-28 h-28 text-primary-dark/20 dark:text-primary-light/10" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="6" strokeDasharray="10 6 12 4" />
            </motion.svg>
            
            {/* Gear Inner Ring */}
            <motion.svg 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
              className="absolute w-20 h-20 text-primary-light/35 dark:text-primary-dark/25" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
            </motion.svg>

            {/* Core Pulsing Sensor */}
            <motion.div 
              animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-dark to-primary-light flex items-center justify-center shadow-lg shadow-primary-dark/30"
            >
              <SparklesIcon className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Texts */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Registration <span className="text-gradient">Closed</span> for This Term
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
              We are currently in execution mode, onboarding our new batch and launching major technical project tracks. Our engineering bays will reopen for new student applications soon.
            </p>
          </div>

          {/* Waitlist Box */}
          <div className="relative border-t border-gray-200/50 dark:border-white/10 pt-8 max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300"
                >
                  <CheckCircleIcon className="w-10 h-10 mx-auto text-emerald-600 dark:text-emerald-400 mb-3" />
                  <h3 className="text-lg font-bold mb-1">You are on the launch list!</h3>
                  <p className="text-sm font-medium opacity-90">
                    We will notify you immediately once applications for the upcoming term officially reopen. Keep coding!
                  </p>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-sm font-bold text-center text-gray-800 dark:text-gray-200 mb-4 tracking-wide uppercase">
                    Get Notified the Second We Open
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <EnvelopeIcon className="w-5 h-5" />
                      </div>
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        disabled={status === 'submitting'}
                        className={`w-full pl-11 pr-4 py-3 rounded-full bg-white/50 dark:bg-black/50 border outline-none font-medium text-sm transition-all focus:ring-2 focus:ring-primary-dark ${
                          status === 'error' 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200 dark:border-white/10'
                        }`}
                        placeholder="your.email@uom.lk"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px] relative overflow-hidden"
                    >
                      {status === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        'Notify Me'
                      )}
                    </button>
                  </form>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 mt-3 px-3 font-semibold"
                    >
                      <ExclamationTriangleIcon className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Secondary Options */}
          <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-white/10 text-center">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
              In the meantime, explore what we are building:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/events" 
                className="px-5 py-2.5 rounded-full text-sm font-bold border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary-dark dark:hover:text-primary-light transition-all shadow-sm"
              >
                Our Events & Workshops
              </Link>
              <Link 
                to="/gallery" 
                className="px-5 py-2.5 rounded-full text-sm font-bold border border-gray-200 dark:border-white/10 bg-white/40 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary-dark dark:hover:text-primary-light transition-all shadow-sm"
              >
                Gallery & Projects
              </Link>
              <Link 
                to="/" 
                className="px-5 py-2.5 rounded-full text-sm font-bold bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm"
              >
                Go to Home
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
