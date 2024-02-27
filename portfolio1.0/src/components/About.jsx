import React from "react";
import "./About.css";
import shubham from "../assets/shubham.jpg";
import resumePdf from "../assets/shubham_resume.pdf";
import linkedin from "../assets/linkedin.png";
import gitHub from "../assets/gitHub.png";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Shubham_Lalwadiya_Resume.pdf"; // Specify the desired filename
    link.click();
  };

  return (
    <>
      <div className="about-container" id="ABOUT">
        <div className="left-section">
          <h2 className="welcome">Welcome!</h2>
          <p className="myname">My Name is Shubham Lalwadiya</p>
          <p className="thought">
            Transforming Ideas into Digital Reality Unlocking the Potential of
            Your Vision with Expertise, Precision, and Innovation.
          </p>
          <button className="resume-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
          <div className="media">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shubham-lalwadiya-402081221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            >
              <img className="linkeDin" src={linkedin} alt="" />
            </a>
            <a target="_blank" href="https://github.com/SHUBHAMLALWADIYA">
              <img className="linkeDin" src={gitHub} alt="" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <img
            src={shubham} // Replace with your actual profile photo URL
            alt="Shubham Lalwadiya"
            className="profile-photo"
          />
        </div>
      </div>

      <div className="self-description">
        <p className="myname center">About Myself</p>
        <p className="thought">
          .... Hello I'm Shubham Lalwadiya, a proactive Civil Engineering
          student seamlessly transitioning into Full Stack Development. I bring
          a robust skill set that encompasses not only the frontend trio of
          HTML, CSS, and JavaScript but also extends to React for dynamic user
          interfaces. On the backend, I wield the power of Express.js, MongoDB,
          Node.js, and Mongoose to architect powerful and scalable applications.
          My toolkit includes Git for version control, ensuring codebase
          integrity, and npm for adeptly managing dependencies. With a track
          record of transforming intricate requirements into intuitive and
          high-performance applications, I confidently showcase my ability to
          navigate the entire development spectrum. Eager to contribute and
          innovate, my commitment to continuous learning propels me forward.
          Let's collaborate on this exhilarating journey—I'm ready to bring my
          expertise to the forefront! 🚀 Eager to contribute to the tech
          landscape, I maintain a commitment to continuous learning and a
          passion for building extraordinary projects. Let's collaborate and
          innovate – join me on this exciting journey! 🚀
        </p>
      </div>
    </>
  );
};

export default About;
