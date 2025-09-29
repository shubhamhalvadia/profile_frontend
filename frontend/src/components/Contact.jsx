import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Mail, Phone, Linkedin, MapPin, Calendar, Copy, ExternalLink, MessageCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = ({ data }) => {
  const { toast } = useToast();

  const handleCopyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard!",
        description: `${type} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the information manually.",
        variant: "destructive"
      });
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: data.phone,
      display: data.phone,
      href: `tel:${data.phone}`,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      display: data.email,
      href: `mailto:${data.email}`,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: `https://${data.linkedin}`,
      display: data.linkedin,
      href: `https://${data.linkedin}`,
      color: "text-teal-400",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20"
    },
    {
      icon: MapPin,
      label: "Location",
      value: data.location,
      display: data.location,
      href: null,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-4">
            Let's Connect
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities, collaborate on projects, or just have a great conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Status Card */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-teal-500/10 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Currently Available</h3>
                <p className="text-lg text-slate-300 font-medium mb-4">{data.availability}</p>
                <Badge className="bg-green-500 text-white px-4 py-2">
                  🟢 Open to Opportunities
                </Badge>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index} 
                    className={`${method.bgColor} ${method.borderColor} border backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 group`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg bg-slate-800/50 ${method.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm text-slate-400 font-medium">{method.label}</p>
                            <p className={`font-semibold ${method.color} text-lg`}>
                              {method.display}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleCopyToClipboard(method.value, method.label)}
                            className="text-slate-400 hover:text-white hover:bg-slate-700/50"
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          {method.href && (
                            <Button
                              size="sm"
                              variant="ghost"
                              asChild
                              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
                            >
                              <a href={method.href} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Column - CTA & Quick Actions */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Connect?</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-slate-300">
                    <MessageCircle className="w-5 h-5 text-orange-400 mr-3" />
                    <span>Available for immediate discussion</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Calendar className="w-5 h-5 text-teal-400 mr-3" />
                    <span>Flexible scheduling across time zones</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <ExternalLink className="w-5 h-5 text-blue-400 mr-3" />
                    <span>Quick response within 24 hours</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                    asChild
                  >
                    <a href={`mailto:${data.email}?subject=Opportunity Discussion&body=Hi Shubham,%0A%0AI'd like to discuss potential opportunities with you.%0A%0ABest regards`}>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 font-semibold"
                    asChild
                  >
                    <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold"
                    asChild
                  >
                    <a href={`tel:${data.phone}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Card */}
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">What to Expect</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Detailed project discussions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Portfolio and code reviews</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">Collaborative opportunities</span>
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

export default Contact;