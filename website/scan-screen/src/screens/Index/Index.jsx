import React from "react";
import { SystemBar } from "../../components/SystemBar";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <div className="overlap">
          <div className="group">
            <img
              className="arrow"
              alt="Arrow"
              src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/arrow-1.svg"
            />
          </div>
          <img
            className="healthy-food"
            alt="Healthy food"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/healthy-food-background-2.png"
          />
          <img
            className="img"
            alt="Group"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/group-185.png"
          />
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Go To Shopping Cart</div>
            </div>
          </div>
        </div>
        <SystemBar
          cap="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cap-2.svg"
          capacityClassName="system-bar-2"
          cellularConnection="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cellular-connection-2.svg"
          className="system-bar-instance"
          device="iphone-x"
          overlapGroupClassName="design-component-instance-node"
          theme="light"
          wifi="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wifi-2.svg"
        />
      </div>
    </div>
  );
};
