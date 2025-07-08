
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Award, Trophy, Star } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: any;
  gradient: string;
}

const achievements: Achievement[] = [
  {
    title: "AI/ML Innovation",
    description: "Developed cutting-edge ML models with 95% accuracy for real-world applications",
    icon: Award,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Data Science Excellence",
    description: "Successfully completed 15+ data science projects with measurable business impact",
    icon: Trophy,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Technical Leadership",
    description: "Led cross-functional teams in implementing AI solutions across multiple domains",
    icon: Star,
    gradient: "from-green-500 to-emerald-500"
  }
];

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <Card className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 transition-all duration-500`}>
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 bg-gradient-to-br ${achievements[currentIndex].gradient} rounded-full flex items-center justify-center`}>
              <achievements[currentIndex].icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{achievements[currentIndex].title}</h3>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">{achievements[currentIndex].description}</p>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="border-slate-600 text-slate-300 hover:bg-slate-800/50"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex gap-2">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="border-slate-600 text-slate-300 hover:bg-slate-800/50"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AchievementsCarousel;
