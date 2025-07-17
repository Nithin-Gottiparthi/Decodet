
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PopularCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      name: "Data Science",
      duration: "Master Course | 120 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 1250,
      rating: 5.0,
      totalRatings: 1154,
      description: "Master data science with Python, machine learning, and AI techniques",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format",
      slug: "data-science"
    },
    {
      id: 2,
      name: "Data Analytics",
      duration: "Master Course | 100 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 980,
      rating: 4.9,
      totalRatings: 892,
      description: "Learn data analytics with Excel, SQL, and visualization tools",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&auto=format",
      slug: "data-analytics"
    },
    {
      id: 3,
      name: "MERN Stack Developer",
      duration: "Master Course | 140 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 1100,
      rating: 4.8,
      totalRatings: 1050,
      description: "Full-stack development with MongoDB, Express, React, and Node.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop&auto=format",
      slug: "mern-stack"
    },
    {
      id: 4,
      name: "Digital Marketing",
      duration: "Master Course | 80 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 1350,
      rating: 4.7,
      totalRatings: 1200,
      description: "Complete digital marketing including SEO, social media, and PPC",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=240&fit=crop&auto=format",
      slug: "digital-marketing"
    },
    {
      id: 5,
      name: "Business Analytics",
      duration: "Master Course | 110 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 750,
      rating: 4.9,
      totalRatings: 680,
      description: "Business intelligence and analytics for strategic decision making",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop&auto=format",
      slug: "business-analytics"
    },
    {
      id: 6,
      name: "AI for Managers",
      duration: "Master Course | 60 Hrs",
      tagline: "DecodeT Job Assistance Program",
      learners: 550,
      rating: 4.8,
      totalRatings: 450,
      description: "AI implementation strategies for business leaders and managers",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop&auto=format",
      slug: "ai-for-managers"
    }
  ];

  const handleKnowMore = (slug: string) => {
    navigate(`/upskilling/${slug}`);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Most Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of learners in our most sought-after programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-accent/20 group bg-white overflow-hidden">
              <CardHeader className="pb-4 p-0">
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 pb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors mb-2">
                    {course.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="text-sm font-medium text-accent">
                    {course.tagline}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{course.learners} learners</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({course.totalRatings} ratings)
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                  onClick={() => handleKnowMore(course.slug)}
                >
                  Know More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
