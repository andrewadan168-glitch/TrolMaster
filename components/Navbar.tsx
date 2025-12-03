import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Hydro-X', href: '#hydro-x' },
  { label: 'Aqua-X', href: '#aqua-x' },
  { label: 'ThinkGrow', href: '#thinkgrow' },
  { label: 'Aero-Fan', href: '#aero-fan' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <a href="#" className="text-2xl font-bold tracking-tighter text-tm-dark flex items-center gap-1">
            <div className="w-4 h-4 bg-tm-green rounded-full"></div>
            TrolMaster
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-tm-green transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600">
          <button className="hover:text-tm-dark transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-tm-dark transition-colors">
            <User size={20} />
          </button>
          <button className="hover:text-tm-dark transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-semibold text-gray-800 hover:text-tm-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex space-x-8 mt-8">
            <Search size={24} className="text-gray-600" />
            <User size={24} className="text-gray-600" />
            <ShoppingBag size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};
