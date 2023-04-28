import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { motion } from 'framer-motion'

const Socials = () => {

  const { rrss } = useContext(GlobalContext)

  return (

    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className='social'>
      <li className='social__li social__li--noresponsive'>
      <motion.a
        className='social__a'
        href="https://drive.google.com/file/d/1jqEqOgLF8sq29TvhIr75Gy3rDK3Gfl-o/view?usp=sharing"
        target="_blank" 
        rel='noreferrer'
        activeClassName="active"
        whileTap={{scale: 0.90}}
        whileHover={{scale: 1.05, transition: "all 1s ease-in-out"}}
        >
        -&gt; RESUME   
      </motion.a>
      </li>
      <ul className="social__ul">
        {
          rrss.map(({id, name, href, state}) => (
            state ? 
            <li className="social__li" key={id}><motion.a 
            whileHover={{scale: 1.05, transition: "all 1s ease-in-out"}}
            className='social__a' href={href} target="_blank" rel='noreferrer' activeClassName="active">{name.toUpperCase()} ?</motion.a></li>
            : null
            
          ))
        }
      </ul>
    </motion.section>
  
  )
}

export default Socials
