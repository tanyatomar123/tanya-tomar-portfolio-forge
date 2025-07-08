
import { useState, useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillProgress = ({ skill, level, delay = 0 }: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= level) {
              clearInterval(interval);
              return level;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{skill}</span>
        <span className="text-sm text-slate-400">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 bg-slate-700"
      />
    </div>
  );
};

export default SkillProgress;
