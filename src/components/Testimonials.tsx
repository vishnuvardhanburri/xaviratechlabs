import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "We deployed Xavira's infrastructure and saw a 34% reply rate within 10 days. No configuration headaches, no manual intervention. It just works.",
      author: 'Sarah Chen',
      role: 'VP Sales',
      company: 'TechScale Inc',
      rating: 5,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      quote: "As an engineer, I appreciate infrastructure that doesn't fail silently. Xavira gave us 99.99% uptime on our outbound campaigns. Zero surprises.",
      author: 'James Rodriguez',
      role: 'Head of Operations',
      company: 'Enterprise Systems Group',
      rating: 5,
      color: 'from-cyan-500 to-emerald-500',
    },
    {
      quote: "The proof-first model meant we could validate the approach with $7K before committing to scale. We saw results immediately. Now we're fully deployed.",
      author: 'Michael Torres',
      role: 'CEO',
      company: 'Growth Ventures',
      rating: 5,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      quote: "Finally, a system that's built like infrastructure, not software. Autonomous agents optimize continuously. Our team doesn't touch it anymore.",
      author: 'Emma Watson',
      role: 'Director of Revenue',
      company: 'CloudFirst Corp',
      rating: 5,
      color: 'from-teal-500 to-blue-500',
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
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Trusted by <span className="text-cyan-400">Enterprise Teams</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Companies generating real revenue trust us with their outbound infrastructure.
        </p>
      </motion.div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

            <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-md border border-cyan-500/20 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 mb-8 flex-1 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-6 border-t border-cyan-500/10">
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-cyan-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust badge */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400">
          Serving <span className="text-cyan-400 font-bold">50+ companies</span> across{' '}
          <span className="text-cyan-400 font-bold">6+ industries</span> with{' '}
          <span className="text-cyan-400 font-bold">100% satisfaction rate</span>
        </p>
      </motion.div>
    </section>
  );
}
