
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  GraduationCap, 
  Target, 
  HelpCircle, 
  BarChart 
} from "lucide-react";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Industry Aligned Curriculum",
      description: "Learn with real-world projects and industry standards"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "1:1 Mentorship",
      description: "Personal guidance from industry experts"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-accent" />,
      title: "Trained by Industry Experts",
      description: "Learn from professionals with hands-on experience"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "70:30 Training Pedagogy",
      description: "Practical hands-on learning approach"
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-accent" />,
      title: "Doubt Solving Sessions",
      description: "Regular support and clarification sessions"
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      title: "Regular Evaluation & Feedback",
      description: "Continuous assessment and improvement"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Program Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What makes our training program stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
