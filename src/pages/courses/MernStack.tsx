
import CourseHero from "@/components/courses/CourseHero";
import ProgramHighlights from "@/components/courses/ProgramHighlights";
import CourseOverview from "@/components/courses/CourseOverview";
import CourseAccordion from "@/components/courses/CourseAccordion";
import JobRoles from "@/components/courses/JobRoles";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";

const MernStack = () => {
  const heroFeatures = [
    "Master MongoDB, Express.js, React.js & Node.js",
    "24×7 Support & Doubt Clearance",
    "LinkedIn Profile & Portfolio Optimization",
    "Industry Ready Certification",
    "Internship Assistance"
  ];

  const learningOutcomes = [
    "Frontend Development with React.js",
    "Backend Development with Node.js & Express.js",
    "Database Management with MongoDB",
    "RESTful API Development & Integration",
    "State Management with Redux",
    "Authentication & Authorization",
    "Deployment & DevOps Fundamentals"
  ];

  const jobRoles = [
    { title: "Full Stack Developer", icon: "💻" },
    { title: "Frontend Developer", icon: "🎨" },
    { title: "Backend Developer", icon: "⚙️" },
    { title: "MERN Stack Developer", icon: "🔧" },
    { title: "JavaScript Developer", icon: "🟨" },
    { title: "Web Application Developer", icon: "🌐" }
  ];

  return (
    <div className="min-h-screen">
      <CourseHero
        title="MERN Stack Developer"
        tagline="Master full-stack development with MongoDB, Express, React, and Node.js to build modern, scalable web applications."
        features={heroFeatures}
      />
      <ProgramHighlights />
      <CourseOverview
        title="MERN Stack"
        description="This comprehensive MERN Stack training with DecodeT provides you with complete full-stack development skills. Learn to build dynamic, responsive web applications using MongoDB for database, Express.js for backend, React.js for frontend, and Node.js for server-side development. Master the complete web development lifecycle from concept to deployment."
        learningOutcomes={learningOutcomes}
      />
      <CourseAccordion courseName="mern-stack" />
      <JobRoles roles={jobRoles} />
      <StudentTestimonials />
    </div>
  );
};

export default MernStack;
