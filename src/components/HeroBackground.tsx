import React from 'react';
interface HeroBackgroundProps {
  videoUrl: string;
  fallbackImageUrl: string;
}

export function HeroBackground({ videoUrl, fallbackImageUrl }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-9999" overflow-hidden>
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-900 z-0" />
      
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={fallbackImageUrl}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback image */}
        <img
          src={fallbackImageUrl}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>
    </div>
  );
}
