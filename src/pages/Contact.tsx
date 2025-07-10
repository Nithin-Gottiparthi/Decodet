import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "info@decodet.com",
      action: "mailto:info@decodet.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 92814 42288",
      action: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Business Street, Suite 456, City, State 12345",
      action: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      action: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your business? Let's discuss how Decodet can help you achieve
              your goals through digital innovation, strategic consultancy, and upskilling.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're looking to transform your digital presence, need strategic guidance,
                  or want to upskill your team, we're here to help. Reach out using any of the methods below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-white">
                          {item.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground">{item.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-hero rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {/* Hero button with animation */}
                  <Button asChild variant="hero" size="sm" className="w-full">
                    <a href="mailto:info@decodet.com">
                      Schedule a Consultation
                    </a>
                  </Button>

                  {/* Outlined button with same animation and default blue text */}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-white bg-white text-primary transition duration-300 animate-fade-in"
                  >
                    <a href="tel:+15551234567">
                      Call Us Now
                    </a>
                  </Button>
                </div>

              </div>

              {/* Response Time */}
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <div>
                      <h4 className="font-semibold">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 2-4 hours during business hours.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about how our three core verticals can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Digital Transformation</CardTitle>
                <CardDescription>
                  Website development, SEO, digital marketing, and social media services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="/digital-transformation">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Consultancy Services</CardTitle>
                <CardDescription>
                  Strategic planning, branding, business development, and process optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="/consultancy">Learn More</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl">Upskilling & EdTech</CardTitle>
                <CardDescription>
                  Industry-aligned training and professional development programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="/upskilling">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;