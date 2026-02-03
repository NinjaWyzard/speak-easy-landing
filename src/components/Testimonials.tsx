import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María García",
      role: "CEO, TechVentures",
      content:
        "Antes de trabajar con VoiceMastery, temía las presentaciones a inversores. Ahora las espero con entusiasmo. Cerramos nuestra Serie B con una presentación que dejó a los inversores queriendo más.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "VP Senior, Finanzas Globales",
      content:
        "La transformación fue notable. En solo 8 sesiones, pasé de leer diapositivas a dominar la sala. Mi equipo notó la diferencia inmediatamente.",
      rating: 5,
    },
    {
      name: "Dra. Elena Martínez",
      role: "Directora Médica",
      content:
        "Como médica, nunca pensé que hablar en público sería crucial para mi carrera. Ahora hablo regularmente en conferencias y me ha abierto puertas que nunca imaginé.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Historias de Éxito de Clientes Reales
          </h2>
          <p className="text-muted-foreground">
            No solo tomes mi palabra. Esto es lo que mis clientes dicen sobre 
            su proceso de transformación.
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
