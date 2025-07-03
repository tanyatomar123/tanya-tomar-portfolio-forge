
import { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tanya Tomar
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-cyan-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-white hover:text-cyan-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-white hover:text-cyan-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-white hover:text-cyan-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/tanyatomar123" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white hover:text-cyan-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/tanya-tomar" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-white hover:text-cyan-400 transition-colors" />
            </a>
            <a href="mailto:tanyatomar766@gmail.com">
              <Mail className="w-5 h-5 text-white hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("home")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                Skills
              </button>
              <button onClick={() => scrollToSection("experience")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                Experience
              </button>
              <button onClick={() => scrollToSection("projects")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-3 py-2 text-white hover:text-cyan-400">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
