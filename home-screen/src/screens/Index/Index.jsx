import React from "react";
import { SystemBar } from "../../components/SystemBar";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <p className="good-afternoon-jacob">
          <span className="text-wrapper-3">Good Afternoon</span>
          <span className="text-wrapper-4">
            👋🏻
            <br />
            Jacob Jones
          </span>
        </p>
        <div className="group">
          <img
            className="WELCOME-TO"
            alt="Welcome TO"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/welcome-to.png"
          />
          <p className="smart-shopping-cart">
            <span className="text-wrapper-5"> smart </span>
            <span className="text-wrapper-6">shopping</span>
            <span className="text-wrapper-5"> cart</span>
          </p>
        </div>
        <div className="group-wrapper">
          <div className="group-2">
            <div className="text-wrapper-7">Scan a product</div>
            <div className="text-wrapper-8">384 Scanner</div>
            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/vector-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="overlap">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <img
            className="bottombar"
            alt="Bottombar"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/bottombar@2x.png"
          />
          <div className="group-3">
            <div className="text-wrapper-9">Products purchased</div>
            <div className="text-wrapper-10">164 purchases</div>
            <div className="img-wrapper">
              <img
                className="img"
                alt="Group"
                src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/group-158@2x.png"
              />
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
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="text-wrapper-11">receipt / tax invoice</div>
            <div className="text-wrapper-12">23 detected</div>
            <div className="icon-park-outline-wrapper">
              <img
                className="icon-park-outline"
                alt="Icon park outline"
                src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/icon-park-outline-bill.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="ellipse"
          alt="Ellipse"
          src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/ellipse.svg"
        />
        <div className="div-wrapper">
          <div className="group-4">
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
