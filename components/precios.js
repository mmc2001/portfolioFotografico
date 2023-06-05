import React from 'react'
import styles from '../styles/precios.module.css'

export default function precios() {
  return (
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
                    <li><span>+ </span>
                        Orla
                        <input type="checkbox" name="myCheckbox"/>
                    </li>
                    <li><span>+ </span>Beca</li>
                    <li><span>+ </span>Lote 1</li>
                    <li><span>+ </span>Lote 2</li>
                    <li><span>+ </span>Lote 3</li>
                    <li><span>+ </span>Lote 4</li>
                </ul><a className={styles.selectPlan}>Seleccionar Pack</a>
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
                    <li><span>+ </span>Orlín</li>
                    <li><span>+ </span>Lote 1</li>
                    <li><span>+ </span>Lote 2</li>
                    <li><span>+ </span>Lote 3</li>
                    <li><span>+ </span>Lote 4</li>
                </ul><a className={styles.selectPlan}>Seleccionar Pack</a>
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
                    <li><span>+ </span>Orlín</li>
                    <li><span>+ </span>Lote 1</li>
                    <li><span>+ </span>Lote 2</li>
                    <li><span>+ </span>Lote 3</li>
                    <li><span>+ </span>Lote 4</li>
                </ul><a className={styles.selectPlan}>Seleccionar Pack</a>
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
                    <li><span>+ </span>Lote 1</li>
                    <li><span>+ </span>Lote 2</li>
                    <li><span>+ </span>Lote 3</li>
                    <li><span>+ </span>Lote 4</li>
                </ul><a className={styles.selectPlan}>Seleccionar Pack</a>
            </div>
        </div>
    </div>
  )
}
