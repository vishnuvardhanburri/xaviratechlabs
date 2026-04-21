"use client";
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Careers', 'Contact'];

  const handleNavClick = (link: string) => {
    setCurrentPage(link.toLowerCase());
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mobile Navbar
  if (isMobile) {
    return (
      <>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
        >
          <div className="backdrop-blur-xl bg-white/80 rounded-xl border border-gray-300 shadow-lg px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Brand */}
              <div
                className="cursor-pointer"
                onClick={() => handleNavClick('home')}
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base tracking-[0.2em] text-black">
                    XAVIRA
                  </span>
                  <span className="text-xs text-gray-600 tracking-wider">TECH LABS</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-black" />
                ) : (
                  <Menu className="w-5 h-5 text-black" />
                )}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.1 }}
                className="pt-24 px-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => handleNavClick(link)}
                      className={`w-full text-left px-6 py-4 rounded-xl transition-colors ${
                        currentPage === link.toLowerCase()
                          ? 'bg-black text-white border border-black shadow-md'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Navbar
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative backdrop-blur-xl bg-white/80 rounded-2xl border border-gray-300 shadow-lg"
        >
          <div className="flex items-center justify-between px-8 py-4">
            {/* Brand Text Only */}
            <motion.div
              className="cursor-pointer"
              onClick={() => handleNavClick('home')}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-baseline gap-2">
                <span 
                  className="text-xl tracking-[0.25em] text-black"
                >
                  XAVIRA
                </span>
                <span className="text-sm text-gray-600 tracking-wider">TECH LABS</span>
              </div>
              <div className="text-[10px] text-gray-500 tracking-wider mt-0.5">Part of Xavira Group</div>
            </motion.div>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 transition-colors ${
                    currentPage === link.toLowerCase()
                      ? 'text-black'
                      : 'text-gray-600 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                  {currentPage === link.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full"
                    />
                  )}
                </motion.button>
              ))}

              {/* LinkedIn Link */}
              <motion.a
                href="https://www.linkedin.com/company/xaviratech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Visit our LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}