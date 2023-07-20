// Core

import { useEffect } from 'react';

//Styles
import styles from "../modules/Home.module.css";

// Animation

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.container} id='inicio'>
        <section className={styles.informacion}>
          <h2 data-aos="zoom-in">Solucione Sus Problemas</h2>
          <p data-aos="fade-up">
            Con nuestro servicio de Resolución de Disputas en Línea (ODR),
            podrás comunicarte con la contraparte y trabajar junto a un asesor
            en un chat para resolver el problema. Podrás discutir el asunto,
            intercambiar archivos y documentos, e incluso programar una llamada.
          </p>
          <button>
            <a href="#">Ingresar</a>
          </button>
        </section>
        <section className={styles.vacio}></section>
      </div>
    </>
  );
}

export default Home;
