
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DesignPlans = () => {
  const plans = [
    {
      name: "Early MVP",
      features: [
        "Your Ideation",
        "Dedicated Designer", 
        "2 Updates in Week",
        "Support on Iterations",
        "Upto 15 Pages",
        "On-time Delivery"
      ]
    },
    {
      name: "Startup",
      features: [
        "Custom Process",
        "Weekly Call (if Needed)",
        "Alternate Updates",
        "Part-Time PM",
        "Dedicated Designer",
        "On-time Delivery"
      ]
    },
    {
      name: "Enterprise",
      features: [
        "Agile Design Process",
        "Weekly Call",
        "Daily Updates",
        "Dedicated PM",
        "Dedicated Team",
        "On-time Delivery"
      ],
      isPopular: true
    },
    {
      name: "Test Task",
      features: [
        "Pre-Paid",
        "No Iterations",
        "Source File",
        "Weekly Update",
        "Dedicated Designer",
        "On-time Delivery"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight">
            Design <span className="text-gradient font-normal">Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            It is just a default services in the fixed cost, you can customise any plan as per your need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={`h-full glass border-border hover:glass-hover transition-all duration-300 ${
                plan.isPopular ? 'border-primary border-2' : ''
              }`}>
                <CardHeader className="pb-4">
                  {plan.isPopular && (
                    <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-2">
                      Most Popular
                    </span>
                  )}
                  <CardTitle className="text-xl font-medium text-foreground">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="button-gradient w-full hover:opacity-90 transition-opacity"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request for Price
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPlans;
