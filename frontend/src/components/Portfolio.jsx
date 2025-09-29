import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { mockData } from "../data/mockData";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setPortfolioData(mockData);
    }, 500);
  }, []);

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Experience data={portfolioData.experience} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      <Footer />
    </div>
  );
};

export default Portfolio;