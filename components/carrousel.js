import React from 'react'
import Image from 'next/image'
import styles from '../styles/carrousel.module.css'

export default function carrousel() {
  return (
    <div>
        <div className={styles.contenedor}>  
            <div className={styles.contenedorCarrousel}>
              <div className={styles.elementoCarrousel} id="tarjeta1">
                <div className={styles.tarjetas}>
                  <Image src="/mujer.jpeg" width={518} height={418} alt='persona 1'/>
                </div>
                <div className={styles.flechas}>
                  <a href="#tarjeta3">
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </a>
                  <a href="#tarjeta2">
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </a>
                </div>
              </div>
              <div className={styles.elementoCarrousel} id="tarjeta2">
              <div className={styles.tarjetas}>
                <Image src="/hombre1.jpeg" width={518} height={418} alt='persona 2'/>
              </div>
              <div className={styles.flechas}>
                <a href="#tarjeta1">
                  <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                </a>
                <a href="#tarjeta3">
                  <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                </a>
              </div>
              </div>
              <div className={styles.elementoCarrousel} id="tarjeta3">
                <div className={styles.tarjetas}>
                  <Image src="/hombre2.jpeg" width={518} height={418} alt='persona 3'/>
                </div>
                <div className={styles.flechas}>
                  <a href="#tarjeta2">
                    <Image src="/fl-izq.png" width={20} height={20} alt='flecha izquierda' />
                  </a>
                  <a href="#tarjeta1">
                    <Image src="/fl-drc.png" width={20} height={20} alt='flecha derecha' />
                  </a>
                </div>
              </div>
              </div>
            <div className={styles.card}>
              <div className={styles.overlay}></div>
              <h2>Retrato</h2>
              <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
            </div>
        </div>
    </div>
  )
}