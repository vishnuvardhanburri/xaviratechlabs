"use client";
"use client";
import { motion } from './motion-mock';
import { CheckCircle2, Lock, Zap, Shield } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function TrustAndCTA() {
  return (
    <>
      {/* Trust block */}
      <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Built on <span className="text-cyan-400">Trust</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No black box. No surprises. Complete transparency.
          </p>
        </motion.div>

        {/* Trust pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Lock,
              title: 'No Full Payment Upfront',
              description: 'Start with $7K proof. See results. Then scale with confidence.',
              color: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Zap,
              title: 'Real Campaigns in 10 Days',
              description: 'Not a demo. Not a test. Real emails to your real prospects.',
              color: 'from-cyan-500 to-emerald-500',
            },
            {
              icon: Shield,
              title: 'Full Transparency',
              description: 'Every email, reply, decision visible. Live dashboard. No hidden metrics.',
              color: 'from-emerald-500 to-teal-500',
            },
            {
              icon: CheckCircle2,
              title: 'Guaranteed Support',
              description: 'Dedicated team optimizing your campaigns daily. 24/7 monitoring.',
              color: 'from-teal-500 to-blue-500',
            },
          ].map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm flex-1">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA section */}
      <section className="relative py-32 px-8 lg:px-16">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#0b0b0f]/80 to-[#0b0b0f]"
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
          />

          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              y: [0, 100, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              y: [0, -100, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
          >
            <h2 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Deploy Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Outbound Engine
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Stop wasting time on low-reply-rate campaigns. Get 34% engagement with autonomous infrastructure.
            </p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="https://cal.com/vishnuvardhanburri/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2 group inline-flex">
                Start Proof Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://cal.com/vishnuvardhanburri/30min" target="_blank" rel="noopener noreferrer" className="px-8 py-5 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2 inline-flex">
                Book Demo Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>No credit card required</span>
              </div>
              <div className="hidden sm:block text-gray-600">•</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Results in 10 days</span>
              </div>
              <div className="hidden sm:block text-gray-600">•</div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom CTA detail */}
          <motion.div
            className="mt-20 pt-12 border-t border-cyan-500/20"
          >
            <p className="text-gray-400 mb-6">
              Questions? Let's talk. Book a personalized demo with our team.
            </p>
            <button className="px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300 inline-block">
              Schedule 15-min Call
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
