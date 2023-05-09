import React from 'react'
import styles from '../styles/precios.module.css'

export default function precios() {
  return (
    <div className={styles.pricingTable}>
        <h2 className={styles.pricingTableTitle}>Find a plan that's right for you.</h2>
        <h3 className={styles.pricingTableSubtitle}>Every plan comes with a 30-day   free trial.</h3>
        
        <ul className={styles.pricingTableFirstTable}>
            <li className={styles.pricingTableFirstTable_table}>
            <h1 className={styles.pricingTableFirstTable_table__header}>Bronze Packege</h1>
            <p className={styles.pricingTableFirstTable_table__pricing}><span>$</span><span>10</span><span>Month</span></p>
            <ul className={styles.pricingTableFirstTable_table__options}>
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
            </ul>
            <button className={styles.pricingTableFirstTable_table__getstart}>Get Started Now</button>
            </li><li className={styles.pricingTableFirstTable_table}>
            <h1 className={styles.pricingTableFirstTable_table__header}>Gold Packege</h1>
            <p className={styles.pricingTableFirstTable_table__pricing}><span>$</span><span>19</span><span>Month</span></p>
            <ul className={styles.pricingTableFirstTable_table__options}>
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
                <li>Take Booking Online</li>
                <li>24/7 Support Service</li>
            </ul>
            <button className={styles.pricingTableFirstTable_table__getstart}>Get Started Now</button>
            </li><li className={styles.pricingTableFirstTable_table}>
            <h1 className={styles.pricingTableFirstTable_table__header}>Platinum Packege</h1>
            <p className={styles.pricingTableFirstTable_table__pricing}><span>$</span><span>49</span><span>Month</span></p>
            <ul className={styles.pricingTableFirstTable_table__options}>
                <li>Unlimited Listing</li>
                <li>Edit Your Listing</li>
                <li>Approve Reviews</li>
            </ul>
            <button className={styles.pricingTableFirstTable_table__getstart}>Get Started Now</button>
            </li>
        </ul>
        </div>
  )
}
