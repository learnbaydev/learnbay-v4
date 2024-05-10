import React, { useState } from "react";
import Styles from "./domainElcetive.module.css";
import Image from "next/image";
import domainData from "./domainData";
import { TfiDownload } from "react-icons/tfi";

const DomainElective = () => {
  // State to track which tab is being hovered over
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div>
      <div className={Styles.DomainHead}>
        <div className={Styles.DomainMain}>
          <div className={Styles.leftside}>
            <h2>
              Choose <br />
              Your Domain Elective
            </h2>
            <button>Apply Now</button>
          </div>

          <div className={Styles.rightside}>
            <div>
              <p>
                We offer Domain Electives for various industries including BFSI,
                Retail, Healthcare, Manufacturing, and Supply Chain. This
                ensures that you gain expertise directly relevant to your
                current domain.
              </p>
            </div>
            <div className={Styles.rytsidedivs}>
              {domainData.map((domain, index) => (
                <div
                  className={Styles.tabs}
                  key={index}
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <Image
                    src={
                      index === hoveredTab
                        ? domain.hoverImageUrl
                        : domain.imageUrl
                    }
                    width={78}
                    height={78}
                    alt="Domain icons"
                    loading="lazy"
                  />
                  <h4>{domain.name}</h4>
                  {/* Show description and "Download Brochure" button on hover */}
                  {index === hoveredTab && (
                    <div className={Styles.tabInfo}>
                      <p>{domain.description}</p>
                      <button className={Styles.downloadBtn}>
                        Syllabus <TfiDownload />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainElective;
