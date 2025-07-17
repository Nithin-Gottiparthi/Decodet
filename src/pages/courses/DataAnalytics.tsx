
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const DataAnalytics = () => {
  const heroFeatures = [
    "Master Python, R, Excel, Power BI, Tableau, SQL, and Statistics Concepts",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "Excel for Data Visualization & Analysis",
    "Power BI for Data Visualization & Insights",
    "Tableau for Data Visualization & Insights",
    "SQL for Data Analysis",
    "Python for Data Analytics",
    "Statistics for Analysis",
    "R for Data Analytics"
  ];

  const jobRoles = [
    { title: "Data Analyst", icon: "📊" },
    { title: "Business Analyst", icon: "💼" },
    { title: "Data Engineer", icon: "⚙️" },
    { title: "Junior Data Scientist", icon: "🔬" },
    { title: "Market Research Analyst", icon: "📈" },
    { title: "Data Visualization Analyst", icon: "📉" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="Data Analytics"
        tagline="Master the art of extracting actionable insights from complex datasets to drive success using strategic decision making."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="Data Analytics"
        description="This Data analytics training with DecodeT helps you acquire the knowledge of tools and skills required for Data Analysis. Participants will learn to collect, preprocess, visualize, analyze, and derive insights from data using tools like Python, R, Excel, Power BI, Tableau, and SQL."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="data-analytics" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default DataAnalytics;
