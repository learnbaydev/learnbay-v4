"use client";
import React, { useRef } from "react";
import styles from "./reelSection.module.css";
import data from "./reelData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ReelSection = () => {
  const swiperRef = useRef(null);

  const nextSlide = () => {
    swiperRef.current.slideNext();
  };

  const prevSlide = () => {
    swiperRef.current.slidePrev();
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headingContainer}>
        <h3 className={styles.mainHeading}>Real Stories, Real Success</h3>
        <p className={styles.subHeading}>
          Discover what our learners say about us
        </p>
        <div className={styles.btnContainer}>
          <div className={styles.prevBtn} onClick={prevSlide}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className={styles.nextBtn} onClick={nextSlide}>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={4}
        spaceBetween={30}
        className={styles.mySwiper}
      >
        {data.map((item, id) => (
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
    </div>
  );
};

export default ReelSection;
