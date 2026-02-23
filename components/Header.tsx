'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Journey', href: '#journey' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex justify-between items-center py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Image
              src="/logo.png"
              alt="Propsoch"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Propsoch
            </p>
            <p className="text-xs text-slate-500 font-medium">Smart Home Buying</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-slate-700 font-medium hover:text-blue-600 transition-colors duration-300 relative group cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
          <button
            aria-label="Book free appointment"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`h-0.5 w-6 bg-slate-900 rounded transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-slate-900 rounded transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-slate-900 rounded transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-white backdrop-blur-md border-t border-slate-200 px-4 py-6 space-y-4">
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => {
                setIsOpen(false);
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full text-left block py-3 px-4 text-slate-700 font-medium hover:bg-blue-50 rounded-lg transition-all duration-300 hover:translate-x-1 transform"
              style={{
                animation: isOpen ? `slideInLeft 0.3s ease-out ${idx * 50}ms forwards` : 'none',
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            aria-label="Book free appointment"
            onClick={() => {
              setIsOpen(false);
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
