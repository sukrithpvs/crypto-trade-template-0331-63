
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/process/ProcessHero";
import ProcessSections from "@/components/process/ProcessSections";
import DesignPlans from "@/components/process/DesignPlans";
import ProcessStats from "@/components/process/ProcessStats";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <ProcessHero />
      
      {/* Main Process Sections */}
      <ProcessSections />
      
      {/* Design Plans Section */}
      <DesignPlans />
      
      {/* Statistics Section */}
      <ProcessStats />
      
      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default OurProcess;
