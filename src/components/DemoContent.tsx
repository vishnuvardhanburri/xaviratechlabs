'use client';

import { Calendar, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function DemoContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1
            className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Book Your <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Demo</span>
          </h1>

          <p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            See Xavira in action. Experience how our autonomous outbound infrastructure generates real conversations without manual intervention.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://cal.com/vishnuvardhanburri/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative py-24 px-8 lg:px-16 max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-white text-center mb-16"
        >
          What to Expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-cyan-500/20 rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Live System Walkthrough</h3>
                <p className="text-gray-300">See the autonomous outbound engine in action with real campaigns and results.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-cyan-500/20 rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Use Case Analysis</h3>
                <p className="text-gray-300">We'll analyze your specific outbound needs and show how Xavira can help.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-cyan-500/20 rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Q&A Session</h3>
                <p className="text-gray-300">Get answers to your questions about implementation, integration, and results.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 bg-cyan-500/20 rounded flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Implementation Roadmap</h3>
                <p className="text-gray-300">Receive a customized plan for deploying Xavira in your organization.</p>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-cyan-500/30"
          >
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">Calendar integration</p>
                  <p className="text-sm text-gray-400 mt-2">Book directly through Cal.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">30-minute personalized demo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">No technical setup required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">See real campaign results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-8 lg:px-16 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0b0b0f]">
        <div
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Outbound?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Join companies that have already seen 34%+ reply rates with deterministic, scalable outbound infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/vishnuvardhanburri/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Demo Now
            </a>
            <a
              href="mailto:xavira.group@gmail.com"
              className="px-8 py-4 border border-cyan-500/50 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
