import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the scope of your social media services?",
      answer: "Our social media services cover end-to-end management of your brand's presence on major platforms – primarily Instagram, Facebook, TikTok, and LinkedIn (depending on where your audience is). We handle everything from strategy development and content creation to posting schedules, community management (replying to comments/messages), and performance tracking. The scope can be tailored: for example, focusing only on organic content and engagement, or integrating paid social ads if needed. Essentially, we become your extended social media team, ensuring all aspects of your social media marketing are taken care of."
    },
    {
      question: "What deliverables will I receive?",
      answer: "Deliverables vary by package. In the Starter Diagnostic, you'll receive an audit report with findings and recommendations, plus a live consultation. In the Core Strategy Sprint, you get a full strategy document, a content calendar outline, and any supporting materials (e.g. example posts, framework guides, influencer lists). For Monthly Execution, deliverables include the content we create each month (posts, captions, graphics, etc.), a monthly analytics report, and ongoing content calendars. We also provide access to any assets we develop – such as design templates, keyword lists, or SOPs for engagement – so you have complete transparency."
    },
    {
      question: "Who are these services ideal for?",
      answer: "Our social media services are ideal for growing brands and businesses that want to strengthen their online presence and connect directly with customers. We often work with: Fashion & Lifestyle Brands – from emerging fashion lines preparing to launch, to established designers looking to increase engagement and sales online. Local Businesses & Boutiques – shops or service businesses that rely on community buzz and word-of-mouth. Food & Beverage Brands – especially those selling DTC or on Amazon, where building a loyal foodie community can drive repeat purchases. Entrepreneurs & Creatives – like artists, coaches, or creators who need a cohesive strategy to grow their following and turn followers into customers."
    },
    {
      question: "What makes your approach different from other social media agencies?",
      answer: "We focus on operator-friendly systems and frameworks that actually work. Our SREOL (Save-Rate Episodic Open Loops) content framework and AACE (Anchor-Account Comment Engineering) approach are proven methods we've developed to drive real engagement and conversions. We don't just post pretty pictures – we build strategic content that tells stories, creates anticipation, and guides followers through your sales funnel."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Results vary depending on your starting point and chosen package. With our Starter Diagnostic, you'll have actionable insights within 5 days. For the Core Strategy Sprint, you'll have a complete roadmap within 4 weeks. With Monthly Execution, most clients see engagement improvements within 30-60 days, with significant growth typically visible within 90 days. We focus on sustainable, organic growth rather than quick-fix solutions."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We specialize in fashion brands, local businesses, designers, and food retail brands, but our proven frameworks work across many industries. During our initial consultation, we'll discuss your specific industry challenges and how our approach can be tailored to your market. If we don't feel we're the right fit, we'll be honest about it and potentially refer you to someone who specializes in your specific niche."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            Frequently Asked <span className="text-mishu-teal">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services? Here are the most common questions we receive from potential clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-mishu-dark hover:text-mishu-teal transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Have more questions? Feel free to reach out or book a call – we're happy to chat and make sure you have all the information you need to make the best decision for your brand's social growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;