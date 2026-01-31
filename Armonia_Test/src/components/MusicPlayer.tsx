import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Pause } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ============================================
  // MUSIC FILE INSTRUCTIONS:
  // ============================================
  // 1. Download "Vintage (Instrumental)" by Cort
  // 2. Convert to MP3 if needed
  // 3. Rename the file to: vintage-instrumental.mp3
  // 4. Place the file in: public/audio/vintage-instrumental.mp3
  // ============================================
  const AUDIO_PATH = '/audio/vintage-instrumental.mp3';

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_PATH);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Handle audio loading errors
    audioRef.current.addEventListener('error', () => {
      setHasError(true);
      console.log('Audio file not found. Please add your music file to: public/audio/vintage-instrumental.mp3');
    });

    audioRef.current.addEventListener('canplaythrough', () => {
      setHasError(false);
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        if (isMuted) {
          setIsMuted(false);
        }
      } catch (error) {
        console.log('Audio playback failed:', error);
        setHasError(true);
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      <div className="relative">
        {/* Volume Slider */}
        <AnimatePresence>
          {showVolume && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-vanilla rounded-full shadow-lg px-4 py-2 flex items-center gap-3 border border-caput-mortuum/30"
            >
              <button
                onClick={toggleMute}
                className="text-bistre hover:text-caput-mortuum transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-khaki rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-caput-mortuum"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <button
          onClick={togglePlay}
          disabled={hasError}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            hasError 
              ? 'bg-gray-400 cursor-not-allowed'
              : isPlaying 
                ? 'bg-gradient-to-br from-caput-mortuum to-flame' 
                : 'bg-gradient-to-br from-caput-mortuum to-bistre hover:from-caput-mortuum hover:to-flame'
          }`}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          title={hasError ? 'Music file not found - Add file to public/audio/' : (isPlaying ? 'Pause music' : 'Play music')}
        >
          <motion.div
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-vanilla" />
            ) : (
              <Music className="w-6 h-6 text-vanilla" />
            )}
          </motion.div>
        </button>

        {/* Playing Indicator */}
        {isPlaying && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-flame rounded-full flex items-center justify-center"
          >
            <span className="text-vanilla text-xs">♪</span>
          </motion.div>
        )}

        {/* Error Indicator */}
        {hasError && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs">!</span>
          </motion.div>
        )}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {showVolume && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 right-0 bg-caput-mortuum text-vanilla text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
          >
            {hasError 
              ? '⚠️ Add music file to public/audio/' 
              : isPlaying 
                ? '♪ Vintage - Cort' 
                : 'Play jazz music'}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
