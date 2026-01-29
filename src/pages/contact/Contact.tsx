import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_INFO = [
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

const Contact = () => {

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
              Let&apos;s discuss your next project or exciting opportunity
            </p>
          </div>

          <Card className="gradient-card shadow-soft border-0 animate-in fade-in duration-1000 delay-200">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {CONTACT_INFO.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-smooth hover:shadow-glow group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth group-hover:scale-110">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-smooth">{contact.label}</h3>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-smooth break-words font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground break-words font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-primary/10 text-center space-y-6">
                <div>
                  <p className="text-muted-foreground text-lg mb-2">
                    Open to new opportunities and collaborations
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="shadow-glow transition-smooth hover:scale-105 px-8"
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
