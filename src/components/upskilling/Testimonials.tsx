
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      image: "/images/testimonials/priya.jpg",
      content: "DecodeT's Full Stack course completely transformed my career. The hands-on projects and expert mentorship helped me land my dream job at TCS. The learning experience was incredible!",
      rating: 5,
      course: "Full Stack Web Development"
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist at Flipkart",
      image: "/images/testimonials/rahul.jpg",
      content: "The Data Science course at DecodeT is outstanding. The curriculum is up-to-date with industry standards, and the instructors are genuinely passionate about teaching. Highly recommended!",
      rating: 5,
      course: "Data Science & Machine Learning"
    },
    {
      name: "Anita Patel",
      role: "Cloud Architect at Amazon",
      image: "/images/testimonials/anita.jpg",
      content: "DecodeT's AWS course gave me the practical skills I needed to advance my career. The real-world projects and certification prep were invaluable. Now I'm working at my dream company!",
      rating: 5,
      course: "Cloud Computing (AWS)"
    },
    {
      name: "Vikram Singh",
      role: "Digital Marketing Manager",
      image: "/images/testimonials/vikram.jpg",
      content: "The Digital Marketing course exceeded my expectations. The instructors shared practical insights that I immediately applied to my work. My company saw a 40% increase in leads!",
      rating: 5,
      course: "Digital Marketing Mastery"
    },
    {
      name: "Sneha Gupta",
      role: "UX Designer at Zomato",
      image: "/images/testimonials/sneha.jpg",
      content: "DecodeT's UI/UX course helped me transition from a completely different field. The portfolio projects and design thinking approach were game-changers for my career.",
      rating: 5,
      course: "UI/UX Design Fundamentals"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from professionals who transformed their careers with DecodeT
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-2 hover:border-accent/20 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-accent">{testimonial.course}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-accent/20" />
                      <p className="text-lg text-muted-foreground italic leading-relaxed pl-6">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
