"use client";
"use client";
import { motion } from './motion-mock';
import { ArrowRight, Code2, Box, Zap } from 'lucide-react';

export function AboutEvolution() {
  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          Built by Engineers
          <br />
          <span className="text-cyan-400">Who Fix Broken Systems</span>
        </h2>
      </motion.div>

      {/* Evolution timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Phase 1: VishnuLabs */}
        <motion.div
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Phase 1: VishnuLabs</h3>
              <p className="text-sm text-gray-400">2023-2024</p>
            </div>

            <div className="space-y-3 flex-1 mb-6">
              <p className="text-gray-300">
                Built backend systems focused on <span className="text-blue-400 font-semibold">reliability and control</span>.
              </p>
              <div className="space-y-2">
                {[
                  'System reliability first',
                  'Mission-critical infrastructure',
                  'Owned systems over SaaS stacks',
                  'Risk removal + proof-first deployment',
                  'Working with companies generating real revenue',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 border-t border-cyan-500/10 pt-6">
              "If your system handles leads or data, failure is already happening."
            </p>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-4">
            <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90 lg:rotate-0" />
            <p className="text-gray-400 text-xs text-center font-semibold">Applied the same principles to</p>
            <ArrowRight className="w-6 h-6 text-cyan-400 rotate-90 lg:rotate-0" />
          </div>
        </motion.div>

        {/* Phase 2: Xavira */}
        <motion.div
          className="group relative lg:col-start-3"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500/60 transition-all duration-300 h-full flex flex-col">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Phase 2: Xavira</h3>
              <p className="text-sm text-gray-400">2024+</p>
            </div>

            <div className="space-y-3 flex-1 mb-6">
              <p className="text-gray-300">
                Evolution → applying the same engineering principles to <span className="text-cyan-400 font-semibold">outbound growth infrastructure</span>.
              </p>
              <div className="space-y-2">
                {[
                  'Autonomous agents (not manual tools)',
                  'Deterministic architecture',
                  'Real-time visibility + control',
                  '34% reply rate (engineered, not hype)',
                  'Built for companies ready to own the engine',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 border-t border-cyan-500/10 pt-6">
              "Input to output, without silent failure in the middle."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Core belief */}
      <motion.div
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12 hover:border-cyan-500/50 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Principle 1 */}
            <motion.div
            >
              <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Box className="w-5 h-5" />
                Real System Thinking
              </h4>
              <p className="text-gray-400 text-sm">
                Not growth hacking or marketing tactics. We think in terms of systems architecture, failure modes, and
                deterministic outcomes.
              </p>
            </motion.div>

            {/* Principle 2 */}
            <motion.div
            >
              <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Reliability-First Mindset
              </h4>
              <p className="text-gray-400 text-sm">
                99.99% uptime. Automated fallbacks. Self-healing. We never assume anything works. We verify
                everything.
              </p>
            </motion.div>

            {/* Principle 3 */}
            <motion.div
            >
              <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Deterministic Architecture
              </h4>
              <p className="text-gray-400 text-sm">
                Input always produces predictable output. No black boxes. No hidden failures. Every decision is logged,
                visible, auditable.
              </p>
            </motion.div>
          </div>

          {/* Bottom message */}
          <div className="mt-12 pt-12 border-t border-cyan-500/20">
            <motion.p
              className="text-center text-xl font-bold text-white"
            >
              <span className="text-cyan-400">This is not a tool.</span> This is infrastructure built by engineers who
              understand failure.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
