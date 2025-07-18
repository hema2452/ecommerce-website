import React from "react";
import "../css/Title.css";

const Title = ({ text1, text2 }) => {
  return (
    <div>
      <div className="title-component">
        <p>
          {text1} <span>{text2}</span>
        </p>
        <p className="border"></p>
      </div>
    </div>
  );
};

export default Title;
