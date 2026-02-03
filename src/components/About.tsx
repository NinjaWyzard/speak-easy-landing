import { Award, BookOpen, Mic2, Users } from "lucide-react";
const About = () => {
  const credentials = [{
    icon: Mic2,
    title: "TEDx Speaker",
    description: "Featured speaker at multiple TEDx events"
  }, {
    icon: Users,
    title: "Fortune 500 Coach",
    description: "Worked with executives from top companies"
  }, {
    icon: BookOpen,
    title: "Published Author",
    description: "Bestselling book on communication"
  }, {
    icon: Award,
    title: "Certified Coach",
    description: "ICF certified professional coach"
  }];
  return <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">ACERCA DE</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">"No necesitas hablar como un CEO"</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Esa es mi filosofía. Por más de 10 años, me he dedicado a mejorar mis habilidades comunicacionales, siendo una persona altamente introvertida. Como tal, no siempre he querido estar bajo el foco de la atención. Me gusta hacer mi trabajo tranquilo y luego disfrutar mi tiempo en familia.</p>
              <p>
            </p>
              <p>Sin embargo, he descubierto que ser capaz de comunicar directa, eficiente y concisamente, ayuda de gran manera a posicionarte, tanto si quieres ascender, como si solo quieres dejar claro el alcance de tu expertise y demostrar que no necesitas supervisión constante.


En el camino también descubrí que hacer presentaciones y hablar en público es algo que disfruto mucho, ¡en dosis bajas!


Por eso ahora me dedico a ayudar a otras personas, introvertidas también, quizá, a ganar confianza, mejorar sus habilidades según sus objetivos y mejorar, también, la calidad de sus presentaciones, tanto presenciales como virtuales.</p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {credentials.map(item => <div key={item.title} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary via-navy-light to-primary overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <Mic2 className="w-12 h-12 text-accent" />
                  </div>
                  <p className="text-2xl font-serif italic">
                    "Your voice is your greatest instrument. Let's tune it to perfection."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;