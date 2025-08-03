import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">Y</span>
              </div>
              <h3 className="text-xl font-bold">Yukta Applications</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Professional website services for every business need. From small startups to large enterprises, 
              we deliver exceptional web solutions.
            </p>
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground/20">
              Professional Web Development
            </Badge>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>School/College Websites</li>
              <li>E-Commerce Platforms</li>
              <li>Healthcare Solutions</li>
              <li>Business Websites</li>
              <li>NGO Platforms</li>
              <li>Travel Agencies</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Packages</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Basic (5+ pages)</li>
              <li>Moderate (10+ pages)</li>
              <li>Advanced (15+ pages)</li>
              <li>Custom Solutions</li>
              <li>Maintenance Plans</li>
              <li>Support Services</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>contact@yukta-apps.com</li>
              <li>+91 98765 43210</li>
              <li>www.yukta-apps.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Yukta Applications. All rights reserved. | Professional Website Development Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;