
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/data/blogPosts";

const Blogs = () => {
  const blogPosts = getBlogPosts();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-serif leading-tight pb-2">
              Legal AI Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the intersection of artificial intelligence and legal practice through in-depth analysis and practical insights.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground mb-6">
                      <p className="leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <button
                      className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-[#2eb661] transition-colors flex items-center gap-2"
                      onClick={() => window.location.href = `/blogs/${post.id}`}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
