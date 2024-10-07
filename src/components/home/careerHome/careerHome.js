"use client";
import React, { useState } from "react";
import styles from "./careerHome.module.css";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";

function careerHome() {
  const [textOpen, setTextOpen] = useState(1);

  const toggleTab = (index) => {
    if (textOpen === index) {
      return setTextOpen(null);
    }
    setTextOpen(index);
  };
  return (
    <section className={styles.section}>
      <div className={styles.imgWrap}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/Career-Home-N.webp"
          alt="Learnbay"
          priority
          height={800}
          width={1500}
        />
      </div>
      <div className={styles.mainDiv}>
        <h4 className={styles.mediaMainHeading}>Future-proof your career</h4>
        <p className={styles.greyText}>What are our advantages ?</p>
        <div className={styles.container}>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/project-lab-01.webp"
              alt="Learnbay"
              priority
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont01}>
              <h4 className={styles.goldenH4}>
                Next-Gen Project Lab Experience
              </h4>
              <p className={styles.paraBot}>
                Work in an industry like environment and gain practical hands-on
                experience.
              </p>
            </div>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/certification-02.webp"
              alt="Learnbay"
              priority
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont02}>
              <h4 className={styles.goldenH4}> Top industry certifications</h4>
            </div>
          </div>
          <div className={styles.innerDiv2}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/career-img.webp"
              alt="Learnbay"
              priority
              height={310}
              width={194}
              className={styles.careerImg}
            />
          </div>
          <div className={styles.innerDiv}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/domain-03.webp"
              alt="Learnbay"
              priority
              height={212}
              width={400}
              className={styles.careerImg}
            />
            <div className={styles.DivCont03}>
              <h4 className={styles.goldenH4}>Domain Specialisation</h4>
              <div className={styles.iconContent}>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(1)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/harvester.webp"
                          width="30"
                          height="30"
                          loading="lazy"
                          alt="data science course"
                        />
                        Manufacturing
                      </div>
                    </div>
                    <TbDownload className={styles.iconDownload} />
                  </div>
                  <p
                    className={
                      textOpen === 1 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Data science can help marketers tailor their efforts to suit
                    individual needs and preferences.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(2)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/human_resources.webp"
                          width="31"
                          height="40"
                          loading="lazy"
                          alt="data science course"
                        />
                        HR & Sales
                      </div>
                    </div>
                    <TbDownload className={styles.iconDownload} />
                  </div>
                  <p
                    className={
                      textOpen === 2 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Gain expertise in you domain and aim for higher salary
                    hikes.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(3)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/split_transaction.webp"
                          width="30"
                          height="35"
                          loading="lazy"
                          alt="data science course"
                        />
                        BFSI
                      </div>
                    </div>
                    <TbDownload className={styles.iconDownload} />
                  </div>
                  <p
                    className={
                      textOpen === 3 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Advanced analytics for risk assessment and fraud detection
                    in finance.
                  </p>
                </div>
                <div className={styles.mainBtn}>
                  <div
                    className={styles.btnContainer}
                    onClick={() => toggleTab(4)}
                  >
                    <div className={styles.btnIcon}>
                      <div className={styles.iconText}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/manager.webp"
                          width="35"
                          height="30"
                          loading="lazy"
                          alt="data science course"
                        />
                        Managers & Leader
                      </div>
                    </div>
                    <TbDownload className={styles.iconDownload} />
                  </div>
                  <p
                    className={
                      textOpen === 4 ? styles.paraSideshow : styles.paraSide
                    }
                  >
                    Empowering Leaders with AI & Data Science Expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default careerHome;
