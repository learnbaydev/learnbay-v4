"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const NavbarContent = dynamic(() => import("./NavbarContent"));
const Popup = dynamic(() => import("../popup/Popup"));
// const FormCareer = dynamic(() => import("../CareerPortal/Form/Form"));
const Form = dynamic(() => import("../form/Form"));

const Navbar = ({
  radio,
  dataScience,
  fullStack,
  careerForm,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
  interstedInHide,
  DMD,
  careerportalbtn,
}) => {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}
          {careerForm ? (
            <FormCareer />
          ) : (
            <Form
              popup={true}
              setTrigger={setPopups}
              radio={radio}
              fullStack={fullStack}
              dataScience={dataScience}
              dataScienceGeneric={dataScienceGeneric}
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={true}
              interstedInHide={interstedInHide}
            />
          )}
        </div>
      </Popup>

      <NavbarContent
        adPage={adPage}
        setPopups={setPopups}
        DMD={DMD}
        careerportalbtn={careerportalbtn}
      />
    </>
  );
};

export default React.memo(Navbar);
