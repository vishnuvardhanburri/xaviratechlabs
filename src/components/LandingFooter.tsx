"use client";
"use client";
import { motion } from './motion-mock';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cyan-500/10 bg-gradient-to-b from-[#0b0b0f] to-[#000000]">
      <div className="px-8 lg:px-16 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-cyan-500/10">
          {/* Brand */}
          <motion.div
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">X</span>
              </div>
              <span className="text-white font-bold">Xavira</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Autonomous outbound infrastructure built by engineers from VishnuLabs.
            </p>
            <p className="text-gray-500 text-xs">
              Same reliability mindset. Applied to sales.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
          >
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/product" className="hover:text-cyan-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-cyan-400 transition-colors">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-cyan-400 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
          >
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
          >
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:demo@xavira.ai"
                className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Xavira. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              Terms
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
