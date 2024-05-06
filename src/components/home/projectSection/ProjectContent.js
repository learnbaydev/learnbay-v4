"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./ProjectSection.module.css";

const ProjectContent = () => {
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
          scrollTop > 3600 &&
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

      const leftPosition = 10;

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

      ctx.fillStyle = "#E9E9E9";
      ctx.strokeStyle = "#E9E9E9";

      ctx.beginPath();
      ctx.moveTo(leftPosition, arrowY);
      ctx.lineTo(leftPosition - arrowSize / 2, arrowY - arrowSize);
      ctx.lineTo(leftPosition + arrowSize / 2, arrowY - arrowSize);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          top: "0",
          left: "0",
          // width: "100px",
          // height: "10px",
        }}
      ></canvas>
    );
  };

  const MyCanvasHor = () => {
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
          scrollTop > 3390 &&
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

    let leftPosition = 0;

    const handleWheel = (event) => {
      if (arrowY >= 150 && event.deltaY > 0) {
        arrowY = 150;
        leftPosition = Math.min(leftPosition + event.deltaY * 0.5, 400);
      } else {
        arrowY += event.deltaY * 1;
        arrowY = Math.min(Math.max(0, arrowY), canvasHeight - arrowSize);
      }
      drawArrow();
    };

    const drawArrow = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const startX = 70; // Starting X coordinate
      const startY = 150; // Starting Y coordinate

      let leftPosition = 70;

      ctx.strokeStyle = "#E9E9E9";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + 270, startY); // Adjust the length of the horizontal line
      ctx.moveTo(leftPosition, 0);
      ctx.lineTo(leftPosition, 150);
      ctx.stroke();

      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.strokeStyle = "#E9E9E9";
      ctx.lineWidth = 3;
      if (arrowY >= 150) {
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + 270, startY); // Adjust the length of the horizontal line
        ctx.moveTo(leftPosition, 0);
        ctx.lineTo(leftPosition, arrowY);
      } else {
        ctx.moveTo(startX, startY);
        ctx.lineTo(startX + 0, startY); // Adjust the length of the horizontal line
        ctx.moveTo(leftPosition, 0);
        ctx.lineTo(leftPosition, arrowY);
      }

      ctx.stroke();

      ctx.fillStyle = "#E9E9E9";
      ctx.strokeStyle = "#E9E9E9";
      ctx.beginPath();
      if (arrowY >= 150) {
        leftPosition += 270;
        ctx.moveTo(leftPosition, arrowY);
        ctx.lineTo(leftPosition - arrowSize, arrowY + arrowSize / 2); // Extend downwards
        ctx.lineTo(leftPosition - arrowSize, arrowY - arrowSize / 2); // Point to the left
      } else {
        ctx.moveTo(leftPosition, arrowY);
        ctx.lineTo(leftPosition - arrowSize / 2, arrowY - arrowSize);
        ctx.lineTo(leftPosition + arrowSize / 2, arrowY - arrowSize);
      }

      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "relative",
          top: "0",
          left: "0",
          // width: "100px",
          // height: "100px",
        }}
      ></canvas>
    );
  };

  return (
    <>
      <div className={styles.newCont}>
        <MyCanvasHor />
        <h2 className={styles.h4}>
          Work on Real Project with Learnbay’s{" "}
          <span className={styles.span}> ProjectLab</span>
        </h2>
      </div>
      <div className={styles.box}>
        <div>
          <div className={styles.InnerBox1}>
            <div className="imgWrapper">
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/pojectInnovation.webp"
                loading="lazy"
                width="528"
                height="350"
                alt="profile-Img"
                onClick={() => videoSHow()}
              />
            </div>
            <div className={styles.iconPara}>
              <p className={styles.BlueHed}>Project Innovation Lab</p>
              <p className={styles.para}>
                <FaCheckCircle className={styles.greenIcon} />
                Gain real proof of hands-on experience by having your project
                certified by the industry
              </p>
              <p className={styles.para}>
                <FaCheckCircle className={styles.greenIcon} />
                Make your past experiences count with domain specialisation and
                Project certification
              </p>
            </div>
          </div>
        </div>
        <MyCanvas />
        <div className={styles.InnerBox2}>
          <div className={styles.iconPara}>
            <p className={styles.BlueHed}>Project Certification from IBM</p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Work in an industry like environment and gain practical hands-on
              experience
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Gain the work experience of data scientist with dedicated project
              mentors from industry.
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Build project portfolio with domain specific capstone projects
            </p>
          </div>
          <div className="imgWrapper">
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/certificationHome.webp"
              loading="lazy"
              quality={40}
              width="528"
              height="350"
              alt="profile-Img"
              onClick={() => videoSHow()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
