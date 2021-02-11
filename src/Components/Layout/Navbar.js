import React, { Fragment, useState } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Navbar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    handleChange(e.target.value);
  };

  return (
    <Fragment>
      <header className="Navbar">
        <div className="logo">
          <Link to="/">ColorPalette</Link>
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
        <div className="select-container">
          <Select onChange={handleFormatChange} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 0.1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={() => setOpen(false)}
          action={[
            <IconButton
              onClick={() => setOpen(false)}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    </Fragment>
  );
};

export default Navbar;
