"use client";
import React from "react";
import { useEffect, useRef } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa6";
import Form from "@/components/global/form/Form";

function DomainSection() {
  const MyCanvas = () => {
    const canvasRef = useRef(null);
    let ctx, canvasWidth, canvasHeight, arrowY;
    const arrowSize = 15;

    useEffect(() => {
      const canvas = canvasRef.current;
      const parentDiv = canvas.parentElement;
      ctx = canvas.getContext("2d");
      canvasWidth = parentDiv.clientWidth;
      canvasHeight = parentDiv.clientHeight;
      arrowY = 0;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const handleScroll = () => {
        const canvasRect = canvas.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || window.pageYOffset;

        if (
          scrollTop > 5650 &&
          canvasRect.top - scrollTop < windowHeight / 6 &&
          canvasRect.bottom > windowHeight / 6
        ) {
          window.addEventListener("wheel", handleWheel);
        } else {
          window.removeEventListener("wheel", handleWheel);
        }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    const handleWheel = (event) => {
      arrowY += event.deltaY * 1;
      arrowY = Math.min(Math.max(0, arrowY), canvasHeight - arrowSize);
      drawArrow();
    };

    const drawArrow = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const leftPosition = 20;

      ctx.strokeStyle = "black";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(leftPosition, 0);
      ctx.lineTo(leftPosition, canvasHeight);
      ctx.stroke();

      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.strokeStyle = "#0072BC";
      ctx.lineWidth = 3;
      ctx.moveTo(leftPosition, 0);
      ctx.lineTo(leftPosition, arrowY);
      ctx.stroke();
      if (arrowY < canvasHeight - arrowSize) {
        // Check if arrow has not reached the bottom

        ctx.fillStyle = "#89B4D0";
        ctx.strokeStyle = "#89B4D0";

        ctx.beginPath();
        ctx.moveTo(leftPosition, arrowY);
        ctx.lineTo(leftPosition - arrowSize / 2, arrowY - arrowSize);
        ctx.lineTo(leftPosition + arrowSize / 2, arrowY - arrowSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    };

    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          top: "0",
          left: "0",
          // width: "100%",
          height: "90%",
        }}
      ></canvas>
    );
  };
  return (
    <section className={styles.section}>
      <div className={styles.imgWrap}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/learners-reviews-N.webp"
          alt="Learnbay"
          priority
          height={1520}
          width={1565}
          className={styles.imgWrapImg}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <MyCanvas />
        </div>
        <div>
          <h2>Land your dream job</h2>
          <p className={styles.paraTop}>How can learnbay help?</p>
          <div className={styles.secondContainer}>
            <div className={styles.innerContainer}>
              <FaBriefcase className={styles.iconTop} />
              <h4>Placement Support</h4>
              <p>
                Unleash your career potential with unlimited job access,
                interview support, and profile review.
              </p>
            </div>
            <div className={styles.innerContainer}>
              <FaBriefcase
                className={styles.iconTop}
                style={{
                  background:
                    "linear-gradient(180deg, #72BC00 0%, #345600 100%)",
                }}
              />
              <h4>Resume BuildUp</h4>
              <p>
                Unleash your career potential with unlimited job access,
                interview support, and profile review.
              </p>
            </div>
            <div className={styles.innerContainer}>
              <FaBriefcase className={styles.iconTop} />
              <h4>Mock Interviews</h4>
              <p>
                Unleash your career potential with unlimited job access,
                interview support, and profile review.
              </p>
            </div>
            <div className={styles.innerContainer}>
              <FaBriefcase
                className={styles.iconTop}
                style={{
                  background:
                    "linear-gradient(180deg, #72BC00 0%, #345600 100%)",
                }}
              />
              <h4>8-10 Interview Calls</h4>
              <p>
                Unleash your career potential with unlimited job access,
                interview support, and profile review.
              </p>
            </div>
          </div>
          <div className={styles.companyLog}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/company-logo-N.webp"
              alt="Learnbay"
              height={67}
              width={1410}
            />
            <div className={styles.compPara}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/left-line.webp"
                alt="Learnbay"
                height={67}
                width={1410}
              />{" "}
              <p> 250+ companies</p>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/right-line.webp"
                alt="Learnbay"
                height={67}
                width={1410}
              />
            </div>
          </div>
          <div className={styles.secondSection}>
            <h2>Learner’s reviews</h2>
            <div className={styles.secondContainer2}>
              <div className={styles.review}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/reivew-left-video.webp"
                  alt="Learnbay"
                  height={600}
                  width={760}
                />
              </div>
              <div className={styles.formDiv}>
                <h4>Free Counselling with Experts</h4>
                <Form dataScienceCounselling={true} radio={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainSection;
