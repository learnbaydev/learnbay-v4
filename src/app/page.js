import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/home/heroSection/HeroSection";
import CompanySection from "@/components/home/companySection/CompanySection";
import WhyLearnbay from "@/components/home/whyLearnbay/WhyLearnbay";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CompanySection />
      <WhyLearnbay />
    </main>
  );
}
