//Styles
import styles from "../modules/Header.module.css";
//Imagenes
import logo from "../assets/img/logo.png";
//Components
import Home from "../pages/Home";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Foto" />
        <nav className={styles.nav}>
          <ul className={styles.navbar}>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#informacion">Acerca</a>
            </li>
            <li>
              <a href="#odr">ODR</a>
            </li>
            <li>
              <a href="#">Servicio</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <button>
            <a href="#">Ingresar</a>
          </button>
        </nav>
      </header>
      <Home />
    </>
  );
}

export default Header;
