import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { CaseStudies } from '@/components/CaseStudies';
import { LandingFooter } from '@/components/LandingFooter';

export const metadata = {
  title: 'Pricing | Xavira',
  description: 'Proof-first investment model. See results before full payment.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0b0f] via-[#1a1a2e] to-[#0b0b0f] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center py-32">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Investment That <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Scales</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Proof-first model. Start with $7K. See real results. Then scale. Risk is on us.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* Testimonials */}
      <Testimonials />

      {/* Case Studies */}
      <CaseStudies />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
