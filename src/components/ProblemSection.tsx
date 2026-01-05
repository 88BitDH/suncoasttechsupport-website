import { Wifi, HardDrive, Clock, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Computer Running Slow?",
    description: "You shouldn't have to wait minutes for your computer to start. We'll get it running like new again.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Keeps Dropping?",
    description: "Tired of buffering and dead zones? We'll fix your home network so it works in every room.",
  },
  {
    icon: HardDrive,
    title: "Worried About Losing Photos?",
    description: "Your family photos and important files are precious. We'll back them up safely so you never lose them.",
  },
  {
    icon: AlertCircle,
    title: "Confused by Error Messages?",
    description: "Those scary pop-ups don't have to be scary. We explain everything in plain English and fix it fast.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            We Know How Frustrating Tech Problems Can Be
          </h2>
          <p className="text-body-md text-muted-foreground">
            You just want things to work. We get it—and we're here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <problem.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
