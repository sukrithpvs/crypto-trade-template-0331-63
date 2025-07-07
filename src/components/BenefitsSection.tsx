
import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, CheckCircle, Globe } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Processing",
      description: "Process hundreds of documents in minutes, not hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with legal standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless integration with existing workflows and teams"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "Trusted by top-tier law firms and legal departments"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Human oversight with AI precision for perfect results"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Compliance",
      description: "Stay compliant across multiple jurisdictions automatically"
    }
  ];

  return (
    <section className="container px-4 py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Why Legal Teams
            <br />
            <span className="text-gradient font-medium">Choose Deep Sense</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of legal work with AI that understands the complexity and precision required in legal practice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-8 hover:glass-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;
