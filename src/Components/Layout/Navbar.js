import React, { Fragment } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, changeLevel }) => {
  return (
    <Fragment>
      <header className="Navbar">
        <div className="logo">
          <a href="#">ColorPalette</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
