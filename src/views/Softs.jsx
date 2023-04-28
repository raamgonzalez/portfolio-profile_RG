import React from 'react'
import Skills from '../components/Skills'
import { Helmet } from 'react-helmet'

const Softs = () => {

  return (
    <>
      <Helmet>
        <title> Skills | RAAM</title> 
        <meta name='description' content='Información sobre habilidades de Ramsés'/>
      </Helmet>
      <Skills/>
    </>
  )
}

export default Softs