
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, Award } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Level Up Your Skills. 
            <span className="block text-accent">Stand Out from the Crowd</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your thoughts, queries, and feedback help us move ahead. Get in touch with us right now, and together, let's do something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="xl" variant="accent" className="group">
              <Link to="/contact">
                Join Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Community</h3>
              <p className="opacity-90">Join a network of industry professionals and learners</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Learning</h3>
              <p className="opacity-90">International standard curriculum and delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career Success</h3>
              <p className="opacity-90">Dedicated job assistance and placement support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
