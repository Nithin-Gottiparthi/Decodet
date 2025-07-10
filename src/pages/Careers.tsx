import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, DollarSign, Users, Lightbulb, TrendingUp } from "lucide-react";

const Careers = () => {
  const openRoles = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build innovative digital solutions for our clients. You'll work with cutting-edge technologies and contribute to transformative projects.",
      requirements: ["React, Node.js, TypeScript", "Cloud platforms (AWS/Azure)", "Agile development experience"]
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive our clients' digital presence through strategic campaigns, SEO optimization, and social media management.",
      requirements: ["Google Analytics & Ads", "Social media marketing", "SEO/SEM expertise"]
    },
    {
      title: "Business Consultant",
      department: "Consultancy",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "4+ years",
      description: "Help businesses transform their operations and achieve strategic goals through expert consulting and innovative solutions.",
      requirements: ["MBA or equivalent experience", "Strategic planning expertise", "Client relationship management"]
    },
    {
      title: "Learning & Development Coordinator",
      department: "Education",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2+ years",
      description: "Design and deliver impactful training programs that upskill professionals and align with industry demands.",
      requirements: ["Instructional design", "Adult learning principles", "EdTech platform experience"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Competitive Compensation",
      description: "Market-leading salaries with performance bonuses and equity options."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive, inclusive environment."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Learning Opportunities",
      description: "Continuous professional development with access to courses and conferences."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship and leadership opportunities."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's transforming businesses through innovation, 
            expertise, and continuous learning. Discover your next career opportunity with Decodet.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Why Work at Decodet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{role.title}</CardTitle>
                      <CardDescription className="text-accent font-semibold">
                        {role.department}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-4 md:mt-0">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {role.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {role.type} • {role.experience}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {role.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild variant="hero">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-hero text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's discuss 
            how you can contribute to our mission.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;