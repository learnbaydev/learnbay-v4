'use client'
import React, { useRef, useState } from 'react'
import styles from './Media.module.css'
import { HiArrowLongLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import data from './MediaData'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Media = () => {

  const swiperRef = useRef(null);
  const [ swap, setSwap] = useState(false);

  const nextSlide = () =>{
    swiperRef.current.slideNext();
    if (!swap) setSwap(true);
  }

  const prevSlide = () =>{
    swiperRef.current.slidePrev();
    if (swap) setSwap(false);
  }





  return (
    <div className={styles.mediaWrapper}>
       <div className={styles.mediaContainer}>
     <h4 className={styles.mediaMainheading}>Media Spotlight</h4>
     <p className={styles.mediaSubheading}>Featured in</p>
  </div>
  <div className={styles.btnContainer}>
          {swap ? (
            <>
              <MdOutlineKeyboardArrowRight
                className={`${styles.Rightrotate180} ${styles.Righticon}`}
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

        <Swiper
         
         onSwiper={(swiper) =>{
          swiperRef.current = swiper;
        }}

        slidesPerView={4}
        spaceBetween={20}
        
        modules={[Pagination]}
        className={styles.mySwiper}
      >
        {
          data.map((item,id) =>(
            <SwiperSlide key={id} className={styles.sliderWrapper}>
              <div className={styles.mediaCard}>
                <h4 className={styles.medcardHeading}>{item.title}</h4>
                <p className={styles.medcardContent}>{item.text}</p>
                <p className={styles.medCarddate}>{item.date}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  
    
  )
}

export default Media