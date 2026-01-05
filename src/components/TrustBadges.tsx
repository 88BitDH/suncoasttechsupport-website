import { Shield, Award, MapPin, Star } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "Veteran-Owned • Desert Storm Army Veteran" },
  { icon: MapPin, label: "Local Clearwater" },
  { icon: Star, label: "20+ Years Enterprise IT" },
];

const TrustBadges = () => {
  return (
    <section id="about" className="py-8 border-y border-border bg-card scroll-mt-20">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 text-muted-foreground animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success-light">
                <badge.icon className="w-5 h-5 text-success" />
              </div>
              <span className="font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
