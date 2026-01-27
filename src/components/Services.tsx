import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Users2, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Executive Coaching",
      description:
        "One-on-one sessions designed for C-suite executives and senior leaders who need to command boardrooms and inspire teams.",
      features: ["Personalized curriculum", "Video analysis", "Real-time feedback", "Unlimited support"],
      popular: true,
    },
    {
      icon: Users2,
      title: "Group Workshops",
      description:
        "Interactive workshops for teams looking to improve their collective communication skills and presentation abilities.",
      features: ["Team dynamics focus", "Group exercises", "Peer feedback", "Custom scenarios"],
      popular: false,
    },
    {
      icon: Video,
      title: "Virtual Presentation",
      description:
        "Master the art of virtual presentations. Learn to engage audiences through screens with the same impact as in-person.",
      features: ["Camera presence", "Technical setup", "Engagement tactics", "Platform mastery"],
      popular: false,
    },
    {
      icon: GraduationCap,
      title: "Keynote Preparation",
      description:
        "Comprehensive preparation for your most important speeches. From TED talks to conference keynotes.",
      features: ["Script development", "Stage movement", "Q&A preparation", "Dress rehearsals"],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Tailored Programs for Every Speaking Need
          </h2>
          <p className="text-muted-foreground">
            Whether you're a nervous beginner or a seasoned speaker looking to level up, 
            I have a program designed specifically for your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                service.popular
                  ? "bg-primary text-primary-foreground shadow-xl"
                  : "bg-card hover:shadow-xl border border-border"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div
                className={`p-3 rounded-xl inline-block mb-4 ${
                  service.popular ? "bg-primary-foreground/10" : "bg-accent/10"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.popular ? "text-accent" : "text-accent"}`}
                />
              </div>

              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.popular ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm mb-6 ${
                  service.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm flex items-center gap-2 ${
                      service.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={service.popular ? "gold" : "outline"}
                className="w-full group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
