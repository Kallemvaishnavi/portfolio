
import { useState } from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectsSectionProps {
  darkMode: boolean;
}

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, payment processing, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Task Manager',
    description: 'Intelligent task management app with AI-powered priority suggestions, natural language processing, and smart scheduling.',
    technologies: ['Python', 'React', 'OpenAI API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable chat application with WebSocket support, file sharing, and group messaging. Built with modern web technologies.',
    technologies: ['React', 'Socket.io', 'Express', 'Redis'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    github: '#',
    demo: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization, custom reports, and interactive charts.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
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
