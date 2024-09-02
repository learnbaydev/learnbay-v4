import React, { useRef, useState } from "react";
import styles from "./learner.module.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import data from "./LearnerData";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Learners = () => {
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

  return (
    <div className={styles.learnWrapper}>
      <div className={styles.learnContainer}>
        <div className={styles.leftLearn}>
          <h3 className={styles.learnHeading}>
            What our Learner say about Learnbay Program
          </h3>

          <div className={styles.btnContainer}>
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
          </div>
        </div>
        <div className={styles.rightLearn}>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={4}
            spaceBetween={100}
            pagination={{
              clickable: true,
            }}
            className={styles.mySwiper}
          >
            {data.map((item, id) => (
              <div className={styles.swiperdiv}>
                <SwiperSlide key={id} className={styles.learnSlides}>
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
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <Image
          src="/assets/icon.webp"
          alt="Learnbay"
          loading="lazy"
          width={1060}
          height={90}
        />
      </div>
    </div>
  );
};

export default Learners;
