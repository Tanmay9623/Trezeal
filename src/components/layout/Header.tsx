import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500 w-full",
        isScrolled
          ? "top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl glass py-3 rounded-2xl shadow-lg border border-white/10 backdrop-blur-xl"
          : "top-0 left-0 right-0 bg-transparent py-5"
      )}
    >
      <div className="w-full px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg shadow-md">
              T
            </div> */}
            <span className="font-display text-xl font-bold text-foreground">
            <img 
                src={theme === "dark" ? "/bgg.png" : "/bg.png"} 
                alt="TREZEAL Logo" 
                className="h-8 w-auto" 
              />
              
               
           
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className={cn(
                "p-2 rounded-xl transition-all duration-300 border",
                theme === "dark"
                  ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  : "bg-black/10 border-black/20 text-gray-800 hover:bg-black/20"
              )}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => window.location.href = "/contact"}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Button
                variant="default"
                size="lg"
                className="w-full"
                onClick={() => { setIsMobileMenuOpen(false); window.location.href = "/contact"; }}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
