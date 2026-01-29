import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Angular 17+", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "State & Data",
    icon: "📊",
    skills: ["TanStack Query", "Jotai", "Redux", "RxJS", "Zod"]
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Java Spring Boot"]
  },
  {
    title: "Cloud & Distributed",
    icon: "☁️",
    skills: ["AWS Lambda", "API Gateway", "S3", "CloudFront", "SQS", "DynamoDB", "RabbitMQ"]
  },
  {
    title: "Database & ORM",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Liquibase"]
  },
  {
    title: "Architecture & Tools",
    icon: "🏗️",
    skills: ["Microfrontends (Webpack Module Federation)", "Webpack", "Docker", "Git", "ESLint"]
  }
];

const Skills = () => {

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive expertise across modern web technologies, cloud platforms, and enterprise architectures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-soft border-0 transition-smooth hover:shadow-glow hover:-translate-y-2 animate-in fade-in duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8 space-y-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl group-hover:scale-110 transition-smooth">{category.icon}</span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">{category.title}</h3>
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full group-hover:w-full transition-all duration-300"></div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
