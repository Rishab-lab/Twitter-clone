import React from "react";
import style from "./styled.module.css";

function CustomButton({ buttonText, icon, btnNext, customCss }) {
  return (
    <button className={customCss} onClick={btnNext}>
      {icon}&nbsp;&nbsp;
      {buttonText}
    </button>
  );
}

export default CustomButton;