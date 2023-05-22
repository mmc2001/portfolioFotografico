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

  const [error, setError] = useState(false);

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    //Validación del formulario
    if([nombre, apellidos, email, asunto, mensaje].includes('')){
        /* console.log('Hay al menos un campo vacío') */
        setError(true)
        return;
    }

    setError(false)

    //Reinicir el form
    setNombre('')
    setApellidos('')
    setEmail('')
    setAsunto('')
    setMensaje('')
    
  }

  return (
    <div className={styles.contenedor}>
        <div className={styles.fondo}>
          <Image src="/deporte2.png" height={475} width={1440} alt="imagen deporte"/>
        </div>
        <form
          id='contacto'
          action="https://formsubmit.co/mmcfotografia01@gmail.com" 
          method="POST" 
          className={error ? styles.formulario_error : styles.formulario}>
            <div className={styles.contenido}>
              <div className={styles.filas}> 
                <h3 style={{marginRight: 126}}>Nombre</h3>
                <h3>Apellidos</h3>
              </div>

              <div className={styles.filas}> 
                <input type="text" 
                  name="Nombre" 
                  placeholder="Nombre" 
                  size="30" 
                  value={nombre} 
                  onChange= {(e) => setNombre(e.target.value)}
                  required
                  className={styles.campo1}>
                </input>
                <input type="text" 
                  name="Apellidos" 
                  placeholder="Apellidos" 
                  size="30" 
                  value={apellidos} 
                  onChange= {(e) => setApellidos(e.target.value)}
                  required
                  className={styles.campo2}>
                </input>
              </div>

              <div className={styles.filas}> 
                <h3 style={{marginRight: 98}}>Correo Electrónico</h3>
                <h3>Asunto</h3>
              </div>

              <div className={styles.filas}> 
                <input type="email" 
                  name="Email" 
                  placeholder="Email" 
                  size="30" 
                  value={email} 
                  onChange= {(e) => setEmail(e.target.value)}
                  required
                  className={styles.campo2}>
                </input>
                <select 
                  name="Asunto"  
                  value={asunto} 
                  onChange= {(e) => setAsunto(e.target.value)}
                  required
                  className={styles.dropdown}>
            
                    <option>--- Elegir Servicio ---</option>
                    <option value="retrato">Retrato</option>
                    <option value="evento">Evento</option>
                    <option value="orla">Orla</option>
                    <option value="deporte">Deporte</option>
                </select>
              </div>

              <div className={styles.filas}> 
                <h3>Mensaje</h3>
              </div>

              <div className={styles.filas}> 
                <textarea type="text" 
                    name="Mensaje" 
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
            <input type="hidden" name="_next" value="http://localhost:3000/#contacto"/>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="box"></input>
        </form>
    </div>
  )
}
