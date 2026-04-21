"use client";
"use client";
import { useState } from 'react';
import { motion } from './motion-mock';
import { 
  Code, Cpu, Cloud, Shield, Palette, Briefcase, 
  CheckCircle, Lock, Zap, Users, TrendingUp, Star,
  ArrowRight, ExternalLink
} from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export function Services({ setCurrentPage }: ServicesProps) {
  const isMobile = useIsMobile();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const mainServices = [
    {
      id: 'fullstack',
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Apps',
      description: 'Enterprise-grade web and mobile applications built with cutting-edge technology',
      isHighlighted: false,
    },
    {
      id: 'ai',
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Intelligent systems and machine learning solutions that transform operations',
      isHighlighted: false,
    },
    {
      id: 'cloud',
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Scalable infrastructure and continuous deployment pipelines for modern teams',
      isHighlighted: false,
    },
    {
      id: 'security',
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and compliance management',
      isHighlighted: false,
    },
    {
      id: 'design',
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design systems and beautiful interfaces that drive engagement',
      isHighlighted: false,
    },
    {
      id: 'paas',
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Product-as-a-Service',
      description: 'End-to-end product development and lifecycle management solutions',
      isHighlighted: true,
    },
  ];

  const whyUs = [
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Clean Code' },
    { icon: <Lock className="w-6 h-6" />, title: 'Security First' },
    { icon: <Zap className="w-6 h-6" />, title: 'Scalable' },
    { icon: <Users className="w-6 h-6" />, title: 'Transparent' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Fast Delivery' },
    { icon: <Star className="w-6 h-6" />, title: 'Lifetime Support' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Financial Technology',
      description: 'Real-time analytics platform serving 100K+ users',
      metrics: '300% faster processing',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Retail & Commerce',
      description: 'AI-powered shopping experience with personalization',
      metrics: '$5M+ GMV in Year 1',
    },
    {
      id: 3,
      title: 'Healthcare Portal',
      category: 'Healthcare & Wellness',
      description: 'HIPAA-compliant patient management system',
      metrics: '50K+ patients managed',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 px-4 md:px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
        >
          <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm text-black mb-6">
            GLOBAL TECHNOLOGY SOLUTIONS
          </span>
          <h1 className="mb-4 text-gray-900">
            Enterprise Services That Scale
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Powering innovation for Fortune 500 companies and ambitious startups worldwide
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className={`
                relative p-8 rounded-2xl border-2 transition-all duration-300
                ${service.isHighlighted 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white border-gray-300 hover:border-black hover:shadow-lg'
                }
                ${hoveredService === service.id && !service.isHighlighted ? 'transform -translate-y-2' : ''}
              `}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${service.isHighlighted ? 'bg-white/20' : 'bg-gray-100'}`}>
                <div className={service.isHighlighted ? 'text-white' : 'text-black'}>{service.icon}</div>
              </div>
              
              <h3 className={`mb-3 ${service.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                {service.title}
              </h3>
              
              <p className={`text-sm ${service.isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
                {service.description}
              </p>

              {service.isHighlighted && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  <Star className="w-3 h-3" />
                  Premium Service
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why Us Section */}
        <motion.div
          className="mb-20"
        >
          <h2 className="text-center mb-12 text-gray-900">Why Choose Xavira</h2>
          
          {/* Desktop: Horizontal Scroll */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-300 hover:border-black transition-all hover:shadow-lg min-w-[180px]"
                >
                  <div className="text-black">{item.icon}</div>
                  <p className="text-gray-900">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Grid */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-300"
              >
                <div className="text-black">{item.icon}</div>
                <p className="text-sm text-gray-900 text-center">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Work */}
        <motion.div
        >
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">Featured Work</h2>
            <p className="text-gray-600">Case studies from our global portfolio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-white rounded-2xl border-2 border-gray-300 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Device Mockup (CSS Only) */}
                <div className="relative h-48 bg-gray-50 p-4">
                  {/* Browser/Device Frame */}
                  <div className="h-full border-2 border-gray-300 rounded-lg bg-white shadow-lg">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-1.5 p-2 border-b border-gray-200 bg-gray-50">
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                      <div className="w-2 h-2 rounded-full bg-gray-400" />
                    </div>
                    {/* Screen Content */}
                    <div className="p-3 space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4" />
                      <div className="h-2 bg-gray-200 rounded w-full" />
                      <div className="h-2 bg-gray-200 rounded w-5/6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-black uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-gray-900 mt-2 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black">{project.metrics}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/95 flex items-center justify-center"
                >
                  <button className="px-6 py-3 bg-white text-black rounded-lg flex items-center gap-2 hover:shadow-xl transition-all">
                    View Case Study
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black p-12 md:p-16 text-center">
            <div className="relative z-10">
              <h2 className="mb-4 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join 500+ companies worldwide who trust Xavira to deliver exceptional technology solutions
              </p>
              <button 
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-lg">Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
