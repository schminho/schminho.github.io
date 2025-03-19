import React from "react";
import { ChevronUp } from "lucide-react";

export function JumpToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed bottom-6 right-6 p-3 rounded-full inline-block hover:opacity-80 transition-opacity bg-gradient-to-r from-purple-900/50 to-purple-700/50
        hover:bg-purple-900 transition-all duration-300
        sm:hidden md:block
      "
      aria-label="Scroll to Top"
    >
      <ChevronUp className="text-gray-100" size={32} />
    </button>
  );
}