import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, GraduationCap, Users2, Video } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Briefcase,
    title: "Coaching Ejecutivo",
    description: "Sesiones uno a uno diseñadas para ejecutivos y líderes senior que necesitan dominar salas de juntas e inspirar equipos.",
    features: ["Programa personalizado", "Análisis de video", "Retroalimentación en tiempo real", "Soporte ilimitado"],
    popular: true
  }, {
    icon: Users2,
    title: "Talleres Grupales",
    description: "Talleres interactivos para equipos que buscan mejorar sus habilidades de comunicación colectiva y capacidades de presentación.",
    features: ["Enfoque en dinámicas de equipo", "Ejercicios grupales", "Retroalimentación entre pares", "Escenarios personalizados"],
    popular: false
  }, {
    icon: Video,
    title: "Presentaciones Virtuales",
    description: "Domina el arte de las presentaciones virtuales. Aprende a cautivar audiencias a través de pantallas con el mismo impacto que en persona.",
    features: ["Presencia ante cámara", "Configuración técnica", "Tácticas de engagement", "Dominio de plataformas"],
    popular: false
  }, {
    icon: GraduationCap,
    title: "Preparación de Keynotes",
    description: "Preparación integral para tus discursos más importantes. Desde charlas TED hasta keynotes en conferencias.",
    features: ["Desarrollo de guión", "Movimiento escénico", "Preparación de Q&A", "Ensayos generales"],
    popular: false
  }];
  return <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Programas Personalizados para Cada Necesidad
          </h2>
          <p className="text-muted-foreground">Ya seas un principiante nervioso o quieres incorporar nuevas tecnologías en tus presentaciones, tengo un programa diseñado específicamente para tus objetivos.</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => <div key={service.title} className={`relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${service.popular ? "bg-primary text-primary-foreground shadow-xl" : "bg-card hover:shadow-xl border border-border"}`}>
              {service.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Más Popular
                </div>}

              <div className={`p-3 rounded-xl inline-block mb-4 ${service.popular ? "bg-primary-foreground/10" : "bg-accent/10"}`}>
                <service.icon className={`w-6 h-6 ${service.popular ? "text-accent" : "text-accent"}`} />
              </div>

              <h3 className={`text-xl font-semibold mb-3 ${service.popular ? "text-primary-foreground" : "text-foreground"}`}>
                {service.title}
              </h3>

              <p className={`text-sm mb-6 ${service.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map(feature => <li key={feature} className={`text-sm flex items-center gap-2 ${service.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>)}
              </ul>

              <Button variant={service.popular ? "gold" : "outline"} className="w-full group-hover:gap-3 transition-all">
                Saber Más
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;