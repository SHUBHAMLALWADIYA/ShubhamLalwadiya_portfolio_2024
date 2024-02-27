// ProjectCard.js

import React from 'react';
import './Project.css';

const ProjectCard = ({ title, description, image, gitLink, previewLink, techStack }) => {
  return (
    <div className="projectCard">
      <div className="projectimage">
        <img src={image} alt={title} />
      </div>
      <div className="projectdetails">
        <div className='titelProject'>
        <h3 className='ptitle'>{title}</h3>
        </div>
        
        <div className='desc'>
          
        
        <p className='descriptionp'><span className='descText'>Description_:_</span>{description}</p>
        </div>
        
        {techStack && (
          <p className="techStack">
           <span className='techSpan'> Tech Stack</span>  : {techStack.join(', ')}
          </p>
        )}
        <div className="buttonscontainer">
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="gitbutton">
            Git
          </a>
          <a href={previewLink} target="_blank" rel="noopener noreferrer" className="previewbutton">
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
