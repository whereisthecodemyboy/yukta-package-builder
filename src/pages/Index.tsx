import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PackageComparison from "@/components/PackageComparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesGrid />
      <PackageComparison />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
