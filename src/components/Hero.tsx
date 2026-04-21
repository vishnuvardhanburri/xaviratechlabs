'use client';

import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f]">
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Static gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Left side - Text */}
        <div className="flex-1 pr-8">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Autonomous{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Outbound Engine
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Infrastructure that generates real conversations without manual intervention. Built by systems engineers for enterprise reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/demo"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Book Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/product"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Product
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="flex-1 hidden lg:block">
          <div className="relative">
            {/* Main visual element */}
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <div className="aspect-square bg-gray-800/50 rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">34% Reply Rate</h3>
                  <p className="text-gray-400">Industry-leading engagement</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-xl rounded-lg px-4 py-2 border border-cyan-500/20">
              <p className="text-cyan-400 font-semibold">99.99% Uptime</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-xl rounded-lg px-4 py-2 border border-cyan-500/20">
              <p className="text-cyan-400 font-semibold">Enterprise Scale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-8 left-8 right-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">34%</p>
            <p className="text-gray-400 text-sm">Reply Rate</p>
          </div>
          <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">50+</p>
            <p className="text-gray-400 text-sm">Companies</p>
          </div>
          <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">99.99%</p>
            <p className="text-gray-400 text-sm">Uptime</p>
          </div>
          <div className="bg-black/40 backdrop-blur-xl rounded-lg p-4 border border-cyan-500/20">
            <p className="text-2xl font-bold text-cyan-400">6+</p>
            <p className="text-gray-400 text-sm">Industries</p>
          </div>
        </div>
      </div>
    </div>
  );
}
