import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-vanilla via-khaki/20 to-vanilla flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-32 h-32 mx-auto mb-8"
        >
          {/* Vinyl Record */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-bistre to-caput-mortuum"
          >
            {/* Grooves */}
            <div className="absolute inset-2 rounded-full border border-bistre/30" />
            <div className="absolute inset-4 rounded-full border border-bistre/30" />
            <div className="absolute inset-6 rounded-full border border-bistre/30" />
            <div className="absolute inset-8 rounded-full border border-bistre/30" />
            
            {/* Center */}
            <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gradient-to-br from-flame to-butterscotch flex items-center justify-center">
              <Music className="w-6 h-6 text-vanilla" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-serif text-4xl font-bold text-bistre mb-2"
        >
          ARMONIA
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-flame font-medium"
        >
          MUN '26
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 w-48 h-1 bg-khaki/30 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: 2, ease: 'linear' }}
            className="h-full w-1/2 bg-gradient-to-r from-flame to-butterscotch rounded-full"
          />
        </motion.div>

        {/* Musical Notes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: '100%', 
                x: `${20 + i * 15}%` 
              }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: '-100%',
                rotate: [0, 15, -15, 0]
              }}
              transition={{ 
                delay: 0.5 + i * 0.2, 
                duration: 2,
                ease: 'easeOut'
              }}
              className="absolute bottom-0 text-flame/40 text-4xl"
            >
              ♪
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
