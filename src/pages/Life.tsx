
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Coffee, Users, Award, Gamepad2, Plane, X } from "lucide-react";
import { useState } from "react";
import teamCollaborationImage from "@/assets/team-collaboration.jpg";

const Life = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const cultureValues = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional growth and personal well-being."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Collaborative Spirit",
      description: "Our open culture encourages collaboration, knowledge sharing, and supporting each other's success."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Recognition & Growth",
      description: "We celebrate achievements and provide clear paths for career advancement and skill development."
    },
    {
      icon: <Coffee className="h-6 w-6 text-white" />,
      title: "Flexible Environment",
      description: "Remote-first culture with flexible hours and modern tools to help you do your best work."
    }
  ];

  const perks = [
    {
      icon: <Gamepad2 className="h-5 w-5" />,
      title: "Game Nights & Social Events",
      description: "Regular team building activities and social gatherings"
    },
    {
      icon: <Plane className="h-5 w-5" />,
      title: "Annual Team Retreats",
      description: "Company-wide retreats to exotic locations for team bonding"
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      title: "Wellness Programs",
      description: "Mental health support, gym memberships, and wellness stipends"
    }
  ];

  const testimonials = [
    {
      quote: "Decodet has been instrumental in my professional growth. The collaborative environment and learning opportunities have helped me advance my career while working on meaningful projects.",
      author: "Alex Thompson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "The work-life balance here is exceptional. I can focus on delivering quality work while having time for my personal interests and family. The team truly cares about each other.",
      author: "Maria Rodriguez",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face "
    },
    {
      quote: "The work-life balance here is exceptional. I can focus on delivering quality work while having time for my personal interests and family. The team truly cares about each other.",
      author: "Maria Rodriguez",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "What I love most about Decodet is the continuous learning culture. We're encouraged to experiment, learn new technologies, and share knowledge with the team.",
      author: "David Park",
      role: "Business Consultant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      alt: "Team collaboration in office",
      title: "Team Collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      alt: "Office celebration",
      title: "Office Celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      alt: "Team meeting",
      title: "Team Meeting"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      alt: "Workspace environment",
      title: "Modern Workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      alt: "Team achievement",
      title: "Achievement Celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      alt: "Team lunch",
      title: "Team Lunch"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      alt: "Office games",
      title: "Office Games"
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      alt: "Training session",
      title: "Training Session"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Life at Decodet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Decodet a great place to work. Our culture is built on collaboration,
            innovation, and supporting each other's growth.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20">
          <img
            src={teamCollaborationImage}
            alt="Team Collaboration at Decodet"
            className="w-full h-96 object-cover rounded-lg shadow-elegant"
          />
        </div>

        {/* Culture Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((value, index) => (
              <Card
                key={index}
                className="text-center transition-all duration-300 hover:[box-shadow:0_10px_25px_rgba(255,98,41,0.5)]"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>


        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Memories
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take a glimpse into our vibrant office culture, team events, and the memorable moments that make Decodet special.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-card-hover transition-all duration-300"
                onClick={() => openLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Our Team Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{testimonial.author}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Perks & Benefits
          </h2>

          {/* Perk Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Health Coverage", value: "100%" },
              { label: "Vacation Days", value: "25" },
              { label: "Learning Budget", value: "$2K" },
              { label: "Work Options", value: "Remote" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </section>


        {/* CTA Section */}
        <div className="bg-gradient-hero text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Experience the Decodet culture firsthand. Explore our open positions and start your
            journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/about/careers">View Open Positions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white text-primary transition duration-300 animate-fade-in"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Life;
