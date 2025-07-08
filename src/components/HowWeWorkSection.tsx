
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Lightbulb, Rocket, GraduationCap, TrendingUp } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
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
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Users className="w-4 h-4" />
              Our Proven Methodology
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
              How We Work
              <br />
              <span className="text-gradient font-medium">With You</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A structured 5-phase approach that ensures successful AI transformation in your legal practice
            </p>
          </div>

          {/* Timeline - Desktop Layout */}
          <div className="relative hidden lg:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
                      <div className="flex items-center gap-4 mb-6 justify-start">
                        <div className="text-4xl font-bold text-primary/30">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Mobile Card */}
                  <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    {/* Header with Icon and Number */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-lg">
                          <step.icon className="w-7 h-7" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connection Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-primary/10"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 lg:p-12 border border-primary/20">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-foreground">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-muted-foreground mb-6 lg:mb-8 text-base lg:text-lg max-w-2xl mx-auto">
                Let's discuss how our proven methodology can accelerate your AI adoption journey.
              </p>
              <button 
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium text-base lg:text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Transformation
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
