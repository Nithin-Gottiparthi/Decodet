
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, BookOpen, Users, BarChart3, Calendar, MessageSquare } from "lucide-react";

const CustomLMS = () => {
  const features = [
    {
      icon: <Monitor className="h-8 w-8 text-accent" />,
      title: "Interactive Learning Interface",
      description: "Modern, intuitive design that makes learning engaging and efficient"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Self-Paced Learning",
      description: "Learn at your own speed with flexible scheduling and progress tracking"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Live Class Integration",
      description: "Seamlessly join live sessions directly from your learning dashboard"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Advanced Analytics",
      description: "Track your progress with detailed analytics and performance insights"
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that adapts to your learning patterns"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Peer Collaboration",
      description: "Connect with fellow learners through discussion forums and group projects"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Custom LMS Platform
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience learning like never before with our proprietary Learning Management System, designed specifically for modern professionals and students.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group">
              Explore Platform Features
              <Monitor className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-hero text-white">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Platform Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span>Course Completion Rate</span>
                  <span className="text-accent font-bold">95%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span>Student Satisfaction</span>
                  <span className="text-accent font-bold">4.9/5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span>Active Learning Hours</span>
                  <span className="text-accent font-bold">50K+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <span>Live Sessions Monthly</span>
                  <span className="text-accent font-bold">200+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomLMS;
