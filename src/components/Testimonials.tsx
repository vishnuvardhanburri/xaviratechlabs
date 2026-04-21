'use client';

export function Testimonials() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what companies are saying about their experience with Xavira's autonomous outbound infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Xavira transformed our outbound operations. We went from 3% to 34% reply rates and scaled 10x without adding headcount."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">Sarah Chen</h4>
                <p className="text-gray-400 text-sm">VP Sales, Enterprise SaaS</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The deterministic execution is game-changing. We finally have predictable, scalable outbound that we can trust."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">Michael Rodriguez</h4>
                <p className="text-gray-400 text-sm">CEO, FinTech Startup</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "99.99% uptime means we can rely on Xavira for our critical sales operations. Enterprise-grade reliability."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">Emily Watson</h4>
                <p className="text-gray-400 text-sm">Head of Sales, Healthcare Tech</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The multi-agent system handles complex conversations better than any human team we've had. Truly impressive."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">David Kim</h4>
                <p className="text-gray-400 text-sm">Sales Director, Manufacturing</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Integration was seamless. Xavira works perfectly with our existing stack and data systems."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">Lisa Anderson</h4>
                <p className="text-gray-400 text-sm">CTO, E-commerce Platform</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-yellow-400 rounded-full" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "ROI was achieved in 4 months. The 5x return on investment speaks for itself. Highly recommended."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">James Thompson</h4>
                <p className="text-gray-400 text-sm">Founder, B2B Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Customer Success Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-gray-300">Companies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5x</div>
              <p className="text-gray-300">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
              <p className="text-gray-300">Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
