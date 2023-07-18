//Styles
import styles from "../modules/Home.module.css"

function Home() {

    return (
      <>
      <div className={styles.container}>
        <section className={styles.informacion}>
         <h2>Solving your problems</h2>
         <p>
           We provide you with direct and expert legal care so that you can resolve issues early and amicably.
           We provide you with direct and expert legal care so that you can resolve issues early and amicably.
         </p>
         <button>
             <a href="#">Ingresar</a> 
         </button>
        </section>
        <section className={styles.vacio}>

        </section>
      </div> 
      </>
    )
  }
  
  export default Home
  