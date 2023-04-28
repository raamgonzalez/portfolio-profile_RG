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
      <h5 className="skills__h5 softskills">SKILLS SOFT</h5>
      <section className="skills__text">
        <span className="skills__span"><span className='skills__span--bold'>+</span> <span className='skills__span--bold'>Communication</span>, collaborated in project coordination.</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> <span className='skills__span--bold'>Teamwork</span>, interacted in unified design and project teams.</span>
        <span className="skills__span"><span className='skills__span--bold'>+</span> <span className='skills__span--bold'>Problem-solving</span>, participated in participatory meetings in the neighborhoods.</span>
      </section>
    </motion.section>
  );
}

export default SkillsSoft