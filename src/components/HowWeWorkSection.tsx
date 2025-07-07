
import { motion } from "framer-motion";

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
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight">
              How We Work
              <br />
              <span className="text-gradient font-normal">With You</span>
            </h2>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col lg:flex-row items-start gap-8 p-8 glass rounded-2xl border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-semibold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
