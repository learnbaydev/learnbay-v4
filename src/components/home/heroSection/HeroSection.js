import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrap}>
        <Image
          src={
            // mobile
            //   ? " https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/Masters+header+BG+Mobile+View+(1).webp"
            //   :
            "https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/HeroSectionBg.webp"
          }
          fill
          priority
          alt="Learnbay"
        />
      </div>
      <div className={styles.content}>
        <h3>Advance your tech career with</h3>
        <h1>India’s #1 Upskilling Platform for Working Professionals</h1>
        <div className={styles.round}>
          <p>Data Science & AI</p>
          <p>Cloud & DevOps</p>
          <p>Master’s Degree</p>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.button}>Get Recommendation</button>
          <div className={styles.learnDiv}>
            {" "}
            <div className={styles.iconDiv}>
              <FaPlay className={styles.playIcon} />
            </div>{" "}
            Learn More
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
