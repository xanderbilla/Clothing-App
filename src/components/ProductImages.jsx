import styles from '../styles/productPage.module.css';

const ProductImages = ({ images, selectedImg, setSelectedImg }) => {
    return (
      <div className={styles.product_imageSet}>
        {images.map((image, i) => (
          <img
            src={image}
            alt=""
            className={styles.side__img}
            key={i}
            onClick={() => setSelectedImg(i)}
          />
        ))}
      </div>
    );
};
  
export default ProductImages