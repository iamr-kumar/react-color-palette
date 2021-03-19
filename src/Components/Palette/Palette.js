import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./../Layout/Navbar";
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const colors = palette.colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
  ));

  const changeLevel = (newLevel) => setLevel(newLevel);

  const changeFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colors}</div>
      <footer className="Palette-footer">{palette.paletteName}</footer>
    </div>
  );
};

export default Palette;
