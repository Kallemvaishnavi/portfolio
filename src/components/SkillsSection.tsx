
import { useState, useEffect, useRef } from 'react';

interface SkillsSectionProps {
  darkMode: boolean;
}

const skills = [
  { name: 'Python', level: 95, color: 'from-green-400 to-blue-500' },
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
  { name: 'HTML/CSS', level: 88, color: 'from-orange-400 to-red-500' },
  { name: 'SQL', level: 85, color: 'from-blue-500 to-indigo-600' },
  { name: 'React', level: 82, color: 'from-blue-400 to-blue-600' },
  { name: 'Java', level: 80, color: 'from-red-500 to-red-700' },
  { name: 'TypeScript', level: 75, color: 'from-blue-600 to-purple-600' },
  { name: 'Android Development', level: 70, color: 'from-green-500 to-green-700' },
];

const SkillsSection = ({ darkMode }: SkillsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered effect
          skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => [...prev, index]);
            }, index * 200);
          });
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
      className={`py-20 px-4 ${darkMode ? 'bg-black/20' : 'bg-white/10'} backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Technical Skills
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-2xl ${
                darkMode ? 'bg-white/10' : 'bg-white/20'
              } backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className={`text-lg font-poppins font-semibold ${
                  darkMode ? 'text-white' : 'text-white'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-sm font-inter ${
                  darkMode ? 'text-gray-300' : 'text-white/80'
                }`}>
                  {skill.level}%
                </span>
              </div>
              
              <div className={`w-full ${
                darkMode ? 'bg-gray-700' : 'bg-white/20'
              } rounded-full h-3 overflow-hidden`}>
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                    animatedSkills.includes(index) ? '' : 'w-0'
                  }`}
                  style={{
                    width: animatedSkills.includes(index) ? `${skill.level}%` : '0%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
