import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mishu-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              mi<span className="bg-mishu-gold text-mishu-dark px-1 rounded">s</span>hu
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Bold Ideas, Sharp Execution
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Social media strategy services for fashion, design & food brands looking to grow their DTC presence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-mishu-gold transition-colors">Starter Diagnostic</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-mishu-gold transition-colors">Core Strategy Sprint</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-mishu-gold transition-colors">Monthly Execution</button></li>
              <li><button onClick={() => scrollToSection('approach')} className="hover:text-mishu-gold transition-colors">Our Approach</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-mishu-gold transition-colors">Case Studies</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-mishu-gold transition-colors">FAQ</button></li>
              <li><a href="https://www.mishu.uk" target="_blank" rel="noopener noreferrer" className="hover:text-mishu-gold transition-colors">Main Website</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-mishu-gold" />
                <span>contact@mishu.uk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-mishu-gold" />
                <span>+44 7448 985617</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-mishu-gold mt-0.5" />
                <span>11, Webster Avenue<br />Solihull, B90 4FD, UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Mishu Creatives Agency. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <button onClick={() => scrollToSection('contact')} className="hover:text-mishu-gold transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-mishu-gold transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;