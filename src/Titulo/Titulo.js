import React, { useState, useEffect } from 'react';
import styles from './Titulo.module.css';
import VideoDeFondo from './assets/VideoDeFondo.mp4';

function Titulo() {
  // Lista de títulos
  const titulos = ["Analítica Predictiva", "Inteligencia Artificial", "Comportamiento Humano", "Bases de Datos"];
  
  // Estado para manejar el título actual
  const [tituloActual, setTituloActual] = useState(titulos[0]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    // Función que actualiza el título actual cada 2 segundos
    const temporizador = setInterval(() => {
      // Calcula el próximo índice asegurando que la lista sea cíclica
      const nuevoIndice = (indice + 1) % titulos.length;
      // Actualiza el estado del índice y del título actual
      setIndice(nuevoIndice);
      setTituloActual(titulos[nuevoIndice]);
    }, 2000); // Cambia el título cada 2 segundos

    // Limpieza al desmontar el componente
    return () => clearInterval(temporizador);
  }, [indice, titulos]); // Dependencias del efecto

  return (
    <div className={styles.contenedorTitulo}>
      <video autoPlay loop muted className={styles.videoFondo}>
        <source src={VideoDeFondo} type="video/mp4" />
      </video>
      <h1 className={styles.textoSuperpuesto}>{tituloActual}</h1>
    </div>
  );
}

export default Titulo;
