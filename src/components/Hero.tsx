
import { Button } from "@/components/ui/button";
import { Download, Eye, MessageCircle, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Available for Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-white">Hey There,</span><br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                I'm Tanya
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-slate-300 space-y-2">
              <div>Data Science | AI/ML Engineer | Data Analyst</div>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto lg:mx-0"></div>
            </div>
          </div>

          <p className="text-lg text-slate-400 max-w-2xl">
            Solving real-world problems using data science, machine learning, and artificial intelligence. 
            Transforming complex data into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-xl"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl"
              onClick={() => scrollToSection("projects")}
            >
              <Eye className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg rounded-xl"
              onClick={() => scrollToSection("contact")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">9.3</div>
              <div className="text-sm text-slate-400">GPA</div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/2jQjLz7G/PHOTU.png" 
                  alt="Tanya Tomar - Data Science Professional"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl rotate-12 animate-bounce opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse opacity-30"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg rotate-45 animate-bounce opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
