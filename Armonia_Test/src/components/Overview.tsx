import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Globe, Music2, Award } from 'lucide-react';

export function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="py-24 bg-vanilla relative overflow-hidden">
      <div className="absolute inset-0 watercolor-section opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-bistre mb-4">
            Conference Overview
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-flame mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-caput-mortuum font-semibold">
              Where Diplomacy Meets Harmony
            </h3>
            <p className="text-bistre/80 text-lg leading-relaxed">
              Armonia MUN brings together the art of diplomatic discourse with the universal language of music. 
              Just as an orchestra creates harmony from diverse instruments, our conference unites delegates 
              from various backgrounds to compose solutions for global challenges.
            </p>
            <p className="text-bistre/80 text-lg leading-relaxed">
              This unique Model United Nations experience transforms traditional debate into a symphony of 
              ideas, where every voice contributes to the greater melody of international cooperation.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-caput-mortuum/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-caput-mortuum" />
                </div>
                <div>
                  <h4 className="font-semibold text-bistre">Unique Theme</h4>
                  <p className="text-sm text-bistre/70">Music-inspired diplomacy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-flame/15 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-flame" />
                </div>
                <div>
                  <h4 className="font-semibold text-bistre">Global Issues</h4>
                  <p className="text-sm text-bistre/70">Real-world challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-flame/10 flex items-center justify-center flex-shrink-0">
                  <Music2 className="w-5 h-5 text-flame" />
                </div>
                <div>
                  <h4 className="font-semibold text-bistre">Creative Sessions</h4>
                  <p className="text-sm text-bistre/70">Interactive committees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-caput-mortuum/15 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-caput-mortuum" />
                </div>
                <div>
                  <h4 className="font-semibold text-bistre">Recognition</h4>
                  <p className="text-sm text-bistre/70">Awards & certificates</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vinyl Record Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bistre to-caput-mortuum shadow-2xl animate-spin-slow">
                {/* Grooves */}
                <div className="absolute inset-4 rounded-full border border-bistre/30" />
                <div className="absolute inset-8 rounded-full border border-bistre/30" />
                <div className="absolute inset-12 rounded-full border border-bistre/30" />
                <div className="absolute inset-16 rounded-full border border-bistre/30" />
                <div className="absolute inset-20 rounded-full border border-bistre/30" />
                <div className="absolute inset-24 rounded-full border border-bistre/30" />
                
                {/* Center Label */}
                <div className="absolute inset-0 m-auto w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-flame to-butterscotch flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <p className="font-serif text-vanilla font-bold text-lg">ARMONIA</p>
                    <p className="text-vanilla/80 text-xs">MUN '26</p>
                  </div>
                </div>
              </div>

              {/* Musical Notes floating */}
              <div className="absolute -top-4 -right-4 text-caput-mortuum animate-float">
                <Music2 size={40} />
              </div>
              <div className="absolute -bottom-4 -left-4 text-flame animate-float-slow">
                <Music2 size={32} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
