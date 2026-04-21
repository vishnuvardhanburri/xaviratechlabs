'use client';

export default function TrustEngineering() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Built on Systems Engineering Principles
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The same reliability mindset that powers critical infrastructure now drives your outbound success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Reliability First</h3>
              <p className="text-gray-300">
                99.99% uptime SLA with fault-tolerant architecture. Built to handle enterprise-scale operations without interruption.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Deterministic Execution</h3>
              <p className="text-gray-300">
                Every action is predictable and measurable. No random behavior, no black boxes. Complete visibility into system operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Horizontal Scaling</h3>
              <p className="text-gray-300">
                Handle 10x growth without architectural changes. Built to scale from startup to enterprise requirements.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Observable Systems</h3>
              <p className="text-gray-300">
                Real-time monitoring and alerting. Complete visibility into conversation metrics and system performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Security by Design</h3>
              <p className="text-gray-300">
                Enterprise-grade security with data encryption, access controls, and compliance with industry standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Integration Ready</h3>
              <p className="text-gray-300">
                Seamless integration with your existing stack. APIs, webhooks, and custom integrations supported.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-gray-400">Systems Audited</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
              <p className="text-gray-400">Average Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">34%</div>
              <p className="text-gray-400">Reply Rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
