import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Menu, Mail, Linkedin, FileText, Github, ExternalLink } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'mailto:sanchittech0.01@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://www.linkedin.com/in/sanchitsingh001/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/sanchitsingh001', label: 'GitHub', icon: Github },
  { href: 'https://devpost.com/sanchittech0-01', label: 'Devpost', icon: ExternalLink },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-x-hidden max-w-full">
      {/* Main Navigation Bar */}
      <div className="container flex h-14 max-w-screen-2xl items-center max-w-full">
        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-between md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold"></span>
          </a>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
            <Separator orientation="vertical" className="h-6" />
            <Button asChild variant="secondary">
              <a href="/documents/Sanchit_Singh_CV.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> Resume/CV
              </a>
            </Button>
          </nav>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-1 items-center justify-between md:hidden">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold"></span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Separator />
                <div className="flex flex-col gap-4">
                  <Button asChild>
                     <a href="/documents/Sanchit_Singh_CV.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> Resume/CV
                    </a>
                  </Button>
                   <div className="flex justify-center gap-4">
                     {socialLinks.map((link) => (
                      <Button key={link.href} variant="ghost" size="icon" asChild>
                        <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={link.label}>
                          <link.icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Social Links Row - Below Nav Bar */}
      <div className="border-t border-border/40 bg-background/95">
        <div className="container flex justify-center items-center h-12 max-w-screen-2xl">
          <div className="flex items-center gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                target={link.href.startsWith('mailto:') ? undefined : '_blank'} 
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} 
                aria-label={link.label}
                className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2 text-sm"
              >
                <link.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
