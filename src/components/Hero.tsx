import React from "react";
import { Download, Mail, Linkedin, Github, Globe } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-white via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#0e0e0e] dark:to-[#111827] text-center transition-colors duration-300 font-[Sora]"
    >
      {/* Profile Image */}
      <img
        src="/assets/profile-hero.png"
        alt="Venkatesh Tantravahi"
        className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-6"
      />

      {/* Typewriter Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
        <span className="text-purple-500">I'm </span>
        <span className="text-blue-500">
          <Typewriter
            words={["a Data Scientist & Analyst."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </span>
      </h1>

      {/* About Text */}
      <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-8 px-4">
        I’m a tech enthusiast who built scalable systems long before autocomplete knew what we were
        typing. From cloud-native microservices to full-stack pipelines, I’ve worked across domains
        that make sense of data and deliver results. When I’m not solving data puzzles, you’ll find
        me crafting recipes or smashing shuttlecocks on the court.
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <a
          href="https://linkedin.com/in/venkateshtantravahi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/venkateshtantravahi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black dark:hover:text-white transition"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a
          href="https://vtantravahi.medium.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition"
          aria-label="Blog"
        >
          <Globe size={24} />
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/VenkateshTantravahi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2 hover:opacity-90 transition"
        >
          <Download size={18} />
          Download CV
        </a>

        <a
          href="#contact"
          className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          <Mail size={18} />
          Let’s Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
