import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/trabajos.module.css'

export default function sobreMi() {
  return (
    <div className={styles.contenedor}>
        <h2>Trabajos de Ejemplo</h2>
        <div className={styles.galeria}>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        <img src={"/retrato.jpeg"}/>
        </div>
        
    </div>
  )
}
