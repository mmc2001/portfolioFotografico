import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'

export default function contacto() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <div className={styles.contenedor}>
        <div className={styles.fondo}>
          <Image src="/deporte2.png" height={475} width={1440} alt="imagen deporte"/>
        </div>
        <form className={styles.formulario}>
            <div className={styles.contenido}>
              <div className={styles.filas}> 
                <h3>Nombre</h3>
                <h3>Apellidos</h3>
              </div>

              <div className={styles.filas}> 
                <input type="text" 
                  name="nombre" 
                  placeholder="Nombre" 
                  size="30" 
                  value={nombre} 
                  onChange= {(e) => setNombre(e.target.value)}
                  required
                  className={styles.campo1}>
                </input>
                <input type="text" 
                  name="apellidos" 
                  placeholder="Apellidos" 
                  size="30" 
                  value={apellidos} 
                  onChange= {(e) => setApellidos(e.target.value)}
                  required
                  className={styles.campo2}>
                </input>
              </div>

              <div className={styles.filas}> 
                <h3>Correo Electrónico</h3>
                <h3>Asunto</h3>
              </div>

              <div className={styles.filas}> 
                <input type="text" 
                  name="email" 
                  placeholder="Email" 
                  size="30" 
                  value={email} 
                  onChange= {(e) => setEmail(e.target.value)}
                  required
                  className={styles.campo2}>
                </input>
                <input type="text" 
                  name="asunto" 
                  placeholder="Asunto" 
                  size="30" 
                  value={asunto} 
                  onChange= {(e) => setAsunto(e.target.value)}
                  required
                  className={styles.campo1}>
                </input>
              </div>

              <div className={styles.filas}> 
                <h3>Mensaje</h3>
              </div>

              <div className={styles.filas}> 
                <textarea name="mensaje" 
                    placeholder="Mensaje" 
                    cols="80" 
                    rows="10" 
                    minLength="10" 
                    maxLength="1000" 
                    value={mensaje} 
                    onChange= {(e) => setMensaje(e.target.value)}
                    required>
                </textarea>
              </div>
            </div>
            <div className={styles.boton}>
              <input className={styles.submit} type="submit" name="enviar"></input>
            </div>
        </form>
    </div>
  )
}
