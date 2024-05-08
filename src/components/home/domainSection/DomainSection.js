"use client";
import React from "react";
import { useEffect, useRef } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";

function DomainSection() {
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
          scrollTop > 4250 &&
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

      const leftPosition = 28;

      ctx.strokeStyle = "#E9E9E9";
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(leftPosition, 0);
      ctx.lineTo(leftPosition, canvasHeight);
      ctx.stroke();

      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.strokeStyle = "#E9E9E9";
      ctx.lineWidth = 3;
      ctx.moveTo(leftPosition, 0);
      ctx.lineTo(leftPosition, arrowY);
      ctx.stroke();
      if (arrowY < canvasHeight - arrowSize) {
        // Check if arrow has not reached the bottom

        ctx.fillStyle = "#E9E9E9";
        ctx.strokeStyle = "#E9E9E9";

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
          //   width: "100%",
          //   height: "100%",
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
          <h2>Domain Specialization</h2>
          <div className={styles.twoContainer}>
            <div className={styles.iconContent}>
              <div className={styles.mainBtn}>
                <div className={styles.btnContainer}>
                  <div className={styles.btnIcon}>
                    <div className={styles.iconText}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/harvester.webp"
                        width="49"
                        height="50"
                        loading="lazy"
                        alt="data science course"
                      />
                      Manufacturing
                    </div>
                  </div>
                  <TbDownload className={styles.iconDownload} />
                </div>
                <div className={styles.line}></div>
                <p className={styles.paraSide}>
                  Data science can help marketers tailor their efforts to suit
                  individual needs and preferences.
                </p>
              </div>
              <div className={styles.mainBtn}>
                <div className={styles.btnContainer}>
                  <div className={styles.btnIcon}>
                    <div className={styles.iconText}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/human_resources.webp"
                        width="53"
                        height="69"
                        loading="lazy"
                        alt="data science course"
                      />
                      HR & Sales
                    </div>
                  </div>
                  <TbDownload className={styles.iconDownload} />
                </div>
                <div className={styles.line}></div>
                <p className={styles.paraSide}>
                  Gain expertise in you domain and aim for higher salary hikes.
                </p>
              </div>
              <div className={styles.mainBtn}>
                <div className={styles.btnContainer}>
                  <div className={styles.btnIcon}>
                    <div className={styles.iconText}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/split_transaction.webp"
                        width="48"
                        height="56"
                        loading="lazy"
                        alt="data science course"
                      />
                      BFSI
                    </div>
                  </div>
                  <TbDownload className={styles.iconDownload} />
                </div>
                <div className={styles.line}></div>
                <p className={styles.paraSide}>
                  Advanced analytics for risk assessment and fraud detection in
                  finance.
                </p>
              </div>
              <div className={styles.mainBtn}>
                <div className={styles.btnContainer}>
                  <div className={styles.btnIcon}>
                    <div className={styles.iconText}>
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/manager.webp"
                        width="58"
                        height="50"
                        loading="lazy"
                        alt="data science course"
                      />
                      Managers & Leader
                    </div>
                  </div>
                  <TbDownload className={styles.iconDownload} />
                </div>
                <div className={styles.line}></div>
                <p className={styles.paraSide}>
                  Empowering Leaders with AI & Data Science Expertise
                </p>
              </div>
            </div>
            <div className={styles.RightImage}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/DomainHome.gif"
                width="397"
                height="400"
                loading="lazy"
                alt="data science course"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainSection;
