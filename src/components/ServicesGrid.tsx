import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import { websiteServices, Service } from "@/data/websiteServices";

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Website Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites tailored for every industry. From educational institutions to healthcare providers, 
            we have the perfect solution for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ServicesGrid;