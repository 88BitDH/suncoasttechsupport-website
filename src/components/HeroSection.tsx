import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tech-support.jpg";
import { CALENDLY_URL } from "@/config";

const HeroSection = () => {
  return (
    <section id="top" className="relative gradient-hero overflow-hidden">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-light text-success text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Serving Clearwater & Pinellas County
            </div>

            <h1 className="font-display text-display-lg md:text-display-xl text-foreground mb-6 text-balance">
              Tech Problems Solved—
              <span className="text-primary">Remotely or In-Home</span>, On Your
              Schedule
            </h1>

            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Friendly, patient tech support for homeowners, remote workers, and
              short-term rental hosts. Most issues are resolved remotely—saving
              you time and up to $150. No jargon. No judgment. Just help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* FIX: Calendly booking link (was #contact) */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free 15-minute call on Calendly"
              >
                <Button variant="hero" size="xl">
                  <Calendar className="w-5 h-5" />
                  Book Free 15-Minute Call
                </Button>
              </a>

              <a href="#faq">
                <Button variant="heroOutline" size="lg">
                  See How We Help
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              ⭐ Limited slots available this week — book now to secure your spot
            </p>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Friendly tech support specialist helping a customer at their home in Clearwater, Florida"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card p-4 border border-border hidden md:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+ Homes</p>
                  <p className="text-sm text-muted-foreground">Helped locally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.8333C96 41.6667 192 33.3333 288 29.1667C384 25 480 25 576 33.3333C672 41.6667 768 58.3333 864 62.5C960 66.6667 1056 58.3333 1152 50C1248 41.6667 1344 33.3333 1392 29.1667L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
