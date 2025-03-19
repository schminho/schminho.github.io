import React from 'react';
import { Hero } from '../components/Hero';
import { Contact } from '../components/Contact';
import { ScrollArrow } from '../components/ScrollArrow';
import { JumpToTop } from '../components/JumpToTop';
import { Briefcase, Users, Lightbulb, Code2, Workflow, LineChart, MessageCircle, FileText, Monitor, Target, BarChart3, Globe, BookOpen } from 'lucide-react';

const competencies = [
  { icon: MessageCircle, label: "Effective Communicator" },
  { icon: FileText, label: "Requirements Engineer" },
  { icon: Code2, label: "Tech-Savvy" },
  { icon: Target, label: "Product Vision" },
  { icon: BarChart3, label: "Financial Acumen" },
  { icon: Globe, label: "SaaS" },
  { icon: Lightbulb, label: "Strategic Thinker" },
  { icon: BookOpen, label: "AEM Expert" },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section className="pt-16">
        <div className="min-h-[60vh] flex items-center justify-center relative">
          <div className="container mx-auto px-6 text-center">
            <h1 id="about-me" className="scroll-mt-20 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
              About Me
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A techy business allrounder who is creative, highly dependable, and exceptionally organized
            </p>
            <ScrollArrow targetId="expertise" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Who I Am */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-100">Who I Am</h2>
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
              <h2 className="text-2xl font-semibold mb-6 text-gray-100">What I Do</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <LineChart className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Product & Project Management</h3>
                    <p className="text-gray-300">Leading digital products from vision to execution, ensuring strategic alignment and seamless delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Consulting & Requirements Engineering</h3>
                    <p className="text-gray-300">Bridging the gap between business and development - translating ideas into actionable solutions and ensuring clear communication across teams.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2 text-gray-100">Innovation & Problem-Solving</h3>
                    <p className="text-gray-300">Driving creative solutions with a structured approach - optimizing processes, solving complex challenges, and leveraging technology for efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <section className="py-32">
            <div className="container mx-auto px-6 text-center">
              <h1 id="expertise" className="scroll-mt-20 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
                Expertise
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Leveraging technology and strategy to deliver impactful solutions.
              </p>
              
              {/* Scroll Down Component */}
              <ScrollArrow targetId="contact" />
            </div>
          </section>

          {/* Key Competencies - Card Layout */}
          <div className="py-16 bg-gray-900 mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-100">Key Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {competencies.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="
                    p-6 rounded-lg text-gray-100 text-center flex flex-col items-center
                    bg-gradient-to-r from-purple-900 to-purple-700 transition-all duration-300 ease-in-out
                    hover:invert hover:scale-105
                  "
                >
                  {/* Icon - Now changes instantly with everything else */}
                  <Icon className="mb-3 transition-all duration-300 ease-in-out" size={32} />

                  {/* Label - Text now changes instantly with the background */}
                  <span className="transition-all duration-300 ease-in-out">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center text-gray-100">Tech Stack</h2>
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
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <JumpToTop /> {/* Always visible at bottom-right */}
    </div>
  );
}
