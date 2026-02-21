import { useState, useEffect } from 'react';
import { Mail, Linkedin, FileText, ExternalLink, Github, Copy, ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/layout/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/toaster';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const publications = [
  {
    title: 'Temp-SCONE: A Novel Out-of-Distribution Detection and Domain Generalization Framework for Wild Data with Temporal Shift',
    authors: 'Singh, Sanchit, Naiknaware, Aditi, Sekeh, Salimeh, & Homayouni, Hajar',
    journal: 'NeurIPS 2025 Workshop on Reliable Machine Learning for Unreliable Data, 2025',
    link: 'https://arxiv.org/abs/2512.04571',
    posterLink: '/documents/OOD_Poster.pdf',
    note: '*equal contribution',
  },
  {
    title: 'Training Socially Intelligent Robots with Large Behavior Models: Challenges, Strategies, and Future Research Opportunities',
    authors: 'Singh, Sanchit, Elkins, Aaron, Pourebadi, Mary, Amadasun, Uyiosa, & Abhari, Kaveh',
    journal: 'Proceedings of the International Conference on Information Systems (ICIS 2025), 2025',
    link: '/documents/icis-2025-paper.pdf',
    note: '*equal contribution',
  },
  {
    title: 'DAWZY: A New Addition to AI powered "Human in the Loop" Music Co-creation',
    authors: 'Singh, Sanchit, Elkins, Aaron, Blankenship, Sawyer, Kieback, Adrian, Amadasun, Uyiosa, & Chadha, Aman',
    journal: 'NeurIPS 2025 Workshop on AI for Music, 2025',
    link: 'https://arxiv.org/abs/2512.03289',
    demoLink: 'https://www.youtube.com/watch?v=RQmCuYLkEDk',
    demoPaperLink: '/documents/neurips-dawzy-2page.pdf',
    posterLink: '/documents/NeurIPS_Dawzy_Poster .pdf',
    note: '*equal contribution - Selected for both 4-page paper track and 2-page demo track',
  },
  {
    title: 'Designing Socially Grounded Data Pipelines for Training and Operating Socially Intelligent Robots: Challenges and Future Directions',
    authors: 'Singh, Sanchit, Elkins, Aaron, Pourebadi, Mary, Amadasun, Uyiosa, & Abhari, Kaveh',
    journal: 'Proceedings of The Hawaii International Conference on System Sciences (HICSS 2026), 2026',
    link: '/documents/hicss-2026-paper.pdf',
    note: '*equal contribution',
  },
];

const completedProjects = [
    {
        title: 'Temporal OOD Detection (Temp-SCONE)',
        advisors: 'Salimeh Sekeh, Hajar Homayouni',
        role: 'Equal first author — theoretical formulation, training pipeline, analysis.',
        linkedAdvisors: {
            'Salimeh Sekeh': 'https://www.salimeh.info/',
            'Hajar Homayouni': 'https://homayouni.sdsu.edu/'
        },
        researchGroup: {
            name: 'Sekeh Lab',
            link: 'https://salimehsekeh.wixsite.com/sekeh-lab'
        }
    },
    {
        title: 'Socially Intelligent Robots',
        advisors: 'Mary Pourebadi, Kaveh Abhari, Aaron Elkins',
        role: 'Equal first author — method design, experiments, and writing.',
        linkedAdvisors: {
            'Mary Pourebadi': 'https://scholar.google.com/citations?user=p7JH9hYAAAAJ&hl=en',
            'Kaveh Abhari': 'http://abhari.info/',
            'Aaron Elkins': 'https://business.sdsu.edu/centers-institutes/ai/director-spotlight'
        },
        researchGroup: {
            name: 'James Silberrad Brown Center for Artificial Intelligence',
            link: 'https://business.sdsu.edu/centers-institutes/ai'
        }
    },
    {
        title: 'DAWZY: Creative AI for Human-AI Collaboration',
        advisors: '— (Independent Research Project)',
        role: 'Lead researcher and equal first author',
        researchGroup: {
            name: 'James Silberrad Brown Center for Artificial Intelligence',
            link: 'https://business.sdsu.edu/centers-institutes/ai'
        }
    }
];

const ongoingProjects = [
    {
        title: 'Privacy in Graph Learning',
        advisor: 'Joann Chen',
        role: 'Student researcher — designing target-shadow-attack-model pipelines and evaluation framework.',
        linkedAdvisors: {
            'Joann Chen': 'https://joannqc.com/'
        },
        researchGroup: {
            name: 'PAL: Privacy and Anonymity Lab',
            link: 'https://joannqc.com/lab/'
        }
    },
    {
        title: 'Self-Supervised Bioacoustics',
        advisors: 'Hajar Homayouni, Marie Roch (with San Diego Zoo Wildlife Alliance)',
        role: 'Student researcher — model design, representation learning, and evaluation.',
        linkedAdvisors: {
            'Hajar Homayouni': 'https://homayouni.sdsu.edu/',
            'Marie Roch': 'https://roch.sdsu.edu/'
        },
        researchGroup: {
            name: 'MAR Lab',
            link: 'https://roch.sdsu.edu/index.php/research-overview/'
        }
    }
];

function App() {
  const headshot = PlaceHolderImages.find(p => p.id === 'headshot');
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const defaultImage = headshot?.imageUrl || '';
  const hoverImage = '/photo/3B8220B9-2E03-4D2D-AF4C-9380A5A3314D.jpeg';

  // Preload the hover image for smoother transition
  useEffect(() => {
    const img = new Image();
    img.src = hoverImage;
  }, [hoverImage]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard!',
      description: text,
    });
  };

  const contactInfo = [
    { text: 'sanchittech0.01@gmail.com', href: 'mailto:sanchittech0.01@gmail.com', icon: Mail },
    { text: 'ssingh1949@sdsu.edu', href: 'mailto:ssingh1949@sdsu.edu', icon: Mail },
    { text: 'https://www.linkedin.com/in/sanchitsingh001/', href: 'https://www.linkedin.com/in/sanchitsingh001/', icon: Linkedin },
    { text: 'https://github.com/sanchitsingh001', href: 'https://github.com/sanchitsingh001', icon: Github },
  ];

  // Image carousel state for gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const galleryImages = [
    { src: '/photo/Dawzy-NeurIPS.jpeg', caption: 'Presenting DAWZY at NeurIPS 2025, San Diego' },
    { src: '/photo/Temp-scone-NeurIPS.gif', caption: 'Presenting Temp-SCONE at NeurIPS 2025, San Diego' },
    { src: '/photo/IMG_4780.JPG', caption: 'Presenting DAWZY at UC Berkeley AI Hackathon' },
    { src: '/photo/img.jpg', caption: 'UC Berkeley AI Hackathon Finals' },
    { src: '/photo/IMG_4779.JPG', caption: 'DAWZY Demo at UC Berkeley' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden max-w-full">
      <Header />
      <main className="flex-1 overflow-x-hidden max-w-full w-full">
        {/* Hero Section */}
        <section id="home" className="w-full py-12 md:py-20 lg:py-32 overflow-x-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 md:gap-10 lg:gap-12 xl:gap-12 md:grid-cols-2 items-stretch w-full max-w-full">
              <div className="order-1 md:order-2 flex justify-center md:justify-end items-center w-full min-h-[400px] sm:min-h-[450px] md:min-h-0 max-w-full overflow-hidden px-2 sm:px-4">
                {headshot && (
                  <img
                    src={isHovered ? hoverImage : defaultImage}
                    alt={headshot.description}
                    data-ai-hint={headshot.imageHint}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-full max-w-[90vw] sm:max-w-[380px] md:max-w-none md:w-full md:h-auto md:max-h-[85vh] rounded-lg md:rounded-xl object-cover aspect-[5/6] border-4 border-card shadow-xl transition-opacity duration-300 cursor-pointer"
                  />
                )}
              </div>
              <div className="order-2 md:order-1 flex flex-col items-center md:items-start md:justify-center text-center md:text-left w-full max-w-full px-2 sm:px-4 md:px-0 md:pr-8 lg:pr-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 w-full">Sanchit Singh</h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 w-full max-w-xl lg:max-w-lg">
                  Undergraduate researcher at San Diego State University exploring trustworthy and adaptive Artificial Intelligence.
My work spans robustness, reasoning, and human-centered AI — bridging socially intelligent and creative human–AI systems, with a focus on real-world robustness and deployment.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button asChild className="w-full sm:w-auto">
                    <a href="#contact">
                      <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </a>
                  </Button>
                  <Button variant="secondary" asChild className="w-full sm:w-auto">
                    <a href="/documents/Sanchit_Singh_CV.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> Resume/CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-10 md:pb-16 overflow-x-hidden max-w-full">
          <div className="container mx-auto px-4 max-w-4xl">
            <Alert className="border-primary/50">
               <AlertTitle>News</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><span className="text-muted-foreground text-sm">[Dec 17, 2025]</span> Selected as an Honorable Mention for the 2025-2026 <span className="font-semibold">CRA Outstanding Undergraduate Researcher Award</span>.</li>
                  <li><span className="text-muted-foreground text-sm">[Dec 7, 2025]</span> Presented DAWZY at <span className="font-semibold">NeurIPS 2025</span> (AI for Music Workshop) in San Diego.</li>
                  <li><span className="text-muted-foreground text-sm">[Dec 6, 2025]</span> Presented Temp-SCONE at <span className="font-semibold">NeurIPS 2025</span> (Reliable ML for Unreliable Data Workshop) in San Diego.</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* Research Journey Section */}
        <section id="research" className="w-full py-20 md:py-24 overflow-x-hidden max-w-full">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Research Journey</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <ul className="space-y-4">
                  {completedProjects.map((project, index) => {
                    const renderAdvisors = () => {
                      if ((project as any).linkedAdvisors) {
                        let advisorsText = project.advisors;
                        const linkedAdvisors = (project as any).linkedAdvisors;
                        
                        Object.keys(linkedAdvisors).forEach(advisorName => {
                          const link = linkedAdvisors[advisorName];
                          const advisorRegex = new RegExp(`\\b${advisorName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
                          advisorsText = advisorsText.replace(advisorRegex, `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">${advisorName}</a>`);
                        });
                        
                        return <span dangerouslySetInnerHTML={{ __html: advisorsText }} />;
                      }
                      return <span>{project.advisors}</span>;
                    };

                    return (
                      <li key={index}>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground"><strong>Advisors:</strong> {renderAdvisors()}</p>
                        {(project as any).researchGroup && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Research Group:</strong> 
                            <a href={(project as any).researchGroup.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium ml-1">
                              {(project as any).researchGroup.name}
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground"><strong>Role:</strong> {project.role}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="relative pt-2">
                  <Separator />
                  <h3 className="absolute left-1/2 -translate-x-1/2 -top-3 bg-background px-4 text-md font-medium text-muted-foreground">Ongoing Projects</h3>
              </div>
              
              <div>
                <ul className="space-y-4">
                  {ongoingProjects.map((project, index) => {
                    const renderAdvisors = () => {
                      let advisorsText = project.advisors || project.advisor || '';
                      if ((project as any).linkedAdvisors) {
                        const linkedAdvisors = (project as any).linkedAdvisors;
                        
                        Object.keys(linkedAdvisors).forEach(advisorName => {
                          const link = linkedAdvisors[advisorName];
                          const advisorRegex = new RegExp(`\\b${advisorName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
                          advisorsText = advisorsText.replace(advisorRegex, `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline font-medium">${advisorName}</a>`);
                        });
                        
                        return <span dangerouslySetInnerHTML={{ __html: advisorsText }} />;
                      }
                      return <span>{advisorsText}</span>;
                    };

                    return (
                      <li key={index}>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-muted-foreground"><strong>{project.advisors ? 'Advisors:' : 'Advisor:'}</strong> {renderAdvisors()}</p>
                        {(project as any).researchGroup && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Research Group:</strong> 
                            <a href={(project as any).researchGroup.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium ml-1">
                              {(project as any).researchGroup.name}
                            </a>
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground"><strong>Role:</strong> {project.role}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <Separator />
        
        {/* Publications Section */}
        <section id="publications" className="w-full py-20 md:py-24 overflow-x-hidden max-w-full">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
            </div>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.title} className="py-4 border-b border-border/50 last:border-b-0">
                  <h3 className="font-semibold text-lg mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 italic">{pub.authors} {pub.note && <span>({pub.note})</span>}</p>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-2">
                    <p className="text-sm font-medium">{pub.journal}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      {(pub as any).demoLink && (
                        <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                          <a href={(pub as any).demoLink} target="_blank" rel="noopener noreferrer">
                            Demo Video <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {(pub as any).demoPaperLink && (
                        <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                          <a href={(pub as any).demoPaperLink} target="_blank" rel="noopener noreferrer">
                            Demo Paper <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {(pub as any).posterLink && (
                        <Button variant="ghost" size="sm" asChild className="w-full sm:w-auto">
                          <a href={(pub as any).posterLink} target="_blank" rel="noopener noreferrer">
                            Poster <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Awards & Honors Section */}
        <section id="awards" className="w-full py-20 md:py-24 overflow-x-hidden max-w-full">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Awards &amp; Honors</h2>
            </div>
            <div className="space-y-8">
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground max-w-3xl mx-auto">
                <li>2025-2026 – <span className="font-medium text-foreground">Honorable Mention</span>, CRA Outstanding Undergraduate Researcher Award</li>
                <li>2025 – Awarded a <span className="font-medium text-foreground">$3,000 Seed Fund</span> from the Lavin Entrepreneurship Center to support research and development of an independent AI venture.</li>
                <li>2025 – <span className="font-medium text-foreground">Finalist</span>, UC Berkeley AI Hackathon (DAWZY) — Top 9 of 350+ projects, 1400+ participants</li>
                <li>2024 – <span className="font-medium text-foreground">TensorFlow Developer Certification</span>, Google</li>
                <li>2023 – Present – <span className="font-medium text-foreground">Dean's List</span>, San Diego State University (awarded consecutively each semester)</li>
              </ul>

              {/* Gallery */}
              <div id="gallery" className="flex flex-col items-center mt-12 max-w-4xl mx-auto scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4">Gallery</h3>
                <div 
                  className="relative w-full max-w-3xl rounded-lg overflow-hidden shadow-xl cursor-pointer group"
                  onClick={() => setGalleryOpen(true)}
                >
                  <div className="relative aspect-video bg-black">
                    <img
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].caption}
                      className="w-full h-full object-cover"
                    />
                    {/* Expand icon overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <Expand className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Navigation arrows */}
                    <button
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {galleryImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">{galleryImages[currentImageIndex].caption}</p>
                <p className="text-xs text-muted-foreground mt-1">Click to view full gallery</p>
              </div>

              {/* Gallery Modal */}
              <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
                <DialogContent className="w-screen h-screen max-w-none m-0 p-0 bg-black border-none rounded-none md:w-[95vw] md:h-[90vh] md:max-w-6xl md:rounded-lg md:border">
                  <button
                    onClick={() => setGalleryOpen(false)}
                    className="absolute right-2 top-2 md:right-4 md:top-4 text-white/70 hover:text-white z-50"
                    aria-label="Close gallery"
                  >
                    <X className="h-6 w-6 md:h-8 md:w-8" />
                  </button>
                  
                  {/* Main image */}
                  <div className="flex flex-col h-full justify-between py-12 md:py-4">
                    <div className="flex-1 flex items-center justify-center px-2 md:px-4 relative min-h-0">
                      <img
                        src={galleryImages[currentImageIndex].src}
                        alt={galleryImages[currentImageIndex].caption}
                        className="max-w-full max-h-full md:max-h-[60vh] object-contain"
                      />
                      {/* Navigation arrows */}
                      <button
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)}
                        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-8 md:w-8" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)}
                        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5 md:h-8 md:w-8" />
                      </button>
                    </div>
                    
                    {/* Caption */}
                    <p className="text-white text-center py-2 px-4 text-sm md:text-lg flex-shrink-0">{galleryImages[currentImageIndex].caption}</p>
                    
                    {/* Thumbnail strip */}
                    <div className="flex justify-start md:justify-center gap-2 px-2 md:px-4 pb-2 overflow-x-auto flex-shrink-0">
                      {galleryImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-14 h-10 md:w-20 md:h-14 rounded overflow-hidden border-2 transition-all ${
                            index === currentImageIndex ? 'border-white scale-105 md:scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.caption}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-16 lg:py-20 overflow-x-hidden max-w-full relative md:min-h-[400px] lg:min-h-[500px]">
          {/* Background Image - Desktop Only */}
          <div className="hidden md:block absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/photo/IMG_8669.jpeg)' }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 max-w-2xl md:max-w-7xl relative z-10">
            {/* Mobile: Normal layout */}
            <div className="md:hidden flex flex-col items-center text-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Contact</h2>
                <p className="text-lg text-muted-foreground">Want to collaborate? Reach out via email or LinkedIn.</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 text-lg">
                {contactInfo.map((item) => (
                  <div key={item.text} className="flex items-center gap-4 group">
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors break-all">
                      <item.icon className="h-5 w-5" />
                      {item.text}
                    </a>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleCopy(item.text)}
                      aria-label={`Copy ${item.text}`}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Two separate cards on edges */}
            <div className="hidden md:flex items-center justify-between py-10 lg:py-12 w-full max-w-7xl mx-auto px-4 lg:px-8 gap-4">
              {/* Left Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 w-[290px] lg:w-[310px] flex-shrink-0">
                <div className="flex flex-col gap-3 text-base">
                  {contactInfo.slice(0, 2).map((item) => (
                    <div key={item.text} className="flex items-start gap-2 group">
                      <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" />
                      <div className="flex-1 min-w-0">
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? '_blank' : undefined} 
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                          className="block text-white hover:text-white/80 transition-colors break-words font-medium text-xs lg:text-sm leading-relaxed"
                        >
                          {item.text}
                        </a>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-white/80 hover:bg-white/10 flex-shrink-0"
                        onClick={() => handleCopy(item.text)}
                        aria-label={`Copy ${item.text}`}
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center: Title (visible in center) */}
              <div className="flex flex-col items-center text-center px-4 lg:px-12 flex-1 pt-24 lg:pt-32">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Contact</h2>
                <p className="text-sm lg:text-base text-white/90">Want to collaborate?</p>
              </div>

              {/* Right Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-5 w-[260px] lg:w-[280px] flex-shrink-0">
                <div className="flex flex-col gap-3 text-base">
                  {contactInfo.slice(2, 4).map((item) => (
                    <div key={item.text} className="flex items-start gap-2 group">
                      <item.icon className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" />
                      <div className="flex-1 min-w-0">
                        <a 
                          href={item.href} 
                          target={item.href.startsWith('http') ? '_blank' : undefined} 
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                          className="block text-white hover:text-white/80 transition-colors break-words font-medium text-xs lg:text-sm leading-relaxed"
                        >
                          {item.text}
                        </a>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-white/80 hover:bg-white/10 flex-shrink-0"
                        onClick={() => handleCopy(item.text)}
                        aria-label={`Copy ${item.text}`}
                      >
                        <Copy className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
