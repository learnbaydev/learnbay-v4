"use client";
import React from "react";
import { useEffect, useRef } from "react";
import styles from "./whyLearnbay.module.css";
import Image from "next/image";

function WhyLearnbay() {
  const MyCanvass = () => {
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
          canvasRect.top - scrollTop < windowHeight / 8 &&
          canvasRect.bottom > (windowHeight / 8) * 3
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
      arrowY += event.deltaY * 0.8;
      arrowY = Math.min(Math.max(0, arrowY), canvasHeight - arrowSize);
      drawArrow();
    };

    const drawArrow = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const leftPosition = 22;

      ctx.strokeStyle = "black";
      ctx.setLineDash([10, 10]);
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
          width: "100%",
          height: "100%",
        }}
      ></canvas>
    );
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <MyCanvass />
        </div>
        <div>
          <h2>Why choose Learnbay for Upskilling?</h2>
          <div className={styles.twoContainer}>
            <div className={styles.iconContent}>
              <div className={styles.parentBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/250Avg.webp"
                  width="101"
                  height="90"
                  loading="lazy"
                  quality={40}
                  alt="data science course"
                />
                <div className={styles.textBox}>
                  <h3>250% Avg.</h3>
                  <p>Salary Hike</p>
                </div>
              </div>
              <div className={styles.parentBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/dedicated.webp"
                  width="101"
                  height="90"
                  loading="lazy"
                  quality={40}
                  alt="data science course"
                />
                <div className={styles.textBox}>
                  <h3>Dedicated</h3>
                  <p>Placement Cell</p>
                </div>
              </div>
              <div className={styles.parentBox}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/live.webp"
                  width="101"
                  height="90"
                  loading="lazy"
                  quality={40}
                  alt="data science course"
                />
                <div className={styles.textBox}>
                  <h3>Live online</h3>
                  <p>Interactive Session</p>
                </div>
              </div>
            </div>
            <div className={styles.RightImage}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/RightImage.webp"
                width="367"
                height="500"
                loading="lazy"
                quality={40}
                alt="data science course"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyLearnbay;
