import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Academic background and achievements
          </p>

          <Card className="gradient-card shadow-soft border-0 animate-in fade-in duration-1000">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Electrical Engineering</h3>
                    <p className="text-lg text-primary font-semibold mb-2">National Institute of Technology Silchar</p>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2016 - Jun 2020</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-primary/5 rounded-lg px-4 py-3 w-fit">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold">CGPA: <span className="text-primary">9.13 / 10</span></span>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-3">Core Focus Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Automatic Control Systems",
                        "Power System Design (Renewable Energy)",
                        "Electrical Machinery",
                        "Soft Computing Techniques",
                        "Nanotechnology"
                      ].map((course, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
