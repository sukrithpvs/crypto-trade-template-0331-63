
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Managing Partner",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Deep Sense Solutions transformed our document review process. What used to take days now takes hours, allowing our attorneys to focus on complex legal strategy and client relationships."
  },
  {
    name: "Michael Thompson",
    role: "General Counsel",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The AI-powered contract analysis has revolutionized our compliance processes. We can now identify risks and opportunities that would have taken weeks to discover manually."
  },
  {
    name: "Jennifer Chen",
    role: "Senior Associate",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The training and support from Deep Sense Solutions made the transition seamless. Our billable hours are now spent on high-value work, not repetitive document processing."
  },
  {
    name: "David Rodriguez",
    role: "Legal Operations Director",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Implementation was smooth and secure. The platform integrates perfectly with our existing systems while maintaining the highest security standards our clients expect."
  },
  {
    name: "Emily Watson",
    role: "Corporate Counsel",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The continuous optimization approach means the AI gets smarter with our specific legal needs. It's like having an intelligent assistant that learns our practice areas."
  },
  {
    name: "Robert Johnson",
    role: "Litigation Partner",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Discovery processes that used to overwhelm our team are now manageable and efficient. The AI identifies relevant documents with remarkable accuracy."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-normal mb-4">Trusted by Legal Professionals</h2>
          <p className="text-muted-foreground text-lg">
            Join law firms and legal departments transforming their practice with AI
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
