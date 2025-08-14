import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Tanya Tomar is a data science enthusiast with hands-on experience in AI and ML projects, 
              aiming to apply analytical and programming skills to solve real-world problems in dynamic environments.
            </p>
            
            <p className="text-slate-400">
              With a strong foundation in computer applications and a passion for artificial intelligence, 
              I specialize in transforming complex datasets into meaningful insights that drive business decisions 
              and create innovative solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-white">College Coding Society</h3>
                  <p className="text-slate-400 text-sm">Member</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-white">NCC Cadet (Air Force)</h3>
                  <p className="text-slate-400 text-sm">Best Cadet Award</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Educational Background</h3>
            
            {/* Academic Achievement Highlight */}
            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">🏆 Academic Excellence</h4>
                      <p className="text-slate-300 text-sm">Rank 1 in College • Top 5 University</p>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/c660e2d4-b689-4b7e-8608-bcc6a71858b4.png" 
                      alt="Academic achievement certificate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Secured <strong className="text-yellow-400">Rank 1</strong> in college and placed among the 
                      <strong className="text-yellow-400"> Top 5 university rank holders</strong> in final year with a GPA of 
                      <strong className="text-yellow-400"> 9.86</strong>.
                    </p>
                    <p className="text-slate-400 text-xs italic">
                      This achievement reflects consistent effort, curiosity, and the support of mentors, peers, and family. 
                      Grateful for every learning opportunity throughout this journey.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-400 text-sm">Final Year</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                      GPA: 9.86/10
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">Bachelor in Computer Applications</h4>
                    <p className="mb-2 text-slate-300">Trinity Institute Of Professional Studies, IPU</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">2022 – 2025</span>
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">Overall GPA: 8.5/10</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-white">High School</h4>
                    <p className="mb-2 text-slate-300">Basava International School</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">2008 – 2021</span>
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: 9.5/10
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;