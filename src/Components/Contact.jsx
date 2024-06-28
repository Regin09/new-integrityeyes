import React from "react";
import integrityLogo from "../images/integritylogo.png"; // Adjust the path as necessary
import linkedinLogo from "../images/linkedin.png";
import apulogo from "../images/new-apu.png";
import graymatterlogo from "../images/new-graymatter.png";
import accountabilitylab from "../images/accountabilitylab.png";

function Contact() {
  return (
    <div id="contact">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={integrityLogo}
            alt="Integrity Eyes Logo"
            className="footer-logo"
          />
          <div className="footer-copyright">
            <p>©2024 Integrity Eyes Ltd.</p>
            <p>All rights reserved.</p>
            <a
              href="https://www.linkedin.com/company/integrity-eyes2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn Logo"
                className="social-logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-center">
          <h2>Supporting Partners</h2>
          <div className="partners-logos">
            {/* Add your partners' logos here */}
            <img
              src={accountabilitylab}
              alt="Partner 3"
              style={{ width: "100%", maxWidth: "200px" }}
            />
            <img
              src={apulogo}
              alt="Partner 1"
              style={{ width: "100%", maxWidth: "150px" }}
            />
            <img
              src={graymatterlogo}
              alt="Partner 2"
              style={{ width: "100%", maxWidth: "150px" }}
            />
          </div>
        </div>
        <div className="footer-right">
          <h2>Integrity Eyes</h2>
          <p>c/o Graymatter Forensic Advisory Sdn Bhd</p>
          <p>Suite 8-8-8, 8th Floor, Menara Mutiara Bangsar,</p>
          <p>Jalan Liku Off Jalan Riong, 59100 Kuala Lumpur.</p>
          <p>Tel: 03 2201 7260 / HP: 012 290 7024</p>
          <p>Email: integrityeyes24@gmail.com </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
