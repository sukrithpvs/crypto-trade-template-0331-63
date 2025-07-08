
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "How is your AI trained?",
    answer: "Mixed legal corpora, proprietary datasets, and human expert annotation ensure precision."
  },
  {
    question: "Can we deploy on-premises?",
    answer: "Yes. We offer cloud, hybrid, and air-gapped options."
  },
  {
    question: "Do end-users need to know any programming or prompt engineering?",
    answer: "No coding required. A point-and-click interface with guided prompts delivers results; power users can access advanced query and API endpoints."
  },
  {
    question: "What happens to our data if we cancel?",
    answer: "You choose: secure deletion with certification, encrypted export, or optional archival storage for a defined retention period."
  }
];

const FAQSection = () => {
  return (
    <section className="container px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Frequently Asked
            <br />
            <span className="text-gradient font-medium">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get answers to common questions about our AI legal solutions
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FAQSection;
