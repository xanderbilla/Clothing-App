import styles from '../styles/productPage.module.css';
import {LazyLoadImage} from 'react-lazy-load-image-component'

const MainImage = ({ image }) => {
  return (
    <div className={styles.main_img}>
      <LazyLoadImage src={image} className={styles.big__img} alt="" />
    </div>
  );
};

export default MainImage