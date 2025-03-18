import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollArrowProps {
  targetId: string;
}

export function ScrollArrow({ targetId }: ScrollArrowProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="inline-block hover:opacity-80 transition-opacity"
    >
      <ChevronDown className="text-purple-400 animate-float" size={32} />
    </a>
  );
}