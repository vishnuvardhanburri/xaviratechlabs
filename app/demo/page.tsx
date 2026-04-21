import { LandingFooter } from '@/components/LandingFooter';
import DemoContent from '@/components/DemoContent';

export const metadata = {
  title: 'Demo | Xavira',
  description: 'Book a personalized demo of Xavira\'s autonomous outbound infrastructure. See real results in action.',
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <DemoContent />
      <LandingFooter />
    </div>
  );
}
