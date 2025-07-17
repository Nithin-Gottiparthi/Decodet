
import UpskillingHero from "@/components/upskilling/UpskillingHero";
import UpskillingStats from "@/components/upskilling/UpskillingStats";
import WhyChooseDecodeT from "@/components/upskilling/WhyChooseDecodeT";
import PopularCourses from "@/components/upskilling/PopularCourses";
import WhyWeBest from "@/components/upskilling/WhyWeBest";
import UpskillingBenefits from "@/components/upskilling/UpskillingBenefits";
import StudentTestimonials from "@/components/upskilling/StudentTestimonials";
import FinalCTA from "@/components/upskilling/FinalCTA";

const Upskilling = () => {
  return (
    <div className="min-h-screen">
      <UpskillingHero />
      <UpskillingStats />
      <WhyChooseDecodeT />
      <PopularCourses />
      <WhyWeBest />
      <UpskillingBenefits />
      <StudentTestimonials />
      <FinalCTA />
    </div>
  );
};

export default Upskilling;
