
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Lightbulb, Rocket, GraduationCap, TrendingUp } from "lucide-react";

const HowWeWorkSection = memo(() => {
  const steps = useMemo(() => [
    {
      icon: Lightbulb,
      title: "Discovery",
      description: "In the first week, we align your legal, compliance, IT, and business leaders to identify key challenges and define success. These insights shape a clear Solution Blueprint outlining scope, timelines, and expected ROI."
    },
    {
      icon: CheckCircle,
      title: "Proof of Concept",
      description: "We create a secure sandbox to test the platform with a representative set of your documents. This quick validation demonstrates accuracy, efficiency, and impact in a low-risk environment."
    },
    {
      icon: Rocket,
      title: "Enterprise Rollout", 
      description: "With proven results, we deploy the solution in your preferred hosting model—cloud, hybrid, or on-premises—integrate critical systems, validate security, and migrate initial data. Your solution goes live, ready for everyday use."
    },
    {
      icon: GraduationCap,
      title: "Training & Change Management",
      description: "We drive adoption with tailored training, clear communications, and real-time usage insights—helping your teams embrace new workflows and achieve sustainable efficiency gains."
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimisation",
      description: "Post-launch, a dedicated Customer Success Manager monitors key metrics, refines models, rolls out enhancements, and coordinates ongoing support. The platform evolves with your caseload and regulatory needs, freeing your team to focus on higher-value strategy."
    }
  ], []);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-6 md:mb-8">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              Our Proven Methodology
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 text-foreground">
              How We Work
              <br />
              <span className="text-gradient font-medium">With You</span>
            </h2>
            
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              A structured 5-phase approach that ensures successful AI transformation in your legal practice
            </p>
          </div>

          {/* Mobile-First Optimized Layout */}
          <div className="space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile Optimized Card */}
                <div className="bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-border/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Header with Icon and Number */}
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg">
                        <step.icon className="w-5 h-5 md:w-7 md:h-7" />
                      </div>
                      <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-1 md:py-2">
                    <div className="w-px h-4 md:h-8 bg-gradient-to-b from-primary/30 to-primary/10"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 md:mt-20"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-primary/20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-foreground">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
                Let's discuss how our proven methodology can accelerate your AI adoption journey.
              </p>
              <button 
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base lg:text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HowWeWorkSection.displayName = 'HowWeWorkSection';

export default HowWeWorkSection;
