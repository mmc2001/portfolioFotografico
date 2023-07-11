import React from 'react'
import Link from 'next/link'
import styles from "../styles/Portada.module.css"

export default function portada() {
  return (
    <>
      <div className={`${styles.inicio} ${styles.overlay}`}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.texto}>
            <h1>Portfolio <br/> Fotográfico</h1>
            {/* <span>moyanofotografia</span> */}
          </div>
          <div className={styles.botones}>
            <Link href={"/#contacto1"}><button className={styles.button1}>Contactar</button></Link>
            <Link href={"/#servicios"}><button className={styles.button2}>Servicios</button></Link>
          </div>
        </div>
        <div className={styles.contenedor}>
          <div className={styles.scroll}>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <div className={styles.chevron}></div>
            <span className={styles.text}>Scroll Down</span>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
