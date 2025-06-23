
interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section className={`py-20 px-4 ${
      darkMode 
        ? 'bg-gradient-to-l from-slate-800/20 via-purple-900/10 to-slate-800/20' 
        : 'bg-gradient-to-l from-pink-300/20 via-purple-300/20 to-indigo-300/20'
    } backdrop-blur-sm`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/70'
          } rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className={`w-80 h-80 rounded-3xl mx-auto ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-400/30' 
                : 'bg-gradient-to-br from-white/30 to-pink-200/40 border border-white/40'
            } backdrop-blur-md flex items-center justify-center animate-float shadow-2xl`}>
              <div className="text-6xl font-bold text-white">👩‍💻</div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div className={`p-8 rounded-3xl ${
              darkMode 
                ? 'bg-slate-800/40 border border-slate-700/50' 
                : 'bg-white/25 border border-white/30'
            } backdrop-blur-md shadow-xl`}>
              <p className={`text-lg font-inter leading-relaxed mb-6 ${
                darkMode ? 'text-gray-200' : 'text-white/95'
              }`}>
                I'm a passionate web development intern and Python developer currently pursuing Electronic Communication Engineering B.tech 
                at Guru Nanak Institute of Technology, Hyderabad.
              </p>
              
              <p className={`text-lg font-inter leading-relaxed mb-6 ${
                darkMode ? 'text-gray-200' : 'text-white/95'
              }`}>
                With hands-on experience at companies like MY JOB GROW and CODESOFT, I specialize in creating responsive web applications, 
                enhancing user interfaces, and developing secure solutions using Python and JavaScript.
              </p>

              {/* Education & Achievements */}
              <div className={`p-4 rounded-2xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30' 
                  : 'bg-gradient-to-r from-white/30 to-pink-200/30 border border-white/40'
              } backdrop-blur-md mb-4 shadow-lg`}>
                <p className={`text-sm font-inter ${
                  darkMode ? 'text-purple-200' : 'text-white/90'
                }`}>
                  <span className="font-semibold">🎓 Education:</span> B.tech in Electronic Communication Engineering (GPA: 8.9) 
                  from Guru Nanak Institute of Technology
                </p>
              </div>

              {/* Certifications */}
              <div className={`p-4 rounded-2xl ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-400/30' 
                  : 'bg-gradient-to-r from-white/30 to-blue-200/30 border border-white/40'
              } backdrop-blur-md shadow-lg`}>
                <p className={`text-sm font-inter ${
                  darkMode ? 'text-blue-200' : 'text-white/90'
                }`}>
                  <span className="font-semibold">🏆 Certifications:</span> IBM Developer skill on Python, 
                  Web Development Intern certification from MY JOB GROW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
