'use client';

export function CaseStudies() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how companies are transforming their outbound with Xavira's autonomous infrastructure.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">SaaS Company</div>
              <h3 className="text-xl font-bold text-white mb-2">34% Reply Rate Achievement</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Increased demo bookings by 280% while reducing manual outreach effort by 90%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">+280% Demos</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">34% Reply Rate</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">Enterprise Software</div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Scale Success</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Scaled from 1,000 to 10,000 monthly conversations while maintaining 32% reply rate.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">10x Scale</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">32% Reply Rate</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">Financial Services</div>
              <h3 className="text-xl font-bold text-white mb-2">Compliance & Performance</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Achieved 36% reply rate while maintaining 100% compliance with financial regulations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">36% Reply Rate</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">100% Compliant</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">Healthcare Tech</div>
              <h3 className="text-xl font-bold text-white mb-2">Targeted Outreach</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Generated 42% reply rate for specialized healthcare provider outreach campaigns.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">42% Reply Rate</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Specialized</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">E-commerce</div>
              <h3 className="text-xl font-bold text-white mb-2">B2B Partnership Growth</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Secured 150+ new B2B partnerships with 31% reply rate in first quarter.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">150+ Partners</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">31% Reply Rate</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="mb-4">
              <div className="text-sm text-cyan-400 font-semibold mb-2">Manufacturing</div>
              <h3 className="text-xl font-bold text-white mb-2">Industrial Sales Success</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Increased qualified leads by 340% with 29% reply rate for industrial equipment sales.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">+340% Leads</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">29% Reply Rate</span>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Across All Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">34%</div>
              <p className="text-gray-300">Average Reply Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">280%</div>
              <p className="text-gray-300">Avg. Increase in Demos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <p className="text-gray-300">Time Saved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">5x</div>
              <p className="text-gray-300">ROI in 6 Months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
