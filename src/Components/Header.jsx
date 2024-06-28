import React from "react";
import Navbar from "./Navbar";
import headerImage from "../images/opening.png"; // Adjust the path as necessary

function Header() {
  return (
    <header id="main">
      <div className="header-content">
        <div className="name">
          <h1>
            <span className="welcome">Welcome to</span>
            <span className="integrity-eyes">Integrity Eyes</span>
          </h1>
          <div className="details-container">
            <div className="details-box">
              <p className="details">
                Integrity Eyes is transforming public procurement in Malaysia by
                enhancing transparency, accountability, and fair competition.
                Our project, in collaboration with Graymatter Forensic Advisory
                Sdn. Bhd. and Asia Pacific University, emerged victorious at the
                HackCorruption South East Asia 2024 event. We aim to combat
                corruption in the construction and infrastructure sectors.
              </p>
              <p className="details-2">
                Leveraging cutting-edge technology and cross-sector
                partnerships, we monitor and highlight concerns within ongoing
                projects. Join us in our mission to make public procurement in
                Malaysia a model of integrity and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="header-image">
          <img src={headerImage} alt="Integrity Eyes" />
        </div>
      </div>
    </header>
  );
}

export default Header;
