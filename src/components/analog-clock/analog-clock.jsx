import React from "react";
import "./analog-clock.css";
const AnalogClock = () => {
  return (
    <div className="analog-clock-div">
      <h1> Analog Clock</h1>

      <div className="analog-clock">
        {/*  dialer */}
        <img
          className="clock-dial"
          src="./svgs/seconds.svg"
          alt="second-dial"
        />
        <img className="clock-dial" src="./svgs/hours.svg" alt="dial" />
        {/* hands */}
        <div className="hands-center-div">
          <img className="hour-hand" src="./svgs/hour-hand.svg" alt="hour" />
          <img
            className="minute-hand"
            src="./svgs/minute-hand.svg"
            alt="hour"
          />
          <img
            className="second-hand"
            src="./svgs/second-hand.svg"
            alt="hour"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
