import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, ShoppingCart, Building, MapPin, Stethoscope } from "lucide-react";
import { Service } from "@/data/websiteServices";

const iconMap = {
  GraduationCap,
  Heart,
  ShoppingCart,
  Building,
  MapPin,
  Stethoscope,
};

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
}

const ServiceCard = ({ service, onLearnMore }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <Card className="group cursor-pointer transition-smooth hover:scale-105" onClick={() => onLearnMore(service)}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:bg-gradient-accent transition-smooth">
            <IconComponent className="h-6 w-6 text-primary-foreground" />
          </div>
          <Badge variant="success">{service.id}</Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2 text-primary">Key Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {service.features.basic.slice(0, 3).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm">
              <span className="text-muted-foreground">Delivery: </span>
              <span className="font-medium text-primary">{service.deliveryTime.basic}</span>
            </div>
            <Button variant="ghost" size="sm" className="group-hover:text-primary">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;