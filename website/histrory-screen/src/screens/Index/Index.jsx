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
        <img
          className="group-2"
          alt="Group"
          src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/group-182-1@2x.png"
        />
        <img
          className="vector-2"
          alt="Vector"
          src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/vector@2x.png"
        />
        <SystemBar
          capacityClassName="system-bar-2"
          cellularConnection="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cellular-connection-2.svg"
          className="system-bar-instance"
          device="iphone-x"
          overlapGroupClassName="design-component-instance-node"
          theme="light"
          wifi="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wifi-2.svg"
        />
        <div className="overlap">
          <div className="text-wrapper-4">History</div>
          <img
            className="bottombar"
            alt="Bottombar"
            src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/bottombar-2@2x.png"
          />
          <div className="group-3">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="rectangle" />
              <div className="group-4">
                <div className="text-wrapper-5">Order#:000001</div>
                <div className="text-wrapper-6">16-SEP-2023, 3:00 PM</div>
                <img
                  className="rectangle-2"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/rectangle-31-1@2x.png"
                />
                <div className="text-wrapper-7">1 item: 20 THB</div>
                <div className="text-wrapper-8">Bread</div>
              </div>
            </div>
            <div className="text-wrapper-9">Order completed</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-10">Order#:000002</div>
                <div className="text-wrapper-11">16-SEP-2023, 3:00 PM</div>
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/rectangle-42@2x.png"
                />
                <div className="text-wrapper-12">1 item: 35 THB</div>
                <div className="text-wrapper-13">Pack of eggs</div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-10">Order#:000003</div>
                <div className="text-wrapper-11">16-SEP-2023, 3:00 PM</div>
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/rectangle-45@2x.png"
                />
                <div className="text-wrapper-12">1 item: 80 THB</div>
                <div className="text-wrapper-13">Mink</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <div className="text-wrapper-10">Order#:000004</div>
                <div className="text-wrapper-11">16-SEP-2023, 3:00 PM</div>
                <img
                  className="rectangle-5"
                  alt="Rectangle"
                  src="https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/rectangle-31-2@2x.png"
                />
                <div className="text-wrapper-12">1 item: 20 THB</div>
                <div className="text-wrapper-14">Orange bottle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
