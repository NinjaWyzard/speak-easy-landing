import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-accent font-semibold tracking-wide uppercase text-sm mb-4">
            Ready to Transform?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            Your Journey to Confident Speaking Starts with a Single Step
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call to discuss your goals and create 
            a personalized roadmap for your speaking transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl">
              <Calendar className="mr-2" />
              Book Free Discovery Call
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <a
              href="mailto:hello@voicemastery.com"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@voicemastery.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
