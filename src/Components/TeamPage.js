import { useContext } from "react";
import React from "react";
import NavigationBar from "../Components/NavigationBar";
import bgContext from "../contexts/bgContext";
import team from "../images/teamPhoto.jpg";
import soham from "../images/soham.jpg";
import ClgLogo from "../images/Rectangle 22.png";
import "./TeamPage.css";
const TeamPage = () => {
  const { isLightTheme, setisLightTheme } = useContext(bgContext);
  return (
    <>
      <div>
        <NavigationBar />
      </div>
      <div
        className="teamPageDiv"
        style={{
          background: isLightTheme
            ? "linear-gradient(180deg, #def9ff 0%, #30B9F380 100%)"
            : "linear-gradient(180deg, #0b818e 0%, #0e3748 100%)", // Corrected the linear-gradient syntax
        }}
      >
        <div className="heading">
          <span>MEET OUR TEAM</span>
        </div>
        <div className="teamImg">
          <img src={team} width={"359px"} height={"207px"} />
        </div>
        <div className="subheading" style={{ color: isLightTheme && "black" }}>
          <span>COUNCIL</span>
        </div>
        <div className="imgDiv" style={{ display: "flex" }}>
          <div className="imgCont" style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={soham} width={"162px"} height={"158px"} />
            </div>
            <div className="heading1" style={{ margin: "2px 2px" }}>
              <span>Soham Kulkarni</span>
            </div>
            <div
              className="subheading1"
              style={{
                color: isLightTheme && "black",
                textAlign: "start !important",
                margin: " 3px 12px",
              }}
            >
              <span>Webmaster Head</span>
            </div>
          </div>
          <div className="imgCont" style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={soham} width={"162px"} height={"158px"} />
            </div>
            <div className="heading1" style={{ margin: "2px 2px" }}>
              <span>Soham Kulkarni</span>
            </div>
            <div
              className="subheading1"
              style={{
                color: isLightTheme && "black",
                textAlign: "start !important",
                margin: " 3px 12px",
              }}
            >
              <span>Webmaster Head</span>
            </div>
          </div>
          <div className="imgCont" style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={soham} width={"162px"} height={"158px"} />
            </div>
            <div className="heading1" style={{ margin: "2px 2px" }}>
              <span>Soham Kulkarni</span>
            </div>
            <div
              className="subheading1"
              style={{
                color: isLightTheme && "black",
                textAlign: "start !important",
                margin: " 3px 12px",
              }}
            >
              <span>Webmaster Head</span>
            </div>
          </div>
          <div className="imgCont" style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={soham} width={"162px"} height={"158px"} />
            </div>
            <div className="heading1" style={{ margin: "2px 2px" }}>
              <span>Soham Kulkarni</span>
            </div>
            <div
              className="subheading1"
              style={{
                color: isLightTheme && "black",
                textAlign: "start !important",
                margin: " 3px 12px",
              }}
            >
              <span>Webmaster Head</span>
            </div>
          </div>
          <div className="imgCont" style={{ width: "200px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={soham} width={"162px"} height={"158px"} />
            </div>
            <div className="heading1" style={{ margin: "2px 2px" }}>
              <span>Soham Kulkarni</span>
            </div>
            <div
              className="subheading1"
              style={{
                color: isLightTheme && "black",
                textAlign: "start !important",
                margin: " 3px 12px",
              }}
            >
              <span>Webmaster Head</span>
            </div>
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

export default TeamPage;
