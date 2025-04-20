import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { ScrollArrow } from "./ScrollArrow";
import { SocialLink } from "./SocialLink";
import { HeroBackground } from "./HeroBackground";
import { heroConfig } from "../config/hero";

export function Hero() {
  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    {
      href: "https://github.com/schminho",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ptrsmd",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      icon: Mail,
      label: "Email",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        handleScrollTo("contact"); // 👈 make sure you have <section id="contact" />
      },
      href: "#contact", // still needed to show correct link styling / fallback
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <HeroBackground
        videoUrl={heroConfig.backgroundVideo}
        fallbackImageUrl={heroConfig.fallbackImage}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-gradient">
          {heroConfig.title}
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {heroConfig.subtitle}
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map(({ icon, label, href, onClick }) => (
            <SocialLink
              key={label}
              icon={icon}
              label={label}
              href={href}
              onClick={onClick}
            />
          ))}
        </div>

        <ScrollArrow targetId="about-me" />
      </div>
    </section>
  );
}
