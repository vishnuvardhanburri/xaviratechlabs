import { motion } from 'motion/react';
import { Bot, Mail, Send, MessageSquare, Brain, Wrench } from 'lucide-react';

export function AgentsSystem() {
  const agents = [
    {
      name: 'Lead Agent',
      description: 'Sources, enriches, and validates prospect data from multiple channels.',
      icon: Mail,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Email Agent',
      description: 'Generates personalized emails with dynamic templates and AI suggestions.',
      icon: Mail,
      color: 'from-cyan-500 to-emerald-500',
    },
    {
      name: 'Sender Agent',
      description: 'Manages domain reputation, throttling, and intelligent scheduling.',
      icon: Send,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Reply Agent',
      description: 'Captures replies, filters spam, scores engagement, and triggers workflows.',
      icon: MessageSquare,
      color: 'from-teal-500 to-blue-500',
    },
    {
      name: 'Boss Agent',
      description: 'Orchestrates the entire system, makes routing decisions, ensures quality.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Self-Healing Agent',
      description: 'Continuously learns, optimizes, and adapts to improve performance.',
      icon: Wrench,
      color: 'from-pink-500 to-red-500',
    },
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
          AI Agent <span className="text-cyan-400">Network</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Six specialized agents working together. Each one an expert in its domain.
        </p>
      </motion.div>

      {/* Agents grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, i) => {
          const Icon = agent.icon;
          return (
            <motion.div
              key={i}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${agent.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Card */}
              <div className={`relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden`}>
                {/* Background gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${agent.color} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{agent.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{agent.description}</p>

                  {/* Status */}
                  <div className="flex items-center gap-2 pt-4 border-t border-cyan-500/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-gray-500">Operating normally</span>
                  </div>
                </div>

                {/* Hover arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-cyan-400 text-xl">→</span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* How they work together */}
      <motion.div
        className="mt-20 relative group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyan-400" />
                How They Collaborate
              </h3>
              <div className="space-y-4">
                {[
                  'Boss Agent coordinates all activities',
                  'Lead Agent sources qualified prospects',
                  'Email Agent crafts personalized messages',
                  'Sender Agent distributes at optimal times',
                  'Reply Agent captures and scores interactions',
                  'Self-Healing Agent optimizes performance',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">The Result</h3>
              <div className="space-y-6">
                {[
                  {
                    metric: '100% Autonomous',
                    detail: 'No manual intervention needed once configured',
                  },
                  {
                    metric: '34% Reply Rate',
                    detail: 'Industry-leading engagement in 10 days',
                  },
                  {
                    metric: '99.99% Uptime',
                    detail: 'Enterprise-grade reliability and redundancy',
                  },
                  {
                    metric: 'Self-Learning',
                    detail: 'Continuously improves with every campaign',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-cyan-400 font-bold text-sm">{item.metric}</p>
                    <p className="text-gray-400 text-sm">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
