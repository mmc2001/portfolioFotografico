import React, { use } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Header.module.css"

export default function Header() {

  const router = useRouter()

  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                        <Image className={styles.logo} src="/logo2.png" width={150} height={40} alt='imagen logotipo' />
                </Link>

                <nav className={styles.navegacion2} >
                    <Link className={ router.pathname === '/' ? styles.active : ''} href="/">Inicio</Link>

                    <Link className={ router.pathname === '/servicios' ? styles.active : ''} href="#servicios">Servicios</Link>

                    <Link className={ router.pathname === '/contacto' ? styles.active : ''} href="#contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    </div>
  )
}
