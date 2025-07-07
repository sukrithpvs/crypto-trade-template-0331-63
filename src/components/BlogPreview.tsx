
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuredBlogs = [
  {
    id: 1,
    title: "Understanding RAG: Revolutionizing AI-Powered Legal Research",
    excerpt: "Retrieval-Augmented Generation (RAG) is transforming how legal professionals access and process information. Learn how this cutting-edge AI technique combines the power of large language models with real-time data retrieval.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Technology"
  },
  {
    id: 2,
    title: "Implementing RAG in Legal Practice: A Step-by-Step Guide",
    excerpt: "Discover the practical steps to integrate Retrieval-Augmented Generation into your legal workflow. From data preparation to system deployment, we cover everything you need to know.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Implementation"
  },
  {
    id: 3,
    title: "RAG vs. Traditional Legal Research: Performance Comparison",
    excerpt: "A comprehensive analysis comparing RAG-powered legal research with traditional methods. See how modern AI approaches stack up against conventional legal research techniques.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Analysis"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments in AI-powered legal technology and discover how RAG is transforming legal practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredBlogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium w-fit mb-3">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-sm text-primary hover:text-primary group-hover:translate-x-1 transition-all"
                    onClick={() => window.location.href = `/blogs/${post.id}`}
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <button
            className="bg-[#2eb661] text-white px-6 py-3 text-sm font-medium rounded-full hover:bg-[#28a155] transition-colors flex items-center gap-2"
            onClick={() => window.location.href = '/blogs'}
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
