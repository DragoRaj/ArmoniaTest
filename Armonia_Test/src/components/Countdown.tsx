import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center"
    >
      <p className="text-bistre/70 text-lg mb-4">Conference begins in:</p>
      <div className="flex justify-center gap-3 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div key={unit.label}>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="bg-gradient-to-br from-caput-mortuum to-flame rounded-2xl p-4 md:p-6 shadow-xl min-w-[70px] md:min-w-[100px]">
                <motion.span
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl md:text-5xl font-bold text-vanilla block"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
                <span className="text-vanilla/80 text-xs md:text-sm uppercase tracking-wider">
                  {unit.label}
                </span>
              </div>
              {index < timeUnits.length - 1 && (
                <span className="text-caput-mortuum text-3xl md:text-4xl font-bold hidden md:block">:</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
