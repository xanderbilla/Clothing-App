import { useState, useEffect, API, Link, OrderCard } from '../utils/Imports'
import styles from '../styles/orders.module.css';

const Orders = ({user}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await API.get('eCommerceApi', `/orders/${user.attributes.sub}`);
      const sortedOrders = response.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      setOrders(sortedOrders);
    } catch (error) {
      console.log(error.response);
    }
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.title}>YOUR ORDERS</h1>
        <Link to='/'>
          <button className={styles.button}>Continue Shopping</button>
        </Link>
      </div>
      <div className={styles.orders}>
        {orders.length !== 0 ? orders.map((order, i) => (
          <OrderCard item={order} key={i} onCancelOrder={fetchOrders}/>
        ))
          :
          <div className={styles.message}>No Recent Orders</div>
        }
      </div>
    </div>
  );
};

export default Orders;
