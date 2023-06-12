import Layout from '../components/layout'
import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"
import { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  /* const [scrollTo, setScrollTo] = useState(false);

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; */

  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const alturaMinima = 1400; // La altura a partir de la cual se muestra el botón
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
    <div className={styles.contenedor}>
     <Head>
        <title>{`Portolio - ${'title'}`}</title>
        <meta name="description" content={'description'} />
      </Head>
      <Header />
      <Layout/>
      {/* 
      {mostrarBoton && (
        <div className={styles.mostrar}>
          <Image src="/flecha-hacia-arriba.png" height={75} width={40} alt="imagen deporte" onClick={handleClick} onClick={handleScrollTo}/>
        </div>
      )}
      */}
      
      {mostrarBoton && (
        <div className={styles.mostrar}>
          <Image src="/flecha.png" height={75} width={40} alt="imagen deporte" onClick={handleClick} />
        </div>
      )}

      <Footer/>
    </div>
  )
}