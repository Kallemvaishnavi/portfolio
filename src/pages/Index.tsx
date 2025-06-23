
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AchievementsSection from '../components/AchievementsSection';
import OpenToWorkBadge from '../components/OpenToWorkBadge';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-sunset'
    }`}>
      <OpenToWorkBadge />
      
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        {darkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-white" />}
      </button>

      {/* Main Content */}
      <div className="relative">
        <HeroSection darkMode={darkMode} />
        <SkillsSection darkMode={darkMode} />
        <AchievementsSection darkMode={darkMode} />
        <ProjectsSection darkMode={darkMode} />
        <AboutSection darkMode={darkMode} />
        <TestimonialsSection darkMode={darkMode} />
        <ContactSection darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Index;
