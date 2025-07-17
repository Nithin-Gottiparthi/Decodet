
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Zap } from "lucide-react";

const WhyDecodeT = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Industry-Recognized Certification",
      description: "Get certified by industry experts and boost your career prospects with credentials that matter in today's job market."
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Expert-Led Live Sessions",
      description: "Learn from experienced professionals with real-world experience through interactive live sessions and personalized mentorship."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "Hands-On Project Experience",
      description: "Build a portfolio of real projects that showcase your skills to potential employers and clients."
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Lifetime Access & Updates",
      description: "Get lifetime access to course materials and stay updated with the latest industry trends and technologies."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why DecodeT is the Best Choice
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another online learning platform. We're your partner in professional growth and career transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDecodeT;
