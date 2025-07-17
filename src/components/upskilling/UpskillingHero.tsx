
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Lightbulb, Target, Zap } from "lucide-react";

const UpskillingHero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-16 h-16 bg-white/10 rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-accent/30 rounded-full animate-pulse [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/20 rounded-full animate-pulse [animation-delay:0.5s]"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 animate-bounce">
          <Code className="h-8 w-8 text-accent/30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce [animation-delay:1s]">
          <Lightbulb className="h-10 w-10 text-white/20" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-bounce [animation-delay:2s]">
          <Target className="h-6 w-6 text-accent/40" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-bounce [animation-delay:0.5s]">
          <Zap className="h-8 w-8 text-white/30" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Decoding the dream inside you,
            <span className="block text-accent">Digitally!!!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our dedication is to empower students to explore their dreams and aspirations on a meaningful platform.
          </p>
          <Button 
            onClick={scrollToNext}
            size="xl" 
            variant="accent" 
            className="group animate-pulse hover:animate-none"
          >
            Learn More
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpskillingHero;
