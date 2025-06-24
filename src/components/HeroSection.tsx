
import { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowDown, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection = ({ darkMode }: HeroSectionProps) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Web Development Intern | Python Developer | Problem Solver';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // This would typically trigger a download of the actual resume
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Avatar/3D Element */}
        <div className="mb-8 animate-float">
          <div className={`w-32 h-32 rounded-full mx-auto mb-6 ${
            darkMode ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 'bg-gradient-to-br from-white/30 to-white/20'
          } backdrop-blur-md border border-white/30 flex items-center justify-center text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            KV
          </div>
        </div>

        {/* Name */}
        <h1 className={`text-5xl md:text-7xl font-poppins font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-white'
        }`}>
          Kallem Vaishnavi
        </h1>

        {/* Typing Animation */}
        <div className={`text-xl md:text-2xl font-inter mb-4 h-8 ${
          darkMode ? 'text-gray-200' : 'text-white/90'
        }`}>
          {displayText}
          <span className="animate-pulse">|</span>
        </div>

        {/* Contact Info */}
        <div className={`text-sm md:text-base font-inter mb-8 ${
          darkMode ? 'text-gray-300' : 'text-white/80'
        }`}>
          <p>Hyderabad | kallemvaishnavi28@gmail.com | 7659013760</p>
          <p>linkedin.com/in/kallem-vaishnavi</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Hire Me
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white/30 text-white hover:bg-white/20 backdrop-blur-md font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Button>
        </div>

        {/* Resume Download */}
        <Button
          onClick={handleDownloadResume}
          variant="ghost"
          className={`mb-8 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-white/80 hover:text-white'} transition-all duration-300 hover:scale-105`}
        >
          <FileDown className="mr-2 h-5 w-5" />
          Download Resume (PDF)
        </Button>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/Kallemvaishnavi" 
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 ${
              darkMode ? 'text-white hover:bg-white/30' : 'text-white hover:bg-white/30'
            } transition-all duration-300 hover:scale-110 animate-glow`}
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/kallem-vaishnavi" 
            className={`p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 ${
              darkMode ? 'text-white hover:bg-white/30' : 'text-white hover:bg-white/30'
            } transition-all duration-300 hover:scale-110 animate-glow`}
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className={`h-8 w-8 mx-auto ${darkMode ? 'text-gray-300' : 'text-white/70'}`} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
