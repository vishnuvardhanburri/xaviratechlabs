"use client";
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0b0b0f]/80 to-[#0b0b0f]/0 backdrop-blur-md border-b border-cyan-500/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-8 lg:px-16 max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 font-bold text-xl"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">X</span>
          </div>
          <span className="text-white hidden sm:inline">Xavira</span>
        </motion.div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-12">
          <a href="#how-it-works" className="text-gray-300 hover:text-cyan-300 transition-colors text-sm">
            Why Different
          </a>
          <a href="#agents" className="text-gray-300 hover:text-cyan-300 transition-colors text-sm">
            Architecture
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-cyan-300 transition-colors text-sm">
            Pricing
          </a>
          <a href="#trust" className="text-gray-300 hover:text-cyan-300 transition-colors text-sm">
            Built by Engineers
          </a>
          <a
            href="https://cal.com/vishnuvardhanburri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 text-sm font-medium inline-block"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-400" />
          )}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="absolute top-20 left-0 right-0 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e] border-b border-cyan-500/20 p-8 flex flex-col gap-4 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-300 transition-colors">
              Why Different
            </a>
            <a href="#agents" className="text-gray-300 hover:text-cyan-300 transition-colors">
              Architecture
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyan-300 transition-colors">
              Pricing
            </a>
            <a href="#trust" className="text-gray-300 hover:text-cyan-300 transition-colors">
              Built by Engineers
            </a>
            <a
              href="https://cal.com/vishnuvardhanburri/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium w-full inline-block text-center"
            >
              Book Demo
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
