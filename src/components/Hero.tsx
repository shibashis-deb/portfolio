import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ThemeToggle />
      
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Floating orbs with slower animation */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Shibashis <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Deb</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              Full Stack Web Developer
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Crafting scalable web applications with React, Angular, and modern backend technologies. 
            Specialized in performance optimization and enterprise-grade solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg" 
              className="shadow-glow transition-smooth hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="transition-smooth hover:scale-105"
              asChild
            >
              <a href="https://linkedin.com/in/shibashis-deb" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Location badge */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span>Based in Hyderabad, Telangana</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
