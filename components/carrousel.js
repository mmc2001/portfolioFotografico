import React from 'react'
import Image from 'next/image'
import styles from '../styles/carrousel.module.css'

export default function carrousel() {
  return (
    <div>
        <div className={styles.contenedor}>  
            <div className={styles.bloque1}>

            </div>
            <div className={styles.bloque2}>
                <Image className={styles.imagen} src="/retrato.jpeg" width={650} height={518} alt='imagen logotipo' />
            </div>
        </div>
    </div>
  )
}