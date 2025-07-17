
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Wrench, UserCheck, Target, Building2 } from "lucide-react";

const WhyChooseDecodeT = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "Tailored Curriculum",
      description: "Customized learning paths designed to match industry demands and your career goals."
    },
    {
      icon: <Clock className="h-12 w-12 text-white" />,
      title: "Flexible Learning",
      description: "Learn at your own pace with both live sessions and self-paced modules available 24/7."
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "Hands-On Experience",
      description: "Real-world projects and practical assignments to build a portfolio that stands out."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-white" />,
      title: "Expert Guidance",
      description: "Learn from industry veterans with years of experience in their respective fields."
    },
    {
      icon: <Target className="h-12 w-12 text-white" />,
      title: "Personalized Learning",
      description: "Adaptive learning technology that adjusts to your learning style and progress."
    },
    {
      icon: <Building2 className="h-12 w-12 text-white" />,
      title: "Connect to Industry",
      description: "Direct connections with hiring partners and industry professionals for career growth."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose DecodeT?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our unique approach to upskilling and career development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:scale-105 group border-2 hover:border-accent/30">
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

export default WhyChooseDecodeT;
