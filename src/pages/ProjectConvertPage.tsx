import React from 'react';
import { ScoreConverter } from '../components/convert/ScoreConverter';

export function ProjectConvertPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
            Score Converter
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Convert between different psychological test scores with an interactive visualization
          </p>
        </div>
      </section>

      {/* Converter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScoreConverter />
        </div>
      </section>
    </div>
  );
}