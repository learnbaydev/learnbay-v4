"use client";

import React from "react";
import Styles from "./careerService.module.css";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { BsPersonSquare } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const CareerServicePro = () => {
  const firstBoxGradient =
    "linear-gradient(126deg, #0072BC 8.92%, #003456 88.07%)";
  const secondBoxGradient =
    "linear-gradient(121deg, #72BC00 6.38%, #345600 93.82%);"; // Green color for the second box

  return (
    <>
      <div className={Styles.promain}>
        <div className={Styles.headline}>
          <h4>Get job ready within 6 months with</h4>
          <h2> Career Service Pro</h2>
        </div>
        <div className={Styles.proHead}>
          <div className={Styles.Prodown}>
            <div className={Styles.proleftside}>
              <div className={Styles.prodiv}>
                <div className={Styles.leftcontent}>
                  <IoBagOutline
                    className={Styles.icons}
                    style={{ backgroundImage: firstBoxGradient }}
                  />
                  <h5>Placement Support</h5>
                  <p>
                    Unleash your career potential with unlimited job access,
                    interview support, and profile review.
                  </p>
                </div>
                <hr className={Styles.hrline} />
                <div className={Styles.leftcontent}>
                  <BsPersonSquare
                    className={Styles.icons}
                    style={{ backgroundImage: secondBoxGradient }}
                  />
                  <h5>Mock Interviews</h5>
                  <p>
                    Unleash your career potential with unlimited job access,
                    interview support, and profile review.
                  </p>
                </div>
              </div>
              <hr className={Styles.hline} />

              <div className={Styles.prodiv}>
                <div className={Styles.leftcontent}>
                  <IoNewspaperOutline
                    className={Styles.icons}
                    style={{ backgroundImage: secondBoxGradient }}
                  />
                  <h5>Resume BuildUp</h5>
                  <p>
                    Unleash your career potential with unlimited job access,
                    interview support, and profile review.
                  </p>
                </div>
                <hr className={Styles.hrline} />

                <div className={Styles.leftcontent}>
                  <FaPhone
                    className={Styles.icons}
                    style={{ backgroundImage: firstBoxGradient }}
                  />
                  <h5>8-10 Interview Calls</h5>
                  <p>
                    Unleash your career potential with unlimited job access,
                    interview support, and profile review.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.prorytside}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/career-arrow-img.webp"
              width={320}
              height={380}
              alt="learnbay-growth"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={Styles.Clogo}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/logo-companys.webp"
          width={890}
          height={50}
          loading="lazy"
          alt="learnbay"
        />
        <div className={Styles.text}>
          <hr className={Styles.hr} /> •<p>250+ companies</p>
          • <hr className={Styles.hr} />
        </div>
      </div>
    </>
  );
};

export default CareerServicePro;
