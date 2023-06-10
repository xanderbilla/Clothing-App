import { useState, useSelector, API, useDispatch, useNavigate, removeProduct, RemoveIcon, DeleteOutlineIcon, Auth, AddIcon, Payment } from '../utils/Imports';
import styles from '../styles/cart.module.css';
import { SuccessAlert, ErrorAlert } from '../components/Alert';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { resetCart } from '../redux/cartRedux';

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
        const prefix = 'cod';
        const randomHex = Math.random().toString(16).substr(2, 10).toLowerCase();
        const randomCode = prefix + randomHex;
        return randomCode;
    };

    const handlePaymentChange = (option) => {
        setPaymentOption(option);
    };

    const handleCheckout = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const name = user.attributes.name
            const email = user.attributes.email
            const contact = user.attributes.phone_number

            console.log(`name: ${name}, email: ${email} | phone: ${contact}`)
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
                API.post('eCommerceApi', '/orders', data)
                    .then((response) => {
                        console.log(response);
                        setOrderAdded(true);
                        redirect('/paymentSuccess');
                        dispatch(resetCart());
                    })
                    .catch((error) => {
                        console.log(error.response);
                    });
            }
            else {
                const amount = cart.total;
                const data = await fetch('http://localhost:5555/razorpay', {
                    method: 'POST',
                    body: JSON.stringify({ amount }), // Pass amount in the request body
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((t) => t.json());
                console.log(data);
                const options = {
                    // key: 'rzp_live_UTxAbdghList7p',
                    key: 'rzp_test_JKF1DFL4zhVRpb',
                    currency: data.currency,
                    amount: data.amount,
                    description: 'Wallet Transaction',
                    img: 'https://i.imgur.com/G6sWWqH.png',
                    order_id: data.id,
                    customer: {
                        name: 'Gaurav',
                        email: 'xanderbilla@email.com'
                    },
                    handler: function (response) {
                        const data = {
                            body: {
                                orderId: response.razorpay_order_id,
                                custId: user.attributes.sub,
                                custName: user.attributes.name,
                                custPhone: user.attributes.phone_number,
                                paymentMode: paymentOption,
                                cart: cart,
                                address: user.attributes['custom:address'],
                                paymentId:
                                    paymentOption === 'COD' ? response.razorpay_payment_id : '',
                            },
                        };
                        API.post('eCommerceApi', '/orders', data)
                            .then((response) => {
                                console.log(response);
                                setOrderAdded(true);
                                redirect('/paymentSuccess/');
                                dispatch(resetCart());
                            })
                            .catch((error) => {
                                console.log(error.response);
                            });
                    },
                    name: 'Vikas Singh',
                    email: 'test@razorpay.com',
                    contact: '123456789'
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const renderProduct = (product, index) => {
        console.log(product)
        return (
            <div className={styles.product} key={index}>
                <div className={styles.product__details}>
                    <LazyLoadImage className={styles.product__image} src={product.img[1]} alt="" />
                    <div className={styles.product__detail}>
                        <span className={styles.product__name}>
                            <b>Product: </b>
                            {product.title}
                        </span>
                        <span className={styles.product__id}>
                            <b>ID: </b>
                            {product.prodId}
                        </span>
                        <div
                            className={styles.product__color}
                            style={{ backgroundColor: `${product.selectedColor.toLowerCase()}` }}
                        />
                        <span className={styles.product__size}>
                            <b>Size: </b>
                            {product.selectedSize}
                        </span>
                    </div>
                </div>
                <div className={styles.product__price_detail}>
                    <div className={styles.product__amount}>
                        <RemoveIcon onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} />
                        <span className={styles.product__quantity}>{quantity}</span>
                        <AddIcon onClick={() => setQuantity((prev) => prev + 1)} />
                    </div>
                    <div className={styles.foofunc}>
                        <div className={styles.product__price}>${product.discount_price * product.quantity}</div>
                        <button className={styles.remove} onClick={() => deleteItem(product.prodId)}>
                            <DeleteOutlineIcon fontSize="large" />{' '}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>YOUR BAG</h1>
            <div className={styles.container_top}>
                <button
                    className={`${styles.container_top__button} ${cart.quantity ? '' : styles.disable_button}`}
                    onClick={() => redirect('/')}
                >
                    CONTINUE SHOPPING
                </button>
                <button className={`${styles.container_top__button} ${cart.quantity ? '' : styles.disable_button}`}>
                    CHECKOUT NOW
                </button>
            </div>
            {cart.quantity ? (
                <div className={styles.container_bottom}>
                    {orderAdded ? <SuccessAlert message={'Order Added!'} orderAdded={orderAdded} setOrderAdded={setOrderAdded} /> : null}
                    <div className={styles.container_bottom__info}>
                        {cart.products.map(renderProduct)}
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
                        <button className={styles.summary__checkout} onClick={handleCheckout}>
                            CHECKOUT NOW
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.message}>Your cart is empty.</div>
            )}
        </div>
    );
};

export default Cart;
