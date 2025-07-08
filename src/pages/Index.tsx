
import { Suspense, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import OptimizedLogoCarousel from "@/components/OptimizedLogoCarousel";
import {
  LazyHowWeWorkSection,
  LazyBenefitsSection,
  LazyStatsSection,
  LazyBlogPreview,
  LazyFAQSection,
  LazyCTASection
} from "@/components/LazyComponents";

// Optimized Loading component
const SectionLoader = memo(() => (
  <div className="py-12 md:py-24 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-primary"></div>
  </div>
));

SectionLoader.displayName = 'SectionLoader';

const Index = () => {
  const handleContactClick = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleLearnMoreClick = useCallback(() => {
    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section - Optimized */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative container px-4 pt-24 md:pt-40 pb-16 md:pb-32"
      >        
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light mb-6 md:mb-8 tracking-tight leading-[0.95] font-serif">
              <span className="text-foreground">
                <TextGenerateEffect words="AI That" />
              </span>
              <br />
              <span className="text-foreground font-normal bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                <TextGenerateEffect words="Redefines Legal Workflows" />
              </span>
            </h1>

            {/* Value Proposition Quote - Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 md:mb-12 p-4 md:p-8 glass rounded-xl md:rounded-2xl max-w-5xl mx-auto border border-border"
            >
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 font-medium italic leading-relaxed">
                "Modern legal teams cut review time by 40%, reduce costs by 25%, and reach 94% accuracy with AI. Join the 79% already transforming client service with intelligent automation."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center"
            >
              <button
                className="bg-[#2eb661] text-white px-5 md:px-6 py-2.5 md:py-3 text-sm font-medium rounded-full hover:bg-[#28a155] transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                onClick={handleContactClick}
              >
                Transform Your Practice Today
                <ArrowRight className="w-4 h-4" />
              </button>
              <Button 
                size="lg" 
                variant="link" 
                className="text-foreground text-base md:text-lg hover:text-primary w-full sm:w-auto"
                onClick={handleLearnMoreClick}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Logo Carousel */}
      <OptimizedLogoCarousel />

      {/* Lazy-loaded sections with optimized Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <LazyStatsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazyBenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazyHowWeWorkSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LazyBlogPreview />
      </Suspense>

      {/* FAQ Section */}
      <div id="faq" className="bg-background">
        <Suspense fallback={<SectionLoader />}>
          <LazyFAQSection />
        </Suspense>
      </div>

      {/* CTA Section */}
      <Suspense fallback={<SectionLoader />}>
        <LazyCTASection />
      </Suspense>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
