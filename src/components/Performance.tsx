'use client';

export function Performance() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Performance That Scales
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built for enterprise scale with deterministic execution and 99.99% uptime.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">34%</div>
            <p className="text-gray-300">Reply Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
            <p className="text-gray-300">Uptime</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1s</div>
            <p className="text-gray-300">Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
            <p className="text-gray-300">Conversations/Month</p>
          </div>
        </div>

        {/* Performance Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
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

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Fault Tolerance</h3>
              <p className="text-gray-300">
                Built with redundancy and graceful degradation. Systems continue operating even under partial failures.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300">
                Complete visibility into system performance. Real-time metrics, alerts, and analytics dashboard.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                End-to-end encryption, access controls, and compliance with industry standards. SOC 2 Type II certified.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Custom Integrations</h3>
              <p className="text-gray-300">
                Seamless integration with your existing stack. APIs, webhooks, and custom connectors available.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Guarantee */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Enterprise Performance Guarantee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">99.99%</div>
              <p className="text-gray-300">Uptime SLA</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-gray-300">Support</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">30 Days</div>
              <p className="text-gray-300">Money Back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
