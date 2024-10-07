
"use client"
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Styles from "./media.module.css";

const MediaSection = () => {

  const mediaData = [
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
    // Add more objects as needed
  
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
  
  
  
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
  
  
  
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
  
  
    {
      title: "The Times of India",
      content:
        "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous....",
    },
  
  
    
  ];
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={Styles.mediamain}>
      <h2>Media Spotlight</h2>
      <p>Featured in</p>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {mediaData.map((item, index) => (
            <div key={index} className={`swiper-slide ${Styles.box}`}>
              <div className={Styles.boxtopdiv}>
                <h4>{item.title}</h4>
              </div>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
};

export default MediaSection;