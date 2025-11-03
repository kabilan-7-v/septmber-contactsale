'use client';

import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  ArrowUpRight,
  Mail
} from 'lucide-react';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
};

const Footer: React.FC = () => {
  const footerLinks: Record<string, FooterSection> = {
    products: {
      title: 'Products',
      links: [
        { label: 'Claude API', href: '#' },
        { label: 'Claude for Work', href: '#' },
        { label: 'Claude Pro', href: '#' },
        { label: 'Mobile Apps', href: '#' },
        { label: 'Integrations', href: '#' },
      ]
    },
    developers: {
      title: 'Developers',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'SDKs & Libraries', href: '#' },
        { label: 'Changelog', href: '#' },
        { label: 'System Status', href: '#', external: true },
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Research Papers', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Guides & Tutorials', href: '#' },
        { label: 'Community Forum', href: '#' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press Kit', href: '#' },
        { label: 'Partners', href: '#' },
        { label: 'Contact Sales', href: '#' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Acceptable Use', href: '#' },
        { label: 'Data Processing', href: '#' },
      ]
    }
  };

  const socialLinks: SocialLink[] = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-light text-white mb-3">Stay updated</h3>
            <p className="text-zinc-400 mb-6">
              Get the latest updates on Claude's capabilities, research breakthroughs, and product announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/20 transition-all duration-200"
                />
              </div>
              <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-100 transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Anthropic</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6">
              Building AI systems that are safe, beneficial, and understandable.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-zinc-900/50 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-zinc-400 hover:text-white text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zinc-400">
              <span>© 2025 Anthropic. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy
                </a>
                <span className="text-zinc-600">·</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Terms
                </a>
                <span className="text-zinc-600">·</span>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Cookies
                </a>
              </div>
            </div>
            
            {/* Language/Region Selector */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-white border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>English (US)</span>
              </button>
              
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;