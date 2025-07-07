
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ProcessStats = () => {
  const [count, setCount] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= 32) {
            clearInterval(interval);
            return 32;
          }
          return prev + 1;
        });
      }, 50);
    }, 500);

    const revenueTimer = setTimeout(() => {
      const revenueInterval = setInterval(() => {
        setRevenue(prev => {
          if (prev >= 158.85) {
            clearInterval(revenueInterval);
            return 158.85;
          }
          return prev + 5;
        });
      }, 30);
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(revenueTimer);
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* 32% Statistic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-8xl md:text-9xl font-bold text-foreground mb-6">
              {count}%
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              On an average, our efforts led to a remarkable increase in the company's user base, 
              witnessing a growth rate of 32%.
            </p>
          </motion.div>

          {/* Revenue Statistic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-6xl md:text-7xl font-bold text-gradient mb-4">
              ${revenue.toFixed(2)}M
            </div>
            <p className="text-lg text-muted-foreground">
              (We helped our clients to raise fund)
            </p>
          </motion.div>

          {/* Client Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-foreground">Mvp Stage Level, Small Medium, Early Startup</span>
                <span className="text-2xl font-bold text-primary">70%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-primary h-3 rounded-full"
                ></motion.div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg text-foreground">Medium, Fortune 500</span>
                <span className="text-2xl font-bold text-primary">30%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-primary/70 h-3 rounded-full"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStats;
