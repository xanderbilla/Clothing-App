import React from 'react'
import styles from '../styles/categoryItem.module.css'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
    return (
        <div className={styles.container}>
            <Link to={`/category/${item.cat}`}>
                <img className={styles.container_item__img} src={item.img} alt="" />
                <div className={styles.container_item__info}>
                    <h1 className={styles.container_item__info_title}>{item.title}</h1>
                    <button className={styles.container_item__info_button}>
                        SHOP NOW
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem