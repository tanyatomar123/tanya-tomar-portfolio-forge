import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Award, MapPin, Users, ExternalLink, X } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  category: string;
  images: {
    url: string;
    caption: string;
    alt: string;
  }[];
  certificateUrl?: string;
  organizer?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Sample Achievement",
    description: "This is a sample achievement. Replace this with your actual achievements and add your photos.",
    date: "2024-01-15",
    location: "New Delhi, India",
    category: "Academic",
    organizer: "Sample Organization",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
        caption: "Achievement ceremony",
        alt: "Sample achievement photo"
      }
    ]
  }
];

const Album = () => {
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(achievements.map(a => a.category)))];

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Academic": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Technical": "bg-green-500/20 text-green-400 border-green-500/30",
      "Leadership": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Competition": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Certification": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <section id="album" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Achievement <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Album</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A visual journey through my accomplishments, certifications, and memorable moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white" 
                : "border-slate-600 text-slate-300 hover:border-slate-500"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map(achievement => (
            <Card key={achievement.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge className={getCategoryColor(achievement.category)}>
                        {achievement.category}
                      </Badge>
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {achievement.images.slice(0, 4).map((image, index) => (
                      <div 
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group/image"
                        onClick={() => setSelectedImage({url: image.url, caption: image.caption})}
                      >
                        <img 
                          src={image.url} 
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">View</span>
                        </div>
                        {index === 3 && achievement.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <span className="text-white text-lg font-bold">+{achievement.images.length - 4}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(achievement.date).toLocaleDateString()}
                    </div>
                    {achievement.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {achievement.location}
                      </div>
                    )}
                    {achievement.organizer && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {achievement.organizer}
                      </div>
                    )}
                  </div>

                  {/* Certificate Link */}
                  {achievement.certificateUrl && (
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="w-full border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                    >
                      <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-slate-900 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white">Achievement Photo</DialogTitle>
            </DialogHeader>
            {selectedImage && (
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={selectedImage.url} 
                    alt="Achievement"
                    className="w-full max-h-[70vh] object-contain rounded-lg"
                  />
                </div>
                <p className="text-slate-300 text-center italic">{selectedImage.caption}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Add Achievement Note */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Add Your Achievements</h3>
            <p className="text-slate-400 text-sm">
              To add your achievements, edit the <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">achievements</code> array 
              in <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">src/components/Album.tsx</code> 
              with your photos, descriptions, and details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;