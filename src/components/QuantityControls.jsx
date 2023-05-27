import styles from '../styles/productPage.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
        <div className={styles.wishlist}>
          <FavoriteBorderIcon /> ADD TO WISH LIST
        </div>
      </div>
    );
};
  
export default QuantityControls