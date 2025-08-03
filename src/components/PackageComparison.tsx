import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PackageComparison = () => {
  const packages = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      pages: "5+ pages",
      delivery: "7-10 days",
      features: [
        "Essential pages setup",
        "Mobile responsive design",
        "Contact forms",
        "Basic SEO optimization",
        "1 month support"
      ],
      popular: false
    },
    {
      name: "Moderate",
      description: "Ideal for growing businesses",
      pages: "10+ pages",
      delivery: "10-14 days",
      features: [
        "Everything in Basic",
        "Admin dashboard",
        "Content management",
        "Advanced features",
        "3 months support",
        "Training included"
      ],
      popular: true
    },
    {
      name: "Advanced",
      description: "Complete business solution",
      pages: "15+ pages",
      delivery: "15-25 days",
      features: [
        "Everything in Moderate",
        "Custom integrations",
        "User management",
        "Advanced analytics",
        "6 months support",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-accent bg-clip-text text-transparent">Perfect Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with essential features and upgrade later. Every package is designed to grow with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative ${pkg.popular ? 'border-primary shadow-glow scale-105' : ''} transition-smooth hover:shadow-elegant`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="premium" className="px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-lg">{pkg.description}</CardDescription>
                <div className="mt-4 space-y-2">
                  <div className="text-sm text-muted-foreground">{pkg.pages}</div>
                  <div className="text-lg font-semibold text-primary">
                    Delivery: {pkg.delivery}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={pkg.popular ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Key Considerations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Start with essential features and upgrade later
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Consider your technical comfort for admin tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Evaluate your content update frequency
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Plan for 20% future growth in requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Budget for maintenance (10-15% yearly)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    Free consultation to find the right fit
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;