import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useRegistration } from '../App';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const { openRegistration } = useRegistration();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { 
      label: 'Conference Resources', 
      href: '#overview',
      dropdown: [
        { label: 'Overview', href: '#overview' },
        { label: 'Schedule', href: '#schedule' },
        { label: 'Committees', href: '#committees' },
        { label: 'Rules', href: '#rules' },
      ]
    },
    { label: 'Secretariat', href: '#secretariat' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    openRegistration();
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dctufbj8d/image/upload/v1769866561/armonia_Logo-removebg-preview_uhlozc.png" 
              alt="Armonia MUN Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="font-serif text-2xl font-bold text-caput-mortuum hidden sm:block">
              ARMONIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-bistre hover:text-flame transition-colors font-medium"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-bistre hover:text-flame transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                )}
                
                {item.dropdown && (
                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-vanilla rounded-lg shadow-xl py-2 border border-khaki"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-bistre hover:bg-khaki/30 hover:text-flame transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <button
              onClick={handleRegisterClick}
              className="px-6 py-2.5 bg-caput-mortuum text-vanilla rounded-full font-semibold hover:bg-flame transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-bistre hover:text-flame"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-khaki"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-bistre hover:text-flame transition-colors font-medium py-2"
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-bistre/70 hover:text-flame transition-colors text-sm py-1"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={handleRegisterClick}
                className="block w-full text-center px-6 py-3 bg-caput-mortuum text-vanilla rounded-full font-semibold"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
