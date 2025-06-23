
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection = ({ darkMode }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      // Confetti effect simulation
      console.log('🎉 Confetti effect triggered!');
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-white'
          }`}>
            Let's Work Together
          </h2>
          <div className={`w-24 h-1 mx-auto ${
            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-white to-white/50'
          } rounded-full`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`p-8 rounded-3xl ${
            darkMode ? 'bg-white/10' : 'bg-white/20'
          } backdrop-blur-md border border-white/20`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`${
                    darkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' 
                      : 'bg-white/20 border-white/30 text-white placeholder:text-white/70'
                  } backdrop-blur-md`}
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`${
                    darkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' 
                      : 'bg-white/20 border-white/30 text-white placeholder:text-white/70'
                  } backdrop-blur-md`}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${
                    darkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-300' 
                      : 'bg-white/20 border-white/30 text-white placeholder:text-white/70'
                  } backdrop-blur-md resize-none`}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  darkMode
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/20 hover:bg-white/30 border border-white/30'
                } text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-glow`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`p-8 rounded-3xl ${
              darkMode ? 'bg-white/10' : 'bg-white/20'
            } backdrop-blur-md border border-white/20`}>
              <h3 className={`text-2xl font-poppins font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-white'
              }`}>
                Get in Touch
              </h3>
              <p className={`font-inter mb-6 ${
                darkMode ? 'text-gray-200' : 'text-white/80'
              }`}>
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              
              <div className={`p-4 rounded-2xl ${
                darkMode ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-white/20 border border-white/30'
              } backdrop-blur-md mb-6`}>
                <p className={`font-inter ${
                  darkMode ? 'text-purple-200' : 'text-white/80'
                }`}>
                  <span className="font-semibold">Email:</span> alex.thompson@email.com
                </p>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className={`p-4 rounded-full ${
                    darkMode ? 'bg-white/10' : 'bg-white/20'
                  } backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 animate-glow`}
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className={`p-4 rounded-full ${
                    darkMode ? 'bg-white/10' : 'bg-white/20'
                  } backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 animate-glow`}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
