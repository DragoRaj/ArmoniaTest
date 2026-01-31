import { useState, createContext, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Schedule } from './components/Schedule';
import { Committees } from './components/Committees';
import { Secretariat } from './components/Secretariat';
import { Rules } from './components/Rules';
import { Platform } from './components/Platform';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';
import { LoadingScreen } from './components/LoadingScreen';
import RegistrationModal from './components/RegistrationModal';

// Create context for registration modal
interface RegistrationContextType {
  openRegistration: () => void;
}

export const RegistrationContext = createContext<RegistrationContextType>({
  openRegistration: () => {},
});

export const useRegistration = () => useContext(RegistrationContext);

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => setIsRegistrationOpen(true);
  const closeRegistration = () => setIsRegistrationOpen(false);

  return (
    <RegistrationContext.Provider value={{ openRegistration }}>
      <div className="min-h-screen bg-vanilla">
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navigation />
            <main>
              <Hero />
              <Overview />
              <Schedule />
              <Committees />
              <Secretariat />
              <Rules />
              <Platform />
              <Contact />
            </main>
            <Footer />
            <MusicPlayer />
            <RegistrationModal 
              isOpen={isRegistrationOpen} 
              onClose={closeRegistration} 
            />
          </>
        )}
      </div>
    </RegistrationContext.Provider>
  );
}
