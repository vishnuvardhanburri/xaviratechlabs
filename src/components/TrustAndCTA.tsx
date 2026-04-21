'use client';

export function TrustAndCTA() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-6xl mx-auto">
        {/* Trust Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built for Enterprise Reliability
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Systems engineering principles applied to outbound infrastructure. Deterministic execution at scale.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
            <p className="text-gray-400">Uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <p className="text-gray-400">Companies Served</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
            <p className="text-gray-400">Industries</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">34%</div>
            <p className="text-gray-400">Reply Rate</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Outbound?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join companies that have already seen 34%+ reply rates with deterministic, scalable outbound infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Book Demo
            </a>
            <a
              href="/product"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
