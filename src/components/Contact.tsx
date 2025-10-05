import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shibashisd.dev@gmail.com",
      href: "mailto:shibashisd.dev@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 8099670255",
      href: "tel:+918099670255"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/shibashis-deb"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let&apos;s discuss your next project or opportunity
          </p>

          <Card className="gradient-card shadow-soft border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 transition-smooth hover:bg-background/70"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1">{contact.label}</h3>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-smooth break-words"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground break-words">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  Open to new opportunities and collaborations
                </p>
                <Button 
                  size="lg" 
                  className="shadow-glow transition-smooth hover:scale-105"
                  asChild
                >
                  <a href="mailto:shibashisd.dev@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send a Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
