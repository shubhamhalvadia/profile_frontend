import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, MapPin } from "lucide-react";

const About = ({ data }) => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Passionate About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Innovation</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building scalable, cloud-native solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Summary */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 text-orange-400 mr-3" />
                  Professional Journey
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {data.summary}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <MapPin className="w-5 h-5 text-teal-400 mr-3" />
                    <span className="font-medium">Current Location:</span>
                    <span className="ml-2">{data.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Strengths */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-teal-500/10 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Core Strengths</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Full-Stack Development",
                    "Cloud Architecture", 
                    "DevOps & CI/CD",
                    "Microservices Design",
                    "Healthcare Systems",
                    "Team Leadership"
                  ].map((strength, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-teal-400 mr-3" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  {data.education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-teal-400/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-400 rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <p className="text-teal-300 font-medium">{edu.school}</p>
                        <div className="text-slate-400 text-sm mt-1">
                          <span>{edu.period}</span>
                          {edu.status && (
                            <Badge className="ml-2 bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                              {edu.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Students Taught</span>
                    <span className="text-blue-400 font-bold">200+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Years of Experience</span>
                    <span className="text-teal-400 font-bold">2+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Oracle Certifications</span>
                    <span className="text-orange-400 font-bold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">GitHub Projects</span>
                    <span className="text-purple-400 font-bold">15+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;