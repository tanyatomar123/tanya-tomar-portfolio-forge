
import { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter = ({ value, label, suffix = "", duration = 2000 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
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
      const increment = value / (duration / 50);
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev >= value) {
            clearInterval(timer);
            return value;
          }
          return Math.min(prev + increment, value);
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-white">
        {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
};

export default StatCounter;
