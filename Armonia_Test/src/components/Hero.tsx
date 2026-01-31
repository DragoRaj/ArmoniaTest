import { motion } from 'framer-motion';
import { Music, Calendar, MapPin, Users } from 'lucide-react';
import { Countdown } from './Countdown';
import { useRegistration } from '../App';

export function Hero() {
  const { openRegistration } = useRegistration();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden watercolor-bg">
      {/* Floating Musical Instruments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Violin */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.5 }}
          className="absolute top-20 left-10 text-flame animate-float"
        >
          <svg width="120" height="200" viewBox="0 0 100 180" fill="currentColor">
            <ellipse cx="50" cy="140" rx="35" ry="25" />
            <ellipse cx="50" cy="80" rx="25" ry="18" />
            <rect x="47" y="10" width="6" height="70" />
            <circle cx="35" cy="140" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="65" cy="140" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Trumpet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 0.7 }}
          className="absolute top-40 right-20 text-butterscotch animate-float-slow"
        >
          <svg width="150" height="80" viewBox="0 0 150 80" fill="currentColor">
            <rect x="0" y="35" width="80" height="10" rx="2" />
            <ellipse cx="100" cy="40" rx="40" ry="30" />
            <circle cx="20" cy="25" r="5" />
            <circle cx="35" cy="25" r="5" />
            <circle cx="50" cy="25" r="5" />
          </svg>
        </motion.div>

        {/* Vinyl Record */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-20 left-20 text-bistre animate-spin-slow"
        >
          <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="15" />
          </svg>
        </motion.div>

        {/* Music Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1.1 }}
          className="absolute top-1/3 right-1/4 text-caput-mortuum animate-float"
        >
          <Music size={60} />
        </motion.div>

        {/* Gramophone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-40 right-10 text-flame animate-float-slow"
        >
          <svg width="120" height="150" viewBox="0 0 120 150" fill="currentColor">
            <ellipse cx="40" cy="140" rx="35" ry="8" />
            <rect x="35" y="100" width="10" height="40" />
            <path d="M45 100 Q60 80 80 30 L120 10 L110 20 L90 35 Q65 75 45 100" />
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo */}
          <div className="relative inline-block mb-6">
            <img 
              src="https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/armonia_Logo-removebg-preview_uhlozc.png" 
              alt="Armonia MUN Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl font-bold text-bistre mb-4 tracking-wide"
        >
          ARMONIA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-3xl md:text-4xl text-caput-mortuum mb-2"
        >
          MUN '26
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-bistre/80 mb-12 tracking-widest"
        >
          Debate • Diplomacy • Difference
        </motion.p>

        {/* Countdown */}
        <Countdown targetDate={new Date('2026-04-04T09:00:00')} />

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 mb-12"
        >
          <div className="bg-vanilla/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki/50 hover:shadow-xl transition-shadow hover:border-caput-mortuum/30">
            <Users className="w-8 h-8 text-caput-mortuum mx-auto mb-3" />
            <p className="text-3xl font-bold text-bistre">150+</p>
            <p className="text-sm text-bistre/70">Expected Delegates</p>
          </div>
          <div className="bg-vanilla/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki/50 hover:shadow-xl transition-shadow hover:border-flame/30">
            <Calendar className="w-8 h-8 text-flame mx-auto mb-3" />
            <p className="text-2xl font-bold text-bistre">April 4-5</p>
            <p className="text-sm text-bistre/70">2026</p>
          </div>
          <div className="bg-vanilla/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki/50 hover:shadow-xl transition-shadow hover:border-caput-mortuum/30">
            {/* Dove Icon */}
            <svg className="w-8 h-8 text-caput-mortuum mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.5 10.5c-.5-1.5-2-2.5-3.5-2.5h-1c-.3-.6-.7-1.1-1.2-1.5C14.8 5.5 13.5 5 12 5c-2.2 0-4.2 1.1-5.4 2.9L3 11l3.5 1.5c-.3.5-.5 1.1-.5 1.7 0 1.9 1.6 3.5 3.5 3.5h.5c.3 1.2 1.4 2 2.7 2 1.5 0 2.8-1.2 2.8-2.8 0-.2 0-.4-.1-.5.7-.4 1.3-.9 1.8-1.5l.3-.4c.9 0 1.7-.3 2.4-.8.8-.6 1.4-1.5 1.6-2.5.1-.2.1-.5 0-.7zM12 7c1.1 0 2.1.4 2.9 1H9.1c.8-.6 1.8-1 2.9-1zm-2.5 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <p className="text-3xl font-bold text-bistre">6</p>
            <p className="text-sm text-bistre/70">Committees</p>
          </div>
          <div className="bg-vanilla/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki/50 hover:shadow-xl transition-shadow hover:border-caput-mortuum/30">
            <MapPin className="w-8 h-8 text-caput-mortuum mx-auto mb-3" />
            <p className="text-2xl font-bold text-bistre">Dubai</p>
            <p className="text-sm text-bistre/70">UAE</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={openRegistration}
            className="px-8 py-4 bg-caput-mortuum text-vanilla rounded-full font-semibold text-lg hover:bg-flame transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register Now
          </button>
          <a
            href="#overview"
            className="px-8 py-4 bg-transparent border-2 border-caput-mortuum text-caput-mortuum rounded-full font-semibold text-lg hover:bg-caput-mortuum hover:text-vanilla transition-all"
          >
            Explore Resources
          </a>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#FFEFB5"
          />
        </svg>
      </div>
    </section>
  );
}
