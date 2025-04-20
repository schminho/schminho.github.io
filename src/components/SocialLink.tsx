import React from "react";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function SocialLink({
  href,
  icon: Icon,
  label,
  onClick,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative"
    >
      <div
        className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full 
                    transform transition-all duration-300 ease-out
                    hover:scale-110 hover:bg-gray-700/50
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
      >
        <Icon
          className="w-6 h-6 text-purple-400 transition-colors duration-300
                     group-hover:text-purple-300"
        />
      </div>

      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1
                     text-sm text-gray-300 bg-gray-800 rounded-md opacity-0
                     transform transition-all duration-300 scale-95
                     group-hover:opacity-100 group-hover:scale-100
                     whitespace-nowrap"
      >
        {label}
      </span>
    </a>
  );
}
