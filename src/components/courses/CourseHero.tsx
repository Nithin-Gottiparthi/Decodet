
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseHeroProps {
  title: string;
  tagline: string;
  features: string[];
}

const CourseHero = ({ title, tagline, features }: CourseHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-white/10 rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-accent/30 rounded-full animate-pulse [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-pulse [animation-delay:0.5s]"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-accent/20 to-white/10 rounded-full animate-pulse [animation-delay:1.5s]"></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-l from-white/10 to-accent/15 rounded-full animate-pulse [animation-delay:2.5s]"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent/40 rotate-45 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-white/30 rotate-45 animate-bounce [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-accent/50 rotate-45 animate-bounce [animation-delay:2s]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-white/40 rotate-45 animate-bounce [animation-delay:0.5s]"></div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-white/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
            onClick={() => navigate('/upskilling')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Courses
          </Button>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="xl" variant="accent" className="group">
              <MessageCircle className="mr-2 h-5 w-5" />
              Enquire Now
            </Button>
            <Button size="xl" variant="outline" className="text-primary border-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Request a Call
            </Button>
          </div>

          {/* Course Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/5">
                <p className="text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
