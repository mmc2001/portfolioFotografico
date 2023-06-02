import React from 'react'
import styles from '../styles/precios.module.css'

export default function precios() {
  return (
    <div className={styles.pricingTable}>
        <h2 className={styles.pricingTableTitle}>Encuentra el pack que más se ajuste a tus necesidades</h2>
        <h3 className={styles.pricingTableSubtitle}>No olvides añadir algún extra a los packs si lo necesitas</h3>
        
        <ul className={styles.pricingTableFirstTable}>
            <li className={styles.pricingTableFirstTable_table}>
                <h1 className={styles.pricingTableFirstTable_table__header}>Pack Digital</h1>
                <p className={styles.pricingTableFirstTable_table__paragraph}>Recomendable contratar también la <strong>Beca</strong> para el evento de graduación</p>
                <p className={styles.pricingTableFirstTable_table__pricing}><span></span><span>8</span><span>€</span></p>
                <ul className={styles.pricingTableFirstTable_table__options}>
                    <li>Orla</li>
                    <li>Orlín</li>
                    <li>Foto Individual con Beca</li>
                    <li>Foto Individual con Beca y Birrete</li>
                    <p>( Todo en Formato Digital )</p>
                </ul>
                <button className={styles.pricingTableFirstTable_table__getstart}>Solicitar Mi Pack</button>
            </li>
            <li className={styles.pricingTableFirstTable_table}>
                <h1 className={styles.pricingTableFirstTable_table__header}>Pack Básico</h1>
                <p className={styles.pricingTableFirstTable_table__paragraph}>Posibilidad de adquirir <strong>Orlin</strong> como extra o algún tipo de lote de fotos adicional</p>
                <p className={styles.pricingTableFirstTable_table__pricing}><span></span><span>18</span><span>€</span></p>
                <ul className={styles.pricingTableFirstTable_table__options}>
                    <li>Orla</li>
                    <li>Beca</li>
                    <li>Fotos 10X15 (x2)</li>
                    <li>Fotos 7X10 (x2)</li>
                    <li>Fotos Carnet (x8)</li>
                </ul>
                <button className={styles.pricingTableFirstTable_table__getstart}>Solicitar Mi Pack</button>
            </li>
            <li className={styles.pricingTableFirstTable_table}>
                <h1 className={styles.pricingTableFirstTable_table__header}>Pack Estándar</h1>
                <p className={styles.pricingTableFirstTable_table__paragraph}>Posibilidad de adquirir <strong>Orlin</strong> como extra o algún tipo de lote de fotos adicional</p>
                <p className={styles.pricingTableFirstTable_table__pricing}><span></span><span>20</span><span>€</span></p>
                <ul className={styles.pricingTableFirstTable_table__options}>
                    <li>Orla</li>
                    <li>Beca</li>
                    <li>Fotos 10X15 (x4)</li>
                    <li>Fotos 7X10 (x6)</li>
                    <li>Fotos Carnet (x8)</li>
                    <li>Archivos en Formato Digital</li>
                </ul>
                <button className={styles.pricingTableFirstTable_table__getstart}>Solicitar Mi Pack</button>
            </li>
            <li className={styles.pricingTableFirstTable_table}>
                <h1 className={styles.pricingTableFirstTable_table__header}>Pack Premium</h1>
                <p className={styles.pricingTableFirstTable_table__paragraph}>Posibilidad de adquirir algún tipo de lote de fotos adicional</p>
                <p className={styles.pricingTableFirstTable_table__pricing}><span></span><span>25</span><span>€</span></p>
                <ul className={styles.pricingTableFirstTable_table__options}>
                    <li>Orla</li>
                    <li>Orlín</li>
                    <li>Beca</li>
                    <li>Fotos 10X15 (x6)</li>
                    <li>Fotos 7X10 (x6)</li>
                    <li>Fotos Carnet (x8)</li>
                    <li>Foto 15X20 (x1)</li>
                    <li>Archivos en Formato Digital</li>
                </ul>
                <button className={styles.pricingTableFirstTable_table__getstart}>Solicitar Mi Pack</button>
            </li>
        </ul>
        </div>
  )
}
