import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Users, Award, TrendingUp, ArrowRight } from "lucide-react";

const Upskilling = () => {
  const features = [
    {
      title: "Industry-Aligned Training",
      description: "Courses designed with current industry trends and requirements in mind.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Recognized Certifications",
      description: "Earn certificates that are valued by employers worldwide.",
      icon: <Award className="h-6 w-6 text-white" />,
    },
    {
      title: "Career Growth",
      description: "Advance your career with future-ready skills and knowledge.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upskilling & EdTech Platform
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Equip yourself and your team with future-ready skills through our comprehensive 
              learning platform. Industry-aligned training that drives career growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <a href="https://decodet.com" target="_blank" rel="noopener noreferrer">
                  Visit Learning Platform
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://decodet.com" target="_blank" rel="noopener noreferrer">
                  Explore Courses
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Decodet Learning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our EdTech platform combines cutting-edge technology with expert instruction 
              to deliver transformative learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Learning Paths
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform offers structured learning paths designed to take you from beginner 
                to expert in your chosen field.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Technology & Development</h3>
                    <p className="text-muted-foreground">
                      Learn programming, web development, and emerging technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business & Strategy</h3>
                    <p className="text-muted-foreground">
                      Master business analysis, project management, and strategic planning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Digital Marketing</h3>
                    <p className="text-muted-foreground">
                      Become an expert in digital marketing, SEO, and social media strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Start Learning Today</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of learners who have transformed their careers with our platform.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <a href="https://decodet.com" target="_blank" rel="noopener noreferrer">
                  Explore Our Platform
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upskill Your Team?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Invest in your team's growth with our comprehensive learning solutions. 
            Contact us for corporate training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="https://decodet.com" target="_blank" rel="noopener noreferrer">
                Visit decodet.com
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <a href="/contact">Corporate Training</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upskilling;