import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = () => {

  return (
    <>
      <Helmet>
        <title> Error 404 | RAAM</title> 
        <meta name='description' content='Pagina de error not found'/>
      </Helmet>
      <div>NotFound</div>
    </>
  )
}

export default NotFound