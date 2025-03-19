import React from 'react';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';
import { Briefcase, Users, Lightbulb, Code2 } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="top">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="pt-16">
        <div className="min-h-[60vh] flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A techy business allrounder who is creative, highly dependable, and exceptionally organized
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Who I Am */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Who I Am</h2>
              <p className="text-gray-300 mb-4">
                {"I am a "}
                <strong>tech enthusiast</strong>
                {" and "}
                <strong>business allrounder</strong>
                {" with a strong sense of ownership. Specializing in requirements engineering and project management, I bring a strategic mindset combined with an "}
                <strong>eye for detail</strong>
                {" to ensure effective execution."}
              </p>
              <p className="text-gray-300">
                {"With a passion for "}
                <strong>technology and innovation</strong>
                {", I enjoy solving challenges, optimizing processes, and leading cross-functional teams to deliver meaningful products."}
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Product & Project Management</h3>
                    <p className="text-gray-300">Leading digital products from vision to execution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Stakeholder Management</h3>
                    <p className="text-gray-300">Aligning cross-functional teams for strategic success</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Innovation & Problem-Solving</h3>
                    <p className="text-gray-300">Driving creative solutions in a fast-paced environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Key Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Effective Communicator',
                'Requirements Engineer',
                'Tech-Savvy',
                'Product Vision',
                'Financial Acumen',
                'SaaS',
                'Strategic Thinker',
                'AEM Expert'
              ].map((skill) => (
                <div key={skill} className="text-center p-4 bg-gray-700/50 rounded-lg">
                  <span className="text-purple-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                'Python',
                'React',
                'Tailwind CSS',
                'JavaScript',
                'Render',
                'Git',
                'Flutter'
              ].map((tech) => (
                <div key={tech} className="text-center p-4 bg-gray-700/50 rounded-lg">
                  <span className="text-purple-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
