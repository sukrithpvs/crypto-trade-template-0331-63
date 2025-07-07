
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
      ]
    },
    {
      title: "Design / Visual Element",
      description: "We narrate distinct brand narratives, create exceptional visual personas, and sculpt user-centric digital journeys.",
      items: [
        "Ideation & Wireframe",
        "Style Guide & Component Design",
        "Visual Design & Prototype"
      ]
    },
    {
      title: "Build / Product Development", 
      description: "Supported by cutting-edge technologies, we construct websites and products that enhance functionality, ensure reliability, and adapt over time.",
      items: [
        "Frontend Development",
        "Backend Development",
        "Test & Publish"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 md:p-12 border border-border hover:glass-hover transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-tight">
                    {process.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <ul className="space-y-4">
                    {process.items.map((item, itemIndex) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSections;
