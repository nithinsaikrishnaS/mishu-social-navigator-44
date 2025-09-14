import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, MessageCircle, TrendingUp } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Target className="h-8 w-8 text-mishu-teal" />,
      title: "Operator-Friendly Systems",
      description: "We build workflows and templates that make social media manageable for your team. From content calendars to DM response scripts, every system is designed for ease-of-use so operators can keep things running smoothly."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-mishu-teal" />,
      title: "Creative Strategy & Content Planning",
      description: "Great social media starts with a plan. We develop a tailored content strategy with your brand's voice and goals in mind – including campaign themes, posting schedules, and content pillars. Our methods include Save-Rate Episodic Open Loops (SREOL) – a content framework that encourages followers to save and return to your posts."
    },
    {
      icon: <Users className="h-8 w-8 text-mishu-teal" />,
      title: "Engagement & Community Building",
      description: "We don't just post and ghost. Using our Anchor-Account Comment Engineering (AACE) approach, we proactively engage with your target community – commenting, replying, and sparking conversations from your brand's account to increase awareness."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-mishu-teal" />,
      title: "Funnel Building & DM Automation",
      description: "Converting social media attention into sales is a key part of our strategy. We set up mini-funnels such as exclusive '/vip' signup pages or '/buyers' offers for your followers. We'll even integrate DM keywords to guide followers from social media into customers."
    }
  ];

  return (
    <section id="approach" className="py-20 bg-gradient-to-b from-background to-mishu-mint/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            Our Approach to <span className="text-mishu-teal">Social Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine creative strategy with practical systems to deliver results that matter to your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <Card key={index} className="border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-mishu-teal/10 rounded-lg">
                    {approach.icon}
                  </div>
                  <CardTitle className="text-xl text-mishu-dark">{approach.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Stats/Benefits */}
        <div className="mt-16 bg-mishu-teal text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Our Approach Works</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">63%</div>
              <p className="text-primary-foreground/90">of shoppers buy products recommended by trusted influencers</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Save-Rate</div>
              <p className="text-primary-foreground/90">signals huge engagement interest and boosts visibility</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Active</div>
              <p className="text-primary-foreground/90">engagement improves brand visibility on Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;