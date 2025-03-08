import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-xl font-bold">AN</h1>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-400 hover:text-white capitalize transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
        } overflow-hidden`}>
          <div className="flex flex-col space-y-4 px-4">
            {['about', 'experience', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-400 hover:text-white capitalize text-left py-2 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ananya Nagar</h1>
          <p className="text-xl md:text-2xl text-gray-400">Passionate Developer</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-24 space-y-32">
        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-bold mb-8 tracking-wider">About Me</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a dedicated software developer with a strong foundation in computer science
            and a passion for creating impactful solutions. Currently working at Atlassian,
            I bring both professional experience and technical expertise to every project.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Experience</h2>
          <div className="border border-gray-800 p-8 transition-all duration-300">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full text-left flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold">Atlassian</h3>
                <p className="text-gray-400 mb-2">Software Developer</p>
                <p className="text-gray-600">2 years + 2 months internship</p>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400 mt-1" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400 mt-1" />
              )}
            </button>
            
            <div className={`mt-6 space-y-4 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pl-4 border-l border-gray-800">
                <h4 className="text-gray-300 font-medium mb-2">Key Responsibilities:</h4>
                <ul className="text-gray-400 space-y-2">
                  <li>• Developed and maintained core features for Atlassian's flagship products</li>
                  <li>• Collaborated with cross-functional teams to deliver high-impact solutions</li>
                  <li>• Implemented performance optimizations resulting in improved user experience</li>
                  <li>• Participated in code reviews and mentored junior developers</li>
                </ul>
              </div>
              
              <div className="pl-4 border-l border-gray-800">
                <h4 className="text-gray-300 font-medium mb-2">Technologies:</h4>
                <p className="text-gray-400">React, TypeScript, Node.js, AWS, GraphQL</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Education</h2>
          <div className="border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">Mody University, Rajasthan</h3>
            <p className="text-gray-400">Bachelor's in Computer Science</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Projects</h2>
          <div className="border border-gray-800 p-8">
            <p className="text-gray-400 italic">Coming soon...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-2xl font-bold mb-12 tracking-wider">Let's Connect</h2>
          <div className="flex justify-center space-x-12">
            <a 
              href="https://www.linkedin.com/in/ananya-nagar-986070190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://medium.com/@ananyanagar32"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FileText className="w-8 h-8" />
            </a>
            <a 
              href="mailto:ananyanagar3322@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Ananya Nagar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;