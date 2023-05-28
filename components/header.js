import React from 'react'
import { useRouter } from 'next/router'
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
                        <Image className={styles.logo} src="/logo_blanco.svg" width={120} height={40} alt='imagen logotipo' />
                </Link>

                <nav className={styles.navegacion} >

                  <Link className={ router.pathname === '/' ? styles.active : ''} href="/">Inicio</Link>

                  <li>
                    <a href="#">Servicios ▼</a>
                      <ul>
                        <li className={styles.list}><a href="./retratos">Retratos</a></li>
                        <li className={styles.list}><a href="./eventos">Eventos</a></li>
                        <li className={styles.list}><a href="./orlas">Orlas</a></li>
                        <li className={styles.list}><a href="./deporte">Deporte</a></li>
                      </ul>
                  </li>

                  {/* <Link className={ router.pathname === '/servicios' ? styles.active : ''} href="#servicios">Servicios</Link> */}

                  <Link className={ router.pathname === '/contacto' ? styles.active : ''} href="./#contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    </div>
  )
}
