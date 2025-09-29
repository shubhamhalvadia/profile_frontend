import React from "react";
import { Heart, Code, Coffee, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Branding */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-orange-400">S</span>hubham <span className="text-teal-400">H</span>alvadia
            </div>
            <p className="text-slate-400 leading-relaxed">
              Full-Stack Software Engineer passionate about building scalable, 
              innovative solutions that make a difference.
            </p>
            <div className="flex items-center text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 mx-2" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400 mx-2" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-orange-400 mx-2" />
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
                { label: "Resume", href: "#resume" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Status & Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Current Status</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-slate-300 text-sm">Available for opportunities</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-slate-300 text-sm">Building at Talyroo</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-teal-400 rounded-full mr-3"></div>
                <span className="text-slate-300 text-sm">M.S. Computer Science</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Tech Stack */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {currentYear} Shubham Halvadia. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Built with React, FastAPI & MongoDB</span>
              <span>•</span>
              <span>Deployed on Cloud Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;