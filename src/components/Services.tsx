'use client';

export default function Services() {
  return (
    <section className="relative py-24 px-8 lg:px-16 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm text-black mb-6">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            End-to-end services to transform your outbound operations and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Autonomous Outreach</h3>
            <p className="text-gray-300">
              Fully automated prospect research, personalized messaging, and conversation management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Integration Services</h3>
            <p className="text-gray-300">
              Seamless integration with your existing CRM, sales tools, and data systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
            <p className="text-gray-300">
              Real-time monitoring, detailed reporting, and actionable insights for optimization.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
            <p className="text-gray-300">
              Tailored solutions for unique business requirements and specialized use cases.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Training & Support</h3>
            <p className="text-gray-300">
              Comprehensive onboarding, ongoing training, and 24/7 enterprise support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-cyan-500/30">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Compliance & Security</h3>
            <p className="text-gray-300">
              Enterprise-grade security, data protection, and regulatory compliance management.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-cyan-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ready to Transform Your Outbound?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Xavira can help you achieve 34%+ reply rates and scale your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Book Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
