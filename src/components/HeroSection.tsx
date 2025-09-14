import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-mishu-mint to-background relative overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-mishu-teal/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-mishu-gold/20 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo and Tagline */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-mishu-dark mb-4">
              mi<span className="bg-mishu-gold text-mishu-dark px-2 rounded-lg">s</span>hu
            </h1>
            <p className="text-xl md:text-2xl text-mishu-teal-dark font-medium mb-2">
              Bold Ideas, Sharp Execution
            </p>
            <div className="w-20 h-1 bg-mishu-gold mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-mishu-dark mb-6 leading-tight">
            Social Media Strategy Services for 
            <span className="text-mishu-teal"> Fashion, Design & Food Brands</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering fashion labels, local businesses, designers, and food retail brands to grow their audience and sales through creative, operator-friendly social media strategies that drive direct-to-consumer success.
          </p>

          {/* Key Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-mishu-dark mb-2">Operator-Friendly Systems</h3>
              <p className="text-muted-foreground text-sm">Workflows and templates that make social media manageable for your team.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-mishu-dark mb-2">Creative Strategy & Planning</h3>
              <p className="text-muted-foreground text-sm">Tailored content strategies with Save-Rate Episodic Open Loops (SREOL) framework.</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-mishu-dark mb-2">Engagement & Community</h3>
              <p className="text-muted-foreground text-sm">Anchor-Account Comment Engineering (AACE) for proactive community building.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-mishu-teal hover:bg-mishu-teal-dark text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-mishu-teal text-mishu-teal hover:bg-mishu-teal hover:text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              View Services
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by fashion brands, local businesses, and food retailers</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs font-semibold">Fashion Startups</div>
              <div className="w-px h-4 bg-border"></div>
              <div className="text-xs font-semibold">Local Boutiques</div>
              <div className="w-px h-4 bg-border"></div>
              <div className="text-xs font-semibold">Amazon Sellers</div>
              <div className="w-px h-4 bg-border"></div>
              <div className="text-xs font-semibold">B2B Textiles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;