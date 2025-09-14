import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Search, Lightbulb, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-mishu-teal" />,
      title: "Starter Diagnostic",
      subtitle: "5 Days",
      price: "Perfect for direction & strategy",
      features: [
        "Social Media Audit: Comprehensive review of current channels and analytics",
        "Competitive Benchmarking: Analysis of industry peers and opportunities",
        "Recommendations Report: Strategy document with quick wins and growth tactics",
        "Consultation Call: One-time strategy workshop with actionable next steps"
      ],
      deliverable: "10-12 page Findings & Plan PDF",
      popular: false
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-mishu-teal" />,
      title: "Core Strategy Sprint",
      subtitle: "4 Weeks",
      price: "Full social media blueprint",
      features: [
        "Brand & Audience Deep-Dive: Research your brand story and target market",
        "Content Strategy Blueprint: Content pillars, storytelling angles, and post types",
        "3-Month Content Calendar: High-level calendar with themes and campaigns",
        "Frameworks & Tactics Guide: Custom AACE, SREOL, and funnel guidance",
        "Review & Handoff: Training session for your team on strategy execution"
      ],
      deliverable: "Strategy deck, templates, dashboard, playbooks",
      popular: true
    },
    {
      icon: <Rocket className="h-8 w-8 text-mishu-teal" />,
      title: "Monthly Execution",
      subtitle: "Retainer",
      price: "Full management & optimization",
      features: [
        "Content Creation & Curation: Posts, captions, graphics, and short videos",
        "Scheduling & Posting: Consistent posting across agreed platforms",
        "Community Management: Daily monitoring and response to comments/DMs",
        "Influencer/Partner Outreach: Monthly micro-influencer and partnership campaigns",
        "Growth Campaigns & Funnels: Story polls, referral incentives, DM campaigns",
        "Analytics & Reporting: Monthly reports with insights and strategy calls"
      ],
      tiers: {
        essentials: "IG 3x/wk (1 reel, 1 carousel, 1 still); LI 2x/wk; Stories on active days; community 5d/wk; monthly report",
        growth: "IG 5x/wk (2 reels, 2 carousels, 1 still); LI 3x/wk; 2 doc posts/mo; 2 micro-creators/mo; micro-boosts; weekly standup",
        scale: "IG 6x/wk; LI 4x/wk; Shorts 2x/wk; 4 doc posts/mo; 4 creators/mo; event coverage; quarterly live"
      },
      addons: "Paid setup/optimization • UGC shoots • Email roundup • Shopify/Link-in-bio builds",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            Social Media <span className="text-mishu-teal">Service Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer three levels of service to fit your needs. Whether you're just starting out or ready for full-scale execution, our packages are structured as a clear menu of services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className={`relative border-2 ${service.popular ? 'border-mishu-teal' : 'border-border'} shadow-lg hover:shadow-xl transition-all duration-300`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-mishu-gold text-mishu-dark font-semibold">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-mishu-teal/10 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl text-mishu-dark mb-2">{service.title}</CardTitle>
                <div className="text-mishu-teal font-semibold text-lg">{service.subtitle}</div>
                <p className="text-muted-foreground">{service.price}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-mishu-teal mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.deliverable && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-mishu-dark mb-1">Deliverable:</p>
                    <p className="text-sm text-muted-foreground">{service.deliverable}</p>
                  </div>
                )}

                {service.tiers && (
                  <div className="pt-4 border-t border-border space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-mishu-dark mb-1">• Essentials:</p>
                      <p className="text-xs text-muted-foreground">{service.tiers.essentials}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-mishu-dark mb-1">• Growth:</p>
                      <p className="text-xs text-muted-foreground">{service.tiers.growth}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-mishu-dark mb-1">• Scale:</p>
                      <p className="text-xs text-muted-foreground">{service.tiers.scale}</p>
                    </div>
                    {service.addons && (
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-mishu-dark mb-1">Add-ons:</p>
                        <p className="text-xs text-muted-foreground">{service.addons}</p>
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-6">
                  <Button 
                    className={`w-full ${service.popular ? 'bg-mishu-teal hover:bg-mishu-teal-dark' : 'bg-mishu-teal/10 text-mishu-teal hover:bg-mishu-teal hover:text-primary-foreground'}`}
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All packages can be customized based on your needs. You might start with a Diagnostic, then move into a Strategy Sprint, and finally transition to Monthly Execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;