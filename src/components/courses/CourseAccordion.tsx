
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CourseAccordionProps {
  courseName: string;
}

const CourseAccordion = ({ courseName }: CourseAccordionProps) => {
  const getAccordionData = (course: string) => {
    const commonData = {
      "data-analytics": {
        whyChoose: "DecodeT's Data Analytics program offers hands-on experience with industry-standard tools like Python, R, SQL, Power BI, and Tableau. Our expert instructors provide personalized mentorship, ensuring you master both technical skills and analytical thinking required in today's data-driven world.",
        jobRoles: "Data Analyst, Business Analyst, Data Engineer, Junior Data Scientist, Market Research Analyst, Data Visualization Analyst, Business Intelligence Analyst, Reporting Analyst",
        prerequisites: "Basic computer literacy, fundamental mathematics knowledge, and eagerness to learn. No prior programming experience required as we start from basics and gradually build advanced concepts.",
        duration: "100 hours of comprehensive training including live sessions, hands-on projects, assignments, and mentorship. Flexible scheduling available with weekend and evening batches.",
        salary: "₹3-8 LPA for freshers, ₹8-15 LPA for experienced professionals. Senior roles can command ₹15-25 LPA+ depending on expertise and company size.",
        customization: "Yes, we offer customized training programs for corporate clients and individuals with specific requirements. We can tailor the curriculum, timeline, and focus areas based on your organizational needs."
      },
      "data-science": {
        whyChoose: "Our Data Science program covers the complete spectrum from Python programming to advanced machine learning and AI. With industry projects, one-on-one mentorship, and placement assistance, we ensure you're ready for high-paying data science roles.",
        jobRoles: "Data Scientist, Machine Learning Engineer, AI Engineer, Research Scientist, Business Intelligence Analyst, Data Mining Specialist, Deep Learning Engineer, AI Consultant",
        prerequisites: "Basic mathematics and statistics knowledge, logical thinking ability. Programming experience helpful but not mandatory as we cover Python from fundamentals to advanced applications.",
        duration: "120 hours of intensive training including theory, practical sessions, capstone projects, and portfolio development. Part-time and full-time options available.",
        salary: "₹4-10 LPA for entry-level, ₹10-20 LPA for mid-level, ₹20-40 LPA+ for senior positions. AI/ML specialists command premium salaries in the current market.",
        customization: "Absolutely! We customize programs for specific industries like healthcare, finance, retail, and manufacturing. Custom modules can be designed based on your domain requirements."
      },
      "mern-stack": {
        whyChoose: "DecodeT's MERN Stack program provides comprehensive full-stack development skills with real-world projects. Learn from industry experts, build impressive portfolios, and get job-ready with our proven curriculum and placement support.",
        jobRoles: "Full Stack Developer, Frontend Developer, Backend Developer, MERN Stack Developer, JavaScript Developer, Web Application Developer, React Developer, Node.js Developer",
        prerequisites: "Basic understanding of HTML, CSS, and JavaScript fundamentals. Logical thinking and problem-solving aptitude. Prior programming experience beneficial but not mandatory.",
        duration: "140 hours of comprehensive training covering frontend, backend, databases, and deployment. Includes multiple real-world projects and portfolio development.",
        salary: "₹3-7 LPA for freshers, ₹7-15 LPA for experienced developers. Senior full-stack developers can earn ₹15-30 LPA+ in product companies and startups.",
        customization: "Yes, we offer specialized tracks focusing on specific areas like React Native for mobile development, GraphQL integration, or microservices architecture based on requirements."
      },
      "digital-marketing": {
        whyChoose: "Our Digital Marketing course covers all aspects of modern digital marketing with hands-on experience in live campaigns. Industry-certified trainers, real client projects, and comprehensive placement assistance make us the preferred choice.",
        jobRoles: "Digital Marketing Specialist, SEO Specialist, Social Media Manager, PPC Specialist, Content Marketing Manager, Email Marketing Specialist, Growth Hacker, Digital Marketing Analyst",
        prerequisites: "Basic computer skills, good communication abilities, and creative thinking. No technical background required. Passion for marketing and willingness to learn new tools and platforms.",
        duration: "80 hours of practical training including live campaigns, tool certifications, and portfolio development. Weekend and weekday batches available for working professionals.",
        salary: "₹2-5 LPA for beginners, ₹5-12 LPA for experienced marketers. Senior roles in agencies and companies can offer ₹12-25 LPA+ with performance bonuses.",
        customization: "We customize training based on industry focus - B2B marketing, e-commerce, SaaS, local business marketing, or specific platform expertise like Facebook, Google, or LinkedIn advertising."
      },
      "business-analytics": {
        whyChoose: "DecodeT's Business Analytics program bridges the gap between business strategy and data insights. Learn from industry professionals, work on real business cases, and develop strategic thinking with analytical skills.",
        jobRoles: "Business Analyst, Business Intelligence Analyst, Data Analyst, Financial Analyst, Market Research Analyst, Strategic Planning Analyst, Operations Analyst, Consultant",
        prerequisites: "Business acumen, basic mathematics, and analytical thinking. MBA or business background helpful but not required. Strong communication and presentation skills preferred.",
        duration: "110 hours including case studies, business simulations, tool training, and presentation skills development. Executive and regular batches available.",
        salary: "₹4-8 LPA for entry-level analysts, ₹8-16 LPA for experienced professionals. Senior business analysts and consultants earn ₹16-30 LPA+ in consulting and corporate roles.",
        customization: "Industry-specific modules available for banking, retail, healthcare, manufacturing, and consulting. We can focus on specific analytical tools or business domains as needed."
      },
      "ai-for-managers": {
        whyChoose: "Our AI for Managers program is designed for leaders who want to drive AI transformation in their organizations. Learn strategic AI implementation, change management, and ROI optimization from industry experts.",
        jobRoles: "AI Strategy Manager, Digital Transformation Manager, AI Project Manager, Innovation Manager, Technology Consultant, Business Development Manager, AI Product Manager",
        prerequisites: "Management experience, strategic thinking ability, and understanding of business operations. Technical background not required but helpful. Leadership experience preferred.",
        duration: "60 hours of executive training including strategy workshops, case studies, and implementation planning. Designed for busy executives with flexible scheduling.",
        salary: "₹8-15 LPA for AI project managers, ₹15-25 LPA for strategy roles, ₹25-50 LPA+ for senior transformation leaders in large enterprises and consulting firms.",
        customization: "Highly customizable for specific industries, company sizes, and transformation goals. We design programs for C-suite executives, middle management, and technical leaders."
      }
    };

    return commonData[course as keyof typeof commonData] || commonData["data-analytics"];
  };

  const data = getAccordionData(courseName);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="why-choose" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                Why should you opt for this course from DecodeT?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.whyChoose}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="job-roles" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                What are the job roles you can target?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.jobRoles}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="prerequisites" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                What are the prerequisites for enrolling in this course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.prerequisites}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duration" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                What is the duration of the course?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.duration}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="salary" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                What's the average salary in the current job market?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.salary}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization" className="border border-muted rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                Can we customize the course based on requirement?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {data.customization}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseAccordion;
