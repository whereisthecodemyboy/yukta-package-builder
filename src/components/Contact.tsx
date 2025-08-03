import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="success" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your <span className="bg-gradient-hero bg-clip-text text-transparent">Dream Website?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="border-primary/20 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Start Building</CardTitle>
                <CardDescription className="text-lg">
                  Every great website starts with a conversation. Reach out and let's discuss your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <p className="text-muted-foreground">contact@yukta-apps.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/5">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Visit Our Website</h4>
                      <p className="text-muted-foreground">www.yukta-apps.com</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h4 className="font-semibold mb-3">What happens next?</h4>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">1</div>
                      Free consultation to understand your needs
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">2</div>
                      Custom proposal with timeline and pricing
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">3</div>
                      Development begins with regular updates
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Free Consultation</CardTitle>
                <CardDescription>
                  Get expert advice on the best package for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <Button variant="hero" size="lg" className="h-14">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                  <Button variant="outline" size="lg" className="h-14">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email Inquiry
                  </Button>
                </div>

                <div className="text-center space-y-4 pt-6 border-t">
                  <h4 className="font-semibold">Why Choose Yukta Applications?</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-muted-foreground">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">99%</div>
                      <div className="text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-muted-foreground">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5★</div>
                      <div className="text-muted-foreground">Rating</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;