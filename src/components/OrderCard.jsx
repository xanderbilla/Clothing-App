import React from 'react'
import styles from '../styles/orderCard.module.css'
import { Link } from 'react-router-dom';
const OrderCard = ({ cart }) => {
    const items = cart.cart.products;
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span className={styles.order_id}>{cart.orderId}</span>
                <div className={styles.orderDesc}>
                    <span className={styles.count}><b>Shipping Address: </b> {cart.address}</span>
                </div>
            </div>
            <div className={styles.bottom}>
                {items && items.map((item, i) =>
                    <div className={styles.product} key={i}>
                        <div className={styles.left}>
                            <img className={styles.img} src={item.img[0]} alt="" width={"100px"} />
                            <div className={styles.product_details}>
                                <span className={styles.detail}>
                                    <b>Title: </b> {item.title}
                                </span>
                                <span className={styles.detail}>
                                    <b>ID: </b> {item.prodId}
                                </span>
                                <span className={styles.detail}>
                                    <b>Size: </b> {item.selectedSize}
                                </span>
                                <div className={styles.color} style={{ backgroundColor: item.selectedColor }} />

                                <span className={styles.detail}>
                                    <b>Quantity: </b> {item.quantity}
                                </span>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <Link to={`/product/${item.prodId}`}>
                                <button className={styles.button}>Product Detail</button>
                            </Link>
                            <button className={styles.button}>Cancel Order</button>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.summary}>
                <div className={styles.orderDesc}>
                    <span className={styles.count}><b>Qunaitity: </b> {cart.cart.quantity}</span>
                    <span className={styles.total}><b>Total: </b> ${cart.cart.total}</span>
                </div>
                <span className={styles.order_id}><b>Status: </b> Pending</span>
            </div>
        </div>
    )
}

export default OrderCard