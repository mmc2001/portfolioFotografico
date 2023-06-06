import React from 'react'
import { useState } from 'react';
import styles from '../styles/precios.module.css'

export default function precios() {

    const [mostrar, setMostrar] = useState(false);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [pack, setPack] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [error4, setError4] = useState(false);
    const [error5, setError5] = useState(false);
  
    const [exito, setExito] = useState(false);

    const [orla, setOrla] = useState(false);
    const [beca, setBeca] = useState(false);
    const [orlin, setOrlin] = useState(false);
    const [lote1, setLote1] = useState(false);
    const [lote2, setLote2] = useState(false);
    const [lote3, setLote3] = useState(false);
    const [lote4, setLote4] = useState(false);

    const [orla_valor, setOrla_valor] = useState(1);
    const [beca_valor, setBeca_valor] = useState(1);
    const [orlin_valor, setOrlin_valor] = useState(1);
    const [lote1_valor, setLote1_valor] = useState(1);
    const [lote2_valor, setLote2_valor] = useState(1);
    const [lote3_valor, setLote3_valor] = useState(1);
    const [lote4_valor, setLote4_valor] = useState(1);

    const [digital, setDigital] = useState(false);
    const [basico, setBasico] = useState(false);
    const [estandar, setEstandar] = useState(false);
    const [premium, setPremium] = useState(false);

    /* Mostrar/Ocultar el formulario */
    const handleSelect = async (e) => {
        e.preventDefault()
        setMostrar(true)
    }

    /* Extras Disponibles */
    const handleCheckbox1 = async (e) => {
        orla ? setOrla(false) : setOrla(true) 
    }
    const handleCheckbox2 = async (e) => {
        beca ? setBeca(false) : setBeca(true)
    }
    const handleCheckbox3 = async (e) => {
        lote1 ? setLote1(false) : setLote1(true)
    }
    const handleCheckbox4 = async (e) => {
        lote2 ? setLote2(false) : setLote2(true)
    }
    const handleCheckbox5 = async (e) => {
        lote3 ? setLote3(false) : setLote3(true)
    }
    const handleCheckbox6 = async (e) => {
        lote4 ? setLote4(false) : setLote4(true)
    }
    const handleCheckbox7 = async (e) => {
        orlin ? setOrlin(false) : setOrlin(true)
    }
  
    /* Envío de formulario */
    const  handleSubmit = async (e) => {
      e.preventDefault()

      setMostrar(true)
  
      //Validación del formulario
      if ([nombre, apellidos, email, pack, mensaje].includes('')) {
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
  
        if ((pack)==='') {
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
  
      setExito(true)
  
      //Reinicir el form
      setNombre('')
      setApellidos('')
      setEmail('')
      setPack('')
      setMensaje('')
    }



  return (
    <>
        <div className={styles.planContainer}>
            <h2 className={styles.pricingTableTitle}>¿Cuál es tu pack?</h2>
            <h3 className={styles.pricingTableSubtitle}>No olvides añadir algún extra a los packs si lo necesitas</h3>
            
            <div className={styles.plan}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Pack Digital</div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.price}>
                        <p>8€ </p><span></span>
                    </div>
                    <div className={`${styles.p} ${styles.desc}`}><em>Recomendable contratar también la <strong>Beca</strong> para el evento de graduación</em></div>
                    <ul className={styles.features}>
                        <li><span>✔ </span>Orla</li>
                        <li><span>✔ </span>Orlín</li>
                        <li><span>✔ </span>Foto Individual con Beca</li>
                        <li><span>✔ </span>Foto Individual con Beca y Birrete</li>
                        <p className={styles.centrado}>(Formato Digital)</p>
                    </ul>
                </div>
                <div className={styles.infoContainer}>
                    <div className={`${styles.p} ${styles.desc}`}><em>Extras Disponibles: </em></div>
                    <ul className={styles.features}>
                        <li>
                            <span>+ </span> Orla
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox1}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Beca
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox2}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 1
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox3}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 2
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 3
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox5}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 4
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox6}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                    </ul><a className={styles.selectPlan} onClick={handleSelect}>Seleccionar Pack</a>
                </div>
            </div>
            <div className={styles.plan}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Pack Básico</div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.price}>
                        <p>18€ </p><span></span>
                    </div>
                    <div className={`${styles.p} ${styles.desc}`}><em>Posibilidad de adquirir <strong>Orlin</strong> como extra o algún tipo de lote de fotos adicional</em></div>
                    <ul className={styles.features}>
                        <li><span>✔ </span>Orla</li>
                        <li><span>✔ </span>Beca</li>
                        <li><span>✔ </span>Fotos 10X15 (x2)</li>
                        <li><span>✔ </span>Fotos 7X10 (x2)</li>
                        <li><span>✔ </span>Fotos Carnet (x8)</li>
                    </ul>
                </div>
                <div className={styles.infoContainer}>
                    <div className={`${styles.p} ${styles.desc}`}><em>Extras Disponibles: </em></div>
                    <ul className={styles.features}>
                        <li>
                            <span>+ </span>Orlín
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox7}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 1
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox3}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 2
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 3
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 4
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox5}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                    </ul><a className={styles.selectPlan} onClick={handleSelect}>Seleccionar Pack</a>
                </div>
            </div>
            <div className={styles.plan}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Pack Estándar</div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.price}>
                        <p>20€ </p><span></span>
                    </div>
                    <div className={`${styles.p} ${styles.desc}`}><em>Posibilidad de adquirir <strong>Orlin</strong> como extra o algún tipo de lote de fotos adicional</em></div>
                    <ul className={styles.features}>
                        <li>✔ Orla</li>
                        <li>✔ Beca</li>
                        <li><span>✔ </span>Fotos 10X15 (x4)</li>
                        <li><span>✔ </span>Fotos 7X10 (x6)</li>
                        <li>✔ Fotos Carnet (x8)</li>
                        <li><span>✔ </span>Archivos en Formato Digital</li>
                    </ul>
                </div>
                <div className={styles.infoContainer}>
                    <div className={`${styles.p} ${styles.desc}`}><em>Extras Disponibles: </em></div>
                    <ul className={styles.features}>
                        <li>
                            <span>+ </span>Orlín
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox7}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 1
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox3}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 2
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 3
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 4
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox5}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                    </ul><a className={styles.selectPlan} onClick={handleSelect}>Seleccionar Pack</a>
                </div>
            </div>
            <div className={styles.plan}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Pack Premium</div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.price}>
                        <p>25€</p><span></span>
                    </div>
                    <div className={`${styles.p} ${styles.desc}`}><em>Posibilidad de adquirir algún tipo de lote de fotos adicional</em></div>
                    <ul className={styles.features}>
                        <li>✔ Orla</li>
                        <li><span>✔ </span>Orlín</li>
                        <li>✔ Beca</li>
                        <li><span>✔ </span>Fotos 10X15 (x6)</li>
                        <li><span>✔ </span>Fotos 7X10 (x6)</li>
                        <li>✔ Fotos Carnet (x8)</li>
                        <li><span>✔ </span>Foto 15X20 (x1)</li>
                        <li>✔ Archivos en Formato Digital</li>
                    </ul>
                </div>
                <div className={styles.infoContainer}>
                    <div className={`${styles.p} ${styles.desc}`}><em>Extras Disponibles: </em></div>
                    <ul className={styles.features}>
                        <li>
                            <span>+ </span>Lote 1
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox3}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 2
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 3
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox4}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                        <li>
                            <span>+ </span>Lote 4
                            <label className={styles.container}>
                                <input type="checkbox" onClick={handleCheckbox5}/>
                                <div className={styles.checkmark}></div>
                            </label>
                        </li>
                    </ul><a className={styles.selectPlan} onClick={handleSelect}>Seleccionar Pack</a>
                </div>
            </div>
        </div>

        {/* Código para mostrar el formulario de pedido */}

        {mostrar ? (
            <div className={styles.contenedor}>
                <div className={styles.overlay}>
                    <div className={styles.titulo}>
                        <h1>Solicitud de Pedido</h1>
                    </div>
                    <form 
                        action="https://formsubmit.co/moisesmoyanoc@gmail.com" 
                        method="POST"
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
                                name="Pack" 
                                value={pack} 
                                onChange= {(e) => setPack(e.target.value)} 
                                id='options'
                                required
                                className={error4 ? styles.section_error : styles.section}>
                                <option value="digital">Pack Digital</option>
                                <option value="basico" selected>Pack Básico</option>
                                <option value="estandar">Pack Estándar</option>
                                <option value="premium">Pack Premium</option>
                            </select>  
                            <label className={styles.user_label}>Pack</label>
                        </div>
                        <div>
                            {orla ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Orla" 
                                        className={styles.input} value={orla_valor} onChange= {(e) => setOrla_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Orlas</label>
                                </div>
                            ) : ''}
                            {beca ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Beca" 
                                        className={styles.input} value={beca_valor} onChange= {(e) => setBeca_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Becas</label>
                                </div>
                            ) : ''}
                            {orlin ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Orlin" 
                                        className={styles.input} value={orlin_valor} onChange= {(e) => setOrlin_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Orlines</label>
                                </div>
                            ) : ''}
                            {lote1 ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Lote 1" 
                                        className={styles.input} value={lote1_valor} onChange= {(e) => setLote1_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Lotes 1</label>
                                </div>
                            ) : ''}
                            {lote2 ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Lote 2" 
                                        className={styles.input} value={lote2_valor} onChange= {(e) => setLote2_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Lotes 2</label>
                                </div>
                            ) : ''}
                            {lote3 ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Lote 3" 
                                        className={styles.input} value={lote3_valor} onChange= {(e) => setLote3_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Lotes 3</label>
                                </div>
                            ) : ''}
                            {lote4 ? (
                                <div className={styles.input_group}>
                                    <input required type="number" name="Lote 4" 
                                        className={styles.input} value={lote4_valor} onChange= {(e) => setLote4_valor(e.target.value)}/>
                                        <label className={styles.user_label}>Lotes 4</label>
                                </div>
                            ) : ''}
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
                            <input className={styles.submit} type="submit" name="enviar" onClick={handleSubmit}></input>
                        </div>

                        <input type="hidden" name="_next" value="http://localhost:3000/#contacto"/>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_template" value="box"></input>
                    </form>
                </div>
            </div>
        ) : ''}
    </>
  )
}
