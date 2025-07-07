
import { motion } from "framer-motion";

const ProcessHero = () => {
  return (
    <section className="relative container px-4 pt-40 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[0.95] font-serif text-foreground"
        >
          Our Design
          <br />
          <span className="text-gradient font-normal">Process</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          We are excited to take on your new project and help you build something amazing!
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessHero;
