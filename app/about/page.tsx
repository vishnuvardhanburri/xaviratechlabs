import TrustEngineering from '@/components/TrustEngineering';
import { Testimonials } from '@/components/Testimonials';
import LandingFooter from '@/components/LandingFooter';
import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: 'About | Xavira',
  description: 'Built by engineers from VishnuLabs. Autonomous outbound infrastructure built on systems reliability principles.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <AboutContent />
      <TrustEngineering />
      <Testimonials />
      <LandingFooter />
    </div>
  );
}
