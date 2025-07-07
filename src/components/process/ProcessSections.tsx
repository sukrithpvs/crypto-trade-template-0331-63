
import { motion } from "framer-motion";

const ProcessSections = () => {
  const processes = [
    {
      title: "Discovery / Ideation Phase",
      description: "We reveal revelations and mold brands, websites, and products by engaging in a process of discovery and scrutiny",
      items: [
        "User of the Product",
        "Competitor & Market Analysis", 
        "Business Goals"
      ],
      number: "01"
    },
    {
      title: "Design / Visual Element",
      description: "We narrate distinct brand narratives, create exceptional visual personas, and sculpt user-centric digital journeys.",
      items: [
        "Ideation & Wireframe",
        "Style Guide & Component Design",
        "Visual Design & Prototype"
      ],
      number: "02"
    },
    {
      title: "Build / Product Development", 
      description: "Supported by cutting-edge technologies, we construct websites and products that enhance functionality, ensure reliability, and adapt over time.",
      items: [
        "Frontend Development",
        "Backend Development",
        "Test & Publish"
      ],
      number: "03"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-foreground tracking-tight">
            Our Three-Phase
            <br />
            <span className="text-gradient font-normal">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to transforming your ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 border border-border hover:glass-hover transition-all duration-500 relative overflow-hidden h-full">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Number and Title Section */}
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-xl">
                          {process.number}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                      </div>
                      <h3 className="text-2xl font-light text-foreground mb-4 leading-tight">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {process.description}
                      </p>
                    </div>

                    {/* Items Section */}
                    <div className="flex-1">
                      <div className="space-y-3">
                        {process.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="bg-background/30 backdrop-blur-sm rounded-xl p-4 border border-border/30 hover:border-primary/30 transition-all duration-300">
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="text-foreground font-medium text-sm">{item}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Line for desktop */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-primary/30 z-20"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life through our proven process.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="button-gradient px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSections;
