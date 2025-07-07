
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight font-serif">
            <span className="text-foreground">About</span>
            <br />
            <span className="text-gradient font-medium">Deep Sense</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovators in legal artificial intelligence, founded by technology experts who understand the unique challenges of modern legal practice.
          </p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Our Story</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are innovators in legal artificial intelligence, founded by technology experts who understand the unique challenges faced by modern law firms and corporate legal departments. Recognizing the growing need for intelligent, ethical solutions, we set out to empower legal teams to work smarter, enhance client service, and stay ahead in an ever-evolving industry.
            </p>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-medium text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to advanced AI tools that empower legal professionals to focus on high-value strategic work by automating routine tasks that consume valuable billable hours.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-medium text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted AI partner for legal professionals worldwide, redefining how legal services are delivered through innovative, secure, and dependable artificial intelligence solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Legal Documents Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
