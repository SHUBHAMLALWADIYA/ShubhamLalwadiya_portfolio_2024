import React from "react";
import "./Box.css";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,

} from "react-icons/md";
import {
  
  IconButton,
  Button,
  
} from "@chakra-ui/react";
import { BsGithub, BsWhatsapp, BsLinkedin } from 'react-icons/bs'

function Boxs() {
  return (<div id='CONTACT'>
       <p className="contactext myname">ContactMe</p>
    <div id="mainContact">
      <div className="leftContainers">
        <label htmlFor="">Your Name</label>
        <br />
        <br />
        <div className="inputDiv">
          <input className="yourName" type="text" />
        </div>
        <br />
        <label htmlFor="">Mail</label>
        <br />
        <br />
        <div className="inputDiv">
          <input className="yourName" type="text" />
        </div>
        <br />
        <label htmlFor="">Message</label>
        <br />
        <br />
        <div className="inputDiv">
          <input
            className="yourName inpMessage"
            type="text"
            placeholder="Message"
          />
        </div>
        <button className="sendMsg">Send Message</button>
      </div>
      <div>
        <p className="rightContact">Contact</p>
        <br />
        <br />
        <div className="allButtons">
            <div>
            <Button
            size="md"
            height="48px"
            width="fit-content"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={
              <a href="https://wa.link/81dfs9" target="_blank">
                <MdPhone color="#1970F1" size="20px" />
              </a>
            }
          >
            <a href="https://wa.link/81dfs9">+91-7990336834</a>
          </Button>
            </div>
            <div>
            <Button
            size="md"
            height="auto"
            padding={"10px 6px"}
            width="fit-content"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={
              <a href="mailto:lalwadiyashubham123@gmail.com">
                <MdEmail color="#1970F1" size="20px" />
              </a>
            }
          >
            lalwadiyashubham123@gmail.com
          </Button>
            </div>
            <div>

            <Button
            size="md"
            height="48px"
            width="200px"
            variant="ghost"
            color="#DCE2FF"
            _hover={{ border: "2px solid #1C6FEB" }}
            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
          >
            Gujarat, India
          </Button>
            </div>
         
           <div className="allSocialMedia">
           <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a href='mailto:lalwadiyashubham123@gmail.com' target='_blank'><MdEmail size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a href='https://github.com/SHUBHAMLALWADIYA' target='_blank'><BsGithub size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<a  href='https://www.linkedin.com/in/shubham-lalwadiya-402081221/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><BsLinkedin size="28px" color='white'/></a>}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF'}}
                      icon={<a href='https://wa.link/81dfs9' target='_blank'><BsWhatsapp size="28px" color='white'/></a>}
                    />
           </div>
          

        </div>
      </div>
    </div>
    <p className="lastText">Design and Created by <span id="shubham"> Shubham Lalwadiya</span> @ 2024</p>
    </div>
  );
}

export default Boxs;
