import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["Angular 17+ (Signals)", "React", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Java", "Spring Boot"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["SQL", "PostgreSQL", "MySQL"]
    },
    {
      title: "Architecture",
      icon: "🏗️",
      skills: ["Microservices", "Microfrontends (Webpack Module Federation)", "REST APIs"]
    },
    {
      title: "Tools & DevOps",
      icon: "🔧",
      skills: ["Git", "GitHub", "GitLab", "RabbitMQ", "Webpack 5", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technical <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-soft border-0 transition-smooth hover:scale-105 hover:shadow-glow animate-in fade-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="transition-smooth hover:bg-primary hover:text-primary-foreground"
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
