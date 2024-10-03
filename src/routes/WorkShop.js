import React from "react";
import NavigationBar from "../Components/NavigationBar";
import scifi from "../images/scifi.jpeg";
import game from "../images/game.jpeg";
import graphic from "../images/graphic.jpeg";
import spark from "../images/spark.jpeg";
import ClgLogo from "../images/Rectangle 22.png";
import "./Workshop.css";

const WorkShop = () => {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className="WorkshopDiv">
        <div className="heading">
          <span>IEEE-WEEK</span>
        </div>
        {/* Container for all event cards */}
        <div className="image-container">
          <div className="event-card">
            <img
              src={scifi}
              alt="Sci-Fi Event"
              style={{ width: "267px", height: "383.918px" }}
            />
          </div>
          <div className="event-card">
            <img
              src={game}
              alt="Gaming Event"
              style={{ width: "267px", height: "383.918px" }}
            />
          </div>
          <div className="event-card">
            <img
              src={spark}
              alt="Spark Event"
              style={{ width: "267px", height: "383.918px" }}
            />
          </div>
          <div className="event-card">
            <img
              src={graphic}
              alt="Graphic Design Event"
              style={{ width: "267px", height: "383.918px" }}
            />
          </div>
        </div>
        {/* College Logo */}
        <div style={{ padding: "42px 0px" }}>
          <img src={ClgLogo} alt="College Logo" />
        </div>
        {/* Footer */}
        <div className="LogoFoot">
          <span>© IEEE-PCE | All Right Reserved</span>
        </div>
      </div>
    </>
  );
};

export default WorkShop;
