import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="About Us" />
      </div>
      <div className="about-content">
        <h2>{props.title}</h2>
        <div className="about-box">
          <h3>Our Mission</h3>
          <p>
            Address fund leakages, cost overruns, project delays, and cartel
            influences by promoting transparency, accountability, and fair
            competition. We advocate for merit-based contractor selection and
            stringent project monitoring, ensuring that public procurement
            processes are fair and efficient.
          </p>
        </div>
        <div className="about-box">
          <h3>Our Story</h3>
          <p>
            Integrity Eyes was born out of the HackCorruption South East Asia
            2024 event, an international anti-corruption hackathon organized by
            Accountability Lab. Selected as one of the top five feasible ideas,
            we received a grant to develop our project. Our team comprises
            dedicated professionals from diverse backgrounds, united by a common
            goal of combating corruption through innovative technology and
            collaborative efforts.
          </p>
        </div>
        <div className="about-box">
          <h3>Our Impact</h3>
          <p>
            Our solution, Integrity Eyes, integrates Independent Expert Monitors
            (IEMs) and advanced data mapping, analysis, and dashboard
            technologies to provide real-time insights into procurement
            activities. Inspired by global best practices, our approach aims to
            elevate standards of transparency and accountability in high-value
            public procurement projects in Malaysia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
