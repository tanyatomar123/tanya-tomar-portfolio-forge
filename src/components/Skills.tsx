
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, BarChart, Database, Zap, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "ML & AI",
      icon: Brain,
      skills: ["Regression", "Classification", "Clustering", "NLP", "Recommendation Systems"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Deep Learning",
      icon: Zap,
      skills: ["CNN", "RNN", "TensorFlow", "PyTorch"],
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      title: "Visualization",
      icon: BarChart,
      skills: ["Power BI", "Tableau", "Seaborn", "Matplotlib"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Deployment Tools",
      icon: GitBranch,
      skills: ["Gradio", "Streamlit", "Flask", "Hugging Face Spaces"],
      gradient: "from-red-500 to-rose-500",
      bgGradient: "from-red-500/10 to-rose-500/10",
      borderColor: "border-red-500/20"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "SQLite", "Git", "GitHub"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to solve complex data problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${category.bgGradient} ${category.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`bg-gradient-to-r ${category.gradient} text-white hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Skill Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">All Skills at a Glance</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {skillCategories.flatMap(category => category.skills).map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-slate-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
