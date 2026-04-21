"use client";
import { motion } from 'motion/react';
import { Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export function SystemPreview() {
  const logs = [
    'Email sent to john@acmecorp.com - Domain verified ✓',
    'Reply received from sarah@techstartup.io - Stored for review',
    'Spam check passed - 98.2% domain reputation',
    'Email queued for alex@innovateltd.com - Processing...',
    'Self-healing: Rebalanced load across 3 sending domains',
    'Conversation starter: Detected 5 positive replies in past 2 hours',
    'Email sent to mike@venturefund.com - Domain verified ✓',
  ];

  return (
    <section className="relative py-24 px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
          System is <span className="text-green-400">Running</span>
        </h2>
        <p className="text-xl text-gray-400">
          Real-time transparency. Every email, every reply, every decision tracked.
        </p>
      </motion.div>

      {/* Live stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Emails/Day', value: '50,000+', icon: '📨', status: 'ACTIVE' },
          { label: 'Reply Rate', value: '34%', icon: '↩️', status: 'STRONG' },
          { label: 'Domain Health', value: '99.8%', icon: '🏥', status: 'SAFE' },
          { label: 'Uptime', value: '99.99%', icon: '⚡', status: 'OPTIMAL' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{stat.icon}</span>
                <div className={`px-2 py-1 rounded text-xs font-bold ${
                  stat.status === 'ACTIVE' ? 'bg-green-500/20 text-green-300' :
                  stat.status === 'STRONG' ? 'bg-blue-500/20 text-blue-300' :
                  stat.status === 'SAFE' ? 'bg-cyan-500/20 text-cyan-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {stat.status}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <motion.p
                className="text-3xl font-bold text-cyan-300"
                key={`${stat.label}-${Math.random()}`}
              >
                {stat.value}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live logs */}
      <motion.div
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/10">
            <motion.div
              className="w-3 h-3 rounded-full bg-green-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              Live Activity Feed
            </h3>
            <span className="ml-auto text-xs text-gray-400">Now</span>
          </div>

          {/* Logs */}
          <div className="space-y-3 max-h-64 overflow-y-auto scrollbar-hide">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <span className="text-cyan-400 mt-1 flex-shrink-0">
                  {log.includes('✓') ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                </span>
                <p className={log.includes('✓') ? 'text-gray-300' : log.includes('passed') ? 'text-green-300' : 'text-gray-400'}>
                  {log}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer - scroll indicator */}
          <div className="mt-4 pt-4 border-t border-cyan-500/10 text-center">
            <motion.p
              className="text-xs text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Logs update in real-time • System operating normally
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Info text */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            title: 'No Black Box',
            description: 'See every email sent, every reply received, and every decision made.',
          },
          {
            title: 'Real Results',
            description: '34% average reply rate in 10 days. Real campaigns, real data.',
          },
          {
            title: 'Always Running',
            description: '99.99% uptime. Infrastructure built for enterprise scale.',
          },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
