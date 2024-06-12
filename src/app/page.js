import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/heroSection/HeroSection";
import CompanySection from "@/components/home/companySection/CompanySection";
import WhyLearnbay from "@/components/home/whyLearnbay/WhyLearnbay";
import Course from "@/components/home/courseSection/Course";
import ProjectSection from "@/components/home/projectSection/ProjectSection";
import DomainSection from "@/components/home/domainSection/DomainSection";
import CallSection from "@/components/home/callSection/CallSection";
import Footer from "@/components/global/footer/Footer";
import Navbar from "@/components/global/navbar/Navbar";
import GenAi from "@/components/home/genAi/GenAi";
import Media from "@/components/home/media/Media";
import ReviewSlider from "@/components/home/reviewSlider/reviewSlider";
import CareerHome from "@/components/home/careerHome/careerHome";
import MobileTestimonial from "@/components/home/mobileTestimonial/MobileTestimonial";
import ReelSection from "@/components/home/reelSection/reelSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar dataScienceCounselling={true} radio={true} />
      <HeroSection dataScienceCounselling={true} radio={true}/>
      <CompanySection />
      <Course dataScienceCounselling={true} radio={true}/>
      <WhyLearnbay />
      {/* <ReelSection /> */}
      <ReviewSlider />
      <CareerHome />
      <GenAi />
            {/* <ProjectSection /> */}
      <DomainSection dataScienceCounselling={true} radio={true} />
      <MobileTestimonial />
      <Media />
      <CallSection />
      <Footer />
    </main>
  );
}
