'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f]">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Left side - Text */}
        <motion.div
          className="flex-1 pr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-cyan-300 font-medium">Built by Systems Engineers</p>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Autonomous Outbound
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Engine
            </span>
            <br />
            That Generates Conversations
          </motion.h1>

          <motion.div
            className="space-y-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 flex items-center gap-3">
              <span className="text-cyan-400">✓</span> Input to output, without silent failure
            </p>
            <p className="text-lg text-gray-300 flex items-center gap-3">
              <span className="text-cyan-400">✓</span> 99.99% uptime. Autonomous agents. Self-healing.
            </p>
            <p className="text-lg text-gray-300 flex items-center gap-3">
              <span className="text-cyan-400">✓</span> For companies that own their engine
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="https://cal.com/vishnuvardhanburri/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 group inline-flex">
              Start 10-Day Proof
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://cal.com/vishnuvardhanbutri/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 inline-flex">
              <Play className="w-5 h-5" />
              Book Demo
            </a>
          </motion.div>
        </motion.div>

        {/* Right side - Dashboard Preview */}
        <motion.div
          className="flex-1 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl" />

            {/* Dashboard card */}
            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-cyan-500/10">
                <h3 className="text-cyan-300 font-semibold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Autonomous Outbound Engine
                </h3>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded p-4 border border-cyan-500/10">
                  <p className="text-gray-400 text-sm mb-2">Emails Sent</p>
                  <motion.p
                    className="text-3xl font-bold text-cyan-400"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    12.4K
                  </motion.p>
                </div>
                <div className="bg-gray-800/50 rounded p-4 border border-cyan-500/10">
                  <p className="text-gray-400 text-sm mb-2">Reply Rate</p>
                  <motion.p
                    className="text-3xl font-bold text-blue-400"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  >
                    34%
                  </motion.p>
                </div>
                <div className="bg-gray-800/50 rounded p-4 border border-cyan-500/10">
                  <p className="text-gray-400 text-sm mb-2">Domain Health</p>
                  <motion.p
                    className="text-3xl font-bold text-green-400"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                  >
                    99%
                  </motion.p>
                </div>
              </div>

              {/* Activity log */}
              <div className="space-y-2">
                <p className="text-gray-400 text-sm mb-3">System Status</p>
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="text-xs text-gray-400 py-2 flex items-center gap-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {i === 1 && 'Agents orchestrating outbound campaign'}
                    {i === 2 && 'Self-healing: Optimized sending schedule'}
                    {i === 3 && 'Reply agent processing inbound...'}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400 text-sm">Scroll to see why we're different</p>
          <div className="w-6 h-10 border border-cyan-500/30 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
