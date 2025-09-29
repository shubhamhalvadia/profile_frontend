import React from "react";
import { MapPin, Mail, Phone, Linkedin, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-500 text-white hover:bg-orange-600 text-sm px-4 py-1">
                🚀 Actively Seeking Full-Time Opportunities 2025
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-orange-400">Shubham</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Halvadia
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-slate-300 font-medium">
                Full-Stack Software Engineer & Cloud DevOps Specialist
              </h2>
              
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                M.S. Computer Science @ Indiana University Bloomington | 2+ years building scalable, 
                cloud-native applications | Passionate about delivering reliable, user-centered solutions
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Greater Chicago Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>2096307736</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>shubhamhalvadia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-orange-400" />
                <span>linkedin.com/in/shubhamhalvadia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 font-semibold px-8 py-3"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">2+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">3</div>
                <div className="text-sm text-slate-400">Oracle Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-slate-400">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                    SH
                  </div>
                </div>
                
                <div className="space-y-3 text-center">
                  <h3 className="text-xl font-semibold text-white">Current Focus</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      FastAPI & React Development
                    </Badge>
                    <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                      HIPAA-Compliant EHR Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                      Cloud Infrastructure & DevOps
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-teal-500/10 rounded-2xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;