'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
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
      </div>
    </nav>
  );
}
