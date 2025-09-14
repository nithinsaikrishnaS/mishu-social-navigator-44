import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-mishu-dark">
              mi<span className="bg-mishu-gold text-mishu-dark px-1 rounded">s</span>hu
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Bold Ideas, Sharp Execution
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-mishu-teal transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('approach')}
              className="text-foreground hover:text-mishu-teal transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-foreground hover:text-mishu-teal transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-mishu-teal transition-colors"
            >
              FAQ
            </button>
            <Button 
              variant="default"
              onClick={() => scrollToSection('contact')}
              className="bg-mishu-teal hover:bg-mishu-teal-dark text-primary-foreground"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-mishu-teal transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('approach')}
                className="text-left text-foreground hover:text-mishu-teal transition-colors"
              >
                Our Approach
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-left text-foreground hover:text-mishu-teal transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-mishu-teal transition-colors"
              >
                FAQ
              </button>
              <Button 
                variant="default"
                onClick={() => scrollToSection('contact')}
                className="bg-mishu-teal hover:bg-mishu-teal-dark text-primary-foreground w-fit"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;