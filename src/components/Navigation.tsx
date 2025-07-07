
import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'faq') {
      // Check if we're on the home page
      if (window.location.pathname === '/') {
        const faqSection = document.getElementById('faq');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page and then scroll to FAQ
        window.location.href = '/#faq';
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "About", href: "/about", isExternal: true },
    { name: "Our Process", href: "/our-process", isExternal: true },
    { name: "Blogs", href: "/blogs", isExternal: true },
    { name: "FAQ", href: "#faq", onClick: () => scrollToSection('faq') },
    { name: "Contact", href: "/contact", isExternal: true },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled 
          ? "h-14 bg-background/40 backdrop-blur-xl border border-border scale-95 w-[90%] max-w-2xl" 
          : "h-14 bg-background/80 backdrop-blur-xl border border-border w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <a 
            href="/"
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Command className="w-5 h-5 text-primary" />
            <span className="font-bold text-base text-foreground">Deep Sense</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (!item.isExternal) {
                    e.preventDefault();
                    if (item.onClick) {
                      item.onClick();
                    }
                  }
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass border-border">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background border-border">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      onClick={(e) => {
                        if (!item.isExternal) {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          if (item.onClick) {
                            item.onClick();
                          }
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
