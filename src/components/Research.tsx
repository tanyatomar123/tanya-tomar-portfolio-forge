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
  title: "OPTIMIZING LLM FOR LOW RESOURCE LANGUAGE",
  abstract: "The proliferation of Large Language Models (LLMs) has significantly advanced natural language understanding and generation across high-resource languages. However, low-resource languages continue to suffer from limited representation, poor performance, and underdeveloped linguistic tools due to the scarcity of annotated data and high computational requirements for training and fine-tuning LLMs. This paper addresses the challenges of optimizing LLMs for low-resource languages through a multi-faceted approach involving continued pre-training, synthetic data generation, and transfer learning strategies.",
  fullContent: `
      <h3>Introduction</h3>
      <p>The evolution of Large Language Models (LLMs) such as GPT-4, BERT, and NLLB-200 has revolutionized natural language processing (NLP), enabling machines to understand, generate, and interact with human language at unprecedented levels of fluency. While these models have demonstrated remarkable success in high-resource languages like English, Mandarin, and Spanish, their performance significantly declines when applied to low-resource languages—languages for which limited annotated data, linguistic resources, and computational infrastructure are available.</p>
      
      <p>Low-resource languages, including but not limited to Amharic, Tigrinya, Oromo, Malagasy, and Sinhala, are spoken by millions across Africa, South Asia, and the Pacific. Despite their socio-cultural significance, they remain underrepresented in digital corpora and NLP research. This digital marginalization perpetuates inequalities in access to information, education, and technology for speakers of these languages.</p>

      <h3>Methodology</h3>
      <p>This study uses pretrained models from the Helsinki-NLP/Opus-MT family, which are specifically optimized for multilingual translation tasks. These models are built on the MarianMT architecture and trained on OPUS datasets, known for supporting low-resource language pairs.</p>
      
      <p>Each model was selected according to its compatibility with a target language, covering languages such as Amharic (am), Tigrinya (ti), Oromo (om), Swahili (sw), Yoruba (yo), Igbo (ig), Filipino (tl), Malagasy (mg), Nepali (ne), and Sinhala (si).</p>

      <h3>Results & Analysis</h3>
      <p>We evaluated the system on a test set of 500 sentences per language using the sacrebleu metric. Results showed competitive performance, with Swahili achieving 28.9 BLEU score, outperforming Google Translate by +1.5 BLEU. Lower-resource languages like Oromo (12.4 BLEU) showed room for improvement due to limited training data.</p>
      
      <p>The system achieved an average latency of less than 200ms for most languages, confirming feasibility for interactive use. Resource availability emerged as the strongest predictor of performance (r=0.82, p<0.01).</p>

      <h3>Conclusion</h3>
      <p>This study presents a comprehensive low-resource language translation system that successfully bridges accessibility gaps for 10+ underrepresented languages. Our results demonstrate that while neural machine translation can achieve competitive performance for moderately resourced languages, significant challenges remain for extremely low-resource languages.</p>
      
      <p>The findings pave the way for inclusive and equitable AI solutions that support linguistic diversity and bridge the digital language divide.</p>

      <h3>Links</h3>
      <p><strong>App Interface:</strong> <a href="https://1b2d5ebe0de75e19d5.gradio.live/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
      <p><strong>Code Repository:</strong> <a href="https://github.com/tanyatomar123/AI-PROJECTS/blob/8d8059ec4434acd508f3283b16d806657b833c29/reseach_project.py" target="_blank" rel="noopener noreferrer">GitHub</a></p>
    `,
  authors: ["Ms. Tanya Tomar", "Ms. Sweta"],
  date: "2024-07-27",
  tags: ["Large Language Models", "Low-Resource Languages", "Machine Translation", "NLP", "NLLB-200"],
  images: [{
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    caption: "Programming interface showing machine learning code",
    alt: "Computer monitor displaying Java programming code"
  }, {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    caption: "Neural network circuit board representation",
    alt: "Macro photography of black circuit board representing neural networks"
  }, {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    caption: "Colorful code visualization on computer monitor",
    alt: "Colorful software or web code displayed on a computer monitor"
  }],
  pdfUrl: "https://github.com/tanyatomar123/AI-PROJECTS/blob/8d8059ec4434acd508f3283b16d806657b833c29/reseach_project.py",
  status: "published"
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
                    <Button variant="outline" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Read Full Paper
                      </span>
                      {expandedPaper === paper.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
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
                          {paper.images.map((image, index) => (
                            <div key={index} className="space-y-3">
                              <img 
                                src={image.url} 
                                alt={image.alt}
                                className="w-full rounded-lg shadow-lg"
                              />
                              <p className="text-sm text-slate-400 italic">{image.caption}</p>
                            </div>
                          ))}
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