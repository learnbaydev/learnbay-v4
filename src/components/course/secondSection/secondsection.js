// components/course/secondsection/secondsection.js



import React from "react";
import Image from "next/image";
import Styles from "./secondsection.module.css";
import SectionData from "./secondsectiondata"; // Importing the combined data file

function Secondsection() {
  const { sectionData: sectionDataList, additionalContent } = SectionData;

  return (
    <div>
      <div className={Styles.secondHead}>
        <div className={Styles.trust}>
          <h2>Trusted by 1,00,000 + Professionals</h2>
        </div>
        <div className={Styles.ibmHead}>
          <div className={Styles.mainIBM}>
            {sectionDataList.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className={Styles.insidediv}>
                  <Image
                    src={item.imageSrc}
                    width={80}
                    height={80}
                    alt={item.title}
                  />
                  <div className={Styles.insidetitle}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                {index !== sectionDataList.length - 1 && <hr />}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={Styles.SecondHeadtwo}>
          <h2>{additionalContent.sectionTitle}</h2>
          <div className={Styles.gridsection}>
            <div>
              {additionalContent.gridItems.map((item, index) => (
                <div key={index} className={Styles.gridinsidediv}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div>
              <Image
                src={additionalContent.imageSrc}
                width={450}
                height={450}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondsection;
