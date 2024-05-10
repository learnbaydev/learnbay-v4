import React, { useRef, useEffect, useState } from "react";
import Styles from "./hero.module.css";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

const Hero = () => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (!video.hasAttribute("src")) {
            video.src = "/video/back-video.mp4";
          }
        } else {
          setIsIntersecting(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust intersection threshold as needed
    });

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (isIntersecting && video && video.readyState < 3) {
      video.load(); // Start preloading if intersecting and not fully loaded
    }
  }, [isIntersecting]);

  return (
    <div className={Styles.heroSection}>
      <div className={Styles.backgroundVideo}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className={Styles.video}
          playsInline // For iOS support
          poster="/images/video-poster.jpg"
        ></video>
      </div>
      <div className={Styles.content}>
        <div className={Styles.overlay}>
          <div className={Styles.head}>
            <div className={Styles.rightContent}>
              <div className={Styles.topline}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/gen-star.webp"
                  width={20}
                  height={20}
                  loading="lazy"
                  alt="star"
                />{" "}
                <span> Gen-AI for Business Leaders</span>
              </div>

              <h1 className={Styles.mainh1}>Advance Data Analytics Program</h1>
              <p className={Styles.mainpara}>
                Take the first step towards becoming a Data Science and AI
                expert!
              </p>

              <div className={Styles.colab}>
                <p>
                  In collaboration <br />
                  with
                </p>
                <hr />
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                  width={200}
                  height={60}
                  loading="lazy"
                  alt="Ibm and micorsoft"
                />
              </div>

              <div className={Styles.twodiv}>
                <div className={Styles.divone}>
                  <span>⬤</span> flexible timing
                </div>
                <div className={Styles.divone}>
                  <span>⬤</span> on-demand doubt clearing
                </div>
              </div>
              <div className={Styles.btns}>
                <div className={Styles.button}>
                  {" "}
                  <button>DOWNLOAD BROCHURE</button>
                </div>

                <div className={Styles.popbtnyt}>
                  <BsPlayFill className={Styles.Playicon} />
                  <p>Intro Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
