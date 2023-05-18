import React, { use } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Footer.module.css"

export default function Footer() {

  const router = useRouter()

  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
              {router.pathname != '/fotografia' ? (
                <nav className={styles.navegacion} >
                    <Link href="/">Inicio</Link>

                    <Link href="#sobre-mi">Sobre mi</Link>

                    <Link href="#contacto">Contacto</Link>
                                        
                    <Link href="/fotografia">Fotógrafo</Link>
                </nav>
              ) : (
                <nav className={styles.navegacion} >
                    <Link href="/fotografia">Inicio</Link>

                    <Link href="#servicios">Servicios</Link>

                    <Link href="#contacto">Contacto</Link>
                                        
                    <Link href="/">Sobre mi</Link>
                </nav>
              )}
                <Link href={'/'}>
                        <Image className={styles.logo} src="/logo2.svg" width={100} height={40} alt='imagen logotipo' />
                </Link>
            </div>
            </header>
    </div>
  )
}