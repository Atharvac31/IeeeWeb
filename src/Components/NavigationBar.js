import React from "react";
import logo from "../images/Rectangle 6.png";
import logo1 from "../images/Ellipse 17.png";
import logo2 from "../images/Ellipse 18.png";
const NavigationBar = () => {
  return (
    <div className="navBar">
      <div className="logoDiv">
        <img className="logo" src={logo} />
      </div>
      <div className="logoDiv1">
        <img className="logo" src={logo1} />
      </div>
      <div className="logoDiv2">
        <img className="logo" src={logo2} />
      </div>
    </div>
  );
};

export default NavigationBar;
