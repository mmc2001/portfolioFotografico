import React from 'react'
import { useState } from 'react';
import styles from '../styles/Contacto2.module.css'


export default function contacto2() {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [servicio, setServicio] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);
  const [error5, setError5] = useState(false);

  const [exito, setExito] = useState(false);

  const  handleSubmit = async (e) =>{
    e.preventDefault()

    setExito(false)
    
    //Validación del formulario
    if ([nombre, apellidos, email, servicio, mensaje].includes('')) {
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
        console.log(`Valor error2: ${error2}`)
      }

      if ((email)==='') {
        setError3(true)
        console.log(`Valor error3: ${error3}`)
      } else {
        setError3(false)
        console.log(`Valor error3: ${error3}`)
      }

      if ((servicio)==='') {
        setError4(true)
        console.log(`Valor error4: ${error4}`)
      } else {
        setError4(false)
        console.log(`Valor error4: ${error4}`)
      }

      if ((mensaje)==='') {
        setError5(true)
        console.log(`Valor error5: ${error5}`)
      } else {
        setError5(false)
        console.log(`Valor error5: ${error5}`)
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
    setServicio('')
    setMensaje('')
    
    setExito(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.portada}>
        <div className={styles.overlay}>
            <h1 id='contacto1'>Contacto - Prueba</h1>
        </div>
      </div>
      <div className={styles.margen}>
          <h3>Si tienes alguna pregunta</h3>
          <h3>Por favor no dudes en enviarme un mensaje</h3>
      </div>
      <form 
        className={styles.formulario}>

        {error1||error2||error3||error4||error5 ? (
          <div>
            <h4 className={styles.mensaje_error}>Todos los campo son obligatorios</h4>
          </div>
        ) : ''}

        {exito ? (
          <div>
            <h4 className={styles.mensaje_exitoso}>Correo enviado correctamente</h4>
          </div>
        ) : ''}


        <div className={styles.input_group}>
            <input required type="text" name="Nombre"
              className={error1 ? styles.input_error : styles.input} value={nombre} onChange= {(e) => setNombre(e.target.value)}/>
            <label className={styles.user_label}>Nombre</label>
        </div>
        <div className={styles.input_group}>
            <input required type="text" name="Apellidos"
              className={error2 ? styles.input_error : styles.input} value={apellidos} onChange= {(e) => setApellidos(e.target.value)}/>
            <label className={styles.user_label}>Apellidos</label>
        </div>
        <div className={styles.input_group}>
            <input required type="email" name="Email" 
            className={error3 ? styles.input_error : styles.input} value={email} onChange= {(e) => setEmail(e.target.value)}/>
            <label className={styles.user_label}>Email</label>
        </div>
        <div className={styles.section_group}>
            <select 
                name="Servicio" 
                value={servicio} 
                onChange= {(e) => setServicio(e.target.value)} 
                required
                className={error4 ? styles.section_error : styles.section}>
                  <option value="">-- Elegir Servicio --</option>
                  <option value="retrato">Retrato</option>
                  <option value="evento">Evento</option>
                  <option value="orla">Orla</option>
                  <option value="deporte">Deporte</option>
            </select>  
            <label className={styles.user_label}>Servicio</label>
        </div>
        <div className={styles.textarea_group}>
            <textarea type="text" 
                name="Mensaje" 
                minLength="10" 
                maxLength="1000"
                value={mensaje} 
                onChange= {(e) => setMensaje(e.target.value)} 
                required
                className={error5 ? styles.textarea_error : styles.textarea}>
            </textarea>
            <label className={styles.user_label}>Mensaje</label>
        </div>
        <div className={styles.boton}>
            <button id='boton' className={styles.submit} onClick={handleSubmit}>Enviar</button>
        </div>

        <input type="hidden" name="_next" value="http://localhost:3000/#contacto1"/>
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_template" value="box"></input>
      </form>

    </div>
  )
}
