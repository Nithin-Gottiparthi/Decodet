
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const AiForManagers = () => {
  const heroFeatures = [
    "Master AI Strategy, Implementation & Management",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "AI Strategy Development & Planning",
    "Machine Learning for Business Applications",
    "AI Implementation & Change Management",
    "Ethics & Governance in AI",
    "ROI Analysis for AI Projects",
    "Team Leadership in AI Transformation",
    "Future Trends & Technologies in AI"
  ];

  const jobRoles = [
    { title: "AI Strategy Manager", icon: "🧠" },
    { title: "Digital Transformation Manager", icon: "🔄" },
    { title: "AI Project Manager", icon: "📋" },
    { title: "Innovation Manager", icon: "💡" },
    { title: "Technology Consultant", icon: "🔧" },
    { title: "Business Development Manager", icon: "📈" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="AI for Managers"
        tagline="Master AI implementation strategies for business leaders and managers to drive innovation and competitive advantage."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="AI for Managers"
        description="This specialized AI for Managers training with DecodeT equips business leaders with essential knowledge to successfully implement and manage AI initiatives. Learn to develop AI strategies, lead digital transformation, and harness the power of artificial intelligence to drive business growth and innovation while managing teams and resources effectively."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="ai-for-managers" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default AiForManagers;
