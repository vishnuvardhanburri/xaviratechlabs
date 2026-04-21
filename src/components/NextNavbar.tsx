'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NextNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0b0b0f]/80 to-[#0b0b0f]/0 backdrop-blur-md border-b border-cyan-500/10">
      <div className="px-8 lg:px-16 max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Xavira
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/product"
            className={`text-sm font-medium transition-colors ${
              pathname === '/product' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors ${
              pathname === '/pricing' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/demo"
            className={`text-sm font-medium transition-colors ${
              pathname === '/demo' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            Demo
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              pathname === '/about' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
            }`}
          >
            About
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/demo"
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Book Demo
        </Link>
      </div>
    </nav>
  );
}
