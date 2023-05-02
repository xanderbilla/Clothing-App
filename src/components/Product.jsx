import React from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <Link className={styles.link} to={`/product/${item.prodId}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.isNew && <span className={styles.card_info}>New Season</span>}
          <img src={item.img[0]} alt="" className={styles.main_img} />
          <img src={item.img[1]} alt="" className={styles.second_img} />
        </div>
        <h2 className={styles.card_title}>{item.title}</h2>
        <div className={styles.card_prices}>
          <h3 className={styles.card_price}>${item.original_price}</h3>
          <h3 className={styles.card_price}>${item.discount_price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Product