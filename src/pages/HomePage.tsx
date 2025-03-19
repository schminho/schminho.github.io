import React from 'react';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';
import { Briefcase, Users, Lightbulb, Code2 } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Who I Am */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
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
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-purple-400" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Product & Project Management</h4>
                    <p className="text-gray-300">Leading digital products from vision to execution</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-purple-400" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Stakeholder Management</h4>
                    <p className="text-gray-300">Aligning cross-functional teams for strategic success</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-purple-400" size={24} />
                  <div>
                    <h4 className="font-semibold mb-2">Innovation & Problem-Solving</h4>
                    <p className="text-gray-300">Driving creative solutions in a fast-paced environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <Contact />
        </div>
      </section>
    </div>
  );
}
