import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
export const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="font-display text-xl font-bold text-foreground">
                <img
                src={theme === "dark" ? "/bgg.png" : "/black.png"}
                alt="TREZEAL Logo"
                className="animate-pulse-3d"
                style={{ height: "32px", width: "auto", display: "block" }}
              />
              </div>
              <span className="font-display text-xl font-bold">TREZEAL</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Enterprise technology solutions. Software, web development, AI & industrial automation.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/trezeal/?viewAsMember=true" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586432185159" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/trezeal_/" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#web" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services#software" className="text-muted-foreground hover:text-primary transition-colors">Software Development</Link></li>
              <li><Link to="/services#ai" className="text-muted-foreground hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services#business" className="text-muted-foreground hover:text-primary transition-colors">Business Solutions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@trezeal.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 9623412734
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Trezeal Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
