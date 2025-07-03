
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "KODACY",
      position: "AI/ML Intern",
      duration: "Jul 2024 - Aug 2024",
      location: "Remote",
      description: "Developed chatbots, ML models (Cosine Similarity, Minimax), and Python-based projects.",
      achievements: [
        "Built intelligent chatbots with natural language processing",
        "Implemented ML algorithms including Cosine Similarity",
        "Developed Minimax algorithm for decision-making systems",
        "Created Python-based automation solutions"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      company: "CODSOFT",
      position: "AI Intern",
      duration: "Aug 2024 - Sept 2024",
      location: "Remote",
      description: "Built Titanic classifier, dashboards using Power BI, and implemented statistical tests for performance enhancement.",
      achievements: [
        "Developed Titanic survival prediction classifier",
        "Created interactive dashboards using Power BI",
        "Implemented statistical tests for model validation",
        "Enhanced model performance through feature engineering",
        "Analyzed large datasets for actionable insights"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Professional journey in AI, ML, and data science with hands-on project experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${exp.bgGradient} ${exp.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-[1.02]`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Basic Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-lg flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                        <p className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>
                          {exp.position}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right Column - Achievements */}
                  <div className="lg:col-span-2 space-y-6">
                    <h4 className="text-xl font-semibold text-white">Key Achievements</h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-200"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skills used */}
                    <div className="pt-4">
                      <h5 className="text-sm font-medium text-slate-400 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {index === 0 ? (
                          <>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Python</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Machine Learning</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>NLP</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Chatbots</Badge>
                          </>
                        ) : (
                          <>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Python</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Power BI</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Statistical Analysis</Badge>
                            <Badge className={`bg-gradient-to-r ${exp.gradient} text-white`}>Data Visualization</Badge>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Connector */}
        <div className="flex justify-center mt-12">
          <div className="w-1 h-24 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
