
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Users, Lightbulb, Rocket, GraduationCap, TrendingUp } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery / Ideation Phase",
      description: "We align stakeholders to identify core challenges, goals, and opportunities by engaging in collaborative discussions and analysis.",
      points: [
        "Key Stakeholders & Decision Makers",
        "Pain Points & Operational Challenges", 
        "Success Metrics & ROI Expectations"
      ]
    },
    {
      icon: CheckCircle,
      title: "Proof of Concept Phase",
      description: "We create a secure environment to test the platform, allowing quick validation of its accuracy and efficiency.",
      points: [
        "Sandbox Environment Setup",
        "Document Processing & Testing",
        "Performance & Accuracy Validation"
      ]
    },
    {
      icon: Rocket,
      title: "Enterprise Rollout Phase", 
      description: "We deploy the solution securely across your preferred infrastructure, ensuring smooth system integration.",
      points: [
        "Cloud, Hybrid, or On-Premises Deployment",
        "System Integration & Security Validation",
        "Initial Data Migration & Go-Live"
      ]
    },
    {
      icon: GraduationCap,
      title: "Training & Change Management Phase",
      description: "We focus on enabling your teams through training, communication, and support to drive adoption and productivity.",
      points: [
        "Tailored User Training Sessions",
        "Clear Communication Plans",
        "Adoption Tracking & Feedback Loops"
      ]
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimisation Phase",
      description: "We ensure long-term success through ongoing monitoring, support, and enhancement of the solution.",
      points: [
        "Dedicated Customer Success Manager",
        "Continuous Model Improvements",
        "Regular Updates & Compliance Adjustments"
      ]
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

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>
            
            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-16 gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
                      <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                        <div className="text-4xl font-bold text-primary/30">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0"></div>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative lg:flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block"></div>
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
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
              <h3 className="text-3xl font-semibold mb-4 text-foreground">
                Ready to Transform Your Practice?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our proven methodology can accelerate your AI adoption journey.
              </p>
              <button 
                className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-3 mx-auto hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
