import React from 'react'
import { motion } from 'framer-motion'

const SkillsSoft = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="skills__section softskills">
      <h5 className="skills__h5 softskills">HABILIDADES BLANDAS</h5>
      <section className="skills__text">
        <span className="skills__span"><span className='skills__span--bold'>+</span> <span className='skills__span--bold'>Comunicación</span> efectiva, colaboré en coordinación de proyectos</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> Trabajo en <span className='skills__span--bold'>equipo</span>, interactué en equipos de diseño y proyecto unificados</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> <span className='skills__span--bold'>Resolución</span> de problemas, participé en mesas participativas en los barrios</span>
      </section>
    </motion.section>
  );
}

export default SkillsSoft