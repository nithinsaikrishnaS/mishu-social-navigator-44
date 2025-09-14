import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, ShoppingCart } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: <TrendingUp className="h-8 w-8 text-mishu-teal" />,
      title: "Fashion — Pre-launch",
      category: "Sustainable Fashion Startup",
      challenge: "A sustainable fashion startup came to us 3 months before their launch needing to build an engaged community.",
      solution: "Through the Starter Diagnostic, we identified their story angles and ideal platforms. In a Strategy Sprint, we developed a content series teasing the product line using SREOL to create anticipation with cliffhanger 'coming next week' posts. We also set up a VIP list funnel (/vip) via Instagram DM.",
      result: "By launch day, they had an engaged Instagram community and 500+ sign-ups for early access, leading to a sell-out of their first collection.",
      metrics: ["500+ VIP sign-ups", "Sell-out first collection", "Engaged community pre-launch"]
    },
    {
      icon: <Users className="h-8 w-8 text-mishu-teal" />,
      title: "Textiles — B2B Expansion",
      category: "B2B Textile Manufacturer",
      challenge: "An established textile manufacturer (B2B) wanted to build a social presence to reach boutique designers and small businesses directly.",
      solution: "We executed a Core Strategy Sprint focusing on LinkedIn and Instagram content that showcased their materials in real-world designs. Using AACE, we engaged from the brand's account in niche design forums and comment threads, positioning them as experts.",
      result: "Their follower count grew meaningfully with the right followers (prospective B2B clients), and within 6 months they secured multiple new contracts initiated through LinkedIn inquiries.",
      metrics: ["Quality B2B followers", "Multiple new contracts", "Expert positioning established"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-mishu-teal" />,
      title: "Food — Amazon Sales",
      category: "Gourmet Snacks Brand",
      challenge: "A gourmet snacks company selling on Amazon struggled with brand recognition and needed to drive more referral traffic.",
      solution: "Under our Monthly Execution service, we revamped their Instagram with mouth-watering visuals and influencer features. We ran a campaign asking users to post their reaction to the snacks and tag the brand, and used a DM keyword ('TASTE') to send discount codes.",
      result: "Instagram engagement doubled with lots of recipe saves and shares, and Amazon saw a notable uptick in referral traffic — 30% of their Amazon sales that quarter were attributed to social media campaigns.",
      metrics: ["Doubled engagement", "30% Amazon sales from social", "Strong UGC campaign"]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-mishu-mint/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            Case Study <span className="text-mishu-teal">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are a few examples that showcase how our social media approach has helped clients in various niches achieve real, measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/90 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-mishu-teal/10 rounded-lg">
                    {study.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl text-mishu-dark">{study.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{study.category}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-mishu-dark mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-mishu-dark mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-mishu-dark mb-2">Result:</h4>
                  <p className="text-sm text-muted-foreground mb-3">{study.result}</p>
                  
                  <div className="space-y-2">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-mishu-teal rounded-full"></div>
                        <span className="text-sm font-medium text-mishu-dark">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-mishu-teal/10 rounded-xl p-8">
          <p className="text-sm text-muted-foreground italic">
            <strong>Note:</strong> These case examples demonstrate our focus on creative strategy, community engagement, and funnel thinking to deliver tangible outcomes. Details available on call; sensitive data anonymized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;