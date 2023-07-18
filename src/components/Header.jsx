//Styles
import styles from "../modules/Header.module.css"
//Imagenes
import logo from "../assets/img/logo.png"
//Components
import Home from "../pages/Home"

function Header() {

    return (
      <>
        <header className={styles.header}>
          <img src={logo} alt="Foto" />
       
         <button>
             <a href="#">Ingresar</a> 
          </button>
       
        </header>
        <Home />
      </>
    )
  }
  
  export default Header
  