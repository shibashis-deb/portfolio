import { Header } from "@/pages/hero/Hero";
import { About } from "@/pages/about/About";
import Skills from "@/pages/skills/Skills";
import Experience from "@/pages/experience/Experience";
import Education from "@/pages/education/Education";
import Contact from "@/pages/contact/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Shibashis Deb. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
