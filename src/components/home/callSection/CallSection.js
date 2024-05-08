import React from "react";
import styles from "./CallSection.module.css";
import Image from "next/image";
import Button from "@/components/global/Button/Button";

function CallSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imgWrap}>
        <Image
          src={
            "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/callHome.webp"
          }
          alt="Learnbay"
          width="1200"
          height="100"
        />
      </div>
      <div className={styles.contentSection}>
        <p className={styles.yellowText}>Got more questions?</p>
        <h4>Talk to our team directly</h4>
        <p className={styles.Text}>
          Contact us and our academic counsellor will get in touch with you
          shortly
        </p>
        <div className={styles.btnDiv}>
          <button className={styles.green}>Enquire Now</button>
          <button className={styles.white}>091-77956 87988</button>
        </div>
      </div>
    </section>
  );
}

export default CallSection;
