import React from 'react'
import Image from 'next/image'
import styles from '../styles/carrousel.module.css'

export default function carrousel() {
  return (
    <div>
        <div className={styles.contenedor}>  
            <div className={styles.bloque1}>

            </div>
            <div className={styles.bloque2}>
                <h2>Retrato</h2>
                <p>Lorem ipsum dolor sit amet. Et eaque Quis aut voluptas culpa ut velit earum in consequatur suscipit quo deleniti quos et unde explicabo sed laboriosam repudiandae. Est accusantium repudiandae et consequatur eligendi est autem libero.</p>
            </div>
        </div>
    </div>
  )
}