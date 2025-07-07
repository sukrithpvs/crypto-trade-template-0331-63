
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      title: "Discovery",
      description: "In the first week, we align your legal, compliance, IT, and business leaders to identify key challenges and define success. These insights shape a clear Solution Blueprint outlining scope, timelines, and expected ROI."
    },
    {
      title: "Proof of Concept",
      description: "We create a secure sandbox to test the platform with a representative set of your documents. This quick validation demonstrates accuracy, efficiency, and impact in a low-risk environment."
    },
    {
      title: "Enterprise Rollout",
      description: "With proven results, we deploy the solution in your preferred hosting model—cloud, hybrid, or on-premises—integrate critical systems, validate security, and migrate initial data. Your solution goes live, ready for everyday use."
    },
    {
      title: "Training & Change Management",
      description: "We drive adoption with tailored training, clear communications, and real-time usage insights—helping your teams embrace new workflows and achieve sustainable efficiency gains."
    },
    {
      title: "Continuous Optimisation",
      description: "Post-launch, a dedicated Customer Success Manager monitors key metrics, refines models, rolls out enhancements, and coordinates ongoing support. The platform evolves with your caseload and regulatory needs, freeing your team to focus on higher-value strategy."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Our Proven Process
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground tracking-tight">
              How We Work
              <br />
              <span className="text-gradient font-normal">With You</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From discovery to optimization, our structured approach ensures successful AI adoption in your legal practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}
                
                <div className="relative h-full bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/5">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 mx-auto">
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
