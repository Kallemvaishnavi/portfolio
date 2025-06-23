
interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection = ({ darkMode }: AboutSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className={`w-80 h-80 rounded-3xl mx-auto ${
              darkMode ? 'bg-gradient-to-br from-purple-400 to-pink-400' : 'bg-gradient-to-br from-white/30 to-white/20'
            } backdrop-blur-md border border-white/30 flex items-center justify-center animate-float`}>
              <div className="text-6xl font-bold text-white">👨‍💻</div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div className={`p-8 rounded-3xl ${
              darkMode ? 'bg-white/10' : 'bg-white/20'
            } backdrop-blur-md border border-white/20`}>
              <p className={`text-lg font-inter leading-relaxed mb-6 ${
                darkMode ? 'text-gray-200' : 'text-white/90'
              }`}>
                I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
                I love turning complex problems into elegant, user-friendly solutions.
              </p>
              
              <p className={`text-lg font-inter leading-relaxed mb-6 ${
                darkMode ? 'text-gray-200' : 'text-white/90'
              }`}>
                When I'm not coding, you'll find me exploring the latest AI technologies, contributing to open-source projects, 
                or experimenting with new frameworks.
              </p>

              {/* Fun Fact */}
              <div className={`p-4 rounded-2xl ${
                darkMode ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-white/20 border border-white/30'
              } backdrop-blur-md`}>
                <p className={`text-sm font-inter ${
                  darkMode ? 'text-purple-200' : 'text-white/80'
                }`}>
                  <span className="font-semibold">Fun Fact:</span> I automate my coffee maker with Python! 
                  My morning routine starts with perfectly timed coffee thanks to a Raspberry Pi setup.
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
