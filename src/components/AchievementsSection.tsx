
import { useState, useEffect, useRef } from 'react';

interface AchievementsSectionProps {
  darkMode: boolean;
}

const achievements = [
  {
    number: 8.9,
    suffix: '',
    title: 'GPA Score',
    description: 'Academic excellence in Electronic Communication Engineering'
  },
  {
    number: 3,
    suffix: '+',
    title: 'Internships Completed',
    description: 'Gained practical experience in web development and Python'
  },
  {
    number: 4,
    suffix: '+',
    title: 'Projects Delivered',
    description: 'Successfully completed diverse web and Python applications'
  },
  {
    number: 93,
    suffix: '%',
    title: 'Academic Performance',
    description: 'Consistent high performance throughout education'
  }
];

const AchievementsSection = ({ darkMode }: AchievementsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState<{[key: number]: number}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          achievements.forEach((achievement, index) => {
            let start = 0;
            const end = achievement.number;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setAnimatedNumbers(prev => ({
                ...prev,
                [index]: Math.round(start * 10) / 10
              }));
            }, 16);
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
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Achievement Metrics
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-3xl ${
                darkMode ? 'bg-white/10' : 'bg-white/20'
              } backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                isVisible ? 'animate-fade-in animate-counter' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`text-4xl md:text-5xl font-poppins font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>
                {animatedNumbers[index] || 0}{achievement.suffix}
              </div>
              <h3 className={`text-lg font-poppins font-semibold mb-2 ${
                darkMode ? 'text-gray-200' : 'text-white/90'
              }`}>
                {achievement.title}
              </h3>
              <p className={`text-sm font-inter ${
                darkMode ? 'text-gray-300' : 'text-white/70'
              }`}>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
