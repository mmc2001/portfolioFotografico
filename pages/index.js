import Layout from '../components/layout'
import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [scrollTo, setScrollTo] = useState(false);

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
     <Head>
        <title>{`Portolio - ${'title'}`}</title>
        <meta name="description" content={'description'} />
      </Head>
      <Header />
      <Layout/>
      <div className={styles.subir}>
        <Image src="/flecha-hacia-arriba.png" height={75} width={40} alt="imagen deporte" onClick={handleScrollTo}/>
      </div>
      <Footer/>
    </>
  )
}