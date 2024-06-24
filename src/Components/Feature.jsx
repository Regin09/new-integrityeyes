import React from "react";
import FeatureBox from "./FeatureBox";
import stakeholderimg from "../images/stakeholder-feedback.jpg";
import redflagtimg from "../images/redflagimg.jpg";
import projectperformanceimg from "../images/project-performance.jpg";
import riskmanagementimg from "../images/risk-management.jpg";

function Feature() {
  return (
    <div id="features">
      <h1>Our Dashboards</h1>
      <div className="feature-intro">
        <p>
          Integrity Eyes is a comprehensive system designed to enhance
          transparency and accountability in high-value public procurement
          projects in Malaysia. Our solution integrates Independent Expert
          Monitors (IEMs) with advanced data mapping, analysis, and dashboard
          technologies to provide real-time insights into procurement
          activities. By leveraging these tools, we aim to detect and address
          anomalies, ensuring that public projects are managed efficiently and
          ethically.
        </p>
      </div>
      <div className="a-container">
        <FeatureBox
          image={redflagtimg}
          title="Red Flag Monitoring"
          description="Identify potential risks and irregularities in procurement and project management"
        />
        <FeatureBox
          image={riskmanagementimg}
          title="Risk Management "
          description="Identify, assess, and mitigate risks with our comprehensive risk management tools."
        />
        <FeatureBox
          image={projectperformanceimg}
          title="Project Performance "
          description="Monitor and improve the performance of your projects with detailed analytics."
        />
        <FeatureBox
          image={stakeholderimg}
          title="Stakeholder Feedback "
          description="Collect and analyze feedback from stakeholders to improve project outcomes."
        />
      </div>
    </div>
  );
}

export default Feature;
