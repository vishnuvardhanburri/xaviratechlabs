'use client';

export function Pricing() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proof-First Investment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See results before full payment. Our autonomous outbound infrastructure delivers measurable ROI from day one.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold text-white mb-2">
                $14,000
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">Minimum 3-month commitment</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Up to 1,000 conversations/month</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Basic analytics dashboard</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Email support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                <span className="text-gray-500">Custom integrations</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Professional */}
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-300">For growing teams</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold text-white mb-2">
                $28,000
                <span className="text-lg text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">Minimum 6-month commitment</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Up to 5,000 conversations/month</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Advanced analytics & reporting</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Dedicated account manager</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400">For large organizations</p>
            </div>
            <div className="mb-8">
              <div className="text-4xl font-bold text-white mb-2">
                Custom
              </div>
              <p className="text-sm text-gray-400">Tailored to your needs</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Unlimited conversations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Custom analytics & BI</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">White-label options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">On-premise deployment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-gray-300">Custom SLA</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Calculate Your ROI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">34%</div>
              <p className="text-gray-300">Average reply rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5x</div>
              <p className="text-gray-300">ROI in first 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <p className="text-gray-300">Time saved on outreach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
