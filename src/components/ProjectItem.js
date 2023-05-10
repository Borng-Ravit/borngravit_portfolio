import React from 'react'
import { useNavigate } from "react-router-dom"
import '../styles/Project.css'

const ProjectItem = ({image, name, id}) => {
  const navigate = useNavigate()

  return (
    <div className='projectItem' onClick={() => {
      navigate("/Projects/" + id);
    }}>
        <div style={
          { background: `url(${image})`, 
            backgroundPosition:'center', 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover'
          }} className='bgImage' />
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem