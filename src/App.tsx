import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wider">About Me</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a dedicated software developer with a strong foundation in computer science
            and a passion for creating impactful solutions. Currently working at Atlassian,
            I bring both professional experience and technical expertise to every project.
          </p>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Experience</h2>
          <div className="border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">Atlassian</h3>
            <p className="text-gray-400 mb-2">Software Developer</p>
            <p className="text-gray-600">2 years + 2 months internship</p>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Education</h2>
          <div className="border border-gray-800 p-8">
            <h3 className="text-xl font-semibold">Mody University, Rajasthan</h3>
            <p className="text-gray-400">Bachelor's in Computer Science</p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8 tracking-wider">Projects</h2>
          <div className="border border-gray-800 p-8">
            <p className="text-gray-400 italic">Coming soon...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
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