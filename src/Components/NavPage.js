import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavPage.css";
const NavPage = ({ setShowNav }) => {
  const handleClose = () => setShowNav(false); // Function to close offcanvas

  return (
    <Offcanvas
      className="offcanvasForQr"
      placement="bottom"
      show={true} // Always true since we control its visibility from the parent
      onHide={handleClose}
      style={{
        transition: "0.2s ease-in-out",
        height: "100vh",
        zIndex: 9999,
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        maxWidth: "100%",
        margin: "0 auto",
        background:
          "linear-gradient(180deg, #0B818E 0%, rgba(211, 197 ,175, 0.65) 49.35%, #0E3748 100%)", // Adding the gradient background
      }}
    >
      <Offcanvas.Header closeButton onClick={handleClose}></Offcanvas.Header>
      <Offcanvas.Body>
        {/* Add your menu items or other content here */}
        <div className="centered-list">
          <ul>
            <li>HOME</li>
            <li>EVENTS</li>
            <li>WORKSHOP</li>
            <li>FACULTY</li>
            <li>TEAM</li>
            <li>IEEE MOMENTS</li>
          </ul>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavPage;
