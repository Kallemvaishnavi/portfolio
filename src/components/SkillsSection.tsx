
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Smartphone, Globe, Server, Zap } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

const skills = [
  { name: 'Python', icon: Code, category: 'Backend', color: 'from-green-400 to-emerald-500' },
  { name: 'JavaScript', icon: Zap, category: 'Frontend', color: 'from-yellow-400 to-orange-500' },
  { name: 'HTML/CSS', icon: Globe, category: 'Frontend', color: 'from-orange-400 to-red-500' },
  { name: 'SQL', icon: Database, category: 'Database', color: 'from-blue-500 to-indigo-600' },
  { name: 'React', icon: Code, category: 'Frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'Java', icon: Server, category: 'Backend', color: 'from-red-500 to-rose-600' },
  { name: 'TypeScript', icon: Code, category: 'Frontend', color: 'from-blue-600 to-purple-600' },
  { name: 'Android Development', icon: Smartphone, category: 'Mobile', color: 'from-green-500 to-teal-600' },
];

const SkillsSection = ({ darkMode }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 px-4 ${
        darkMode 
          ? 'bg-gradient-to-r from-slate-800/30 via-purple-800/20 to-slate-800/30' 
          : 'bg-gradient-to-r from-white/20 via-pink-200/30 to-white/20'
      } backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Technical Expertise
          </h2>
          <p className={`text-lg font-inter mb-6 ${
            darkMode ? 'text-gray-300' : 'text-white/90'
          } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Technologies I work with to build amazing solutions
          </p>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/70'
          } rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group p-6 rounded-2xl ${
                  darkMode 
                    ? 'bg-slate-800/40 border border-slate-700/50 hover:bg-slate-700/50' 
                    : 'bg-white/25 border border-white/30 hover:bg-white/35'
                } backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                } cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-lg font-poppins font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-white'
                  } group-hover:text-opacity-90 transition-colors`}>
                    {skill.name}
                  </h3>
                  
                  <span className={`text-xs font-inter px-3 py-1 rounded-full ${
                    darkMode 
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                      : 'bg-white/30 text-white/80 border border-white/40'
                  } backdrop-blur-sm`}>
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Categories Summary */}
        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {['Frontend', 'Backend', 'Database', 'Mobile'].map((category, index) => (
            <div
              key={category}
              className={`p-4 rounded-xl text-center ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/30' 
                  : 'bg-gradient-to-br from-white/20 to-white/10 border border-white/30'
              } backdrop-blur-md ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 8) * 0.1}s` }}
            >
              <h4 className={`font-poppins font-semibold ${
                darkMode ? 'text-white' : 'text-white'
              }`}>
                {category}
              </h4>
              <p className={`text-sm font-inter mt-1 ${
                darkMode ? 'text-gray-300' : 'text-white/80'
              }`}>
                {skills.filter(skill => skill.category === category).length} Technologies
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
