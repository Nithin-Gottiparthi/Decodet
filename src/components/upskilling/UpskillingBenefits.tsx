
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, Monitor, Award, Briefcase } from "lucide-react";

const UpskillingBenefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Real-time Learning",
      description: "Live interactive sessions with instant feedback and real-time doubt resolution"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Industry-Aligned Curriculum",
      description: "Course content designed by industry experts to match current market demands"
    },
    {
      icon: <Monitor className="h-8 w-8 text-accent" />,
      title: "Customized LMS",
      description: "Our proprietary learning management system tailored for optimal learning experience"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Expertise Content & Training",
      description: "High-quality training materials and expert-led sessions for comprehensive learning"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: "Job Assistance",
      description: "Dedicated placement support and career guidance to help you land your dream job"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Upskilling Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive benefits that set you up for success in your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:scale-105 group border-2 hover:border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-subtle rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpskillingBenefits;
