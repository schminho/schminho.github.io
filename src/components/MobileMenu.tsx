import React from 'react';
import { NavLink } from './NavLink';
import { LucideIcon } from 'lucide-react';

interface NavItem {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onNavigate?: () => void;
}

export function MobileMenu({ isOpen, navItems, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`
        md:hidden fixed top-[72px] left-0 right-0 bottom-0
        bg-gray-900/95 backdrop-blur-sm
        transition-all duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      <div className="container mx-auto px-6 py-8">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="group bg-gray-900/80 backdrop-blur-sm rounded-lg overflow-hidden
                       border border-purple-500/10 shadow-lg
                       transition-all duration-300 hover:bg-gray-900"
            >
              <NavLink
                {...item}
                onClick={onNavigate}
                className="flex items-center gap-3 text-xl text-gray-300 group-hover:text-purple-400 
                         transition-all p-4 w-full"
              />
            </div>
          ))}
        </nav>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </div>
  );
}