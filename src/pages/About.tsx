import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Award,
  Lightbulb,
  ArrowRight,
  Heart,
  Globe,
  Zap
} from "lucide-react";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to drive transformation.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      title: "Excellence",
      description: "We deliver exceptional quality in every project, exceeding expectations consistently.",
      icon: <Award className="h-6 w-6 text-white" />,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building lasting partnerships with our clients.",
      icon: <Users className="h-6 w-6 text-white" />,
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our endeavors.",
      icon: <Heart className="h-6 w-6 text-white" />,
    },
    {
      title: "Global Impact",
      description: "We strive to make a positive difference in businesses and communities worldwide.",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      title: "Agility",
      description: "We adapt quickly to change and deliver results with speed and efficiency.",
      icon: <Zap className="h-6 w-6 text-white" />,
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
                About Decodet
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Empowering businesses through digital innovation, strategic expertise, and
                continuous learning. We are your partners in transformation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Hero-styled button with built-in animation */}
                <Button asChild variant="hero" size="lg">
                  <Link to="/about/leadership">Meet Our Team</Link>
                </Button>

                {/* Outline-styled button with same animation and default blue text */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-primary transition duration-300 animate-fade-in"
                >
                  <Link to="/contact">Work With Us</Link>
                </Button>
              </div>

            </div>
            <div>
              <img
                src={teamCollaborationImage}
                alt="Team Collaboration at Decodet"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Driving digital transformation and business excellence through innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription className="text-lg">
                  To empower businesses with cutting-edge digital solutions, strategic guidance,
                  and educational resources that drive sustainable growth and success in the digital age.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="h-full hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="text-lg">
                  To be the leading catalyst for digital transformation, helping organizations
                  worldwide unlock their full potential through innovation, expertise, and continuous learning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What Sets Us Apart
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Comprehensive Solutions</h3>
                    <p className="text-muted-foreground">
                      From digital transformation to strategic consultancy and upskilling, we offer end-to-end solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Industry Expertise</h3>
                    <p className="text-muted-foreground">
                      Our team brings deep knowledge across multiple industries and cutting-edge technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      We tailor our solutions to meet your unique needs and business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how Decodet can help you achieve your digital transformation goals.
              </p>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;