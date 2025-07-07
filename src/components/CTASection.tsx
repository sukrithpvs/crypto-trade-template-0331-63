
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6 text-foreground tracking-tight">
            Ready to Transform
            <br />
            <span className="text-gradient font-medium">Your Legal Practice?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who have already revolutionized their workflows with AI.
          </p>
          
          <div className="flex justify-center">
            <button
              className="bg-[#2eb661] text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-[#28a155] transition-colors flex items-center gap-2"
              onClick={() => window.location.href = '/contact'}
            >
              Reach Out to Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
