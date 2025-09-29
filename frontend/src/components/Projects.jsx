import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react";

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(data.map(project => project.category))];
  
  const filteredProjects = filter === 'All' 
    ? data 
    : data.filter(project => project.category === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Completed': return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'In Progress': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Healthcare Technology': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'Industrial Software': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Data Analytics': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Educational Technology': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <section id="projects" className="py-16 px-6 bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
            Portfolio Showcase
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions that showcase technical expertise and innovation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Filter className="w-5 h-5 text-slate-400 mr-3 mt-1" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'
              } transition-all duration-200`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-slate-800/80 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 hover:border-orange-500/30 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={getCategoryColor(project.category)}>
                      {project.category}
                    </Badge>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="px-6 pb-4">
                  <div className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start group/item">
                        <ArrowRight className="w-3 h-3 text-orange-400 mr-2 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform duration-200" />
                        <span className="text-slate-300 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                    {project.highlights.length > 3 && (
                      <p className="text-slate-500 text-sm italic">
                        +{project.highlights.length - 3} more features...
                      </p>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-slate-300 border-slate-600/50 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge 
                        variant="secondary" 
                        className="bg-slate-700/50 text-slate-400 border-slate-600/50 text-xs"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-orange-500/20 text-orange-300 border border-orange-500/30 hover:bg-orange-500 hover:text-white transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-orange-500/10 to-teal-500/10 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to see more projects?
              </h3>
              <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub for more projects, contributions, and open-source work. 
                Always building something new!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 font-semibold px-8"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Live Demos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;