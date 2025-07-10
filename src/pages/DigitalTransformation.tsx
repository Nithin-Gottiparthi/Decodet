import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Globe,
  Search,
  Megaphone,
  Share2,
  Palette,
  BarChart3,
  ArrowRight
} from "lucide-react";
import digitalServicesImage from "@/assets/digital-services.jpg";
import websiteDevelopmentImage from "@/assets/services/website-development.jpg";
import digitalMarketingImage from "@/assets/services/digital-marketing.jpg";
import seoOptimizationImage from "@/assets/services/seo-optimization.jpg";
import socialMediaMarketingImage from "@/assets/services/social-media-marketing.jpg";
import socialMediaBrandingImage from "@/assets/services/social-media-branding.jpg";
import socialMediaStrategyImage from "@/assets/services/social-media-strategy.jpg";

const DigitalTransformation = () => {
  const services = [
    {
      title: "Website Development & Hosting",
      description: "Custom website development with reliable hosting solutions to establish your digital presence.",
      icon: <Globe className="h-6 w-6 text-white" />,
      image: websiteDevelopmentImage,
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to reach your target audience and drive growth.",
      icon: <Megaphone className="h-6 w-6 text-white" />,
      image: digitalMarketingImage,
    },
    {
      title: "SEO (Search Engine Optimization)",
      description: "Improve your website's visibility and ranking on search engines to attract more organic traffic.",
      icon: <Search className="h-6 w-6 text-white" />,
      image: seoOptimizationImage,
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to engage your audience and build brand awareness.",
      icon: <Share2 className="h-6 w-6 text-white" />,
      image: socialMediaMarketingImage,
    },
    {
      title: "Social Media Branding",
      description: "Create a consistent and compelling brand identity across all social media platforms.",
      icon: <Palette className="h-6 w-6 text-white" />,
      image: socialMediaBrandingImage,
    },
    {
      title: "Social Media Strategy",
      description: "Develop data-driven social media strategies aligned with your business objectives.",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      image: socialMediaStrategyImage,
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
                Digital Transformation Services
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your business with cutting-edge digital solutions that drive growth,
                enhance customer experience, and position you ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Hero button with animation */}
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Get Started Today</Link>
                </Button>

                {/* Outline-styled button with same animation and default blue text */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-primary transition duration-300 animate-fade-in"
                >
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>

            </div>
            <div>
              <img
                src={digitalServicesImage}
                alt="Digital Transformation Services"
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
              Our Digital Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital transformation solutions designed to elevate your business
              and create meaningful connections with your customers.
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

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Decodet for Digital Transformation?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our skilled professionals bring years of experience in digital innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of successful digital transformations across industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customized Solutions</h3>
                    <p className="text-muted-foreground">
                      Tailored strategies that align with your unique business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our digital transformation services can accelerate your business growth.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;