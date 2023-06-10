import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../styles/productPage.module.css';
import { getImage } from '../utils/getImage';

const ProductImages = ({ images, selectedImg, setSelectedImg }) => {
  return (
    <div className={styles.product_images}>
      {images.map((key, index) => (
        <LazyLoadImage
          key={key}
          src={getImage(key)} // Call the getImage function with the imageKey
          alt={`Product ${index + 1}`}
          className={`${styles.product_image} ${selectedImg === index ? styles.selected : ''}`}
          onClick={() => setSelectedImg(index)}
        />
      ))}
    </div>
  );
};

export default ProductImages;
