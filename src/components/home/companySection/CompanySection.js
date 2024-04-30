import React from "react";
import styles from "./CompanySection.module.css";
import Image from "next/image";

function CompanySection() {
  return (
    <section className={styles.section}>
      <h3>
        Learn from Top<span> 1% Tech Mentors</span>
      </h3>
      <div className={styles.container}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/HomeCompaniesLogo.webp"
            width="961"
            height="40"
            loading="lazy"
            quality={40}
            alt="data science course"
          />
        </div>
      </div>

      <div className={styles.containerMobile}>
        <div className="imgWrapper">
          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/MobileSecond.webp"
            width="450"
            height="152"
            loading="lazy"
            quality={40}
            alt="data science course"
          />
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
