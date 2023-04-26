import React from 'react'
import styles from '../styles/cart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>YOUR BAG</h1>
            <div className={styles.container_top}>
                <button className={styles.container_top__button}>CONTINUE SHOPPING</button>
                <button className={styles.container_top__button}>CHECKOUT NOW</button>
            </div>
            <div className={styles.container_bottom}>
                <div className={styles.container_bottom__info}>
                    <div className={styles.product}>
                        <div className={styles.product__details}>
                            <img className={styles.product__image} src="https://i.imgur.com/Pi8E0wl.png" alt="" />
                            <div className={styles.product__detail}>
                                <span className={styles.product__name}>
                                    <b>Product: </b>NIKE THUNDER SHOES
                                </span>
                                <span className={styles.product__id}>
                                    <b>ID: </b>2895264565
                                </span>
                                <div className={styles.product__color} style={{ backgroundColor: 'black' }} />
                                <span className={styles.product__size}>
                                    <b>Size: </b>37.5
                                </span>
                            </div>
                        </div>
                        <div className={styles.product__price_detail}>
                            <div className={styles.product__amount}>
                                <RemoveIcon />
                                <span className={styles.product__quantity}>2</span>
                                <AddIcon />
                            </div>
                            <div className={styles.product__price}>$ 3499</div>
                        </div>
                    </div>
                    <hr className={styles.product__divider} />
                    <div className={styles.product}>
                        <div className={styles.product__details}>
                            <img className={styles.product__image} src="https://i.imgur.com/IM51XNQ.png" alt="" />
                            <div className={styles.product__detail}>
                                <span className={styles.product__name}>
                                    <b>Product: </b>DUKE SPORT T-SHIRT
                                </span>
                                <span className={styles.product__id}>
                                    <b>ID: </b>29637867
                                </span>
                                <div className={styles.product__color} style={{ backgroundColor: 'navy' }} />
                                <span className={styles.product__size}>
                                    <b>Size: </b>M
                                </span>
                            </div>
                        </div>
                        <div className={styles.product__price_detail}>
                            <div className={styles.product__amount}>
                                <RemoveIcon />
                                <span className={styles.product__quantity}>1</span>
                                <AddIcon />
                            </div>
                            <div className={styles.product__price}>$ 899</div>
                        </div>
                    </div>
                </div>
                <div className={styles.container_bottom__summary}>
                    <h1 className={styles.summary__title}>ORDER SUMMARY</h1>
                    <div className={styles.summary__item}>
                        <span className={styles.summary__item_text}>Subtotal</span>
                        <div className={styles.summary__item_price}>$ 4100</div>
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
                        <div className={styles.summary__total_price}>$ 4100</div>
                    </div>
                    <button className={styles.summary__checkout}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart