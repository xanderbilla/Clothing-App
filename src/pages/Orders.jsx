import React from 'react'
import styles from '../styles/orders.module.css'
import OrderCard from '../components/OrderCard';

const Orders = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
            <h1 className={styles.title}>YOUR ORDERS</h1>
                <button className={styles.button}>Continue Shopping</button>
        </div>
            <div className={styles.orders}>
                <OrderCard />
            </div>
        </div>
    )
}

export default Orders