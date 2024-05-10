import React from "react";
import Styles from "./toolscover.module.css";
import Image from "next/image";

const ToolsCoverd = () => {
  return (
    <>
      <div className={Styles.Toolshead}>
        {" "}
        <h2>Programming Languages & Tools Covered</h2>
      </div>
      <div className={Styles.ToolsCover}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/Tool-cover.webp"
          width={950}
          height={150}
          alt="Company Logo"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default ToolsCoverd;
