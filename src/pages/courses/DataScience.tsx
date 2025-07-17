
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const DataScience = () => {
  const heroFeatures = [
    "Master Python, Machine Learning, AI, Deep Learning & Statistics",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "Python Programming for Data Science",
    "Machine Learning Algorithms & Implementation",
    "Deep Learning & Neural Networks",
    "Data Visualization with Python & Tableau",
    "Statistical Analysis & Hypothesis Testing",
    "Big Data Technologies & Tools",
    "AI Model Development & Deployment"
  ];

  const jobRoles = [
    { title: "Data Scientist", icon: "🧠" },
    { title: "Machine Learning Engineer", icon: "🤖" },
    { title: "AI Engineer", icon: "🔮" },
    { title: "Research Scientist", icon: "🔬" },
    { title: "Business Intelligence Analyst", icon: "📊" },
    { title: "Data Mining Specialist", icon: "⛏️" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="Data Science"
        tagline="Master data science with Python, machine learning, and AI techniques to unlock powerful insights and drive innovation."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="Data Science"
        description="This comprehensive Data Science training with DecodeT empowers you with cutting-edge skills in Python programming, machine learning, artificial intelligence, and statistical analysis. Learn to build predictive models, extract meaningful insights from big data, and deploy AI solutions that solve real-world business problems."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="data-science" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default DataScience;
