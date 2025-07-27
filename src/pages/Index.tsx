
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import AchievementsCarousel from "@/components/AchievementsCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <About />
      
      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Key <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Milestones that define my journey in data science and AI
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
          </div>
          <AchievementsCarousel />
        </div>
      </section>

      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
