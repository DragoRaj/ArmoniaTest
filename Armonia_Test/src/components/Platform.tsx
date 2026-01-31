import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, MessageSquare, Bell, Trophy, FileText, Users } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Resolution & Amendment Submission',
    description: 'Submit and track all resolutions and amendments through our secure platform with real-time status updates.',
    color: 'from-flame to-caput-mortuum',
  },
  {
    icon: MessageSquare,
    title: 'Networking & Messaging',
    description: 'Connect with fellow delegates, form alliances, and collaborate on working papers and resolutions.',
    color: 'from-butterscotch to-flame',
  },
  {
    icon: Bell,
    title: 'Live Crisis Updates',
    description: 'Real-time crisis updates for dynamic committee simulations, keeping you informed of every development.',
    color: 'from-caput-mortuum to-bistre',
  },
  {
    icon: Trophy,
    title: 'Achievement Tracking',
    description: 'Track your participation, awards, and conference achievements throughout the event.',
    color: 'from-flame to-butterscotch',
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Access all conference documents, background guides, and resources in one centralized location.',
    color: 'from-bistre to-caput-mortuum',
  },
  {
    icon: Users,
    title: 'Delegate Directory',
    description: 'Find and connect with delegates from your committee and across the conference.',
    color: 'from-butterscotch to-caput-mortuum',
  },
];

export function Platform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-vanilla to-khaki/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-flame/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-butterscotch/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-flame/10 text-flame rounded-full text-sm font-semibold mb-4">
            Coming Soon
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Interactive Conference Platform
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-flame to-butterscotch mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            Experience Armonia MUN through our state-of-the-art digital platform, 
            designed to enhance your delegate experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-vanilla rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-khaki/30 hover:-translate-y-2 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-vanilla" />
              </div>
              <h3 className="font-serif text-xl font-bold text-bistre mb-2">
                {feature.title}
              </h3>
              <p className="text-bistre/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Platform Preview Mock */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-bistre to-caput-mortuum rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-flame/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-vanilla">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Your Digital Delegate Hub
              </h3>
              <p className="text-vanilla/80 text-lg mb-6">
                Access everything you need for a successful conference experience - 
                from document submissions to real-time updates, all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-vanilla/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm">Live Updates</span>
                </div>
                <div className="flex items-center gap-2 bg-vanilla/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-butterscotch" />
                  <span className="text-sm">Secure Access</span>
                </div>
                <div className="flex items-center gap-2 bg-vanilla/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-flame" />
                  <span className="text-sm">Mobile Ready</span>
                </div>
              </div>
            </div>
            
            {/* Mock UI */}
            <div className="flex-1 max-w-md">
              <div className="bg-vanilla rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-khaki/30 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-flame" />
                  <div className="w-3 h-3 rounded-full bg-butterscotch" />
                  <div className="w-3 h-3 rounded-full bg-khaki" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-khaki/30 rounded w-3/4" />
                  <div className="h-4 bg-khaki/20 rounded w-full" />
                  <div className="h-4 bg-khaki/20 rounded w-5/6" />
                  <div className="h-20 bg-flame/10 rounded-lg mt-4" />
                  <div className="flex gap-2">
                    <div className="h-8 bg-flame rounded flex-1" />
                    <div className="h-8 bg-khaki/30 rounded flex-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
