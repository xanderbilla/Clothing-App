import React, { useEffect, useState } from 'react';
import styles from '../styles/orderCard.module.css';
import { Link } from 'react-router-dom';
import { API } from 'aws-amplify';
import { getImage } from '../utils/getImage';

const OrderCard = ({ item }) => {
  const items = item.cart.products;
  console.log(items)
  const [imageUrls, setImageUrls] = useState([]);
  const handleCacel = (orderId) => {
    API.del('eCommerceApi', `/orders/${orderId}`)
      .then((response) => {
        // Handle the response if needed
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(items.map((item) => getImage(item.img[0])));
      setImageUrls(urls);
    };

    fetchImages();
  }, [items]);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.order_id}>#{item.orderId}</span>
        <div className={styles.orderDesc}>
          <span className={styles.count}>
            <b>Shipping Address: </b> {item.address}
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        {items &&
          items.map((item, i) => (
            <div className={styles.product} key={i}>
              <div className={styles.left}>
                <img className={styles.img} src={imageUrls[i]} alt={item.title} width={'100px'} />
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
              </div>
            </div>
          ))}
      </div>
      <div className={styles.summary}>
        <div className={styles.orderDesc}>
          <span className={styles.count}>
            <b>Quantity: </b> {item.cart.quantity}
          </span>
          <span className={styles.total}>
            <b>Total: </b> ${item.cart.total}
          </span>
        </div>
        <span className={styles.status}>
          <b>Status: </b> Pending
        </span>
        <button className={styles.button} onClick={() => handleCacel(item.orderId)}>
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
