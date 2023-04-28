import React from 'react'
import ProjectContainer from '../components/ProjectContainer';
import { Helmet } from 'react-helmet'

const Projects = () => {

  return (
    <>
      <Helmet>
        <title> Projects | RAAM</title> 
        <meta name='description' content='Información sobre los proyectos de Ramsés'/>
      </Helmet>
      <ProjectContainer/>
    </>
  );
}

export default Projects