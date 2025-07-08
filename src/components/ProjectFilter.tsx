
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({ categories, selectedCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        onClick={() => onCategoryChange('all')}
        className={selectedCategory === 'all' 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
          : 'border-slate-600 text-slate-300 hover:bg-slate-800/50'
        }
      >
        All Projects
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category 
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
            : 'border-slate-600 text-slate-300 hover:bg-slate-800/50'
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;
