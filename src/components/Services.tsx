
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Target, Layers, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights through comprehensive statistical analysis and data exploration.",
      features: ["Statistical Analysis", "Data Cleaning", "Trend Analysis", "Report Generation"],
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "AI/ML Model Building",
      description: "Design and develop custom machine learning models tailored to solve your specific business challenges.",
      features: ["Custom ML Models", "Algorithm Selection", "Feature Engineering", "Model Optimization"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Predictive Systems",
      description: "Build sophisticated forecasting systems that help businesses make data-driven decisions for the future.",
      features: ["Time Series Forecasting", "Risk Assessment", "Demand Prediction", "Performance Modeling"],
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Recommendation Engines",
      description: "Create intelligent recommendation systems that enhance user experience and drive engagement.",
      features: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Systems", "Real-time Recommendations"],
      icon: Layers,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      title: "Interactive Dashboards",
      description: "Design and develop stunning interactive dashboards using Power BI and Tableau for data visualization.",
      features: ["Power BI Development", "Tableau Dashboards", "Interactive Reports", "Real-time Analytics"],
      icon: Database,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      title: "Model Deployment",
      description: "Deploy your machine learning models to production using modern deployment tools and platforms.",
      features: ["Streamlit Apps", "Gradio Interfaces", "Flask APIs", "Cloud Deployment"],
      icon: Zap,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive data science and AI solutions to help your business thrive in the digital age
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} ${service.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 group`}
            >
              <CardContent className="p-6 h-full flex flex-col">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-3">What's Included</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="text-slate-400 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 transition-opacity duration-200 mt-auto`}
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">How I Work</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              My systematic approach ensures quality delivery and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your business needs and challenges" },
              { step: "02", title: "Analysis", desc: "Data exploration and feasibility assessment" },
              { step: "03", title: "Development", desc: "Building custom solutions with best practices" },
              { step: "04", title: "Deployment", desc: "Testing, optimization, and production deployment" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
