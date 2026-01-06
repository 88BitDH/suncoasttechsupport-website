import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // GitHub Pages + custom domain safe path (served from /public/logo.png)
  const logoSrc = "/logo.png";

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2"
            onClick={(e) => {
              // keep hash navigation consistent; also supports smooth scroll
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMobileMenu();
              history.replaceState(null, "", "#top");
            }}
          >
            <img
              src={logoSrc}
              alt="Suncoast Tech Support"
              className="h-8 sm:h-9 md:h-10 w-auto"
              loading="eager"
              decoding="async"
            />
            <div className="hidden sm:block">
              <span className="font-display text-lg font-bold text-foreground">
                Suncoast
              </span>
              <span className="font-display text-lg font-bold text-primary ml-1">
                Tech Support
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+17736698868"
              className="hidden lg:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">773.669.8868</span>
            </a>

            <a href="#contact" onClick={closeMobileMenu}>
              <Button variant="hero" size="sm" className="hidden sm:flex">
                <Calendar className="w-4 h-4" />
                Book Free Call
              </Button>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-foreground font-medium py-2"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="text-foreground font-medium py-2"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-foreground font-medium py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="#faq"
                className="text-foreground font-medium py-2"
                onClick={closeMobileMenu}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-foreground font-medium py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>

              <a href="#contact" onClick={closeMobileMenu}>
                <Button variant="hero" size="lg" className="mt-2 w-full">
                  <Calendar className="w-4 h-4" />
                  Book Free Call
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
