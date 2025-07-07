
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FAQSection } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import BlogPreview from "@/components/BlogPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-32"
      >        
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[0.95] font-serif">
              <span className="text-foreground">
                <TextGenerateEffect words="AI That" />
              </span>
              <br />
              <span className="text-foreground font-normal bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                <TextGenerateEffect words="Redefines Legal Workflows" />
              </span>
            </h1>

            {/* Value Proposition Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 p-8 glass rounded-2xl max-w-5xl mx-auto border border-border"
            >
              <p className="text-lg md:text-xl text-foreground/90 font-medium italic leading-relaxed">
                "Modern legal teams cut review time by 40%, reduce costs by 25%, and reach 94% accuracy with AI. Join the 79% already transforming client service with intelligent automation."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <button
                className="bg-[#2eb661] text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-[#28a155] transition-colors flex items-center gap-2"
                onClick={() => window.location.href = '/contact'}
              >
                Transform Your Practice Today
                <ArrowRight className="w-4 h-4" />
              </button>
              <Button 
                size="lg" 
                variant="link" 
                className="text-foreground text-lg hover:text-primary"
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <StatsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* FAQ Section */}
      <div id="faq" className="bg-background">
        <FAQSection />
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
