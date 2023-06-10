import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../styles/productPage.module.css';

const ProductImages = ({ images, selectedImg, setSelectedImg }) => {
  return (
    <div className={styles.product_images}>
      {images.map((image, i) => (
        <LazyLoadImage
          key={i}
          src={image} 
          alt={`Product ${i + 1}`}
          className={`${styles.product_image} ${selectedImg === i ? styles.selected : ''}`}
          onClick={() => setSelectedImg(i)}
        />
      ))}
    </div>
  );
};

export default ProductImages;
