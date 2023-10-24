/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Starus = ({ type, theme, className, timeClassName }) => {
  return (
    <div className={`starus ${type} ${className}`}>
      <p className={`time type-${type} ${theme} ${timeClassName}`}>
        <span className="text-wrapper">9:4</span>
        <span className="span">1</span>
      </p>
    </div>
  );
};

Starus.propTypes = {
  type: PropTypes.oneOf(["time-red", "time-green", "time-blue", "time"]),
  theme: PropTypes.oneOf(["dark", "light"]),
};
