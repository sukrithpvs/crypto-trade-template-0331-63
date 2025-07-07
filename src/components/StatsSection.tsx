
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: "40%",
      label: "Reduction in Review Time",
      description: "Average time saved on document review processes"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      value: "25%",
      label: "Cost Reduction",
      description: "Lower operational costs through automation"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      value: "94%",
      label: "Accuracy Rate",
      description: "AI-powered precision in legal document analysis"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      value: "79%",
      label: "Already Adopting AI",
      description: "Legal teams embracing intelligent automation"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by Leading Legal Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from firms that have transformed their practice with AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:glass-hover transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
