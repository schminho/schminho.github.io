import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';
import { Contact } from '../components/Contact';

export function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
            About Me
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tech enthusiast, problem solver, and lifelong learner
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate developer with a keen interest in creating elegant solutions
              to complex problems. My journey in tech started with simple HTML websites and
              has evolved into building full-stack applications.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Code2 className="text-purple-400" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Full Stack Development</h3>
                  <p className="text-gray-300">Building end-to-end solutions with modern technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="text-purple-400" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Problem Solving</h3>
                  <p className="text-gray-300">Tackling complex challenges with creative solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="text-purple-400" size={24} />
                <div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-300">Exploring new technologies and approaches</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript/TypeScript',
              'React',
              'Node.js',
              'Python',
              'SQL',
              'Git',
              'Docker',
              'AWS'
            ].map((skill) => (
              <div key={skill} className="text-center p-4 bg-gray-700/50 rounded-lg">
                <span className="text-purple-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}