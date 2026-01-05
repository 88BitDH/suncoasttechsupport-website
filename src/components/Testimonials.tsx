import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was so worried about losing 30 years of family photos. They saved everything and showed me how to keep them safe. Absolute lifesavers!",
    author: "Margaret H.",
    location: "Clearwater Beach",
    rating: 5,
  },
  {
    quote: "Finally, someone who doesn't talk down to me! He explained everything in words I could understand and fixed my computer in one visit.",
    author: "Robert T.",
    location: "Palm Harbor",
    rating: 5,
  },
  {
    quote: "My Wi-Fi works in every room now, even the lanai. Should have called them months ago instead of fighting with it myself!",
    author: "Susan M.",
    location: "Dunedin",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-display-md md:text-display-lg text-foreground mb-4">
            What Your Neighbors Are Saying
          </h2>
          <p className="text-body-md text-muted-foreground">
            Real reviews from real people in the Clearwater area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
