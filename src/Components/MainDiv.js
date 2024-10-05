import React, { useContext } from "react";
import "./MainDiv.css";
import BigLogo from "../images/Rectangle 13 (1).png";
import Banner from "../images/Banner.jpeg";
import Linkedin from "../images/Linkedin (1).png";
import Instagram from "../images/Instagram.png";
import ClgLogo from "../images/Rectangle 22.png";
import bgContext from "../contexts/bgContext";
const MainDiv = () => {
  const { isLightTheme, setisLightTheme } = useContext(bgContext);
  return (
    <div
      className="mainDiv"
      style={{
        background: isLightTheme
          ? "linear-gradient(180deg, #def9ff 0%, #30B9F380 100%)"
          : "linear-gradient(180deg, #0b818e 0%, #0e3748 100%)", // Corrected the linear-gradient syntax
      }}
    >
      <div className="heading" style={{ color: isLightTheme && "black" }}>
        <span>THE WORLDS LARGEST TECHNICAL PROFESSIONAL ORGANIZATION</span>
      </div>
      <div className="subheading" style={{ color: isLightTheme && "black" }}>
        <span>FOR THE ADVANCEMENT OF TECHNOLOGY</span>
      </div>
      <div className="subTitle" style={{ color: isLightTheme && "black" }}>
        <span>
          WAS ESTABLISHED IN THE YEAR 2005 TO GIVE STUDENTS A FOUNDATIONAL
          UNDERSTANDING OF TECHNICAL CONCEPTS AND TO PIQUE THEIR NATURAL
          INTEREST IN THEIR FIELD OF STUDY
        </span>
      </div>
      <div>
        <button className="btn">
          <span>CONNECT</span>
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <span
          className="ieeeText"
          style={{
            margin: "20px",
            color: isLightTheme ? "black" : "white",
          }}
        >
          IEEE WEEK 2025 SOON !!!
        </span>
      </div>
      <div
        className="heading"
        style={{ margin: "20px", color: isLightTheme ? "black" : "white" }}
      >
        <span>ABOUT IEEE-PCE</span>
      </div>
      <div
        style={{
          textAlign: "start",
          margin: "20px",
        }}
      >
        <img src={BigLogo} />
      </div>

      <div
        className="subTitle"
        style={{
          margin: "20px 55px",
          width: "70%",
          color: isLightTheme ? "black" : "white",
        }}
      >
        <span>
          IEEE-PCE: A nexus of and knowledge, where professionals converge to
          shape the future of technology and humanity. From meet-ups to digital
          resources, it's a dynamic platfrom fostering skill development and
          innovations.
        </span>
      </div>
      <div
        className="subTitle"
        style={{
          margin: "20px 55px",
          width: "70%",
          color: isLightTheme ? "black" : "white",
        }}
      >
        <span>
          Step into IEEE-PCE's vibrant community, where connections thrive and
          ideas flourish. With access to seminar, conferences,and ample funding,
          members are empowered to drive impactful change through technological
          advancement and societal betterment.
        </span>
      </div>
      <div
        className="subTitle"
        style={{
          margin: "20px 55px",
          width: "70%",
          color: isLightTheme ? "black" : "white",
        }}
      >
        <span>
          Join IEEE-PCE and unlock a world of opportunities to connect learn and
          innovate. With a focus on both personal and professional growth, it's
          the perfect ecosystem fro aspiring and seasoned professionals alike to
          thrive and make a difference
        </span>
      </div>

      <div
        className="heading"
        style={{
          margin: "22px",
          fontSize: "37px",
          color: isLightTheme ? "black" : "white",
        }}
      >
        <span>UP-COMING EVENTS</span>
      </div>
      <div className="bannerDiv">
        <img src={Banner} style={{ width: "263px", height: "372.184px" }} />
      </div>
      <div
        className="heading"
        style={{
          margin: "34px",
          fontSize: "37px",
          color: isLightTheme ? "black" : "white",
        }}
      >
        <span>-CONTACT US-</span>
      </div>
      <div className="socialDiv">
        <div style={{ paddingTop: "50px", fontSize: "37px" }}>
          <span>How to contact?</span>
        </div>
        <div
          style={{
            padding: "1px 25px",
            textAlign: "left",
            fontSize: "19px",
            marginTop: "31px",
          }}
        >
          <span>
            feel free to reach out to us from any platfrom below or by filling
            the form
          </span>
        </div>
        <div style={{ textAlign: "left", padding: "20px 27px" }}>
          <a href="https://www.linkedin.com/company/ieee-pce/">
            {" "}
            <img src={Linkedin} />
          </a>
        </div>
        <div style={{ textAlign: "left", paddingLeft: "27px" }}>
          <img src={Instagram} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          margin: "50px",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.669434395333!2d73.12509517394139!3d18.99020098219684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e866de88667f%3A0xc1c5d5badc610f5f!2sPillai%20College%20of%20Engineering%2C%20New%20Panvel%20(Autonomous)!5e0!3m2!1sen!2sin!4v1726135593485!5m2!1sen!2sin"
          style={{ border: "0", width: "271px", height: "447px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div style={{ padding: "42px 0px" }}>
        <img src={ClgLogo} />
      </div>
    </div>
  );
};

export default MainDiv;
