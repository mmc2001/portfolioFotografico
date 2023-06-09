import React, {useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/SobreNosotros.module.css'

export default function sobreNosotros() {

    useEffect(() => {
        AOS.init({ once: true }); 
    }, []);

  return (
    <>  
        <div className={styles.contenedor}>
            <div>
                <h2 className={styles.frase1} data-aos="fade-up">Los mejores momentos de la vida son aquellos</h2> 
                <h2 className={styles.frase2} data-aos="fade-up">que deberían quedar inmortalizados para el recuerdo</h2>
            </div>
            <div className={styles.bloque}>
                <div className={styles.imagen} data-aos="fade-right">
                    <Image src={"/retrato.jpeg"} width={672} height={382} alt='Imagen de nuestro trabajo'/>
                </div>
                <div className={styles.textos} data-aos="fade-left">
                    <h3>Mi Trabajo</h3>
                    <h4>¿Cuál es mi compromiso?</h4>
                    <p>
                        Mi compromiso principal es capturar momentos especiales y crear imágenes de calidad que realmente gusten a mis clientes. 
                        Para mí, la fotografía no se trata solo de tomar una foto, sino de transmitir emociones y contar historias a través de cada imagen. 
                        Me esfuerzo por entender las expectativas y deseos de mis clientes para brindarles resultados que superen sus expectativas. 
                    </p>
                    <p className={styles.margen}>
                        Valorizo la importancia de crear un ambiente cómodo y agradable durante las sesiones fotográficas, lo que permite capturar la esencia y 
                        la personalidad única de cada persona, obteniendo recuerdos que no se queden en el olvido.
                    </p>    
                    <div>
                        <Link href={"/#contacto"}><button className={styles.button}>Contactar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
