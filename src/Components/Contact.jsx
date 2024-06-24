import React from "react";
import integrityLogo from "../images/integritylogo.png"; // Adjust the path as necessary
import linkedinLogo from "../images/linkedin.png";

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
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              className="social-logo"
            />
          </div>
        </div>
        <div className="footer-right">
          <h2>Integrity Eyes</h2>
          <p>c/o Graymatter Forensic Advisory Sdn Bhd</p>
          <p>Suite 8-8-8, 8th Floor, Menara Mutiara Bangsar,</p>
          <p>Jalan Liku Off Jalan Riong, 59100 Kuala Lumpur.</p>
          <p>Tel: 03 2201 7260 / HP: 012 290 7024</p>
          <p>Email: integrityeyes24@gmail.com / enquiry@graymatterfa.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
