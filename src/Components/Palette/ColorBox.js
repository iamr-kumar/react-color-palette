import React, { useState, useEffect } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ name, background }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => {
        setIsCopied(!isCopied);
      }, 1200);
    }
  }, [isCopied]);

  return (
    <CopyToClipboard text={background} onCopy={() => setIsCopied(!isCopied)}>
      <div className="ColorBox" style={{ background: background }}>
        <div
          className={`copy-overlay ${isCopied && "show"}`}
          style={{ background: background }}
        ></div>
        <div className={`copy-message ${isCopied && "show"}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
