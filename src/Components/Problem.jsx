import React from "react";
import problemImage from "../images/problem.png"; // Import your illustrative image

function Problem() {
  return (
    <div id="problem">
      <h2>What's the Problem ?</h2>
      <div className="problem-container">
        <div className="problem-content">
          <div className="problem-box">
            <h3>Challenges in Public Procurement</h3>
            <p>
              Corruption in the construction and infrastructure sectors poses
              significant challenges, including fund leakages, cost overruns due
              to bribery and kickbacks, conflicts of interest, and cartel
              influences. These issues result in inefficient project execution,
              increased costs, and delays, ultimately undermining public trust
              in the procurement process.
            </p>
          </div>
          <div className="problem-box">
            <h3>Current State in Malaysia</h3>
            <p>
              Despite adopting Integrity Pacts, Malaysia removed the oversight
              of Independent Expert Monitors (IEMs) to save costs, leading to
              gaps in transparency and accountability. Financial audits
              performed by the Auditor General’s Office and investigations by
              the Malaysian Anti-Corruption Commission (MACC) have revealed
              substantial financial losses and pervasive corrupt practices
              within various levels of the procurement process.
            </p>
          </div>
          <div className="problem-box">
            <h3>Why Integrity Eyes?</h3>
            <p>
              Integrity Eyes aims to bridge these gaps by integrating IEMs and
              leveraging advanced analytical tools to provide real-time insights
              into procurement activities. Our solution is designed to detect
              and address anomalies, ensuring that public projects are managed
              efficiently and ethically. By focusing on federal-level public
              procurement initially, we plan to extend our solution to
              state-level authorities for high-value projects, creating a
              scalable and sustainable impact.
            </p>
          </div>
        </div>
        <div className="problem-image">
          <img src={problemImage} alt="Illustrative" />
        </div>
      </div>
    </div>
  );
}

export default Problem;
