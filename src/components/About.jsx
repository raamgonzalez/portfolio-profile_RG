import { useContext } from "react";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";

const About = () => {

  const { scrollingSkills } = useContext(GlobalContext)

  return (

    <motion.section 
    // initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    variants={scrollingSkills}
    initial="hidden"
    whileInView={"visible"}
    className="about">
      <section className="about__title title">
        <h1 className="title__h1">A FRONT END  & ARCHITECT</h1>
        <img
          className="title__img"
          src="./media/about/portfolio_profile_v2.jpg"
          alt="Imagen de perfil Ramsés González"
        />
      </section>
      <section className="about__description description">
        <p className="description__p text__grow">
        Hi there! My name is <span className="description__p--bold">Ramsés</span> but some people call me Raam. I'm an architect with a passion for programming. 
        I'm excited to start my career in this field. Through my experience in architecture, 
        I have acquired skills in <span>design</span>, <span>planning</span>, and <span>solving</span> complex problems.
        </p>
        <section className="description__p description__p--margin list">
          <p>
            - I have <span>taught</span> a Design course at the University of Buenos Aires for more than 40 Architecture students.
          </p>
          <p>
            - I have <span>collaborated</span> on public space projects, 3D modeling, and project management.
          </p>
        </section>
      </section>
    </motion.section>

  );
};



export default About;


/* Hola!, mi nombre es <span className="description__p--bold">Ramsés</span> pero algunos me dicen Raam. Soy un
arquitecto apasionado de la programación. estoy emocionado de
comenzar mi carrera en este campo. A través de mi
experiencia en la arquitectura, he adquirido habilidades en <span>diseño</span>, 
<span> planificación</span> y <span>resolución</span> de problemas complejos. */
/* Comencé a explorar la programación como un hobby y rápidamente me di
cuenta de que es una herramienta poderosa para crear soluciones
innovadoras. Me encanta experimentar con diferentes lenguajes de
programación y frameworks, siempre estoy buscando nuevos desafíos
para mejorar mis habilidades. */