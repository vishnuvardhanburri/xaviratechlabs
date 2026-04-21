'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <motion.h1
            className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Built by Engineers
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              For Engineers
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From VishnuLabs foundation to autonomous outbound infrastructure. Same reliability mindset, applied to sales and outreach.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Book Demo
            </Link>
            <Link
              href="/product"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Product
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <motion.h2
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              From Systems to Sales
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded by systems engineers from VishnuLabs, Xavira brings the same reliability mindset that powers critical infrastructure to the world of outbound sales and marketing.
            </motion.p>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We've served 50+ companies across 6+ industries, delivering 99.99% uptime systems that scale from startup to enterprise.
            </motion.p>
          </div>

          <motion.div
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-cyan-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">50+</p>
                <p className="text-gray-400">Systems Audited</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">99.99%</p>
                <p className="text-gray-400">Average Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">6+</p>
                <p className="text-gray-400">Industries Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-400">34%</p>
                <p className="text-gray-400">Reply Rates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Engineering Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Deterministic Execution",
              description: "Every action is predictable, measurable, and auditable. No black boxes, no random behavior."
            },
            {
              title: "Fault Tolerance",
              description: "Built with redundancy and graceful degradation. Systems continue operating even under partial failures."
            },
            {
              title: "Scalable Architecture",
              description: "Designed to handle 10x growth without architectural changes. Horizontal scaling from day one."
            }
          ].map((principle, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 border border-cyan-500/20 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
              <p className="text-gray-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
