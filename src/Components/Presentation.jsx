import React from "react";
import TeamMemberBox from "./TeamMemberBox";
import member1 from "../images/Reymon.png";
import member2 from "../images/mike.jpeg";
import member3 from "../images/jiayi.png";
import member4 from "../images/newregi.png";
import linkedinIcon from "../images/linkedin.png"; // Import the LinkedIn icon

function Presentation() {
  const teamMembers = [
    {
      image: member1,
      name: "Raymond Ram",
      description: "Project Manager",
      socialMedia: [
        {
          url: "https://www.linkedin.com/in/raymon-ram-msc-econ-crime-mgt-cfe-cams-iso-37001-la-07b56295/",
          icon: linkedinIcon, // Use the imported icon
        },
      ],
    },
    {
      image: member2,
      name: "Chukwudi Ikegwu",
      description: "Brand Marketing",
      socialMedia: [
        {
          url: "https://www.linkedin.com/in/chukwudi-ikegwu-msc-24b696105/",
          icon: linkedinIcon,
        },
      ],
    },
    {
      image: member3,
      name: "Jia Yi",
      description: "Head of AI",
      socialMedia: [
        {
          url: "https://www.linkedin.com/in/jia-yi-tey-a0b80a275/",
          icon: linkedinIcon,
        },
      ],
    },
    {
      image: member4,
      name: "Regin Georgius S",
      description: "Head of SoftDev",
      socialMedia: [
        {
          url: "https://www.linkedin.com/in/regin-georgius-sembiring/",
          icon: linkedinIcon,
        },
      ],
    },
  ];

  return (
    <div id="presentation">
      <h1>Who Are We?</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamMemberBox
            key={index}
            image={member.image}
            name={member.name}
            description={member.description}
            socialMedia={member.socialMedia}
          />
        ))}
      </div>
    </div>
  );
}

export default Presentation;
