'use client'
import React, { useState } from "react";
import Styles from "./MobileTestimonial.module.css";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import Button from "@/components/Global/button/Button";
// import Form from "@/components/Global/form/Form";
// import Popup from "@/components/Global/Popup/Popup";

const testimonials = [
  {
    id: 1,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-linkedin.webp",
  },
  {
    id: 2,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-linkedin.webp",
  },
  {
    id: 3,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-linkedin.webp",
  },
  {
    id: 4,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amrit-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amit-linkedin.webp",
  },
  {
    id: 5,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-linkedin.webp",
  },
  {
    id: 6,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-linkedin.webp",
  },
  {
    id: 7,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-linkedin.webp",
  },
  {
    id: 8,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-linkedin.webp",
  },
  {
    id: 9,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-linkedin.webp",
  },
  {
    id: 10,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-linkedin.webp",
  },
  {
    id: 11,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amrit-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amit-linkedin.webp",
  },
  {
    id: 12,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-linkedin.webp",
  },
  {
    id: 13,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-linkedin.webp",
  },
  {
    id: 14,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-linkedin.webp",
  },
  {
    id: 15,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-linkedin.webp",
  },
  {
    id: 16,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-linkedin.webp",
  },
  {
    id: 17,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-linkedin.webp",
  },
  {
    id: 18,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amrit-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amit-linkedin.webp",
  },
  {
    id: 19,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-linkedin.webp",
  },
  {
    id: 20,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-linkedin.webp",
  },
  {
    id: 21,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-linkedin.webp",
  },
  {
    id: 22,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-linkedin.webp",
  },
  {
    id: 23,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-linkedin.webp",
  },
  {
    id: 24,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-linkedin.webp",
  },
  {
    id: 25,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amrit-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amit-linkedin.webp",
  },
  {
    id: 26,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-linkedin.webp",
  },
  {
    id: 27,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-linkedin.webp",
  },
  {
    id: 28,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-linkedin.webp",
  },
  {
    id: 29,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/komal-linkedin.webp",
  },
  {
    id: 30,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/girish-linkedin.webp",
  },
  {
    id: 31,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/gautam-linkedin.webp",
  },
  {
    id: 32,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amrit-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/amit-linkedin.webp",
  },
  {
    id: 33,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/satya-linkedin.webp",
  },
  {
    id: 34,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/sohel-linkedin.webp",
  },
  {
    id: 35,
    UserImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-img.webp",
    MobileReviewImage:
      "https://d32and0ii3b8oy.cloudfront.net/web/s3_main/MobileReview/soniya-linkedin.webp",
  },
];

function MobileTestimonial() {
  const [popups, setPopups] = useState(false);

  const [activeIndex, setActiveIndex] = useState(Math.floor(testimonials.length / 3));

//   const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevClick = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleUserClick = (index) => {
    setActiveIndex(index);
  };

  const calculateTransform = () => {
    const centerOffset = Math.floor((5 - 1) / 2); // Assuming 5 users are visible at a time
    const offset = activeIndex * 100;
    const translateValue = Math.max(Math.min(offset, 0), -((testimonials.length - 5) * 100));
    return `translateX(${translateValue}%)`;
  };

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <section className={Styles.section}>
        {/* <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={true}
              dataScienceCounselling={true}
              upSkillingHide={true}
            />
          </div>
        </Popup> */}
        <div className={Styles.TestimonialContainer}>
          <div className={Styles.FirstDiv}>
            <h4>
              <span>Insider glimpses:</span> Click to see real conversations
              with our learners
            </h4>
            <div className={Styles.leftSlide}>
              <div onClick={handlePrevClick}>
                {" "}
                <IoIosArrowBack className={Styles.icons} />{" "}
              </div>
              <div className={Styles.sliderUser} style={{ transform: calculateTransform() }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`${Styles.UserImage} ${
                      activeIndex === index ? Styles.active : Styles.faded
                    }`}
                    style={{
                      transform: `translateX(-${activeIndex * 100}%)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                    onClick={() => handleUserClick(index)}
                  >
                    <Image
                      width="100"
                      height="100"
                      src={testimonial.UserImage}
                      alt={`User ${testimonial.UserImage}`}
                      className={Styles.imgBorder}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div onClick={handleNextClick}>
                <IoIosArrowForward className={Styles.icons} />
              </div>
            </div>
          </div>
          <div className={Styles.HideInMobile}>
            {/* <div className={Styles.btnWrapper} onClick={popupShow}>
              <Button
                className={Styles.Btn}
                OrangeButton={true}
                text="Free Career Counselling from Experts"
              />
            </div> */}
          </div>
        </div>
        <div className={Styles.MobileReviewImageContainer}>
          <Image
            width="363"
            height="500"
            style={{width:"100%"}}
            src={testimonials[activeIndex].MobileReviewImage}
            alt={`User ${testimonials[activeIndex].UserImage}`}
          />
        </div>
      </section>
      <div className={Styles.ShowInMobile}>
        {/* <div className={Styles.btnWrapper} onClick={popupShow}>
          <Button
            className={Styles.Btn}
            OrangeButton={true}
            text="Free Career Counselling from Experts"
          />
        </div> */}
      </div>
    </>
  );
}

export default MobileTestimonial;
