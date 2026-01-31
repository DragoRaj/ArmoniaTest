import { Music, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';
import { useRegistration } from '../App';

export function Footer() {
  const { openRegistration } = useRegistration();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bistre text-vanilla relative">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L48 65C96 70 192 80 288 85C384 90 480 90 576 85C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="#472D1F"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-flame to-butterscotch flex items-center justify-center">
                <Music className="w-7 h-7 text-vanilla" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">ARMONIA</h3>
                <p className="text-vanilla/60 text-sm">MUN '26</p>
              </div>
            </div>
            <p className="text-vanilla/70 mb-6 max-w-md">
              Where diplomacy meets harmony. Join us for an unforgettable Model United Nations 
              experience that blends the art of debate with the universal language of music.
            </p>
            <p className="text-butterscotch font-medium tracking-widest">
              Debate • Diplomacy • Difference
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-butterscotch">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#overview" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#committees" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Committees
                </a>
              </li>
              <li>
                <a href="#secretariat" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Secretariat
                </a>
              </li>
              <li>
                <a href="#rules" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Rules & Procedures
                </a>
              </li>
              <li>
                <a href="#contact" className="text-vanilla/70 hover:text-vanilla transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-butterscotch">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:armoniamun@gmail.com"
                  className="flex items-center gap-3 text-vanilla/70 hover:text-vanilla transition-colors"
                >
                  <Mail className="w-5 h-5 text-flame" />
                  armoniamun@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+971502656821"
                  className="flex items-center gap-3 text-vanilla/70 hover:text-vanilla transition-colors"
                >
                  <Phone className="w-5 h-5 text-flame" />
                  +971 50 265 6821
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/armoniamun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-vanilla/70 hover:text-vanilla transition-colors"
                >
                  <Instagram className="w-5 h-5 text-flame" />
                  @armoniamun
                </a>
              </li>
            </ul>

            {/* Register CTA */}
            <button
              onClick={openRegistration}
              className="inline-block mt-6 px-6 py-3 bg-flame text-vanilla rounded-full font-semibold hover:bg-butterscotch transition-colors"
            >
              Register Now
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-vanilla/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-vanilla/60 text-sm">
            © 2026 Armonia MUN. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/armoniamun"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-vanilla/10 hover:bg-flame flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="mailto:armoniamun@gmail.com"
              className="w-10 h-10 rounded-full bg-vanilla/10 hover:bg-flame flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-flame hover:bg-butterscotch flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
