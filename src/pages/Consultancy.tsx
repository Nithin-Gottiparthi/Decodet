
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Lightbulb,
  FileText,
  Settings,
  Users,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import consultancyServicesImage from "@/assets/consultancy-services.jpg";
import brandingImage from "@/assets/services/branding.jpg";
import strategicPlanningImage from "@/assets/services/strategic-planning.jpg";
import startupIncubationImage from "@/assets/services/startup-incubation.jpg";
import businessPlanImage from "@/assets/services/business-plan.jpg";
import processRefinementImage from "@/assets/services/process-refinement.jpg";
import teamBuildingImage from "@/assets/services/team-building.jpg";
import trainingDevelopmentImage from "@/assets/services/training-development.jpg";

const Consultancy = () => {
  const services = [
    {
      title: "Branding",
      description: "Create a powerful brand identity that resonates with your target audience and differentiates you from competitors.",
      icon: <Target className="h-6 w-6 text-white" />,
      image: brandingImage,
    },
    {
      title: "Strategic Planning",
      description: "Develop comprehensive strategic plans that align with your vision and drive sustainable business growth.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      image: strategicPlanningImage,
    },
    {
      title: "Startup Incubation",
      description: "Guide startups through their journey from concept to market with expert mentorship and resources.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      image: startupIncubationImage,
    },
    {
      title: "Business Plan Generation",
      description: "Create detailed, investor-ready business plans that clearly communicate your vision and strategy.",
      icon: <FileText className="h-6 w-6 text-white" />,
      image: businessPlanImage,
    },
    {
      title: "Process Refinement",
      description: "Optimize your business processes for maximum efficiency and improved operational performance.",
      icon: <Settings className="h-6 w-6 text-white" />,
      image: processRefinementImage,
    },
    {
      title: "Team Building",
      description: "Build high-performing teams through strategic recruitment, culture development, and leadership training.",
      icon: <Users className="h-6 w-6 text-white" />,
      image: teamBuildingImage,
    },
    {
      title: "Training & Development",
      description: "Enhance your team's capabilities through customized training programs and professional development.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      image: trainingDevelopmentImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic Consultancy Services
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Expert guidance and strategic insights to help your business overcome challenges,
                seize opportunities, and achieve sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Hero-styled button with animation */}
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Get Expert Advice</Link>
                </Button>

                {/* Outline button styled with same animation and default blue text */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-primary transition duration-300 animate-fade-in"
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>

            </div>
            <div>
              <img
                src={consultancyServicesImage}
                alt="Strategic Consultancy Services"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Consultancy Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategic planning to operational excellence, we provide comprehensive
              consultancy services to drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Consultancy Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to deliver results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
              <p className="text-muted-foreground">
                We start by understanding your business, challenges, and objectives through comprehensive analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">
                We develop customized strategies and solutions tailored to your specific needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation & Support</h3>
              <p className="text-muted-foreground">
                We provide ongoing support and guidance to ensure successful implementation and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our expert consultants help you navigate challenges and unlock new opportunities for growth.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
