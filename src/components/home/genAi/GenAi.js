"use client";
import React from "react";
import styles from "./GenAi.module.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

function GenAi() {
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
          scrollTop > 5000 &&
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
    <section className={styles.container}>
      <div className={styles.main}>
      <div className={styles.canvas}>
          <MyCanvas />
        </div>
        <div className={styles.firstDiv}>
          <h4>The future of learning is here</h4>
          <p className={styles.whiteText}><b>GenAI</b>-Powered Courses for Faster Growth</p>
          <div className={styles.iconDiv}>
            <p>
              <IoCheckmarkDoneSharp className={styles.greenCheck} /> 2 Industry backed capstone projects
            </p>
            <p>
              <IoCheckmarkDoneSharp className={styles.greenCheck} /> 25+ Hours of Generative AI content and
              doubt clearing sessions
            </p>
            <p>
              {" "}
              <IoCheckmarkDoneSharp className={styles.greenCheck} /> Access to exclusive AI tools and
              resources
            </p>
          </div>
          <p className={styles.golden}>
            <FaStar /> All our courses cover GenAI-Integrated syllabus
          </p>
        </div>
        <div className={styles.secondDiv}>
            <p className={styles.GenText}>GenAI Tools</p>
            <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/GenAi-tools.webp"
                  width="326"
                  height="200"
                  alt="data science course"
                />
        </div>
      </div>
    </section>
  );
}

export default GenAi;
