/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Starus } from "../Starus";
import "./style.css";

export const SystemBar = ({
  device,
  theme,
  className,
  overlapGroupClassName,
  capacityClassName,
  wifi = "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wifi.svg",
  cellularConnection = "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cellular-connection.svg",
}) => {
  return (
    <div className={`system-bar ${device} ${className}`}>
      {device === "iphone-SE" && <div className={`div theme-${theme}`}>9:41 AM</div>}

      <div className="right-side">
        <div className="battery">
          <div
            className={`overlap-group device-1-${device} theme-0-${theme} ${
              device === "iphone-x" ? overlapGroupClassName : undefined
            }`}
          >
            {device === "iphone-x" && <div className={`capacity ${capacityClassName}`} />}

            {device === "iphone-SE" && (
              <img
                className="reserve"
                alt="Reserve"
                src={
                  theme === "dark"
                    ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/reserve-1.svg"
                    : "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/reserve.svg"
                }
              />
            )}
          </div>
          <img
            className="cap"
            alt="Cap"
            src={
              device === "iphone-x" && theme === "dark"
                ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cap-1.svg"
                : theme === "light" && device === "iphone-SE"
                ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/terminal.svg"
                : device === "iphone-SE" && theme === "dark"
                ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/terminal-1.svg"
                : "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cap.svg"
            }
          />
        </div>
        {device === "iphone-SE" && (
          <>
            <div className={`text-wrapper-2 theme-2-${theme}`}>100%</div>
            <div className="icon-bluetooth" />
          </>
        )}

        {device === "iphone-x" && (
          <>
            <img
              className="wifi"
              alt="Wifi"
              src={
                theme === "dark"
                  ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wifi-1.svg"
                  : wifi
              }
            />
            <img
              className="cellular-connection"
              alt="Cellular connection"
              src={
                theme === "dark"
                  ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cellular-connection-1.svg"
                  : cellularConnection
              }
            />
          </>
        )}
      </div>
      {device === "iphone-SE" && (
        <div className="left-side">
          <div className="icon-signal">
            <img
              className="empty-bar"
              alt="Empty bar"
              src={
                theme === "dark"
                  ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/empty-bar-1.svg"
                  : "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/empty-bar.svg"
              }
            />
            <img
              className="full-bars"
              alt="Full bars"
              src={
                theme === "dark"
                  ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/full-bars-1.svg"
                  : "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/full-bars.svg"
              }
            />
          </div>
          <div className={`carrier theme-3-${theme}`}>vladlucha</div>
          <div className="icon-wifi">
            <img
              className="wi-fi"
              alt="Wi fi"
              src={
                theme === "dark"
                  ? "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wi-fi-1.svg"
                  : "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wi-fi.svg"
              }
            />
          </div>
        </div>
      )}

      {device === "iphone-x" && (
        <Starus
          className={`${theme === "dark" ? "class-3" : "class-4"}`}
          theme={theme === "dark" ? "dark" : "light"}
          timeClassName={`${theme === "dark" ? "class" : "class-2"}`}
          type="time"
        />
      )}
    </div>
  );
};

SystemBar.propTypes = {
  device: PropTypes.oneOf(["iphone-SE", "iphone-x"]),
  theme: PropTypes.oneOf(["dark", "light"]),
  wifi: PropTypes.string,
  cellularConnection: PropTypes.string,
};
