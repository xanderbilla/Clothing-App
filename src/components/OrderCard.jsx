import React from 'react'
import styles from '../styles/orderCard.module.css'
const OrderCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span className={styles.order_id}>#787ef4</span>
                <button className={styles.button}>Order Detail</button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.product}>
                    <div className={styles.left}>
                        <img className={styles.img} src="https://images.pexels.com/photos/15591049/pexels-photo-15591049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={"100px"} />
                        <div className={styles.product_details}>
                            <span className={styles.detail}>
                                <b>Title: </b> Men T-Shirt
                            </span>
                            <span className={styles.detail}>
                                <b>ID: </b> 56edc5a56fd1e
                            </span>
                            <span className={styles.detail}>
                                <b>Size: </b> M
                            </span>
                            <div className={styles.color} />
                            <span className={styles.detail}>
                                <b>Quantity: </b> 2
                            </span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.button}>View Order</button>
                        <button className={styles.button}>Product Detail</button>
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={styles.left}>
                        <img className={styles.img} src="https://images.pexels.com/photos/15591049/pexels-photo-15591049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={"100px"} />
                        <div className={styles.product_details}>
                            <span className={styles.detail}>
                                <b>Title: </b> Men T-Shirt
                            </span>
                            <span className={styles.detail}>
                                <b>ID: </b> 56edc5a56fd1e
                            </span>
                            <span className={styles.detail}>
                                <b>Size: </b> M
                            </span>
                            <div className={styles.color} />
                            <span className={styles.detail}>
                                <b>Quantity: </b> 2
                            </span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.button}>View Order</button>
                        <button className={styles.button}>Product Detail</button>
                    </div>
                </div>
            </div>
            <div className={styles.summary}>
                <div className={styles.orderDesc}>
                    <span className={styles.count}><b>Qunaitity: </b> 4</span>
                    <span className={styles.total}><b>Total: </b> $1999</span>
                </div>
                <span className={styles.order_id}><b>Status: </b> Pending</span>
            </div>
        </div>
    )
}

export default OrderCard