import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const highlightKeywords = (text: string) => {
  const keywords = [
    { pattern: /AWS Lambda/g, label: "AWS Lambda" },
    { pattern: /API Gateway/g, label: "API Gateway" },
    { pattern: /AWS SQS/g, label: "AWS SQS" },
    { pattern: /DynamoDB/g, label: "DynamoDB" },
    { pattern: /CloudWatch/g, label: "CloudWatch" },
    { pattern: /Angular \d+/g, label: "Angular" },
    { pattern: /Webpack/g, label: "Webpack" },
    { pattern: /TypeScript/g, label: "TypeScript" },
    { pattern: /RxJS/g, label: "RxJS" },
    { pattern: /Microfrontend/g, label: "Microfrontend" },
    { pattern: /Node\.js/g, label: "Node.js" },
    { pattern: /React/g, label: "React" },
    { pattern: /Express\.js/g, label: "Express.js" },
    { pattern: /JWT/g, label: "JWT" },
    { pattern: /Jotai/g, label: "Jotai" },
    { pattern: /\d+%/g, label: "metric" },
    { pattern: /\d+\+/g, label: "metric" },
  ];

  let result = [{ text, isHighlight: false }];

  keywords.forEach(({ pattern }) => {
    result = result.flatMap((part) => {
      if (part.isHighlight) return [part];
      const parts = part.text.split(pattern);
      const matches = part.text.match(pattern) || [];
      return parts.flatMap((p, i) => [
        { text: p, isHighlight: false },
        ...(i < matches.length ? [{ text: matches[i], isHighlight: true }] : []),
      ]).filter(p => p.text);
    });
  });

  return result;
};

const Experience = () => {
  const experiences = useMemo(() => [
    {
      role: "Full Stack Web Developer",
      company: "Vendeep Technoidentity Solutions Pvt Ltd",
      period: "Oct 2025 - Present",
      highlights: [
        "Engineered a high-performing AWS Lambda adapter layer to securely integrate external systems with internal enterprise platforms",
        "Orchestrated scalable, event-driven workflows utilizing Amazon API Gateway and AWS Lambda for high-concurrency data transformations",
        "Architected a robust validation engine using Joi to enforce strict data contracts, ensuring 100% data sanity before downstream ingestion",
        "Implemented AWS SQS to decouple system dependencies, preventing data loss and ensuring reliable delivery to proprietary subsystems",
        "Leveraged DynamoDB for millisecond-latency state storage and CloudWatch for real-time system observability and proactive alerting"
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "Vendeep Technoidentity Solutions Pvt Ltd",
      period: "Apr 2024 - Sept 2025",
      highlights: [
        "Led end-to-end migration of mission-critical sales application from Angular 8 to Angular 17, ensuring zero downtime",
        "Reduced bundle size by 30% using Webpack 5 and enhanced productivity by 25% through TypeScript 5+ and RxJS 7+ library updates",
        "Implemented Microfrontend architecture using Webpack Module Federation across 3 independent UI modules for independent deployment",
        "Successfully overhauled backend by migrating from Node.js v10 to v22 and transitioned development workflows from TSLint to ESLint",
        "Enhanced code quality with Angular route guards, custom directives, and modern development practices"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Global Chemical Industry Technology Leader",
      period: "Nov 2023 - Mar 2024",
      highlights: [
        "Built React-based SaaS application featuring offline-first functionality and periodic data synchronization for production and QC management",
        "Achieved 40% bundle size reduction and 25% faster load times through advanced lazy loading and reusable component design",
        "Engineered custom hooks for complex role-based table operations and utilized Jotai for secure, global state management",
        "Developed 15+ REST API endpoints using Express.js and JWT, boosting API efficiency by 30% and streamlining multi-role user permissions",
        "Implemented role-based access controls enabling seamless workflows for 5+ distinct user roles"
      ]
    }
  ], []);

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Building impactful enterprise solutions with cutting-edge technologies
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="gradient-card shadow-soft border-0 transition-smooth hover:shadow-glow hover:-translate-y-1 animate-in fade-in duration-700 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-smooth">{exp.role}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-smooth">
                          <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                          <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-primary/10">
                    <h4 className="font-bold text-primary text-lg">Key Accomplishments</h4>
                    <ul className="space-y-3">
                       {exp.highlights.map((highlight, hIndex) => {
                        const parts = highlightKeywords(highlight);
                        return (
                          <li key={hIndex} className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-smooth">
                            <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-smooth">✓</span>
                            <span className="leading-relaxed">
                              {parts.map((part, idx) => (
                                <span
                                  key={idx}
                                  className={part.isHighlight ? "font-semibold text-primary" : ""}
                                >
                                  {part.text}
                                </span>
                              ))}
                            </span>
                          </li>
                        );
                      })}
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
