import { Button } from "@/components/ui/button";
import { Phone, Calendar, Clock } from "lucide-react";
import { CALENDLY_URL } from "@/config";

const UrgencyCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">
              Limited Availability This Week
            </span>
          </div>

          <h2 className="font-display text-display-md md:text-display-lg mb-4">
            Ready to Get Your Tech Working Again?
          </h2>

          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute phone call. We'll determine if remote support
            can solve your issue—or if an in-home visit is needed. No pressure,
            no sales pitch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* FIX: Calendly booking link (was #contact) */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              aria-label="Book a free 15-minute call on Calendly"
            >
              <Button variant="hero" size="xl" className="w-full">
                <Calendar className="w-5 h-5" />
                Book Free 15-Minute Call
              </Button>
            </a>

            <a href="tel:+17736698868">
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Phone className="w-5 h-5" />
                773.669.8868
              </Button>
            </a>
          </div>

          <p className="text-sm opacity-70 mt-6">
            We typically have 3–5 appointment slots available each week. Book
            now to secure yours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;
