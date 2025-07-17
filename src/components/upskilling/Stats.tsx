
import AnimatedCounter from "@/components/AnimatedCounter";

const Stats = () => {
  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Hours of Learning Content",
      description: "Comprehensive curriculum designed by industry experts"
    },
    {
      value: 5000,
      suffix: "+",
      label: "Students Trained",
      description: "Professionals transformed across various industries"
    },
    {
      value: 50,
      suffix: "+",
      label: "Expert Instructors",
      description: "Industry veterans with real-world experience"
    },
    {
      value: 95,
      suffix: "%",
      label: "Job Placement Rate",
      description: "Students successfully placed in top companies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These numbers represent real people whose careers we've helped transform
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

export default Stats;
