import React from 'react'
import styles from '../styles/featuredProducts.module.css'
import List from './List'

const FeaturedProduct = () => {
    return (
        <div className={styles.featured_products}>
            <div className={styles.top}>
                <h1 className={styles.title}>Featured Products</h1>
                <p className={styles.desc}>Stay effortlessly cool with our casual denim jacket. This wardrobe staple is a must-have for fashion enthusiasts. It offers a versatile and relaxed fit, ideal for creating stylish and laid-back outfits. </p>
            </div>
            <div className={styles.bottom}>
                <List />
            </div>
        </div>
    )
}

export default FeaturedProduct