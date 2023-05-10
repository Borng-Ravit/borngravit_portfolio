import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helper/ProjectList'
import "../styles/Project.css"

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((Projects, idx) => {
          return <ProjectItem id={idx} name={Projects.name} image={Projects.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects