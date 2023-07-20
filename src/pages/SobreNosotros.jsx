// Core

import { useEffect } from 'react';

// Animation

import AOS from 'aos';
import 'aos/dist/aos.css';

//Styles
import styles from "../modules/Sobre.module.css";
//Imagenes
import img from "../assets/img/1.jpg";
import fondo from "../assets/img/fondo2.jpg";

function Sobre() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={styles.container} id='informacion'>
        <section className={styles.foto} data-aos="zoom-in">
          <img src={img} alt="Foto" />
        </section>
        <section className={styles.informacion}>
          <h2 data-aos="fade-down">We know divorce is tough.</h2>
          <p data-aos="fade-up">
            We work closely with our clients throughout every stage of what is
            usually a long and tough ordeal so that they can accomplish their
            goals and desires. With our combined experience of handling complex
            trials and litigations for over 30 years, you can trust us to be
            forthright and diligent in meeting your needs.
          </p>
        </section>
      </div>
      <div className={styles.sobre} id='odr'>
        <h2>Mas sobre un ODR</h2>
        <section className={styles.tarjetas}>
          <div className={styles.tarjeta} data-aos="flip-left">
            <h3>¿Que es?</h3>
            <p>
              ODR se refiere al diseño e implementación de sistemas resolución
              de conflictos, dentro y fuera de las cortes y juzgados, que operan
              en internet y que usan tecnologías de la información y las
              comunicaciones.
            </p>
          </div>
          <div className={styles.tarjeta} data-aos="flip-left">
            <h3>¿Como Funciona?</h3>
            <p>
              Las personas pueden resolver sus controversias a través de
              internet ya sea con una negociación automatizada, mediación o
              conciliación, e incluso a través del arbitraje. En muchos casos ni
              siquiera necesitan de la asistencia de un abogado.
            </p>
          </div>
          <div className={styles.tarjeta} data-aos="flip-left">
            <h3>Ventajas</h3>
            <ul>
              <li>Accesibilidad</li>
              <li>Eficiencia</li>
              <li>Costo reducido</li>
              <li>Flexibilidad de tiempo</li>
              <li>Confidencialidad</li>
              <li>Mayor probabilidad de acuerdos</li>
            </ul>
          </div>
          <div className={styles.tarjeta} data-aos="flip-left">
            <img src={fondo} alt="Fondo" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Sobre;
