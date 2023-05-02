import React from 'react'
import styles from '../styles/cart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const redirect = useNavigate()
    console.log(cart);
    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>YOUR BAG</h1>
            <div className={styles.container_top}>
                <button className={`${styles.container_top__button} ${cart.quantity !== 0 ? '' : styles.disable_button}`} onClick={redirect('/')}>CONTINUE SHOPPING</button>
                <button className={`${styles.container_top__button} ${cart.quantity !== 0 ? '' : styles.disable_button}`}>CHECKOUT NOW</button>
            </div>
            {cart.quantity !== 0 ?
                <div className={styles.container_bottom}>
                    <div className={styles.container_bottom__info}>
                        {cart.products.map((product) => (
                            <div className={styles.product}>
                                <div className={styles.product__details}>
                                    <img className={styles.product__image} src={product.img[1]} alt="" />
                                    <div className={styles.product__detail}>
                                        <span className={styles.product__name}>
                                            <b>Product: </b>{product.title}
                                        </span>
                                        <span className={styles.product__id}>
                                            <b>ID: </b>{product.prodId}
                                        </span>
                                        <div className={styles.product__color} style={{ backgroundColor: `${product.selectedColor.toLowerCase()}` }} />
                                        <span className={styles.product__size}>
                                            <b>Size: </b>{product.selectedSize}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.product__price_detail}>
                                    <div className={styles.product__amount}>
                                        <RemoveIcon />
                                        <span className={styles.product__quantity}>{product.quantity}</span>
                                        <AddIcon />
                                    </div>
                                    <div className={styles.product__price}>${product.discount_price * product.quantity}</div>
                                </div>
                            </div>
                        ))}
                        <hr className={styles.product__divider} />
                    </div>
                    <div className={styles.container_bottom__summary}>
                        <h1 className={styles.summary__title}>ORDER SUMMARY</h1>
                        <div className={styles.summary__item}>
                            <span className={styles.summary__item_text}>Subtotal</span>
                            <div className={styles.summary__item_price}>$ {cart.total}</div>
                        </div>
                        <div className={styles.summary__item}>
                            <span className={styles.summary__item_text}>Estimated Shiping</span>
                            <div className={styles.summary__item_price}>$ 99</div>
                        </div>
                        <div className={styles.summary__item}>
                            <span className={styles.summary__item_text}>Shipping Discount</span>
                            <div className={styles.summary__item_price}>- $ 59</div>
                        </div>
                        <div className={styles.summary__item}>
                            <span className={styles.summary__total_text}>Total</span>
                            <div className={styles.summary__total_price}>$ {cart.total}</div>
                        </div>
                        <button className={styles.summary__checkout}>CHECKOUT NOW</button>
                    </div>
                </div>
                :
                <div className={styles.message}>
                    Your cart is empty.
                </div>
            }
        </div>
    )
}

export default Cart