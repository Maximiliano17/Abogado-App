//Styles
import styles from "../modules/Sobre.module.css"
//Imagenes
import img from "../assets/img/1.jpg"
import fondo from "../assets/img/fondo2.jpg" 

function Sobre() {

    return (
      <>
      <div className={styles.container}>
      <section className={styles.foto}>
          <img src={img} alt="Foto" />    
        </section> 
      <section className={styles.informacion}>
         <h2>We know divorce is tough.</h2>
         <p>
           We work closely with our clients throughout every stage of what is usually a long and tough ordeal so that they can accomplish their goals and desires. With our combined experience of handling complex trials and litigations for over 30 years, you can trust us to be forthright and diligent in meeting your needs.
         </p>
        </section>
      </div> 
      <div className={styles.sobre}>
       <h2>What we focus on</h2>
       <section className={styles.tarjetas}>
         <div className={styles.tarjetaa}>
          <h3>Child Custody</h3>
          <p>
            What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
          </p>
         </div>
         <div className={styles.tarjeta}>
          <h3>Divorce</h3>
          <p>
          What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
          </p>
         </div>
         <div className={styles.tarjeta}>
          <h3>Complex Litigation</h3>
          <p>
          What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.
          </p>
         </div>
         <div className={styles.tarjeta}>
          <img src={fondo} alt="Fondo" />
         </div>
       </section>
      </div>
      </>
    )
  }
  
  export default Sobre
  