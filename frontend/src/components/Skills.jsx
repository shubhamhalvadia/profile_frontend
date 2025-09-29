import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Code, Cloud, Database, Award, Star, CheckCircle } from "lucide-react";

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  const categoryIcons = {
    'Programming Languages': Code,
    'Frontend': Code,
    'Backend': Database,
    'Databases': Database,
    'Cloud & DevOps': Cloud,
    'Tools & Others': Star
  };

  const categories = Object.keys(data.technical);

  return (
    <section id="skills" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Certifications</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Categories */}
          <div className="lg:col-span-2">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => {
                const Icon = categoryIcons[category];
                return (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`${
                      activeCategory === category
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white'
                    } transition-all duration-200`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  {React.createElement(categoryIcons[activeCategory], { className: "w-5 h-5 text-orange-400 mr-3" })}
                  {activeCategory}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.technical[activeCategory].map((skill, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-lg bg-slate-700/50 border border-slate-600/30 hover:bg-slate-700 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-200">
                          {skill}
                        </span>
                        <CheckCircle className="w-4 h-4 text-teal-400 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Skills */}
            <Card className="mt-8 bg-gradient-to-br from-orange-500/10 to-teal-500/10 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Star className="w-5 h-5 text-orange-400 mr-3" />
                  Top Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.topSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 text-sm font-semibold"
                    >
                      <Star className="w-3 h-3 mr-2" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Award className="w-5 h-5 text-teal-400 mr-3" />
                  Certifications
                </h3>
                
                <div className="space-y-4">
                  {data.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300 group"
                    >
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-teal-400 mr-3 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-200 leading-relaxed">
                            {cert}
                          </p>
                          <Badge className="mt-2 bg-teal-500/20 text-teal-300 border-teal-500/30 text-xs">
                            Oracle Certified
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Skill Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Programming Languages</span>
                    <span className="text-blue-400 font-bold">{data.technical['Programming Languages'].length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Cloud Technologies</span>
                    <span className="text-teal-400 font-bold">{data.technical['Cloud & DevOps'].length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Total Certifications</span>
                    <span className="text-orange-400 font-bold">{data.certifications.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Years Experience</span>
                    <span className="text-purple-400 font-bold">2+</span>
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

export default Skills;