import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Carrousel from '@/components/carrousel'
import Galeria from '@/components/galeria'
import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function retratos() {

  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const alturaMinima = 100; // La altura a partir de la cual se muestra el botón
      const scrollActual = window.pageYOffset;

      if (scrollActual > alturaMinima) {
        setMostrarBoton(true);
      } else {
        setMostrarBoton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({
      duration: 1500, // Duración de la animación de desplazamiento
      smooth: 'easeInOutQuart', // Tipo de animación suave
    });
  };

  return (
    <>
      <Header />
      <Carrousel/>
      <Galeria />
      {mostrarBoton && (
        <div className={styles.mostrar}>
          <Image src="/flecha-hacia-arriba.png" height={75} width={40} alt="imagen deporte" onClick={handleClick} />
        </div>
      )}
      <Footer />
    </>
  )
}

