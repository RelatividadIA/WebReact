import React from 'react';
import styles from './Clientes.module.css';

export function Clientes() {
  return (
    <main>
      <section className={styles.gridcontainer}>
       
        <div className={styles.griditem}>
            <h2>Profesionales Independientes</h2>
            <p>La inteligencia artificial (IA) ofrece
            a los profesionales independientes herramientas poderosas
            y personalizadas, como chatbots, que optimizan tareas y mejoran la atención al cliente. 
            Al automatizar procesos y brindar análisis avanzados, los profesionales 
            pueden enfocarse en su expertise, incrementando su eficiencia y 
            ofreciendo servicios de mayor calidad.</p>
            <button>Agendar Cita</button>
    
        </div>
    
       
        <div className={styles.griditem}>
            <h2>Empresas</h2>
            <p>La inteligencia artificial transforma empresas al 
                automatizar operaciones, analizar grandes volúmenes de 
                datos para tomar decisiones informadas y personalizar la 
                experiencia del cliente. Facilita la eficiencia operativa, 
                reduce costos y fomenta la innovación, permitiendo a las empresas 
                mantenerse competitivas 
                y adaptarse rápidamente a las tendencias del mercado.</p>
            <button>Agendar Cita</button>
    
        </div>
    
       
        <div className={styles.griditem}>
            <h2>Departamentos de Tecnología</h2>
            <p>La inteligencia artificial potencia los departamentos 
                de tecnología optimizando la gestión de redes, mejorando 
                la seguridad cibernética mediante la detección proactiva de 
                amenazas y automatizando el mantenimiento de sistemas. 
                Esto libera recursos valiosos, permitiendo enfocarse 
                en la innovación y el desarrollo estratégico.</p>
            <button>Agendar Cita</button>
    
        </div>
    
        
        <div className={styles.griditem}>
            <h2>Startups</h2>
            <p>La inteligencia artificial ofrece a las startups 
                ventajas competitivas únicas, desde la automatización 
                de procesos internos hasta la personalización de productos 
                y servicios para sus clientes. Permite a estas empresas 
                emergentes operar con mayor eficiencia, escalar rápidamente 
                y adaptarse a las necesidades 
                del mercado con soluciones innovadoras.</p>
            <button>Agendar Cita</button>
    
        </div>
    </section>
    </main>
  );
}

export default Clientes;
