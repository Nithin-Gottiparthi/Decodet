
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star, Quote, User } from "lucide-react";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "Raju Mallam",
      role: "Student",
      content: "DecodeT's comprehensive approach to learning helped me transition from a non-technical background to landing a job in data science. The mentorship and practical projects were invaluable.",
      rating: 5
    },
    {
      name: "Maheswari",
      role: "Student",
      content: "The flexible learning schedule and expert guidance at DecodeT allowed me to upskill while managing my current job. The course content is industry-relevant and extremely practical.",
      rating: 5
    },
    {
      name: "Nagaraj Mamipally",
      role: "Student",
      content: "DecodeT's job assistance program is exceptional. They not only provided excellent training but also helped me secure a position at a leading tech company. Highly recommended!",
      rating: 5
    },
    {
      name: "Janani K.P",
      role: "Student",
      content: "The personalized learning approach and hands-on projects at DecodeT gave me the confidence to tackle real-world challenges. The mentors are always available to help.",
      rating: 5
    },
    {
      name: "Nithin Gottiparthi",
      role: "Student",
      content: "DecodeT's MERN stack course was comprehensive and well-structured. The practical assignments and industry connections helped me build a strong portfolio and secure my dream job.",
      rating: 5
    },
    {
      name: "Kabilan Sivaji",
      role: "Student",
      content: "The digital marketing course at DecodeT transformed my career. The real-world case studies and expert insights helped me understand the industry dynamics better.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Transforming Learning into Real-World Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful students who transformed their careers with DecodeT
          </p>
        </div>

        <Carousel 
          className="max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            })
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <Card className="border-2 hover:border-accent/20 transition-colors h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground">{testimonial.role}</p>
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

export default StudentTestimonials;
