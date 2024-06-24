// TeamMemberBox.jsx
import React from "react";
import PropTypes from "prop-types";

const TeamMemberBox = ({ image, name, description, socialMedia }) => {
  return (
    <div className="team-box">
      <div className="team-img">
        <img src={image} alt={name} />
      </div>
      <div className="team-text">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="team-social">
          {socialMedia.map((media, index) => (
            <a
              key={index}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={media.icon} alt={`${name}'s LinkedIn`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

TeamMemberBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamMemberBox;
