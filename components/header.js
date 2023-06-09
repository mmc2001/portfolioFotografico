import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Header.module.css"

export default function Header() {

  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)

  const handleMenu = () => {
    setModal(true)
  }
  const handleMenuExit = () => {
    setModal(false)
  }
  const handleModal2 = () => {
    if(modal2===false) setModal2(true)
    else setModal2(false)
  }

  return (
    <div>
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href={'/'}>
                        <Image className={styles.logo} src="/logo.svg" width={140} height={40} alt='imagen logotipo' />
                </Link>

                <nav className={styles.navegacion1} id="nav">

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

                  <Link className={ router.pathname === '/#contacto1' ? styles.active : ''} href="./#contacto1">Contacto</Link>

                </nav>
                <nav className={styles.navegacion2}>
                  <a href='#' className={styles.nav_hamburguer}>
                      <img src="./menu.svg" className={styles.nav_icon1} onClick={handleMenu}/>
                  </a>
                  {modal && (
                    <div className={styles.modal}>

                      <a href='#' className={styles.boton}>
                          <img src="./cerrar.svg" className={styles.nav_icon2} onClick={handleMenuExit}/>
                      </a>

                      <Link className={styles.texto} href="/" onClick={handleMenuExit}>Inicio</Link>

                      <li className={styles.dropdown}>
                        <a href="#" className={styles.texto} onClick={handleModal2}>Servicios</a>
                          {modal2 && ( 
                            <ul className={styles.dropdownMenu}>
                              <li className={styles.list}><a href="./retratos" onClick={handleMenuExit}>Retratos</a></li>
                              <li className={styles.list}><a href="./eventos" onClick={handleMenuExit}>Eventos</a></li>
                              <li className={styles.list}><a href="./orlas" onClick={handleMenuExit}>Orlas</a></li>
                              <li className={styles.list}><a href="./deporte" onClick={handleMenuExit}>Deporte</a></li>
                            </ul>
                          )}
                      </li>

                      <Link className={styles.texto} href="./#contacto" onClick={handleMenuExit}>Contacto</Link> 
                    </div>
                  )}
                </nav>
            </div>
        </header>
    </div>
  )
}