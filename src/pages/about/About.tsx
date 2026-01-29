export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-soft space-y-8 animate-in fade-in duration-1000 delay-200">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Full-stack web developer with <span className="text-primary font-semibold">3 years of experience</span> building 
                scalable, high-performance enterprise applications using React, Angular, TypeScript, and Node.js.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Proven expertise in <span className="text-primary font-semibold">frontend modernization</span>, <span className="text-primary font-semibold">microfrontend architecture</span>, 
                and <span className="text-primary font-semibold">performance optimization</span>, delivering up to <span className="text-primary font-semibold">40% bundle size reduction</span> and 
                <span className="text-primary font-semibold"> 25% productivity gains</span>. Strong experience in AWS serverless architectures, REST APIs, and Java Spring Boot–based backend systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4 p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-smooth">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-xl font-bold text-primary">Key Achievements</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">Engineered AWS Lambda adapter layer for secure enterprise system integration</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">Achieved <strong>40% bundle size reduction</strong> and <strong>25% faster load times</strong> through optimization</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">Built offline-first React SaaS platform with real-time sync for <strong>100+ users</strong></span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4 p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-smooth">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">💡</span>
                  <h3 className="text-xl font-bold text-primary">Core Expertise</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">Frontend modernization & performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">Microfrontend architecture & Webpack Module Federation</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <span className="text-primary font-bold text-lg mt-0.5 group-hover:scale-125 transition-smooth">→</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-smooth">AWS serverless architectures & cloud-native solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
