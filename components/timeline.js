import React from 'react'
import styles from '../styles/timeline.module.css'

export default function timeline() {
  return (
    <div className={styles.contenedor}>
    <h1>Responsive vertical timeline</h1>
    <div className={styles.timeline}>
        <ul>
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>January 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>February 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>March 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>April 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>May 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className={styles.time}>
            <h4>June 2018</h4>
            </div>
        </li>
        
        <li>
            <div className={styles.content}>
            <h3>What is Lorem Ipsum?</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
        </li>
        
        <div className={styles.algo}></div>
        {/* <div style="clear:both;"></div> */}
        </ul>
    </div>
</div>
  )
}
