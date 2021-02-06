import React, { useState } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./../Layout/Navbar";
import "./Palette.css";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colors = palette.colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));

  const changeLevel = (newLevel) => setLevel(newLevel);

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">{colors}</div>
    </div>
  );
};

export default Palette;
