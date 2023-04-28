import React from 'react'
import About from '../components/About'
import Socials from '../components/Socials'
import { Helmet } from 'react-helmet'


const Home = () => {

  return (
    <>
      <Helmet>
        <title> About | RAAM</title> 
        <meta name='description' content='Información acerca de Ramsés'/>
      </Helmet>
      <About/>
      <Socials/>
    </>
  )
}

export default Home