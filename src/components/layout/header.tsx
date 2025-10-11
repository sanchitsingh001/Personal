import { Sheet, SheetContent, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Menu, Mail, Linkedin, FileText, Github } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sanchittech0.01@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://www.linkedin.com/in/sanchitsingh001/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/sanchitsingh001', label: 'GitHub', icon: Github },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
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
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-2">
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
            <Button asChild variant="secondary">
              <a href="/documents/sanchit-singh-resume.pdf" target="_blank" rel="noopener noreferrer">
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
                     <a href="/documents/sanchit-singh-resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" /> Resume/CV
                    </a>
                  </Button>
                   <div className="flex justify-center gap-4">
                     {socialLinks.map((link) => (
                      <Button key={link.href} variant="ghost" size="icon" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
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
    </header>
  );
}
