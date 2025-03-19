import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';

export function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Intro Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Exploring the intersection of technology and business
          </p>
        </div>
      </section>

      {/* Project Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Score Converter
                  </h2>
                </div>
                <p className="text-gray-300 mb-8">
                  Convert between different psychological test scores with an interactive visualization. 
                  Features a dynamic bell curve and real-time score calculations.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['React', 'TypeScript', 'Canvas API', 'Statistics'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700/50 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/projects/convert"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full 
                           hover:bg-purple-700 transition-colors w-fit group"
                >
                  <span>Try it out</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                  alt="Score Converter Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
