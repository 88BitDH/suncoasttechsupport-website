import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Suncoast Tech Support" className="h-10 w-auto" />
              <h3 className="font-display text-xl font-bold">Suncoast Tech Support</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Friendly, local tech help for homes and small offices in the Clearwater area. Veteran-owned by a Desert Storm Army veteran with 20+ years enterprise IT experience. Licensed and insured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <a href="tel:+17736698868" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  773.669.8868
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:support@suncoasttechsupport.net" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  support@suncoasttechsupport.net
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Serving Clearwater & Pinellas County
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
                  <br />
                  <span className="text-primary-foreground/50 text-xs">Emergency calls as needed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Suncoast Tech Support. All rights reserved.</p>
          <p className="mt-2 text-xs">Suncoast Tech Support is a service brand of 88Bit Diamond Hands LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
