
import AnimatedCounter from "@/components/AnimatedCounter";

const UpskillingStats = () => {
  const stats = [
    {
      value: 35,
      suffix: "+",
      label: "Courses",
      description: "Comprehensive programs designed for skill development"
    },
    {
      value: 25,
      suffix: "+",
      label: "Colleges",
      description: "Partner institutions across the region"
    },
    {
      value: 2500,
      suffix: "+",
      label: "Students",
      description: "Learners transformed and empowered"
    },
    {
      value: 45,
      suffix: "+",
      label: "Mentors",
      description: "Industry experts guiding your journey"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Empowering Future-Ready Talent
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase our commitment to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-elegant transition-shadow">
              <div className="mb-4">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  duration={2000}
                />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpskillingStats;
