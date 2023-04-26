import React from 'react'
import styles from '../styles/product.module.css'
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <Link className={styles.link} to={`/product/${item._id}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.isNew && <span className={styles.card_info}>New Season</span>}
          <img src={item.img} alt="" className={styles.main_img} />
          <img src={item.img2} alt="" className={styles.second_img} />
        </div>
        <h2 className={styles.card_title}>{item.title}</h2>
        <div className={styles.card_prices}>
          <h3 className={styles.card_price}>${item.oldPrice}</h3>
          <h3 className={styles.card_price}>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Product