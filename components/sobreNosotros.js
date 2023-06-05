import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/SobreNosotros.module.css'

export default function sobreNosotros() {
  return (
    <>  
        <div className={styles.contenedor}>
            <div>
                <h2 className={styles.frase1}>Los mejores momentos de la vida son aquellos</h2> 
                <h2 className={styles.frase2}>que deberían quedar inmortalizados para el recuerdo</h2>
            </div>
            <div className={styles.bloque}>
                <div className={styles.imagen}>
                    <Image src={"/retrato.jpeg"} width={572} height={382} alt='Imagen de nuestro trabajo'/>
                </div>
                <div className={styles.textos}>
                    <h3>Nuestro Trabajo</h3>
                    <h4>¿Cuál es nuestro compromiso?</h4>
                    <p>
                        Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. 
                        Est accusantium repudiandae et consequatur eligendi est autem libero.
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
