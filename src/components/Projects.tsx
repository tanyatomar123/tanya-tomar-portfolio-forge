
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Travel Assistant",
      description: "Trip planning bot with real-time suggestions and multi-language support. Helps users plan personalized travel itineraries with AI-powered recommendations.",
      techStack: ["Python", "NLP", "Machine Learning", "API Integration", "Flask"],
      features: [
        "Real-time travel suggestions",
        "Multi-language support",
        "Personalized recommendations",
        "Weather integration",
        "Budget optimization"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      github: "https://github.com/tanyatomar123/travel-assistant",
      demo: "#"
    },
    {
      title: "Smart Circular Economy Marketplace",
      description: "AI-powered resale platform with predictive pricing and recommendation engine. Promotes sustainable consumption through intelligent product matching.",
      techStack: ["Python", "Machine Learning", "Recommendation Systems", "Predictive Analytics", "Streamlit"],
      features: [
        "Predictive pricing algorithm",
        "AI-powered recommendations",
        "Sustainability scoring",
        "User behavior analysis",
        "Market trend prediction"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      github: "https://github.com/tanyatomar123/circular-marketplace",
      demo: "#"
    },
    {
      title: "Low-Resource Language Translator",
      description: "Fine-tuned multilingual NLP model using Hugging Face and BLEU scoring. Specializes in translating between low-resource language pairs.",
      techStack: ["Python", "Transformers", "Hugging Face", "BLEU Scoring", "PyTorch"],
      features: [
        "Fine-tuned transformer models",
        "BLEU score evaluation",
        "Low-resource language support",
        "Real-time translation",
        "Model optimization"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      github: "https://github.com/tanyatomar123/language-translator",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in AI, ML, and data science
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${project.bgGradient} ${project.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 group`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                        <span className="text-slate-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} text-white hover:opacity-90 transition-opacity duration-200 text-sm`}
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    className={`flex-1 ${project.borderColor} text-slate-300 hover:bg-slate-800/30 text-sm`}
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3"
            onClick={() => window.open('https://github.com/tanyatomar123', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
