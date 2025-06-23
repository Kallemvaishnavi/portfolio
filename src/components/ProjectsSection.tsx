
import { useState } from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a personal portfolio website showcasing skills, projects, and achievements. Implemented a modern and responsive user interface using JavaScript and TypeScript for static typing.',
    technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'Online Quiz Application',
    description: 'Developed a quiz app where users can answer multiple-choice questions, get real-time feedback, and see their score at the end. Includes features like timer, question randomization, and dynamic difficulty levels.',
    technologies: ['Python', 'JavaScript', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1606134256789-5b5beac4ae15?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'Password Generator',
    description: 'Developed a secure password generator in Python, improving functionality and ensuring strong, randomized password creation for enhanced security.',
    technologies: ['Python', 'Security'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'Rock-Paper-Scissors Game',
    description: 'Developed a Rock-Paper-Scissors game in Python, focusing on improving user interaction, implementing game logic, and enhancing overall performance.',
    technologies: ['Python', 'Game Logic'],
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  }
];

const ProjectsSection = ({ darkMode }: ProjectsSectionProps) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-black/20' : 'bg-white/10'} backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden ${
                darkMode ? 'bg-white/10' : 'bg-white/20'
              } backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode ? 'from-black/60 to-transparent' : 'from-black/40 to-transparent'
                } transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-70'
                }`}></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white"
                  >
                    <ArrowUp className="mr-2 h-4 w-4 rotate-45" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-xl font-poppins font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-white'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm font-inter mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-white/80'
                }`}>
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-inter rounded-full ${
                        darkMode 
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                          : 'bg-white/20 text-white border border-white/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
