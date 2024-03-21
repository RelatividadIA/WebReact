import React from 'react';
import styles from './Productos.module.css';

import LogoLetrasBlancasSinFondo from "./images/LogoLetrasBlancasSinFondo.png";
import BOT2 from "./images/BOT2.webp";
import BOT from "./images/BOT.webp";
import BOT3 from "./images/BOT3.webp";

export function Productos() {
    return (
      <main>
        <section className={styles.gridcontainer}>
         
        <div className={styles.customsection}>
          <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Productos para potenciar tu negocio</h2>
              <div className={styles.row}>
                  
                  <div className={styles.colmd6}>
                  <img src={LogoLetrasBlancasSinFondo} alt="Imagen Descriptiva 2" className={`${styles.colCustom} ${styles.logoLetrasBlancas}`}/>
                      <div className={styles.customcontentstyle}>
                          <h3>Bots con entrenamiento basado en IA</h3>
                      
                          <p>Nuestros bots de Inteligencia Artificial están diseñados para transformar 
                          la manera en que interactúas con tus clientes. Utilizando las más avanzadas 
                          técnicas de aprendizaje automático, estos bots pueden comprender y responder 
                          a consultas en tiempo real, ofreciendo una experiencia de usuario fluida y 
                          altamente personalizada. Perfectos para el servicio al cliente, asistencia en 
                          ventas, y mucho más, nuestros bots aprenden continuamente de las interacciones 
                          para mejorar su eficacia. Libera el potencial de un servicio al cliente que 
                          opera 24/7, sin sacrificar la calidad.</p>
                      </div>
                  </div>
                  <div className={styles.colmd6}>
                      <div className={styles.customcontentstyle}>
                          <img src={BOT2} alt="Descripción del producto" className={styles.customcontentstyle}/>
                      </div>
                  </div>
                  
                  <div className={styles.colmd6}>
                  <img src={LogoLetrasBlancasSinFondo} alt="Imagen Descriptiva 2" className={`${styles.colCustom} ${styles.logoLetrasBlancas}`}/>
                  <div className={styles.customcontentstyle}>
                  <h3>Bots IA + Bases de datos</h3>
                  <p>Eleva la capacidad de tus bots de IA integrándolos con potentes bases de datos. 
                      Esta combinación permite no solo interactuar inteligentemente con los usuarios 
                      sino también acceder y procesar información relevante al instante. Ideal para 
                      aplicaciones que requieren de consultas complejas o personalización extrema, 
                      estos bots pueden gestionar tareas como seguimiento de pedidos, recomendaciones 
                      basadas en historial de compras, y soporte técnico avanzado. La integración con 
                      bases de datos abre un mundo de posibilidades para automatizar y optimizar las 
                      operaciones de negocio.</p>
                  </div>
                  </div>
                  <div className={styles.colmd6}>
                  <div className={styles.customcontentstyle}>
                      <img src={BOT} alt="Descripción del producto" className={styles.customcontentstyle}/>
                  </div>
                  </div>
                  <div className={styles.colmd6}>
                  <img src={LogoLetrasBlancasSinFondo} alt="Imagen Descriptiva 2" className={`${styles.colCustom} ${styles.logoLetrasBlancas}`}/>
                  <div className={styles.customcontentstyle}>
                  <h3>Aplicación Web con servicios integrados</h3>
                  <p>Nuestra aplicación web ofrece una solución integral que combina la funcionalidad de 
                      bots de IA y la eficiencia de sistemas de gestión de bases de datos en una única 
                      plataforma robusta. Diseñada para empresas que buscan mejorar su presencia en 
                      línea y automatizar procesos, esta aplicación facilita la gestión de contenido, 
                      interactúa con los usuarios mediante inteligencia artificial y accede a información 
                      crucial en tiempo real. Con una interfaz amigable y personalizable, es la solución 
                      perfecta para negocios que desean ofrecer una experiencia rica y cohesiva a sus clientes, 
                      sin complicaciones técnicas.</p>
                </div>
                </div>
                <div className={styles.colmd6}>
                    <div className={styles.customcontentstyle}>
                        <img src={BOT3} alt="Descripción del producto" className={styles.customcontentstyle}/>
                    </div>
                </div>          
            </div>
        </div>
    </div>
    </section>
    </main>
  );
}

export default Productos;
