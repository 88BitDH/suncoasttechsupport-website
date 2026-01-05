import { Zap, MessageCircle, DollarSign, Home } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Help When You Need It",
    description: "Remote support often starts same-day. In-home visits available within 24-48 hours when required.",
  },
  {
    icon: MessageCircle,
    title: "We Speak Your Language",
    description: "No confusing tech jargon. We explain everything in plain English so you understand what's happening.",
  },
  {
    icon: DollarSign,
    title: "Remote-First Saves You Money",
    description: "Remote support can save up to $150 compared to on-site visits. We only come in-home when it's truly needed.",
  },
  {
    icon: Home,
    title: "In-Home When Required",
    description: "If remote support isn't enough, we come to you. No unplugging everything and hauling your computer somewhere.",
  },
];

const Benefits = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            Why Homeowners, Remote Workers & Rental Hosts Choose Us
          </h2>
          <p className="text-body-md text-muted-foreground">
            We're not a big corporate call center. We're your neighbors, helping families, work-from-home professionals, and Airbnb hosts keep their tech running smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
