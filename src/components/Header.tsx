import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, User, Mail, Menu, X } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { NavLink } from './NavLink';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const navItems = [
  { href: "#about", icon: User, label: "About" },
  { href: "#contact", icon: Mail, label: "Contact" }
];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('header')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <Code2 className="text-purple-400" size={24} />
            <span className="text-xl font-bold text-white">ptrsmd</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.label} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
            className="p-2 md:hidden text-gray-300 hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="transition-transform duration-200 rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-200 rotate-0" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} navItems={navItems} onNavigate={handleNavigate} />
    </header>
  );
}
