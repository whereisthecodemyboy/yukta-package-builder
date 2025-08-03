import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">Y</span>
          </div>
          <h1 className="text-xl font-bold text-primary">Yukta Applications</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-smooth">
            Services
          </a>
          <a href="#packages" className="text-sm font-medium hover:text-primary transition-smooth">
            Packages
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-smooth">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <Button variant="hero" size="sm" className="hidden md:flex">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;