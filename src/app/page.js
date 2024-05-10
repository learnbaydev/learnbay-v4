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

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
      <CompanySection />
      <WhyLearnbay />
      <Course />
      <ProjectSection />
      <DomainSection />
      <CallSection />
      <Footer />
    </main>
  );
}
