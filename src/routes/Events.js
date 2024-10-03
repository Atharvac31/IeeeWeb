import React from "react";
import NavigationBar from "../Components/NavigationBar";
import event1 from "../images/event1.jpeg";
import event2 from "../images/event2.jpeg";
import event3 from "../images/event3.png";
import event4 from "../images/event4.jpeg";
import ClgLogo from "../images/Rectangle 22.png";
import "./events.css";
const Events = () => {
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div className="eventDiv">
        <div className="heading">
          <span>IEEE-WEEK</span>
        </div>

        <div className="event-card">
          <img src={event1} style={{ width: "267px", height: "383.918px" }} />
        </div>
        <div className="event-text">
          <div className="subheading" style={{ textAlign: "center" }}>
            <span>TECH HUNT</span>
          </div>
          <div
            className="subTitle"
            style={{ margin: "20px 88px", width: "61%" }}
          >
            <span>
              The main aim of the workshop is top take a hands-on approach to
              understanding deep learning and build smart application that can
              recognize images and intercept texr
            </span>
          </div>
        </div>
        <div className="event-card">
          <img
            src={event2}
            style={{
              width: "267px",
              height: "383.918px",
            }}
          />
        </div>

        <div className="event-text">
          <div className="subheading" style={{ textAlign: "center" }}>
            <span>CODE WAR</span>
          </div>
          <div
            className="subTitle"
            style={{ margin: "20px 88px", width: "61%" }}
          >
            <span>
              Different codding challenges will eb displayed and participants
              have to tackle the challenges to win the price
            </span>
          </div>
        </div>
        <div className="event-card">
          <img
            src={event3}
            style={{
              width: "267px",
              height: "383.918px",
            }}
          />
        </div>

        <div className="event-text">
          <div className="subheading" style={{ textAlign: "center" }}>
            <span>NO ESCAPE</span>
          </div>
          <div
            className="subTitle"
            style={{ margin: "20px 88px", width: "61%" }}
          >
            <span>
              No Escape Competition!!! Form a team of four, enter a room packed
              with mystery and decipher clues to make a daring escape- putting
              your dectective skills to the ultimate test.
            </span>
          </div>
        </div>
        <div className="event-card">
          <img
            src={event4}
            style={{
              width: "267px",
              height: "383.918px",
            }}
          />
        </div>

        <div className="event-text">
          <div className="subheading" style={{ textAlign: "center" }}>
            <span>MORSE CODE </span>
          </div>
          <div
            className="subTitle"
            style={{ margin: "20px 88px", width: "61%" }}
          >
            <span>
              Participants will be familiarized with various Morse codes 30
              minutes prior to the event. Following this, Participants will face
              diverse technical challenges that they must decipher
            </span>
          </div>
        </div>
        <div style={{ padding: "42px 0px" }}>
          <img src={ClgLogo} />
        </div>
        <div className="LogoFoot">
          <span>© IEEE-PCE | All Right Reserved</span>
        </div>
      </div>
    </>
  );
};

export default Events;
