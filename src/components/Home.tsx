"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, TrendingUp, Users, Award, X, ArrowRight,
  Building2, Target, Zap, Shield, Code, Palette, Globe, Cpu
} from 'lucide-react';
import { TechCanvas } from './TechCanvas';
import { useIsMobile } from '../hooks/useIsMobile';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export function Home({ setCurrentPage }: HomeProps) {
  const isMobile = useIsMobile();
  const [showIntro, setShowIntro] = useState(false);

  // Mobile Hero Section
  const MobileHero = () => (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-20 pb-12">
      <div className="absolute inset-0 bg-white" />
      
      <div className="relative z-10 text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h1 className="text-4xl tracking-[0.2em] text-black mb-2">
              XAVIRA
            </h1>
            <span className="text-2xl text-gray-800 tracking-wider">TECH LABS</span>
            <p className="text-xs text-gray-600 tracking-[0.15em] mt-2">A DIVISION OF XAVIRA GROUP</p>
          </div>

          <h2 className="text-xl text-gray-800 mb-4">
            Redefining Tech & Design Excellence
          </h2>
          <p className="text-gray-600 mb-8">
            From AI-driven solutions to visionary design, we scale the impossible.
          </p>

          <button
            onClick={() => setShowIntro(true)}
            className="px-6 py-3 bg-black rounded-lg text-white flex items-center gap-2 mx-auto hover:bg-gray-800 transition-all"
          >
            Explore More <Sparkles className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );

  // Desktop Hero Section
  const DesktopHero = () => (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 opacity-10">
          <TechCanvas />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm text-black mb-8">
              ⚡ GLOBAL TECHNOLOGY LEADER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <span className="block text-gray-900">Powering the Future of</span>
            <span className="block text-black">
              Technology & Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-lg mb-8 leading-relaxed"
          >
            We deliver enterprise-grade AI solutions, cutting-edge development, and transformative design to Fortune 500 companies and ambitious startups worldwide. Experience innovation that drives measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => setShowIntro(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-black rounded-xl text-white hover:bg-gray-800 transition-all"
            >
              <span className="text-lg">Discover Our Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => {
                setCurrentPage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 hover:border-black transition-all"
            >
              View Portfolio
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-8"
          >
            <div>
              <p className="text-3xl text-black mb-1">500+</p>
              <p className="text-sm text-gray-600">Global Clients</p>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <p className="text-3xl text-black mb-1">50+</p>
              <p className="text-sm text-gray-600">Countries Served</p>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <p className="text-3xl text-black mb-1">98%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual - Enhanced Xavira Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Main Xavira Brand Box */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gray-200 rounded-3xl blur-2xl opacity-40 animate-pulse" />
              
              {/* Main Card */}
              <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-gray-300 shadow-2xl overflow-hidden">
                {/* Top Section - Brand */}
                <div className="p-8 bg-black text-center">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <h2 className="text-5xl tracking-[0.3em] text-white mb-2">XAVIRA</h2>
                    <p className="text-xl text-white/90 tracking-wider">TECH LABS</p>
                    <div className="mt-3 w-16 h-1 bg-white/50 mx-auto rounded-full" />
                  </motion.div>
                </div>

                {/* Middle Section - Stats Grid */}
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Code className="w-6 h-6 text-black mb-2" />
                      <p className="text-xs text-gray-600">Development</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Cpu className="w-6 h-6 text-black mb-2" />
                      <p className="text-xs text-gray-600">AI Solutions</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Palette className="w-6 h-6 text-black mb-2" />
                      <p className="text-xs text-gray-600">Design</p>
                    </div>
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <Globe className="w-6 h-6 text-black mb-2" />
                      <p className="text-xs text-gray-600">Global Reach</p>
                    </div>
                  </div>

                  {/* Innovation Badge */}
                  <div className="col-span-2 p-5 rounded-xl bg-gray-100 border border-gray-300 text-center">
                    <Sparkles className="w-7 h-7 text-black mx-auto mb-2" />
                    <p className="text-base font-semibold text-gray-900">Innovation Certified</p>
                    <p className="text-xs text-gray-600 mt-1">Since 2025</p>
                  </div>
                </div>

                {/* Bottom Section - Tagline */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-700 italic">
                    "Where Vision Meets Technology"
                  </p>
                  <div className="mt-3 flex justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <div className="w-2 h-2 rounded-full bg-gray-500" />
                    <div className="w-2 h-2 rounded-full bg-black" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-black rounded-2xl shadow-xl flex items-center justify-center"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="relative min-h-screen">
      {/* Conditional Hero Section */}
      {isMobile ? <MobileHero /> : <DesktopHero />}

      {/* Info Modal with Tabs */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowIntro(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl my-8 backdrop-blur-2xl bg-white/95 rounded-3xl border border-gray-300 shadow-2xl p-6 md:p-10"
            >
              <button
                onClick={() => setShowIntro(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </button>

              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full grid grid-cols-3 gap-2 md:gap-4 bg-transparent mb-8">
                  <TabsTrigger
                    value="about"
                    className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 data-[state=active]:bg-black data-[state=active]:border-black text-gray-700 data-[state=active]:text-white transition-all"
                  >
                    <Building2 className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
                    <span className="hidden md:inline">About Xavira</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="services"
                    className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 data-[state=active]:bg-black data-[state=active]:border-black text-gray-700 data-[state=active]:text-white transition-all"
                  >
                    <Zap className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
                    <span className="hidden md:inline">Our Services</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="divisions"
                    className="px-4 py-3 rounded-xl bg-gray-100 border border-gray-300 data-[state=active]:bg-black data-[state=active]:border-black text-gray-700 data-[state=active]:text-white transition-all"
                  >
                    <Users className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
                    <span className="hidden md:inline">Divisions</span>
                  </TabsTrigger>
                </TabsList>

                {/* About Tab */}
                <TabsContent value="about" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-black">About Xavira Group: Tech Labs</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Xavira Group: Tech Labs is a visionary technology and design powerhouse founded by <span className="text-black">Vishnu Vardhan Burri</span> in 2025. We are a global innovation company specializing in cutting-edge technology solutions that transform businesses and industries.
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      As part of the Xavira Group ecosystem, we combine deep technical expertise with creative excellence to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <Target className="w-8 h-8 text-black mb-3" />
                      <h3 className="text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-sm text-gray-700">
                        To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <Sparkles className="w-8 h-8 text-black mb-3" />
                      <h3 className="text-gray-900 mb-2">Our Vision</h3>
                      <p className="text-sm text-gray-700">
                        To be the global leader in technology innovation, shaping the future through AI, blockchain, and immersive experiences.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-100 border border-gray-300">
                    <h3 className="text-gray-900 mb-3">Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-black mb-1">Innovation</p>
                        <p className="text-sm text-gray-700">Pushing boundaries with cutting-edge solutions</p>
                      </div>
                      <div>
                        <p className="text-black mb-1">Excellence</p>
                        <p className="text-sm text-gray-700">Delivering exceptional quality in everything we do</p>
                      </div>
                      <div>
                        <p className="text-black mb-1">Integrity</p>
                        <p className="text-sm text-gray-700">Building trust through transparency and ethics</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Services Tab */}
                <TabsContent value="services" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-black">Comprehensive Technology Solutions</h2>
                    <p className="text-gray-700 mb-6">
                      We offer a full spectrum of technology and design services to help your business thrive in the digital economy.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Code className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Web & App Development</h3>
                          <p className="text-sm text-gray-600">Full-stack development, mobile apps, PWAs, e-commerce platforms</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Cpu className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">AI & Automation</h3>
                          <p className="text-sm text-gray-600">Machine learning, NLP, computer vision, predictive analytics</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Palette className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Design & Branding</h3>
                          <p className="text-sm text-gray-600">UI/UX design, brand identity, visual systems, AR interfaces</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Shield className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Cybersecurity</h3>
                          <p className="text-sm text-gray-600">Threat detection, penetration testing, compliance, data protection</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <Globe className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Digital Marketing</h3>
                          <p className="text-sm text-gray-600">SEO, PPC, social media, content marketing, analytics</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-gray-50 border border-gray-300 hover:border-black transition-colors">
                      <div className="flex items-start gap-3 mb-3">
                        <TrendingUp className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-gray-900 mb-1">Business Consulting</h3>
                          <p className="text-sm text-gray-600">Digital transformation, strategy, process optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowIntro(false);
                      setCurrentPage('services');
                    }}
                    className="w-full px-6 py-3 bg-black rounded-lg text-white hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                  >
                    View All Services <ArrowRight className="w-5 h-5" />
                  </button>
                </TabsContent>

                {/* Divisions Tab */}
                <TabsContent value="divisions" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-black">Our Specialized Divisions</h2>
                    <p className="text-gray-700 mb-6">
                      Each division is staffed with expert teams dedicated to excellence in their domain.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="w-8 h-8 text-black" />
                        <h3 className="text-gray-900">Technology Division</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Full-stack developers, AI/ML engineers, mobile developers, and backend specialists building scalable solutions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Engineering</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">AI Research</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Development</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-8 h-8 text-black" />
                        <h3 className="text-gray-900">Cybersecurity Division</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Security analysts, penetration testers, and compliance experts protecting enterprise systems.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Security Ops</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Pen Testing</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Compliance</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Palette className="w-8 h-8 text-black" />
                        <h3 className="text-gray-900">Creative Design Division</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        UI/UX designers, brand specialists, and creative directors crafting beautiful experiences.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">UI/UX</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Branding</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Visual Design</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="w-8 h-8 text-black" />
                        <h3 className="text-gray-900">Infrastructure Division</h3>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        DevOps engineers, cloud architects, and system administrators ensuring reliability and scale.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">Cloud</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">DevOps</span>
                        <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-black">SysAdmin</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
