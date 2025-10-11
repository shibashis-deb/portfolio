import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer | Consultant",
      company: "Fortune 500 Energy/Home Services Leader",
      period: "Jan 2025 - Present",
      highlights: [
        "Implemented WebSocket and RabbitMQ based notifications",
        "Collaborated on dynamic UI rendering",
        "Implemented database-driven feature toggle for releases"
      ]
    },
    {
      role: "Angular Developer",
      company: "Fortune 500 Energy/Home Services Leader",
      period: "Apr 2024 - Dec 2024",
      highlights: [
        "Led Angular 8 → 17 migration for sales critical application - Reduced bundle size 30% via Webpack 5",
        "Architected Microfrontend ecosystem using Webpack Module Federation - 40% faster feature deployment",
        "Boosted team productivity 25% - Upgraded TypeScript 5+, RxJS 7+, migrated to ESLint/Dart Sass",
        "Enhanced code quality with Angular route guards + custom directives",
        "Overhauled Node.js v16 → v22 - Unlocked modern ECMAScript features"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Global Chemical Tech Leader",
      period: "Nov 2023 - Mar 2024",
      highlights: [
        "Built offline-first React SaaS platform for production/QC management - Enabled real-time sync for 100+ users",
        "Engineered reusable components & custom hooks - Reduced code duplication 30%",
        "Implemented role-based access controls - Streamlined workflows for 5+ user roles",
        "Optimized performance via lazy loading - Slashed bundle size 40% + load times 25%",
        "Secured application with JWT auth + 15+ REST endpoints"
      ]
    },
    {
      role: "Associate Dev I",
      company: "Vendeep Technoidentity Solutions Pvt. Ltd.",
      period: "Mar 2023 - Present",
      highlights: [
        "Executing assignments with web applications, scripts, and programming languages",
        "Creating solutions for identified problems and maintaining code quality",
        "Ensuring cross-browser compatibility and industry best practices",
        "Maintaining regular communication with colleagues, managers, and stakeholders"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Professional <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            My journey building impactful web applications
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="gradient-card shadow-soft border-0 transition-smooth hover:shadow-glow animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Accomplishments:</h4>
                    <ul className="space-y-2">
                       {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-muted-foreground transition-smooth hover:translate-x-1">
                          <span className="text-primary mr-2 mt-1.5">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
