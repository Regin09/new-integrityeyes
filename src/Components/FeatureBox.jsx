import React from "react";

function FeatureBox({ image, title, description }) {
  return (
    <div className="a-box">
      <div className="a-b-img">
        <img src={image} alt={title} />
      </div>
      <div className="s-b-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureBox;
