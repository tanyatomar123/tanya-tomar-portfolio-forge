import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, FileText, Calendar, Users, ExternalLink } from 'lucide-react';
interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  fullContent: string;
  authors: string[];
  date: string;
  tags: string[];
  images: {
    url: string;
    caption: string;
    alt: string;
  }[];
  pdfUrl?: string;
  status: 'published' | 'in-review' | 'draft';
}
const researchPapers: ResearchPaper[] = [{
  id: "1",
  title: "Machine Learning Applications in Predictive Analytics",
  abstract: "This paper explores the implementation of various machine learning algorithms for predictive analytics in real-world business scenarios. We analyze the effectiveness of different models and their impact on decision-making processes.",
  fullContent: `
      <h3>Introduction</h3>
      <p>Predictive analytics has become a cornerstone of modern business intelligence, enabling organizations to forecast trends, identify opportunities, and mitigate risks. This research examines the practical implementation of machine learning algorithms in predictive analytics frameworks.</p>
      
      <h3>Methodology</h3>
      <p>Our research methodology involved the analysis of multiple datasets across different industries, implementing various ML algorithms including:</p>
      <ul>
        <li>Random Forest for classification tasks</li>
        <li>Linear Regression for trend prediction</li>
        <li>Neural Networks for complex pattern recognition</li>
        <li>Support Vector Machines for high-dimensional data</li>
      </ul>
      
      <h3>Results</h3>
      <p>The results demonstrate significant improvements in prediction accuracy across all tested scenarios, with an average accuracy increase of 23% compared to traditional statistical methods.</p>
      
      <h3>Conclusion</h3>
      <p>Machine learning algorithms show tremendous potential in enhancing predictive analytics capabilities, providing businesses with more accurate and actionable insights.</p>
    `,
  authors: ["Tanya Tomar", "Dr. Research Supervisor"],
  date: "2024-03-15",
  tags: ["Machine Learning", "Predictive Analytics", "Business Intelligence"],
  images: [{
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    caption: "Data visualization dashboard showing ML model performance",
    alt: "Computer monitor displaying data analytics dashboard"
  }, {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    caption: "Neural network architecture representation",
    alt: "Circuit board representing neural network connections"
  }],
  status: "published"
}, {
  id: "2",
  title: "AI-Driven Data Mining Techniques for Pattern Recognition",
  abstract: "An investigation into advanced AI techniques for extracting meaningful patterns from large datasets. This study focuses on unsupervised learning methods and their applications in data discovery.",
  fullContent: `
      <h3>Abstract</h3>
      <p>This research investigates the application of artificial intelligence in data mining, specifically focusing on pattern recognition capabilities. We explore various unsupervised learning techniques and their effectiveness in discovering hidden patterns within complex datasets.</p>
      
      <h3>Research Objectives</h3>
      <ul>
        <li>Evaluate clustering algorithms for pattern identification</li>
        <li>Analyze the performance of deep learning models in feature extraction</li>
        <li>Develop a framework for automated pattern discovery</li>
      </ul>
      
      <h3>Key Findings</h3>
      <p>Our analysis revealed that combining multiple AI techniques significantly improves pattern recognition accuracy. The hybrid approach achieved a 35% improvement over single-algorithm implementations.</p>
    `,
  authors: ["Tanya Tomar"],
  date: "2024-07-20",
  tags: ["Artificial Intelligence", "Data Mining", "Pattern Recognition", "Unsupervised Learning"],
  images: [{
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    caption: "AI robot representing automated pattern recognition",
    alt: "White robot near wall representing AI technology"
  }],
  status: "in-review"
}];
const Research = () => {
  const [expandedPaper, setExpandedPaper] = useState<string | null>(null);
  const togglePaper = (paperId: string) => {
    setExpandedPaper(expandedPaper === paperId ? null : paperId);
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-review':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'draft':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  return <section id="research" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Research <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Papers</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore my research contributions in artificial intelligence, machine learning, and data science
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        <div className="grid gap-8">
          {researchPapers.map(paper => <Card key={paper.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{paper.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {paper.authors.join(", ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(paper.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Badge className={getStatusColor(paper.status)}>
                    {paper.status.replace('-', ' ').toUpperCase()}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.map(tag => <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300">
                      {tag}
                    </Badge>)}
                </div>
                
                <p className="text-slate-300 leading-relaxed">{paper.abstract}</p>
              </CardHeader>

              <CardContent>
                <Collapsible open={expandedPaper === paper.id} onOpenChange={() => togglePaper(paper.id)}>
                  <CollapsibleTrigger asChild>
                    
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-invert max-w-none">
                      <div className="text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{
                    __html: paper.fullContent
                  }} />
                    </div>
                    
                    {paper.images && paper.images.length > 0 && <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Research Visuals</h4>
                        <div className="grid gap-6">
                          {paper.images.map((image, index) => {})}
                        </div>
                      </div>}
                    
                    {paper.pdfUrl && <div className="pt-4 border-t border-slate-700/50">
                        <Button asChild className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                          <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      </div>}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Research;