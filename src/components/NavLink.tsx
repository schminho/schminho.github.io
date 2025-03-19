import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, icon: Icon, label, className = "flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors", onClick }: NavLinkProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    if (onClick) onClick();
  };

  return href.startsWith('#') || href.includes('/#') ? (
    <a href={href} onClick={handleClick} className={className}>
      <Icon size={20} />
      <span>{label}</span>
    </a>
  ) : (
    <a href={href} onClick={onClick} className={className}>
      <Icon size={20} />
      <span>{label}</span>
    </a>
  );
}
