import { Button } from "@/components/ui/button";
import { Check, Wrench, Database, ShieldCheck } from "lucide-react";

const packages = [
  {
    icon: Wrench,
    name: "Troubleshooting & Repair",
    price: "$179",
    period: "first 90 minutes",
    description: "Slow computers, virus removal, software issues, and general tech problems. Most issues can be resolved remotely—faster and more cost-effective. If hands-on help is needed, we'll confirm that during your free consultation.",
    features: [
      "Free 15-minute consultation first",
      "Remote support resolves most issues",
      "In-home visit only when required",
      "30-day follow-up support",
    ],
    popular: true,
  },
  {
    icon: Database,
    name: "Data Transfer & Recovery",
    price: "$249",
    period: "starting at",
    description: "Moving files to a new computer, recovering lost data, or setting up backups. We start with a free consultation to determine the best approach—remote or in-home.",
    features: [
      "Free consultation to assess needs",
      "Remote when possible, in-home when needed",
      "Photos, documents, music preserved",
      "Cloud backup setup included",
    ],
    popular: false,
  },
];

const ServicePackages = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div id="pricing" className="text-center max-w-3xl mx-auto mb-12 scroll-mt-24">
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-body-md text-muted-foreground">
            No hidden fees. No hourly surprises. You know exactly what you're paying before we start.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-2xl bg-card border-2 shadow-card transition-all duration-300 hover:shadow-elevated animate-fade-up ${
                pkg.popular ? "border-accent" : "border-border"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {pkg.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="font-display text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground ml-2">{pkg.period}</span>
              </div>

              <p className="text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success-light flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={pkg.popular ? "hero" : "outline"} size="lg" className="w-full">
                Book This Service
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Additional computers can be handled during the same visit. Scope and pricing are confirmed during the free consultation.
              </p>
            </div>
          ))}
        </div>

        {/* Remote-First Approach */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-primary-light rounded-xl border border-primary/20 p-6 text-center mb-6">
            <p className="text-foreground font-semibold text-lg mb-3">
              How Our Remote-First Approach Works
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We start with a free 15-minute consultation to determine whether remote or in-home support is the best fit. Many issues can be resolved remotely, which is faster and more cost-effective. If hands-on help is needed, we'll confirm that before scheduling an in-home visit.
            </p>
            <p className="text-muted-foreground text-sm mt-3 italic">
              Perfect for homeowners, work-from-home professionals, and short-term rental / Airbnb businesses.
            </p>
          </div>
        </div>

        {/* On-Site Fee Savings */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-success-light rounded-xl border border-success/30 p-6 text-center">
            <p className="text-foreground font-semibold text-lg mb-2">
              When you purchase either service package, the $150 on-site visit fee is waived.
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              For comparison, national services often charge $300 or more just for an on-site visit.
            </p>
            <p className="text-primary font-medium">
              Book today and put that savings toward actually fixing the problem.
            </p>
          </div>
        </div>

        {/* Service Guidelines */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">Service Guidelines (Applies to All Packages)</h3>
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

export default ServicePackages;
