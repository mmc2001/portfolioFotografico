import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Carrousel from '@/components/carrousel'
import Galeria from '@/components/galeria'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function orlas() {

  const [scrollTo, setScrollTo] = useState(false);

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Carrousel/>
      <Galeria />
      <div className={styles.subir}>
        <Image src="/flecha-hacia-arriba.png" height={75} width={40} alt="imagen deporte" onClick={handleScrollTo}/>
      </div>
      <Footer />
    </>
  )
}
