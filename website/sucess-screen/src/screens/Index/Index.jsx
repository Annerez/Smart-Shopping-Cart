import React from "react";
import { SystemBar } from "../../components/SystemBar";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <div className="group">
          <div className="overlap-group-2">
            <img
              className="vector"
              alt="Vector"
              src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/vector@2x.png"
            />
            <img
              className="img"
              alt="Group"
              src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/vector@2x.png"
            />
          </div>
          <div className="text-wrapper-3">Mobile Money</div>
        </div>
        <div className="overlap">
          <img
            className="group-2"
            alt="Group"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/group-182@2x.png"
          />
        </div>
        <div className="group-3">
          <div className="text-wrapper-4">Successful Payment</div>
          <p className="we-will-send-you-the">
            We will send you the details
            <br />
            from the order to your email address
            <br />
            after successful payment.
          </p>
          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Download receipt</div>
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
        <div className="group-wrapper">
          <div className="group-4" />
        </div>
      </div>
    </div>
  );
};
