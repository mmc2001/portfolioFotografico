import React, {useEffect} from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/servicios.module.css'

import page from '../pages/retratos'

export default function servicios() {

  useEffect(() => {
      AOS.init({ once: true }); 
  }, []);

  return (
    <>
    <div className={styles.contenedor} data-aos="fade-up">
        <h2>Servicios</h2>
        <div className={styles.cards}>
          <a href='./retratos'>
            <div className={styles.card}>
              <div className={styles.overlay}></div>
              <h3>Retratos</h3>
              <h4>Individuales, en pareja o en grupo</h4>
              <Image href="" className={styles.imagen} src={"https://res.cloudinary.com/dmy4uufym/image/upload/v1686592313/moyanofotografia/retrato/retrato-94_iyubzc.jpg"} width={258} height={387} alt='imagen card 1'/>
            </div>
          </a>
          <a href='./eventos'>
            <div className={styles.card}>
              <div className={styles.overlay}></div>
              <h3>Eventos</h3>
              <h4>Bodas, comuniones, jubilaciones y graduaciones</h4>
              <Image className={styles.imagen} src={"https://res.cloudinary.com/dmy4uufym/image/upload/v1686672242/moyanofotografia/eventos/boda/boda-11_d68zcm.jpg"} width={258} height={387} alt='imagen card 2'/>
            </div>
          </a>
          <a href='./orlas'>
            <div className={styles.card}>
              <div className={styles.overlay}></div>
              <h3>Orlas</h3>
              <h4>Universitarias, grados superiores - medios e institutos</h4>
              <Image className={styles.imagen} src={"/deporte.jpeg"} width={258} height={387} alt='imagen card 3'/>
            </div>
          </a>
          <a href='./deporte'>
            <div className={styles.card}>
              <div className={styles.overlay}></div>
              <h3>Deporte</h3>
              <h4>Campeonatos y partidos de fútbol, atletismo y circuito</h4>
              <Image className={styles.imagen} src={"https://res.cloudinary.com/dmy4uufym/image/upload/v1686670633/moyanofotografia/deporte/f%C3%BAtbol/f%C3%BAtbol-88_kluzmw.jpg"} width={258} height={387} alt='imagen card 4'/>
            </div>
          </a>
        </div>
    </div>
    </>
  )
}
