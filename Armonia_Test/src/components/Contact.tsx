import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-vanilla relative overflow-hidden">
      <div className="absolute inset-0 watercolor-section opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-caput-mortuum mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-caput-mortuum to-flame mx-auto rounded-full" />
          <p className="mt-6 text-bistre/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out to our team for any inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-vanilla rounded-2xl shadow-xl p-8 border border-khaki/50">
              <h3 className="font-serif text-2xl font-bold text-caput-mortuum mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:armoniamun@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-caput-mortuum to-flame flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-vanilla" />
                  </div>
                  <div>
                    <p className="text-sm text-bistre/60 mb-1">Primary Email</p>
                    <p className="text-bistre font-medium group-hover:text-caput-mortuum transition-colors">
                      armoniamun@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:teketirajnish@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame to-butterscotch flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-vanilla" />
                  </div>
                  <div>
                    <p className="text-sm text-bistre/60 mb-1">Secondary Email</p>
                    <p className="text-bistre font-medium group-hover:text-flame transition-colors">
                      teketirajnish@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+971502656821"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-caput-mortuum to-bistre flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-vanilla" />
                  </div>
                  <div>
                    <p className="text-sm text-bistre/60 mb-1">Phone</p>
                    <p className="text-bistre font-medium group-hover:text-caput-mortuum transition-colors">
                      +971 50 265 6821
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-flame to-butterscotch flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-vanilla" />
                  </div>
                  <div>
                    <p className="text-sm text-bistre/60 mb-1">Venue</p>
                    <p className="text-bistre font-medium">Dubai, UAE</p>
                    <p className="text-sm text-caput-mortuum italic">Exact location to be revealed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-caput-mortuum to-flame rounded-2xl shadow-xl p-8 text-vanilla">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Follow Our Socials
              </h3>
              <p className="text-vanilla/80 mb-6">
                Stay connected with ARMONIA MUN for the latest updates, behind-the-scenes content, and conference highlights.
              </p>
              
              <a
                href="https://instagram.com/armoniamun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-vanilla text-caput-mortuum px-6 py-3 rounded-full font-semibold hover:bg-khaki transition-colors shadow-lg group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <span className="block">@armoniamun</span>
                  <span className="text-xs text-bistre/60">Conference highlights</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Send Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-caput-mortuum via-flame to-butterscotch rounded-2xl shadow-2xl p-10 text-vanilla h-full flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="text-center relative z-10">
                <motion.div 
                  className="w-24 h-24 bg-vanilla/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-vanilla/30"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Send className="w-12 h-12 text-vanilla" />
                </motion.div>
                
                <h3 className="font-serif text-3xl font-bold mb-4">
                  Send Us a Message
                </h3>
                
                <p className="text-vanilla/90 mb-8 text-lg leading-relaxed">
                  Have questions about registration, committees, or anything else? 
                  We're here to help! Drop us an email and our team will get back to you as soon as possible.
                </p>
                
                <a
                  href="mailto:armoniamun@gmail.com"
                  className="inline-flex items-center gap-3 bg-vanilla text-caput-mortuum font-bold py-5 px-10 rounded-full hover:bg-butterscotch hover:scale-105 transition-all duration-300 shadow-xl text-lg group"
                >
                  <Mail className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Email Us Now</span>
                </a>
                
                <p className="mt-6 text-vanilla/70 text-sm">
                  armoniamun@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
