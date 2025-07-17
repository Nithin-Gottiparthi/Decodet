interface CourseOverviewProps {
  title: string;
  description: string;
  learningOutcomes: string[];
}

const CourseOverview = ({ title, description, learningOutcomes }: CourseOverviewProps) => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Course Overview Section */}
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold text-primary leading-tight">
            {title} Course Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Learning Outcomes Section */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-primary text-center">
            What Will You Learn?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-muted/20 hover:border-orange-500 hover:shadow-md transition-all duration-300"
              >
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CourseOverview;
