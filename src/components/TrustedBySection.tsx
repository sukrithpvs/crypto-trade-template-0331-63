
import { motion } from "framer-motion";

const TrustedBySection = () => {
  const logos = [
    "Baker McKenzie",
    "Clifford Chance", 
    "Latham & Watkins",
    "Skadden",
    "Kirkland & Ellis",
    "White & Case"
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading law firms worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
