export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-soft space-y-6 animate-in fade-in duration-1000">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with <span className="text-primary font-semibold">2+ years of experience</span> building 
              web applications using Angular and React. I specialize in creating high-performance, scalable solutions for 
              enterprise clients.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">🚀 Recent Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Upgraded Angular 8 to 17, reducing bundle size by <strong>30%</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Improved page load speed by <strong>25%</strong> through optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Built offline-first React platform serving <strong>100+ users</strong></span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">💡 Focus Areas</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Performance optimization & scalability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Microservices & Microfrontend architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Full-stack development & DevOps</span>
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
