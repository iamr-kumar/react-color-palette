import React from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>React Colors</h1>
      {palettes.map((palette, index) => (
        <MiniPalette {...palettes[index]} />
      ))}
    </div>
  );
};

export default PaletteList;
