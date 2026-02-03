import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-speaking.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Public speaking presentation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6 opacity-0 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Cupos disponibles 1:1</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Encuentra tu{" "}
            <span className="text-accent">Voz</span>,{" "}
            <br className="hidden md:block" />
            Conecta con tu{" "}
            <span className="text-accent">Audiencia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>​Incluso si te consideras una persona introvertida, puedes entrenar tu comunicación para impactar con tus ideas únicas. Ayudo a profesionales junior o semi senior a ascender, posicionarse o, simplemente, demostrar su capacidad para que les dejen trabajar sin presiones.</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <Button variant="hero" size="xl">
              Inicia tu Transformación
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="mr-2" size={18} />
              Ver Historias de Éxito
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 opacity-0 animate-fade-up" style={{
          animationDelay: "0.5s"
        }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">150+</p>
              <p className="text-sm text-primary-foreground/70">Clientes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-primary-foreground/70">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">98%</p>
              <p className="text-sm text-primary-foreground/70">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;