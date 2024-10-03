import React, { useState } from "react";
import logo from "../images/b833e47be783fcf2d618686a08566940.jpeg";
import logo1 from "../images/Ellipse 17.png";
import logo2 from "../images/Ellipse 18.png";
import { Icon } from "@iconify/react";
import NavPage from "./NavPage";
import "./Navigation.css";

const NavigationBar = () => {
  const [showNav, setShowNav] = useState(false); // Default is false to keep it hidden initially

  return (
    <div className="navBar">
      <div className="logoDiv">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="logoContainer">
        <div className="logoDiv1">
          <img className="logo" src={logo1} alt="Logo1" />
        </div>
        <div className="logoDiv2">
          <img
            style={{ height: "35px", width: "35px", padding: "5px" }}
            src={logo2}
            alt="Logo2"
          />
        </div>
        <div
          onClick={() => {
            setShowNav(true);
          }}
        >
          <Icon
            style={{ marginLeft: "15px", cursor: "pointer" }} // Added cursor style for better UX
            className="iconMenu"
            icon="material-symbols:menu"
            width="44"
            height="44"
          />
        </div>
      </div>

      {/* Render NavPage if showNav is true */}
      {showNav && <NavPage setShowNav={setShowNav} />}
    </div>
  );
};

export default NavigationBar;
