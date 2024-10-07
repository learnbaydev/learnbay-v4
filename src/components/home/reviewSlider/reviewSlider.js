"use client";
import styles from "./reviewSlider.module.css";
import Image from "next/image";
import Reeldata from "./reelData";
import React, { useRef, useState, useEffect } from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import data from "./reviewSliderData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const WhyLearnbay = () => {
  const swiperRef = useRef(null);
  const [swap, setSwap] = useState(false);

  const nextSlide = () => {
    swiperRef.current.slideNext();
    if (!swap) setSwap(true);
  };

  const prevSlide = () => {
    swiperRef.current.slidePrev();
    if (swap) setSwap(false);
  };
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
          scrollTop > 3100 &&
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
          position: "absolute",
          top: "0",
          left: "0",
          // width: "100%",
          height: "100%",
        }}
      ></canvas>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgWrap}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/reviews-bg-l.webp"
          alt="Learnbay"
          height={1370}
          width={1982}
        />
      </div>
      <div className={styles.keyContainer}>
        <div className={styles.canvas}>
          <MyCanvas />
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.headingContainer}>
            <h3 className={styles.mainHeading}>Real Stories, Real Success</h3>
            <p className={styles.subHeading}>
              Discover what our learners say about us
            </p>
            {/* <div className={styles.btnContainer}>
              <div className={styles.prevBtn} onClick={prevSlide}>
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className={styles.nextBtn} onClick={nextSlide}>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div> */}
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={4}
              spaceBetween={30}
              className={styles.mySwiper}
            >
              {Reeldata.map((item, id) => (
                <SwiperSlide key={id} className={styles.sliderWrapper}>
                  <Image
                    src={item.proimage}
                    alt="Learnbay"
                    loading="lazy"
                    width={180}
                    height={200}
                    className={styles.videoImage}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.reviewContainer}>
            <div className={styles.leftLearn}>
              <h3 className={styles.learnHeading}>
                The Learnbay Journey: In Their Own Words
              </h3>

              {/* <div className={styles.btnContainer}>
                {swap ? (
                  <>
                    <MdOutlineKeyboardArrowRight
                      className={`${styles.Rightrotate180}  ${styles.Righticon}`}
                      onClick={prevSlide}
                    />
                    <HiArrowLongLeft
                      className={`${styles.Leftrotate180}  ${styles.Lefticon}`}
                      onClick={nextSlide}
                    />
                  </>
                ) : (
                  <>
                    <HiArrowLongLeft
                      className={`${styles.leftbtn} ${styles.Lefticon}`}
                      onClick={prevSlide}
                    />
                    <MdOutlineKeyboardArrowRight
                      className={`${styles.Rightbtn} ${styles.Righticon}`}
                      onClick={nextSlide}
                    />
                  </>
                )}
              </div> */}
            </div>
            <div className={styles.rightLearn}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // className={styles.mySwiper}
              >
                {data.map((item, id) => (
                  <SwiperSlide key={id} className={styles.learnSlides}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/test-bg.webp"
                      alt="Learnbay"
                      height={585}
                      width={499}
                    />
                    <div className={styles.reviewCont}>
                      <div className={styles.contentSlide}>{item.text}</div>
                      <div className={styles.reviewImage}>
                        <Image
                          src={item.proimage}
                          alt="Learnbay"
                          loading="lazy"
                          width={40}
                          height={40}
                        />
                        <h6 className={styles.learnerName}>{item.name}</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.iconsImg}>
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/linked-in-rating.webp"
                alt="Learnbay"
                height={208}
                width={516}
              />
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/course-report-rating.webp"
                alt="Learnbay"
                height={208}
                width={484}
              />
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/switch-up-rating.webp"
                alt="Learnbay"
                height={484}
                width={206}
              />
              <Image
                src="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/google-rating.webp"
                alt="Learnbay"
                height={206}
                width={520}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnbay;
