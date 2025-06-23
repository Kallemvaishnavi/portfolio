
import { useState, useEffect } from 'react';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face',
    quote: 'Alex delivered an outstanding e-commerce platform that increased our conversion rates by 30%. His attention to detail and technical expertise are exceptional.'
  },
  {
    name: 'Michael Chen',
    position: 'Product Manager at InnovateX',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    quote: 'Working with Alex was a game-changer for our team. His AI-powered solutions saved us countless hours and improved our product quality significantly.'
  },
  {
    name: 'Emily Rodriguez',
    position: 'CEO at StartupY',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    quote: 'Alex built our entire tech stack from scratch. His full-stack expertise and problem-solving skills helped us scale from 0 to 100k users seamlessly.'
  }
];

const TestimonialsSection = ({ darkMode }: TestimonialsSectionProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-black/20' : 'bg-white/10'} backdrop-blur-md`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            What Clients Say
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full`}></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className={`p-8 md:p-12 rounded-3xl ${
            darkMode ? 'bg-white/10' : 'bg-white/20'
          } backdrop-blur-md border border-white/20 text-center min-h-[300px] flex flex-col justify-center`}>
            
            {/* Quote */}
            <div className="mb-8">
              <div className={`text-6xl font-poppins mb-4 ${
                darkMode ? 'text-purple-400' : 'text-white/50'
              }`}>
                "
              </div>
              <p className={`text-lg md:text-xl font-inter leading-relaxed ${
                darkMode ? 'text-gray-200' : 'text-white/90'
              }`}>
                {testimonials[currentTestimonial].quote}
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full border-2 border-white/30"
              />
              <div className="text-left">
                <h4 className={`font-poppins font-semibold ${
                  darkMode ? 'text-white' : 'text-white'
                }`}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className={`text-sm font-inter ${
                  darkMode ? 'text-gray-300' : 'text-white/70'
                }`}>
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? darkMode ? 'bg-purple-400' : 'bg-white'
                    : darkMode ? 'bg-gray-600' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
