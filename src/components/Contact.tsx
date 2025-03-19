import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-10 bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-purple-900 text-transparent bg-clip-text">
            Let's Connect
          </span>
        </h2>
        <p className="text-gray-100 mb-8 max-w-xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <a href="mailto:peter@geiselnehmer.de"
           className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
          <Mail size={20} />
          <span>Get in Touch</span>
        </a>
      </div>
    </section>
  );
}
