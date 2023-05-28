import React, { use } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Footer.module.css"

export default function Footer() {

  const router = useRouter()

  return (
    <>
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.barra}`}>
              <nav className={styles.navegacion} >
                  <Link href="/">Inicio</Link>

                  <Link href="#servicios">Servicios</Link>

                  <Link href="#contacto">Contacto</Link>
              </nav>
              <Link href={'/'}>
                      <Image className={styles.logo} src="/logo_blanco.svg" width={140} height={40} alt='imagen logotipo' />
              </Link>
            </div>
        </footer>
    </>
  )
}