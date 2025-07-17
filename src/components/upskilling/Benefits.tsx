
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Industry-recognized certifications upon completion",
    "24/7 access to course materials and resources",
    "Live doubt-solving sessions with expert instructors",
    "Career guidance and job placement assistance",
    "Hands-on projects with real-world applications",
    "Peer networking opportunities and community access",
    "Lifetime access to updated course content",
    "Flexible learning schedule that fits your lifestyle"
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of Learning with DecodeT
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have accelerated their careers with our comprehensive learning programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
