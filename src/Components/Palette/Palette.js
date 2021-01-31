import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

const Palette = ({ palette }) => {
  const colors = palette.colors.map((color) => <ColorBox background={color} />);
  // console.log(props);

  return (
    <div className="Palette">
      <div className="Palette-colors">{colors}</div>
    </div>
  );
};

export default Palette;
