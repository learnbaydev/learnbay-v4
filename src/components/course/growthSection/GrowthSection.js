import React from "react";
import Styles from "./growthsection.module.css";
import Video from "./growthVideo/Video";

const GrowthSection = () => {
  const instagramReelsVideoUrl = "your_instagram_reels_video_link";
  const firstBoxGradient = "linear-gradient(126deg, #0072BC 8.92%, #003456 88.07%)";
  const secondBoxGradient = "linear-gradient(121deg, #72BC00 6.38%, #345600 93.82%)"; // Green color for the second box
  const thirdBoxGradient = "linear-gradient(116deg, #F99600 8.94%, #932C00 89.88%)";

  return (
    <>
      <div className={Styles.GrowthSection}>
        <h2>
          How does the program support a manager's career growth in Data
          Science?
        </h2>

        <div className={Styles.downconent}>
          <div className={Styles.leftside}>
            <p>
              Unlock opportunities with our job assistance, blending technical
              prowess and business understanding.
            </p>
            <div className={Styles.leftinside}>
              <div className={Styles.demanddiv}>
                <div className={Styles.box} style={{ backgroundImage: firstBoxGradient }}></div>
                <h4>On-demand doubt session</h4>
              </div>
              <div className={Styles.demanddiv}>
                <div className={Styles.box} style={{ backgroundImage: secondBoxGradient }}></div>
                <h4>1:1 Interview Preparation</h4>
              </div>
              <div className={Styles.demanddiv}>
                <div className={Styles.box} style={{ backgroundImage: thirdBoxGradient }}></div>
                <h4>Access to 100+ job opening</h4>
              </div>
            </div>
          </div>
          <div className={Styles.rytside}>
            <Video />
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
