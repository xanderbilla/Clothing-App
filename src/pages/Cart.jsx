import { useState, useSelector, API, useDispatch, useNavigate, removeProduct, axios, RemoveIcon, DeleteOutlineIcon, Auth, AddIcon, Payment } from '../utils/Imports';
import styles from '../styles/cart.module.css';
import {SuccessAlert, ErrorAlert} from '../components/Alert';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [orderAdded, setOrderAdded] = useState(false);
    const [paymentOption, setPaymentOption] = useState('');
    const [quantity, setQuantity] = useState(1);
    const redirect = useNavigate();
    const dispatch = useDispatch();

    const deleteItem = (productId) => {
        dispatch(removeProduct({ productId }));
      };

    const codPaymentId = () => {
        const prefix = "cod";
        const randomHex = Math.random().toString(16).substr(2, 10).toLowerCase();
        const randomCode = prefix + randomHex;
        return randomCode
    };

    const handlePaymentChange = (option) => {
        setPaymentOption(option);
    };
  
    const handleCheckout = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();

            if (paymentOption === 'COD') {
                const data = {
                    body: {
                        custId: user.attributes.sub,
                        custName: user.attributes.name,
                        custPhone: user.attributes.phone_number,
                        paymentMode: paymentOption,
                        cart: cart,
                        address: user.attributes['custom:address'],
                        paymentId: paymentOption === 'COD' ? codPaymentId() : '',
                    },
                };
                API.post('ecommerceApiOrders', '/orders', data)
                    .then((response) => {
                        console.log(response);
                        setOrderAdded(true)
                        redirect('/orders')
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });

            } else {
                const { data: { key } } = await axios.get("http://localhost:5252/api/getkey")
                const { data: { order } } = await axios.post('http://localhost:5252/api/checkout', {
                    amount: cart.total
                })
                var options = {
                    key: key,
                    amount: order.amount,
                    currency: "INR",
                    name: "Acharya Project",
                    desciption: "Test Transaction",
                    image: "https://i.imgur.com/hqTZ4NT.png",
                    order_id: order.id,
                    callback_url: "http://localhost:5252/api/verify",
                    prefill: {
                        name: "User",
                        email: "email@example.com",
                        contact: "7800818620"
                    },
                    notes: {

                    },
                    theme: {
                        color: "#121212"
                    }
                }

                var rzp1 = new window.Razorpay(options);
                rzp1.open()
                console.log(order);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>YOUR BAG</h1>
            <div className={styles.container_top}>
                <button
                    className={`${styles.container_top__button} ${cart.quantity ? '' : styles.disable_button}`} onClick={() => redirect('/')}>CONTINUE SHOPPING</button>
                <button className={`${styles.container_top__button} ${cart.quantity ? '' : styles.disable_button}`}>CHECKOUT NOW</button>
            </div>
            {cart.quantity ?
                <div className={styles.container_bottom}>
                    {orderAdded ? (
                        <SuccessAlert message={'Order Added!'} orderAdded={ orderAdded} setOrderAdded={ setOrderAdded} />
          ) : null}
                    <div className={styles.container_bottom__info}>
                        {cart.products.map((product, i) => (
                            <div className={styles.product} key={i}>
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
                                        <RemoveIcon onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)} />
                                        <span className={styles.product__quantity}>{quantity}</span>
                                        <AddIcon onClick={() => setQuantity(prev => prev + 1)} />
                                    </div>
                                    <div className={styles.foofunc}>
                                    <div className={styles.product__price}>${product.discount_price * product.quantity}</div>
                                        <button className={styles.remove} onClick={() => deleteItem(product.prodId)}><DeleteOutlineIcon fontSize='large'/> </button>
                                    </div>
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
                        <Payment onPaymentChange={handlePaymentChange} />
                        <button className={styles.summary__checkout} onClick={handleCheckout}>CHECKOUT NOW</button>
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