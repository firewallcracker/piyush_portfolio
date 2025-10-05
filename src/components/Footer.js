import React from 'react';
import { Link } from 'react-router-dom';
import config from '../data/config.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: config.contact.github, icon: '🔗' },
    { name: 'LinkedIn', url: config.contact.linkedin, icon: '💼' },
    { name: 'Email', url: `mailto:${config.contact.email}`, icon: '📧' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">{config.name}</h3>
            <p className="text-gray-300 mb-4">{config.title}</p>
            <p className="text-gray-400 text-sm">{config.bio}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>© {currentYear} {config.name}. All rights reserved.</p>
            <p className="mt-1">Created with ❤️ by Piyush Kumar | Built with React & TailwindCSS</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>Last updated: December 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;