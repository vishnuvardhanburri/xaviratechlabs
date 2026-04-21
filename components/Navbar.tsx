'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/product', label: 'Product' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/demo', label: 'Demo' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0b0b0f]/80 to-[#0b0b0f]/0 backdrop-blur-md border-b border-cyan-500/10">
      <div className="px-8 lg:px-16 max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110">
            <span className="text-white font-bold">X</span>
          </div>
          <span className="text-white hidden sm:inline">Xavira</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(link.href) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300" />
              )}
            </Link>
          ))}
          <a
            href="https://cal.com/vishnuvardhanburri/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 text-sm font-medium"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-cyan-400" />
          ) : (
            <Menu className="w-6 h-6 text-cyan-400" />
          )}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-gradient-to-b from-[#0b0b0f] to-[#1a1a2e] border-b border-cyan-500/20 p-8 flex flex-col gap-4 lg:hidden animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/vishnuvardhanburri/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center text-sm inline-block"
            >
              Book Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
