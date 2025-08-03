import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Users, Settings } from "lucide-react";
import { Service } from "@/data/websiteServices";

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  const packages = [
    {
      name: "Basic",
      description: "5+ pages",
      price: "Contact for pricing",
      features: service.features.basic,
      admin: service.adminCapabilities.basic,
      bestFor: service.bestFor.basic,
      delivery: service.deliveryTime.basic,
    },
    {
      name: "Moderate",
      description: "10+ pages",
      price: "Contact for pricing",
      features: [...service.features.basic, ...service.features.moderate],
      admin: [...service.adminCapabilities.basic, ...service.adminCapabilities.moderate],
      bestFor: service.bestFor.moderate,
      delivery: service.deliveryTime.moderate,
    },
    {
      name: "Advanced",
      description: "15+ pages",
      price: "Contact for pricing",
      features: [...service.features.basic, ...service.features.moderate, ...service.features.advanced],
      admin: [...service.adminCapabilities.basic, ...service.adminCapabilities.moderate, ...service.adminCapabilities.advanced],
      bestFor: service.bestFor.advanced,
      delivery: service.deliveryTime.advanced,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {service.title}
          </DialogTitle>
          <p className="text-muted-foreground text-lg">{service.description}</p>
        </DialogHeader>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
            <TabsTrigger value="delivery">Delivery</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card key={pkg.name} className={index === 1 ? "border-primary shadow-glow" : ""}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      {index === 1 && <Badge variant="premium">Most Popular</Badge>}
                    </div>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary mt-4">
                      {pkg.price}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        Key Features
                      </h4>
                      <ul className="text-sm space-y-1">
                        {pkg.features.slice(0, 5).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                        {pkg.features.length > 5 && (
                          <li className="text-muted-foreground">
                            +{pkg.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    <Button 
                      variant={index === 1 ? "hero" : "default"} 
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      {pkg.name} Features
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="admin" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      {pkg.name} Admin
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.admin.map((capability, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      {pkg.name} Package
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Delivery Time</h4>
                      <p className="text-lg font-bold text-primary">{pkg.delivery}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Best For
                      </h4>
                      <ul className="space-y-1">
                        {pkg.bestFor.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;