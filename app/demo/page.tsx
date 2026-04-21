import { LandingFooter } from '@/components/LandingFooter';
import { motion } from 'motion/react';
import { Calendar, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Book Your <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See autonomous outbound infrastructure in action. 30-minute walkthrough customized to your needs.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Calendar embed */}
          <motion.div
            className="relative rounded-lg overflow-hidden border border-cyan-500/30 h-full min-h-[600px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <p className="text-gray-300 mb-6">
                  Calendar widget loading...
                </p>
                <a
                  href="https://cal.com/vishnuvardhanburri/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Open Calendar
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - What to expect */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">What to Expect</h2>

            {[
              {
                icon: Mail,
                title: 'Real-Time Dashboard',
                description: 'See live metrics: emails sent, reply rates, domain health, uptime.',
              },
              {
                icon: MessageSquare,
                title: 'Six-Agent Architecture',
                description: 'Walk through each autonomous agent and how they collaborate to optimize campaigns.',
              },
              {
                icon: Calendar,
                title: 'Custom Walkthrough',
                description: '30 minutes tailored to your industry, current pain points, and goals.',
              },
              {
                icon: CheckCircle2,
                title: 'No Sales Pressure',
                description: 'Questions answered. Demonstrations shown. Next steps discussed if interested.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyan-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              className="mt-12 p-6 rounded-lg border border-cyan-500/30 bg-cyan-500/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-300">
                <span className="text-cyan-400 font-bold">Pro tip:</span> Come with your lead data or outbound strategy. We'll show you exactly how Xavira solves your specific challenges.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-8 lg:px-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {[
            {
              q: 'How long is the demo?',
              a: '30 minutes. Enough time to see the system in action and answer your questions.',
            },
            {
              q: 'Do I need to prepare anything?',
              a: 'Optional. If you have lead data or current outbound strategy, bring it. Otherwise, we use examples.',
            },
            {
              q: 'What if I am not ready to buy?',
              a: 'Demos are free. No credit card needed. If you are curious, that is enough.',
            },
            {
              q: 'Can I reschedule?',
              a: 'Yes. Cal.com handles cancellations and rescheduling directly.',
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-b from-gray-900/50 to-gray-950/50 hover:border-cyan-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-bold text-white mb-2">{faq.q}</p>
              <p className="text-gray-300 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-8 lg:px-16 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready?</h2>
          <a
            href="https://cal.com/vishnuvardhanburri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg"
          >
            Schedule Your Demo
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
