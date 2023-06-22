import styles from '../styles/productPage.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const QuantityControls = ({ quantity, setQuantity }) => {
    return (
      <div className={styles.purchase__quantity}>
        <div className={styles.quantity}>
          <RemoveIcon onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} />
          <span className={styles.product__quantity}>{quantity}</span>
          <AddIcon onClick={() => setQuantity((prev) => prev + 1)} />
        </div>
      </div>
    );
};
  
export default QuantityControls