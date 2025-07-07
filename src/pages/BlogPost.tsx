import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getBlogPost } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = getBlogPost(Number(id));
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container px-4 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Button onClick={() => navigate('/blogs')}>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blogs
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blogs')}
            className="mb-8 hover:bg-accent"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Articles
          </Button>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={i} className="text-xl font-semibold text-foreground mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('**') && paragraph.includes(':**')) {
                  const [title, ...content] = paragraph.split(':**');
                  return (
                    <div key={i} className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {title.replace(/\*\*/g, '')}:
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {content.join(':**')}
                      </p>
                    </div>
                  );
                } else if (paragraph.match(/^\d+\./)) {
                  return (
                    <div key={i} className="mb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={i} className="list-disc list-inside mb-4 text-muted-foreground space-y-1">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <p key={i} className="mb-6 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </article>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;