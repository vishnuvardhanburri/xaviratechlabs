"use client";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Flow() {
  const steps = [
    { label: 'Lead', icon: '👤', color: 'from-blue-500 to-cyan-500' },
    { label: 'Email', icon: '✉️', color: 'from-cyan-500 to-emerald-500' },
    { label: 'Send', icon: '📤', color: 'from-emerald-500 to-teal-500' },
    { label: 'Reply', icon: '↩️', color: 'from-teal-500 to-blue-500' },
    { label: 'Decision', icon: '🎯', color: 'from-blue-500 to-purple-500' },
    { label: 'Optimize', icon: '⚙️', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          The <span className="text-cyan-400">Outbound Flow</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From prospect data to real conversations. Every step automated, fully controlled.
        </p>
      </motion.div>

      {/* Flow diagram */}
      <div className="overflow-x-auto pb-8">
        <div className="flex items-center justify-center gap-0 min-w-max px-4 lg:px-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step node */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                  />

                  {/* Node */}
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg border-2 border-white/20 hover:border-white/50 transition-colors`}>
                    <div className="text-center">
                      <span className="text-4xl block mb-1">{step.icon}</span>
                      <p className="text-xs font-bold text-white">{step.label}</p>
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  <motion.div
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="bg-gray-900 border border-cyan-500/30 rounded px-3 py-2 whitespace-nowrap text-xs text-cyan-300">
                      Step {i + 1}: {step.label}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  className="flex-shrink-0 w-16 h-1 mx-2 bg-gradient-to-r from-cyan-500/30 to-transparent relative group/arrow"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Description cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          {
            step: '1. Lead',
            title: 'Data In',
            description: 'Import prospects from any source. We handle deduplication, validation, and enrichment.',
          },
          {
            step: '2. Email',
            title: 'Composition',
            description: 'AI-powered email generation with your templates and tone. Every email is unique.',
          },
          {
            step: '3. Send',
            title: 'Distribution',
            description: 'Intelligent queuing across multiple verified domains. Spam checks built-in.',
          },
          {
            step: '4. Reply',
            title: 'Capture',
            description: 'Track all replies automatically. Filter spam, categorize interest level.',
          },
          {
            step: '5. Decision',
            title: 'Next Steps',
            description: 'AI decides: follow up, nurture, schedule meeting, or move to closed pipeline.',
          },
          {
            step: '6. Optimize',
            title: 'Self-Healing',
            description: 'Learn from every campaign. Adjust timing, subject lines, sending domains automatically.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-cyan-400 text-sm font-bold mb-2">{item.step}</p>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
