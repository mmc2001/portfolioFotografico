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

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    //Validación del formulario
    if ([nombre, apellidos, email, asunto, mensaje].includes('')) {
      if ((nombre)==='') {
        setError1(true)
        console.log(`Valor error1: ${error1}`)
      } else {
        setError1(false)
        console.log(`Valor error1: ${error1}`)
      }
      
      if ((apellidos)==='') {
        setError2(true)
        console.log(`Valor error2: ${error2}`)
      }else{
        setError2(false)
        console.log(`Valor error1: ${error1}`)
      }

      if ((email)==='') {
        setError3(true)
        console.log(`Valor error3: ${error3}`)
      } else {
        setError3(false)
        console.log(`Valor error1: ${error1}`)
      }

      if ((asunto)==='') {
        setError4(true)
        console.log(`Valor error4: ${error4}`)
      } else {
        setError4(false)
        console.log(`Valor error1: ${error1}`)
      }

      if ((mensaje)==='') {
        setError5(true)
        console.log(`Valor error5: ${error5}`)
      } else {
        setError5(false)
      }
      return;
    }

    setError1(false)
    setError2(false)
    setError3(false)
    setError4(false)
    setError5(false)

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
          className={styles.formulario}>
            {error1||error2||error3||error4||error5 ? (
              <div>
                <h4>Todos los campo son obligatorios</h4>
              </div>
            ) : ''}
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
                  className={error1 ? styles.error1 : styles.campo1}>
                </input>
                <input type="text" 
                  name="Apellidos" 
                  placeholder="Apellidos" 
                  size="30" 
                  value={apellidos} 
                  onChange= {(e) => setApellidos(e.target.value)}
                  required
                  className={error2 ? styles.error2 : styles.campo2}>
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
                  className={error3 ? styles.error2 : styles.campo2}>
                </input>
                <select 
                  name="Asunto"  
                  value={asunto} 
                  onChange= {(e) => setAsunto(e.target.value)}
                  required
                  className={error4 ? styles.dropdown_error : styles.dropdown}>
                    <option value="">--- Elegir Servicio ---</option>
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
                    required
                    className={error5 ? styles.error : ''}>
                </textarea>
              </div>
            </div>
            
            <div className={styles.boton}>
              <input className={styles.submit} type="submit" name="enviar" onClick={handleSubmit}></input>
            </div>
            <input type="hidden" name="_next" value="http://localhost:3000/#contacto"/>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_template" value="box"></input>
        </form>
    </div>
  )
}
