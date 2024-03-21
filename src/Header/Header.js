import React, { useState } from 'react';
import styles from './Header.module.css';
import logoImage from './assets/logo.png';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <img src={logoImage} alt="Logo" className={styles.logo} />
      <button onClick={toggleNav} className={styles.menuButton}>☰</button>
      <nav className={`${styles.nav} ${isNavVisible ? styles.show : ''}`}>
        <ul className={styles.navigation}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#acerca-de">Acerca de</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
