import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypingAnimation from "@/components/TypingAnimation";
import { Link } from "react-router-dom";
import {
  Monitor,
  Target,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const services = [
    {
      title: "Digital Transformation",
      description: "Transform your business with cutting-edge digital solutions including website development, SEO, and digital marketing.",
      icon: <Monitor className="h-6 w-6 text-white" />,
      href: "/digital-transformation",
    },
    {
      title: "Consultancy Services",
      description: "Strategic guidance and expert insights to help your business overcome challenges and achieve sustainable growth.",
      icon: <Target className="h-6 w-6 text-white" />,
      href: "/consultancy",
    },
    {
      title: "Upskilling",
      description: "Industry-aligned training programs and professional development through our comprehensive learning platform.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      href: "/upskilling",
      isExternal: true,
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Successful Projects",
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: <Users className="h-8 w-8 text-accent" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <Globe className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Empowering Businesses Through{" "}
                <TypingAnimation />
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Strategic Expertise, and Learning. Transform your business with our integrated
                approach to technology, consulting, and professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Hero button with animation */}
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Get Started Today</Link>
                </Button>

                {/* Outline button with same animation and default blue text */}
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="border-white bg-white text-primary transition duration-300 animate-fade-in"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>

            </div>
            <div>
              <img
                src={heroImage}
                alt="Digital Innovation and Business Transformation"
                className="w-full h-auto rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <AnimatedCounter
                  end={parseInt(stat.number.replace(/[^\d]/g, ''))}
                  suffix={stat.number.replace(/[\d]/g, '')}
                />
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Three Core Verticals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Decodet offers a comprehensive suite of services designed to transform your business
              through technology, strategy, and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                isExternal={service.isExternal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Decodet?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrated Approach</h3>
              <p className="text-muted-foreground">
                Our three verticals work together seamlessly to provide comprehensive solutions
                for your business challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our skilled professionals bring years of experience and cutting-edge knowledge
                to every project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful transformations and satisfied clients across
                various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">"Exceptional Digital Transformation"</CardTitle>
                <CardDescription>
                  "Decodet completely transformed our online presence. Their team delivered a
                  beautiful website and comprehensive digital marketing strategy that increased
                  our leads by 300%."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent font-semibold">- Sarah Johnson, CEO, TechStart Inc.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">"Strategic Guidance That Works"</CardTitle>
                <CardDescription>
                  "The consultancy team at Decodet provided invaluable strategic insights
                  that helped us refine our business model and achieve sustainable growth."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent font-semibold">- Michael Chen, Founder, GrowthCorp</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">"Outstanding Learning Platform"</CardTitle>
                <CardDescription>
                  "Our team's skills were significantly enhanced through Decodet's upskilling
                  programs. The quality of training and support was exceptional."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-accent font-semibold">- Jennifer Davis, HR Director, InnovateNow</p>
              </CardContent>
            </Card>
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
            Join hundreds of satisfied clients who have transformed their businesses with Decodet.
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary hero button with animation */}
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>

            {/* Outline button styled to match animation and blue text */}
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white text-primary bg-white animate-fade-in transition duration-300"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Index;
