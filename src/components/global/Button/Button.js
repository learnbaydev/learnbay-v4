// Button.js

import React from "react";

const Button = ({ text, passIcon, outline, invert, bannerButton, nobannerButton, whiteBgButton, ButtonWhiteBg, greenButton, blackButton, OrangeButton }) => {
  return (
    <button
      className={
        ButtonWhiteBg ? "ButtonWhiteBg" :
        whiteBgButton ? "whiteBgButton" :
        nobannerButton ? "nobannerButton" :
        bannerButton ? "bannerButton" :
        outline ? "outLineBtn" :
        greenButton ? "greenButton" :
        OrangeButton ? "OrangeButton" :
        blackButton ? "blackButton" : "button"
    
      }
      style={invert ? { flexFlow: "row-reverse" } : { flexFlow: "row" }}
    >
      {text}
      {passIcon}
    </button>
  );
};

export default Button;
