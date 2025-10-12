import { Mail, Linkedin, FileText, ExternalLink, Github, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/layout/header';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Toaster } from '@/components/ui/toaster';

const publications = [
  {
    title: 'Temp-SCONE: A Novel Out-of-Distribution Detection and Domain Generalization Framework for Wild Data with Temporal Shift',
    authors: 'Singh, Sanchit, Naiknaware, Aditi, Sekeh, Salimeh, & Homayouni, Hajar',
    journal: 'NeurIPS 2025 Workshop on Reliable Machine Learning for Unreliable Data, 2025',
    link: '/documents/neurips-temp-scone.pdf',
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
    title: 'DAWZY: Human-in-the-Loop Natural-Language Control of REAPER',
    authors: 'Singh, Sanchit, Elkins, Aaron, Blankenship, Sawyer, Kieback, Adrian, Amadasun, Uyiosa, & Chadha, Aman',
    journal: 'NeurIPS 2025 Workshop on AI for Music, 2025',
    link: '/documents/neurips-dawzy-4page.pdf',
    demoLink: 'https://www.youtube.com/watch?v=e6vbURyIQJE',
    demoPaperLink: '/documents/neurips-dawzy-2page.pdf',
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
        }
    },
    {
        title: 'Socially Intelligent Robots',
        advisors: 'Mary Pourebadi, Kaveh Abhari, Aaron Elkins',
        role: 'Equal first author — method design, experiments, and writing.',
        linkedAdvisors: {
            'Mary Pourebadi': 'https://scholar.google.com/citations?user=p7JH9hYAAAAJ&hl=en',
            'Kaveh Abhari': 'http://abhari.info/',
            'Aaron Elkins': 'https://business.sdsu.edu/centers-institutes/ai'
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
        }
    },
    {
        title: 'Self-Supervised Bioacoustics',
        advisors: 'Hajar Homayouni, Marie Roch (with San Diego Zoo Wildlife Alliance)',
        role: 'Student researcher — model design, representation learning, and evaluation.',
        linkedAdvisors: {
            'Hajar Homayouni': 'https://homayouni.sdsu.edu/',
            'Marie Roch': 'https://roch.sdsu.edu/'
        }
    }
];

function App() {
  const headshot = PlaceHolderImages.find(p => p.id === 'headshot');
  const { toast } = useToast();

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

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div className="order-1 md:order-1 flex justify-center">
                {headshot && (
                  <img
                    src={headshot.imageUrl}
                    alt={headshot.description}
                    data-ai-hint={headshot.imageHint}
                    width={300}
                    height={360}
                    className="rounded-md object-cover aspect-[5/6] border-4 border-card shadow-lg"
                  />
                )}
              </div>
              <div className="order-2 md:order-2 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Sanchit Singh</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Undergraduate researcher at San Diego State University exploring trustworthy and adaptive Artificial Intelligence.
My work spans robustness, reasoning, and human-centered AI — bridging socially intelligent and creative human–AI systems, with a focus on real-world robustness and deployment.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href="#contact">
                      <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="/documents/sanchit-singh-resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> Resume/CV
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-10 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Alert className="border-primary/50">
               <AlertTitle>Updates</AlertTitle>
              <AlertDescription>
                Presenting Temp-SCONE at NeurIPS 2025 (Reliable ML for Unreliable Data Workshop) in San Diego.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <Separator />

        {/* Research Journey Section */}
        <section id="research" className="w-full py-20 md:py-24">
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
                      let advisorsText = project.advisors || project.advisor;
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
        <section id="publications" className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Publications</h2>
            </div>
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.title} className="py-4 border-b border-border/50 last:border-b-0">
                  <h3 className="font-semibold text-lg mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 italic">{pub.authors} {pub.note && <span>({pub.note})</span>}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">{pub.journal}</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      {(pub as any).demoLink && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={(pub as any).demoLink} target="_blank" rel="noopener noreferrer">
                            Demo Video <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {(pub as any).demoPaperLink && (
                        <Button variant="ghost" size="sm" asChild>
                          <a href={(pub as any).demoPaperLink} target="_blank" rel="noopener noreferrer">
                            Demo Paper <ExternalLink className="ml-2 h-4 w-4" />
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
        <section id="awards" className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Awards &amp; Honors</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Academic</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>2025 – Nominated for <span className="font-medium text-foreground">CRA Outstanding Undergraduate Researcher Award</span></li>
                  <li>2023 – Present – <span className="font-medium text-foreground">Dean's List</span>, San Diego State University (awarded consecutively each semester)</li>
                </ul>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-2">Competitions &amp; Certifications</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>2025 – <span className="font-medium text-foreground">Finalist</span>, UC Berkeley AI Hackathon (DAWZY) — Top 9 of 350+ projects, 1400+ participants</li>
                  <li>2024 – <span className="font-medium text-foreground">TensorFlow Developer Certification</span>, Google</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
              <p className="text-lg text-muted-foreground mt-2">Have a question or want to collaborate? Reach out via email or LinkedIn.</p>
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
        </section>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
