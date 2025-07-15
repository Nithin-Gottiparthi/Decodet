import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Dr. Vibinchandar Selvaraj",
      position: "Founder & Chairman",
      bio: "With over 15 years of experience in digital transformation, Vibin leads Decodet's vision of empowering businesses through innovative technology solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "john.smith@decodet.com"
    },
    {
      name: "Haritha Vibinchandar",
      position: "Chief Executive Officer",
      bio: "Sarah brings deep technical expertise and leads our engineering teams in developing cutting-edge solutions for our clients' digital transformation needs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "sarah.johnson@decodet.com"
    },
    {
      name: "Michael Chen",
      position: "Head of Consultancy",
      bio: "Michael specializes in strategic planning and business transformation, helping organizations navigate complex challenges and achieve sustainable growth.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "michael.chen@decodet.com"
    },
    {
      name: "Emily Davis",
      position: "Director of Learning & Development",
      bio: "Emily leads our upskilling initiatives, designing comprehensive training programs that align with industry demands and career aspirations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "emily.davis@decodet.com"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders driving Decodet's mission to transform businesses through 
            digital innovation, strategic expertise, and continuous learning.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">{leader.name}</CardTitle>
                <CardDescription className="text-accent font-semibold">
                  {leader.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {leader.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${leader.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-subtle rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our leadership team is committed to your success. Let's discuss how we can help 
            transform your business.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Leadership;