import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calendar, ShieldCheck } from "lucide-react";
import { CALENDLY_URL } from "@/config";

const ContactSection = () => {
  const PHONE_TEL = "tel:+17274964668";
  const PHONE_DISPLAY = "7274964668";

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50 scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
              Let's Talk About Your Tech Problems
            </h2>
            <p className="text-body-md text-muted-foreground mb-8">
              Whether you have a quick question or need to schedule a visit,
              we're here to help. Reach out however works best for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <a
                    href={PHONE_TEL}
                    className="text-lg text-primary font-medium hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-sm text-muted-foreground">Mon-Sat, 8am-6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <a
                    href="mailto:support@suncoasttechsupport.net"
                    className="text-lg text-primary font-medium hover:underline"
                  >
                    support@suncoasttechsupport.net
                  </a>
                  <p className="text-sm text-muted-foreground">We reply within a few hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                  <p className="text-muted-foreground">
                    Clearwater, Palm Harbor, Dunedin, Safety Harbor, Largo & surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    Emergency calls handled as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-card rounded-2xl border border-border shadow-card p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Book Your Free Call
              </h3>
              <p className="text-muted-foreground">
                Start with a free 15-minute consultation. We'll see if remote support can help—or
                schedule an in-home visit if needed.
              </p>
            </div>

            {/* Calendly CTA (replaces non-functional form submission) */}
            <div className="space-y-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free 15-minute call on Calendly"
                className="block"
              >
                <Button variant="hero" size="lg" className="w-full">
                  Request Free Call
                </Button>
              </a>

              <p className="text-xs text-center text-muted-foreground">
                Choose a time that works for you. You’ll get an instant confirmation.
              </p>

              <p className="text-xs text-center text-muted-foreground/80 mt-2 border-t border-border pt-3">
                Scope and pricing are confirmed during the free call. Please do not send passwords.
              </p>
            </div>
          </div>
        </div>

        {/* Service Guidelines */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Service Guidelines (Applies to All Packages)
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Scope and pricing are confirmed before work begins
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Remote support is preferred when possible
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Same-day help when scheduling allows (not guaranteed)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Data recovery is best-effort and depends on device condition and encryption
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Please do not send passwords via forms or text
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                Recycling and disposal are tied to a purchased service package
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
