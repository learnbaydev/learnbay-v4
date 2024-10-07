'use client';

import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Styles from "./hero.module.css";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

const Hero = ({ title, description, subtitle, typeLogo ,content}) => {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const handleIntersection = useCallback((entries) => {
    const video = videoRef.current;
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
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    const video = videoRef.current;
    if (isIntersecting && video && video.readyState < 3) {
      video.load();
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
          playsInline
          poster="/images/video-poster.jpg"
        ></video>
      </div>
      <div className={Styles.content}>
        <div className={Styles.overlay}>
          <div className={Styles.head}>
            <div className={Styles.rightContent}>
              <Topline subtitle={subtitle} />
              <h1 className={Styles.mainh1}>{title}</h1>
              <h4 className={Styles.mainpara}>{description}</h4>
              <Collaboration typeLogo={typeLogo} />
              <Features />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Topline = ({ subtitle }) => (
  <div className={Styles.topline}>
    <Image
      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/gen-star.webp"
      width={20}
      height={20}
      loading="lazy"
      alt="star"
    />{" "}
    <span>{subtitle}</span>
  </div>
);

const Collaboration = ({ typeLogo, content }) => (
  <div className={Styles.colab}>
    <p>
      In collaboration <br />
      with
    </p>
    <p>{content}</p>
    <hr />
    <Image
      src={typeLogo}
      width={200}
      height={60}
      loading="lazy"
      alt="Ibm and microsoft"
    />
  </div>
);

const Features = () => (
  <div className={Styles.twodiv}>
    <div className={Styles.divone}>
      <span>⬤</span> flexible timing
    </div>
    <div className={Styles.divone}>
      <span>⬤</span> on-demand doubt clearing
    </div>
  </div>
);

const Buttons = () => (
  <div className={Styles.btns}>
    <div className={Styles.button}>
      <button>DOWNLOAD BROCHURE</button>
    </div>
    <div className={Styles.popbtnyt}>
      <BsPlayFill className={Styles.Playicon} />
      <p>Intro Video</p>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  typeLogo: PropTypes.string.isRequired,
  content:PropTypes.string.isRequired,
};

export default Hero;
