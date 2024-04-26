// Portfolio.js

import React from 'react';
import './Project.css'; // Add your main portfolio styles
import ProjectCard from './ProjectCard';
import nord from "../assets/nordStorm.png"
import Omdb from "../assets/Omdb.png"
import Weather from "../assets/WeatherApi.png"

const Portfolio = () => {
  const projects = [
    {
      title: 'NordStormRack',
      description: 'I developed a full-stack e-commerce project using Express.js, Node.js, and MongoDB for the backend, and React for the frontend. Users can view products, add to cart, remove items, place orders, and check order history. The application tracks cart totals and overall spending for a seamless shopping experience.',
      image: nord, // Replace with the actual path to your image
      gitLink: 'https://github.com/SHUBHAMLALWADIYA/cap05_155_nordStormRack_backend',
      previewLink: 'https://nordstormstackcap05155.netlify.app/',
      techStack: ['React', 'NodeJs',"JavaScript","Git", 'MongoDb'], // Replace with your actual tech stack
    },
    {
        title: 'Omdb',
        description: "I've built a movie information website called Omdb. Users can register,log in,and logout. The site allows searching for movies by their names. It's designed using HTML, CSS, and JavaScript to provide a user-friendly experience for exploring and discovering movie details.",
        image: Omdb, // Replace with the actual path to your image
        gitLink: 'https://github.com/SHUBHAMLALWADIYA/OMDB_ShubhamLAlwadiya',
        previewLink: 'https://venerable-bunny-445364.netlify.app/index.html',
        techStack: ['Html', 'Css','JavaScript'], // Replace with your actual tech stack
      },
      {
        title: 'WeatherApi',
        description: 'Crafted a weather forecasting website with a user-friendly interface, showcasing 5-day forecasts including date, sunrise, sunset times, cloud cover, and precipitation. Implemented an embedded map for visual location reference. Designed and developed the responsive frontend using HTML, CSS, and JavaScript, seamlessly integrating APIs for real-time weather data.',
        image: Weather, // Replace with the actual path to your image
        gitLink: 'https://github.com/SHUBHAMLALWADIYA/Advance_Assignment_Java/tree/main/fetch%202/weather_2',
        previewLink: 'https://zesty-sunburst-6bf514.netlify.app/',
        techStack: ['Html', 'Css',"JavaScript"], // Replace with your actual tech stack
      }
    // Add more projects as needed
  ];

  return (

    <div className="projectContainer" id='PROJECTS'>
      <p className='projectName myname'>Projects</p>
      {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        
      ))}
    </div>
  );
};

export default Portfolio;
