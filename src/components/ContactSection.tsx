import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-mishu-mint/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mishu-dark mb-6">
            Ready to Elevate Your <span className="text-mishu-teal">Social Presence?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's turn your social media into a growth engine for your brand. Book a free discovery call with our team to discuss your goals and see which service tier fits best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-mishu-dark flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-mishu-teal" />
                Book Your Free Consultation
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your brand and goals. We'll audit your needs and give you honest recommendations – no hard sells, just a friendly chat.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-mishu-dark mb-2 block">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="border-border focus:border-mishu-teal"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-mishu-dark mb-2 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-mishu-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-mishu-dark mb-2 block">Company/Brand</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your brand or company name"
                    className="border-border focus:border-mishu-teal"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-mishu-dark mb-2 block">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md focus:border-mishu-teal focus:outline-none bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="diagnostic">Starter Diagnostic</option>
                    <option value="strategy">Core Strategy Sprint</option>
                    <option value="execution">Monthly Execution</option>
                    <option value="consultation">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-mishu-dark mb-2 block">Tell us about your goals</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What are your main social media challenges? What would success look like for your brand?"
                    rows={4}
                    className="border-border focus:border-mishu-teal resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-mishu-teal hover:bg-mishu-teal-dark text-primary-foreground py-3 font-semibold"
                >
                  Send Message & Book Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-mishu-dark">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-mishu-teal" />
                  <span className="text-muted-foreground">contact@mishu.uk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-mishu-teal" />
                  <span className="text-muted-foreground">+44 7448 985617</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-mishu-teal" />
                  <span className="text-muted-foreground">11, Webster Avenue, Solihull, B90 4FD, UK</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-mishu-dark">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-mishu-teal text-primary-foreground">1</Badge>
                  <div>
                    <h4 className="font-semibold text-mishu-dark">Free Discovery Call</h4>
                    <p className="text-sm text-muted-foreground">30-minute consultation to understand your needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-mishu-teal text-primary-foreground">2</Badge>
                  <div>
                    <h4 className="font-semibold text-mishu-dark">Strategy Recommendation</h4>
                    <p className="text-sm text-muted-foreground">We'll recommend the best service package for your situation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-mishu-teal text-primary-foreground">3</Badge>
                  <div>
                    <h4 className="font-semibold text-mishu-dark">Custom Proposal</h4>
                    <p className="text-sm text-muted-foreground">Detailed proposal with timeline, deliverables, and investment.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-mishu-teal/10 rounded-xl p-6">
              <h3 className="font-semibold text-mishu-dark mb-2">Quick Response Promise</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours. For urgent requests, feel free to call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;