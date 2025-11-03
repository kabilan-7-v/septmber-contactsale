'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavSubItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdown?: NavSubItem[];
};

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const navItems: NavItem[] = [
    {
      label: 'Products',
      dropdown: [
        { label: 'Claude API', href: '#' },
        { label: 'Claude for Work', href: '#' },
        { label: 'Claude Pro', href: '#' },
        { label: 'Claude for Mobile', href: '#' },
      ]
    },
    {
      label: 'Solutions',
      dropdown: [
        { label: 'Customer Support', href: '#' },
        { label: 'Content Generation', href: '#' },
        { label: 'Code Development', href: '#' },
        { label: 'Data Analysis', href: '#' },
        { label: 'Research', href: '#' },
      ]
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Support Center', href: '#' },
      ]
    },
    {
      label: 'Company',
      dropdown: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Partners', href: '#' },
        { label: 'Contact', href: '#' },
      ]
    },
    {
      label: 'Pricing',
      href: '#'
    }
  ];
  //dl

  const handleDropdownToggle = (index: number): void => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-black/95 backdrop-blur-lg border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Anthropic</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-200 flex items-center space-x-1 group"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden shadow-2xl shadow-black/50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all duration-150"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-zinc-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full px-3 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-150 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === index && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/30 rounded-lg transition-all duration-150"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-150"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-zinc-800 space-y-2">
              <button className="w-full px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-150">
                Sign In
              </button>
              <button className="w-full px-4 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;