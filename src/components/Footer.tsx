import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
  onNavigateToAdmin?: () => void;
}

export function Footer({ onNavigateToAdmin }: FooterProps = {}) {
  return (
    <footer className="relative mt-20 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative backdrop-blur-xl bg-gray-50 rounded-2xl border border-gray-300 p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-700">
                Copyright © 2025 <span className="text-black">Xavira Tech Labs</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Part of Xavira Group • All rights reserved
                {onNavigateToAdmin && (
                  <>
                    {' • '}
                    <button
                      onClick={onNavigateToAdmin}
                      className="text-gray-500 hover:text-black transition-colors"
                      title="Admin Panel"
                    >
                      Admin
                    </button>
                  </>
                )}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6">
              <motion.a
                href="https://www.linkedin.com/company/xaviratech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Xavira Tech Labs on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vishnu-vardhanburri/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Connect with Vishnu Vardhan Burri on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-black" />
              </motion.a>
              <motion.a
                href="mailto:xavira.group@gmail.com"
                className="p-3 rounded-lg bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title="Email us"
              >
                <Mail className="w-5 h-5 text-black" />
              </motion.a>
            </div>

            {/* Contact Email */}
            <div className="text-center md:text-right">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <Mail className="w-4 h-4 text-black" />
                  <a
                    href="mailto:xavira.group@gmail.com"
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    xavira.group@gmail.com
                  </a>
                </div>
                <p className="text-xs text-gray-600">
                  CEO: vishnuvardhanburri19@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}