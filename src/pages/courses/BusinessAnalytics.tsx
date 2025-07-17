
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const BusinessAnalytics = () => {
  const heroFeatures = [
    "Master Business Intelligence, Data Analysis & Strategic Planning",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "Business Intelligence & Reporting",
    "Statistical Analysis for Business",
    "Financial Analytics & Modeling",
    "Market Research & Analysis",
    "Predictive Analytics for Business",
    "Data-Driven Decision Making",
    "Strategic Planning & Forecasting"
  ];

  const jobRoles = [
    { title: "Business Analyst", icon: "💼" },
    { title: "Business Intelligence Analyst", icon: "📊" },
    { title: "Data Analyst", icon: "📈" },
    { title: "Financial Analyst", icon: "💰" },
    { title: "Market Research Analyst", icon: "🔍" },
    { title: "Strategic Planning Analyst", icon: "🎯" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="Business Analytics"
        tagline="Master business intelligence and analytics for strategic decision making that drives organizational success and growth."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="Business Analytics"
        description="This comprehensive Business Analytics training with DecodeT provides you with essential skills to analyze business data, create insights, and support strategic decision-making. Learn to use analytical tools and techniques to solve complex business problems, optimize operations, and drive performance improvements across various business functions."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="business-analytics" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default BusinessAnalytics;
