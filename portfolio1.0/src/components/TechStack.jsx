import React from 'react'
import './TechStack.css';
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import git from "../assets/git.png"
import json from "../assets/json-file.png"
import dom from "../assets/dom.png"
import vite from "../assets/Vite.png"
import vscode from "../assets/vscode.png"
import bash from "../assets/bash.png"
import postman from "../assets/postman.png"
import nodejs from "../assets/nodejs.png"
import npm from "../assets/npm.png"

function TechStack() {
    const techStack=[{icon:html,name:"Html"},{icon:css,name:"Css"},{icon:js,name:"javaScript"},{icon:react,name:"React"},{icon:json,name:"Json"},{icon:dom,name:"Dom"},{icon:vite,name:"Vite"}];
    const toolstack=[{icon:vscode,name:"VsCode"},{icon:git,name:"GitHub"},{icon:bash,name:"Bash"},{icon:postman,name:"Postman"},{icon:nodejs,name:"NodeJs"},{icon:npm,name:"Npm"}]
    return (
        <div id='SKILLS'>
        <p className='techStack1 myname'>TechStack</p>
        <div className="techstack">
            
          {techStack.map((tech, index) => (
              <div className="techstackicon" key={index}>
              <img src={tech.icon} alt={tech.name} />
              <p className='iconName'>{tech.name}</p>
            </div>
          ))}
        </div>
        <p className='toolstack myname'>ToolStack</p>
        <div className="techstack">
            
          {toolstack.map((tech, index) => (
              <div className="techstackicon" key={index}>
              <img src={tech.icon} alt={tech.name} />
              <p className='iconName'>{tech.name}</p>
            </div>
          ))}
        </div>
          </div>
      );
}

export default TechStack