import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Coffee, Users, Award, Music, MessageSquare } from 'lucide-react';

const scheduleData = {
  day1: {
    date: 'April 4, 2026',
    events: [
      { time: '8:00 AM - 9:00 AM', title: 'Registration & Check-in', icon: Users, description: 'Delegate registration and badge collection' },
      { time: '9:00 AM - 10:30 AM', title: 'Opening Ceremony', icon: Music, description: 'Welcome address and keynote speaker' },
      { time: '10:30 AM - 1:00 PM', title: 'Committee Session 1', icon: MessageSquare, description: 'First committee session - Roll call and opening speeches' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break', icon: Coffee, description: 'Networking lunch for all delegates' },
      { time: '2:00 PM - 5:00 PM', title: 'Committee Session 2', icon: MessageSquare, description: 'Moderated and unmoderated caucuses' },
      { time: '7:00 PM - 9:00 PM', title: 'Evening Social Event', icon: Music, description: 'Music-themed social gathering' },
    ]
  },
  day2: {
    date: 'April 5, 2026',
    events: [
      { time: '9:00 AM - 12:00 PM', title: 'Committee Session 3', icon: MessageSquare, description: 'Working paper presentations and debates' },
      { time: '12:00 PM - 1:00 PM', title: 'Lunch Break', icon: Coffee, description: 'Delegate networking' },
      { time: '1:00 PM - 4:00 PM', title: 'Committee Session 4', icon: MessageSquare, description: 'Draft resolutions and voting' },
      { time: '4:30 PM - 6:00 PM', title: 'Closing Ceremony', icon: Award, description: 'Final remarks and conference conclusion' },
      { time: '6:00 PM - 7:00 PM', title: 'Awards & Recognition', icon: Award, description: 'Award ceremony for outstanding delegates' },
    ]
  }
};

export function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-vanilla to-khaki/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Schedule & Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-flame mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            Two days of engaging debate, diplomacy, and memorable experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-vanilla rounded-3xl shadow-xl p-8 border border-khaki/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-caput-mortuum to-flame flex items-center justify-center">
                  <span className="text-vanilla font-bold text-2xl">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-bistre">Day One</h3>
                  <p className="text-caput-mortuum font-medium">{scheduleData.day1.date}</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-caput-mortuum via-flame to-khaki" />

                <div className="space-y-6">
                  {scheduleData.day1.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-3 w-6 h-6 rounded-full bg-vanilla border-4 border-caput-mortuum flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-caput-mortuum" />
                      </div>

                      <div className="bg-caput-mortuum/10 rounded-xl p-4 hover:bg-caput-mortuum/15 transition-colors border border-caput-mortuum/20">
                        <div className="flex items-start gap-3">
                          <event.icon className="w-5 h-5 text-caput-mortuum flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-caput-mortuum font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </p>
                            <h4 className="font-semibold text-bistre mt-1">{event.title}</h4>
                            <p className="text-sm text-bistre/70 mt-1">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Day 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-vanilla rounded-3xl shadow-xl p-8 border border-khaki/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-flame to-caput-mortuum flex items-center justify-center">
                  <span className="text-vanilla font-bold text-2xl">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-bistre">Day Two</h3>
                  <p className="text-flame font-medium">{scheduleData.day2.date}</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-flame via-caput-mortuum to-bistre" />

                <div className="space-y-6">
                  {scheduleData.day2.events.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="relative pl-16"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-3 w-6 h-6 rounded-full bg-vanilla border-4 border-flame flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-flame" />
                      </div>

                      <div className="bg-flame/10 rounded-xl p-4 hover:bg-flame/20 transition-colors border border-flame/20">
                        <div className="flex items-start gap-3">
                          <event.icon className="w-5 h-5 text-flame flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-flame font-semibold flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </p>
                            <h4 className="font-semibold text-bistre mt-1">{event.title}</h4>
                            <p className="text-sm text-bistre/70 mt-1">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
