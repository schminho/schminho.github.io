import React from "react";
import { EmailForm } from "./EmailForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-purple-400 to-pink-500 text-white"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-purple-900 text-transparent bg-clip-text">
            Let's Connect
          </span>
        </h2>
        <p className="text-gray-100 mb-6 max-w-xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        {/* Inject the Email Form here */}
        <EmailForm />
      </div>
    </section>
  );
}
