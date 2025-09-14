import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-mishu-teal" />,
      title: "Authentic Connections",
      description: "We believe in helping brands connect with their audience in genuine, meaningful ways."
    },
    {
      icon: <Target className="h-6 w-6 text-mishu-teal" />,
      title: "Practical Strategy",
      description: "Our strategies are designed to make clients' lives easier while delivering real results."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-mishu-teal" />,
      title: "Data-Driven Creative",
      description: "We blend creative flair with data-driven tactics, staying ahead of platform trends."
    },
    {
      icon: <Users className="h-6 w-6 text-mishu-teal" />,
      title: "Growth Obsessed",
      description: "We're obsessed with growth and storytelling, always pushing for measurable outcomes."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-mishu-mint/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            About <span className="text-mishu-teal">Mishu Creatives</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mishu Creatives is a boutique marketing agency obsessed with growth and storytelling. We specialize in helping lifestyle, fashion, and food brands connect with their audience in authentic ways.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our small but agile team is made up of social media strategists, content creators, and brand operators who have managed accounts ranging from local boutiques to global e-commerce brands. We pride ourselves on blending creative flair with data-driven tactics – always staying on top of platform trends and algorithm changes to keep our clients ahead of the curve.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 bg-background/80 backdrop-blur-sm text-center p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-mishu-teal/10 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-mishu-dark">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Highlight */}
        <div className="bg-mishu-teal/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-mishu-dark mb-6">
            Meet Animisha Karlapalem
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-4">
              <p className="text-muted-foreground">
                <strong className="text-mishu-dark">Business Development Consultant</strong>
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> contact@mishu.uk</p>
                <p><strong>Mobile:</strong> +44 7448 985617</p>
                <p><strong>Address:</strong> 11, Webster Avenue, Solihull, B90 4FD, UK</p>
                <p><strong>Website:</strong> www.mishu.uk</p>
              </div>
            </div>
            <div className="space-y-4 text-left">
              <h4 className="font-semibold text-mishu-dark">Core Expertise:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Global Apparel & Textile Sourcing</li>
                <li>• Digital Marketing & CRM Automation</li>
                <li>• Brand Development & Strategy</li>
                <li>• Production & Supply Chain Coordination</li>
                <li>• Business Development Consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;