import React from 'react'
import Image from 'next/image'
import styles from '../styles/servicios.module.css'

export default function servicios() {
  return (
    
    <div className={styles.contenedor}>
        <h2>Servicios</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.overlay}></div>
            <h3>Retratos</h3>
            <h4>Individuales, en pareja o en grupo</h4>
            <Image href="" className={styles.imagen} src={"/retrato.jpeg"} width={258} height={387} alt='imagen card 1'/>
          </div>
          <div className={styles.card}>
            <div className={styles.overlay}></div>
            <h3>Eventos</h3>
            <h4>Bodas, comuniones, jubilaciones y graduaciones</h4>
            <Image className={styles.imagen} src={"/mujer.jpeg"} width={258} height={387} alt='imagen card 2'/>
          </div>
          <div className={styles.card}>
            <div className={styles.overlay}></div>
            <h3>Orlas</h3>
            <h4>Universitarias, grados superiores - medios e institutos</h4>
            <Image className={styles.imagen} src={"/deporte.jpeg"} width={258} height={387} alt='imagen card 3'/>
          </div>
          <div className={styles.card}>
            <div className={styles.overlay}></div>
            <h3>Deporte</h3>
            <h4>Campeonatos y partidos de fútbol, atletismo y circuito</h4>
            <Image className={styles.imagen} src={"/hombre2.jpeg"} width={258} height={387} alt='imagen card 4'/>
          </div>
        </div>
    </div>
  )
}
