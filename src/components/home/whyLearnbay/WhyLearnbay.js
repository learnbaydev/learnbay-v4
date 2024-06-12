"use client";
import React from "react";
import styles from "./whyLearnbay.module.css";
import { useEffect, useRef } from "react";
import Image from "next/image";

const WhyLearnbay = () => {
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
          scrollTop > 2300 &&
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
          // height: "100%",
        }}
      ></canvas>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/highlights-img.webp"
          alt="Learnbay"
          priority
          height={670}
          width={1565}
        />
      </div>
      <div className={styles.keyContainer}>
        <div className={styles.canvas}>
          <MyCanvas />
        </div>
        <div>
          <h3 className={styles.keyHeading}>What are our key highlights?</h3>
          <div className={styles.keyBoxes}>
            <div className={styles.boxOne}>
              <div className={styles.keyContent}>
                <span className={styles.keyIcon}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/key_one.webp"
                    alt="Learnbay"
                    loading="lazy"
                    width={71}
                    height={65}
                  />
                </span>
                <h4 className={styles.keyTitle}>40k+ Successful</h4>
                <p className={styles.keyDesc}>Career Transitions</p>
              </div>
              <div className={styles.boxLine}></div>
              <div className={styles.keyContent}>
                <span className={styles.keyIcon}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/key_two.webp"
                    alt="Learnbay"
                    loading="lazy"
                    width={80}
                    height={65}
                  />
                </span>
                <h4 className={styles.keyTitle}>72% Trusted</h4>
                <p className={styles.keyDesc}>By Recruiters</p>
              </div>
              <div className={styles.boxLine}></div>
              <div className={styles.keyContent}>
                <span className={styles.keyIcon}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/key_three.webp"
                    alt="Learnbay"
                    loading="lazy"
                    width={70}
                    height={70}
                  />
                </span>
                <h4 className={styles.keyTitle}>100%</h4>
                <p className={styles.keyDesc}>Interview Guarantee</p>
              </div>
            </div>
            <div className={styles.boxTwo}>
              <div className={styles.emptyBox}>
                <span className={styles.starIcon}>
                  <Image
                    src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/star_icon.webp"
                    alt="Learnbay"
                    loading="lazy"
                    width={90}
                    height={90}
                  />
                </span>
                <h4 className={styles.starHeading}>2x Faster Growth</h4>
                <p className={styles.starDesc}>With GenAI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnbay;
