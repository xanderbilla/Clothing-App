import React, { useEffect, useState } from 'react';
import styles from '../styles/orders.module.css';
import OrderCard from '../components/OrderCard';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get('ecommerceApiOrders', '/orders');
      setOrders(response);
    } catch (error) {
      console.log(error.response);
    }
  };
console.log(orders);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>YOUR ORDERS</h1>
              <Link to='/'>
                  <button className={styles.button}>Continue Shopping</button>
                  </Link>
      </div>
      <div className={styles.orders}>
        {orders && orders.map((order, i) => (
          <OrderCard cart={order} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
