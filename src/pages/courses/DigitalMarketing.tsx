
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const DigitalMarketing = () => {
  const heroFeatures = [
    "Master SEO, SEM, Social Media Marketing & PPC",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM) & Google Ads",
    "Social Media Marketing & Strategy",
    "Content Marketing & Creation",
    "Email Marketing & Automation",
    "Analytics & Performance Tracking",
    "Conversion Rate Optimization"
  ];

  const jobRoles = [
    { title: "Digital Marketing Specialist", icon: "📱" },
    { title: "SEO Specialist", icon: "🔍" },
    { title: "Social Media Manager", icon: "📲" },
    { title: "PPC Specialist", icon: "💰" },
    { title: "Content Marketing Manager", icon: "✍️" },
    { title: "Email Marketing Specialist", icon: "📧" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="Digital Marketing"
        tagline="Master comprehensive digital marketing strategies including SEO, social media, and PPC to drive business growth in the digital age."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="Digital Marketing"
        description="This comprehensive Digital Marketing training with DecodeT equips you with essential skills for modern marketing. Learn to create effective digital strategies, optimize search engine rankings, manage social media campaigns, and drive conversions through various digital channels. Master the tools and techniques used by top marketing professionals."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="digital-marketing" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default DigitalMarketing;
