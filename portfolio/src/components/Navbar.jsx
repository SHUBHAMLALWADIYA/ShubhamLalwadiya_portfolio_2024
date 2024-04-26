import Dropdown from "./Dropdown";
import "./Navbar.css";
import shubham from "../assets/shubham_resume.pdf"

function Navbar() {
  
  return (
    <div id="navContainer">

    <div id="navbar">
      <div className="tag">
        <p id="name">
          <span id="s">S</span>hubham Lalwadiya
        </p>
      </div>
      <div id="tabs">
        <h3 className="navEffect"><a href="#ABOUT">About</a></h3>
        <h3 className="navEffect"><a href="#SKILLS">Skills</a></h3>
        <h3 className="navEffect"><a href="#PROJECTS">Projects</a></h3>
        <h3 className="navEffect"><a href="#CONTACT">Contact</a></h3>
        <h3 className="navEffect"><a className="navResume" href={shubham} download="shubham_resume.pdf">Resume</a></h3>
        
        <div className="drop">
        <Dropdown />
        </div>
       
      </div>
      
    </div>
    </div>
  );
}

export default Navbar;
