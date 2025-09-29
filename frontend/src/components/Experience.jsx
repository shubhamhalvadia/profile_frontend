import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin, ArrowRight } from "lucide-react";

const Experience = ({ data }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'Full-time': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Academic': return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'Operations': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Internship': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <section id="experience" className="py-16 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Experience</span> Timeline
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative projects and impactful solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-teal-400 to-blue-400 opacity-60"></div>
          
          <div className="space-y-12">
            {data.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                
                {/* Content Card */}
                <div className="flex-1 lg:w-1/2 ml-16 lg:ml-0">
                  <Card className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-all duration-300 group">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-teal-300 font-semibold mt-1 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            {experience.company}
                          </div>
                        </div>
                        <Badge className={`${getTypeColor(experience.type)} shrink-0`}>
                          {experience.type}
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 text-slate-400 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 mb-6">
                        {experience.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start group/item">
                            <ArrowRight className="w-4 h-4 text-orange-400 mr-3 mt-0.5 shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                            <span className="text-slate-300 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="bg-slate-700/50 text-slate-300 border-slate-600/50 hover:bg-slate-600/50 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;