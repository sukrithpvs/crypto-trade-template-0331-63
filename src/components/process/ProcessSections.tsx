
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
    <section className="py-32 bg-background relative overflow-hidden">
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
          className="text-center mb-20"
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

        <div className="max-w-6xl mx-auto">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Connection Line */}
              {index < processes.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-px h-16 bg-gradient-to-b from-primary to-transparent z-0"></div>
              )}
              
              <div className="glass rounded-3xl p-8 md:p-12 border border-border hover:glass-hover transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    {/* Number and Title Section */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-xl">
                          {process.number}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 leading-tight">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {/* Items Section */}
                    <div className="lg:w-2/3">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {process.items.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/70 group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                              </div>
                              <span className="text-foreground font-medium">{item}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
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
