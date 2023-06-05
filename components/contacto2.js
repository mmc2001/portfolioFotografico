import React from 'react'
import styles from '../styles/Contacto2.module.css'

export default function contacto2() {
  return (
    <div className={styles.container} id='contacto2'>
      <div className={styles.portada}>
        <div className={styles.overlay}>
            <h1>Contacto</h1>
        </div>
      </div>
      <form className={styles.formulario}>
        <div className={styles.margen}>
            <h3>Si tienes alguna pregunta</h3>
            <h3>Por favor no dudes en enviarme un mensaje</h3>
        </div>
        
        <div className={styles.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={styles.input}/>
            <label className={styles.user_label}>Nombre</label>
        </div>
        <div className={styles.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={styles.input}/>
            <label className={styles.user_label}>Apellidos</label>
        </div>
        <div className={styles.input_group}>
            <input required="" type="text" name="text" autocomplete="off" className={styles.input}/>
            <label className={styles.user_label}>Email</label>
        </div>
        <div className={styles.section_group}>
            <select 
                name="Servicio"  
                required
                className={styles.section}>
                <option value="">--- Elegir Servicio ---</option>
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
                required
                className={styles.textarea}>
            </textarea>
            <label className={styles.user_label}>Email</label>
        </div>
        <div className={styles.boton}>
            <input className={styles.submit} type="submit" name="enviar"></input>
        </div>
      </form>

    </div>
  )
}
