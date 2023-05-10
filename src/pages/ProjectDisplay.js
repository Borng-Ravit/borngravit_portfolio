import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css" 

function ProjectDisplay() {
  const { id } = useParams();
  const Projects = ProjectList[id];
  return (
    <div className="project">
      <h1> {Projects.name}</h1>
      <img src={Projects.image} />
      <p>
        <b>Skills:</b> {Projects.skills} 
      </p>
      <a href="https://github.com/Borng-Ravit/Sabay-Clone" target="blank"><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;