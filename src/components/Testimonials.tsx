import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVentures",
      content:
        "Before working with VoiceMastery, I dreaded investor pitches. Now I actually look forward to them. We closed our Series B with a presentation that left investors asking for more.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Senior VP, Global Finance Corp",
      content:
        "The transformation was remarkable. In just 8 sessions, I went from reading off slides to commanding the room. My team noticed the difference immediately.",
      rating: 5,
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      content:
        "As a physician, I never thought public speaking would be crucial to my career. Now I regularly speak at conferences and it's opened doors I never imagined.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Success Stories from Real Clients
          </h2>
          <p className="text-muted-foreground">
            Don't just take my word for it. Here's what my clients have to say about 
            their transformation journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="p-2 rounded-full bg-accent">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
