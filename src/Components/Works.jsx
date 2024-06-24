import React from "react";
import iemIcon from "../images/iem-icon.png"; // Adjust the path as necessary
import citizensIcon from "../images/citizen-icon.png";
import govIcon from "../images/gov-icon.png";
import contractorsIcon from "../images/contractor-icon.png";

function Work() {
  return (
    <div id="work">
      <h1>Who Benefits from Integrity Eyes?</h1>
      <div className="benefits-container">
        <div className="benefit-section">
          <div className="icon-title">
            <img src={iemIcon} alt="IEM Icon" className="benefit-icon" />
            <h3>Independent Expert Monitors</h3>
          </div>
          <ul>
            <li>Enhanced oversight with real-time data and analysis tools.</li>
            <li>
              Data-driven decisions to identify and address risks promptly.
            </li>
          </ul>
        </div>
        <div className="benefit-section">
          <div className="icon-title">
            <img
              src={citizensIcon}
              alt="Citizens Icon"
              className="benefit-icon"
            />
            <h3>Citizens</h3>
          </div>
          <ul>
            <li>Increased transparency in public procurement processes.</li>
            <li>
              Easy access to report suspicious activities anonymously through
              the AI-powered chatbot.
            </li>
          </ul>
        </div>
        <div className="benefit-section">
          <div className="icon-title">
            <img src={govIcon} alt="Government Icon" className="benefit-icon" />
            <h3>Government Agencies</h3>
          </div>
          <ul>
            <li>
              Improved accountability with detailed insights into procurement
              activities and project performance.
            </li>
            <li>Efficient resource allocation through data-driven analysis.</li>
          </ul>
        </div>
        <div className="benefit-section">
          <div className="icon-title">
            <img
              src={contractorsIcon}
              alt="Contractors Icon"
              className="benefit-icon"
            />
            <h3>Contractors</h3>
          </div>
          <ul>
            <li>Fair competition and merit-based selection processes.</li>
            <li>
              Clear guidelines and schedules for project execution, ensuring
              timely and within-budget completion.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Work;
