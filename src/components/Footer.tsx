
import { Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20">
      <div className="container px-4">
        <div className="glass rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <h3 className="font-medium text-lg">Deep Sense</h3>
              <p className="text-sm text-muted-foreground">
                Empowering legal professionals with advanced AI technology.
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Deep Sense. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
