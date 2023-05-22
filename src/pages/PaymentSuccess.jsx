import { useSelector } from 'react-redux';
import styles from '../styles/paymentSuccess.module.css'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
  const cart = useSelector((state) => state.cart);
  const searchQuery = useSearchParams()[0]
  const refernce_num = searchQuery.get('reference')
  console.log(cart);
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Order Successful</h4>
      <span className={styles.ref}>Refernce Number: {refernce_num}</span>
    </div>
  )
}

export default PaymentSuccess