import styles from '../styles/productPage.module.css';

const ProductInfo = ({ title, description }) => {
    return (
        <div className={styles.product_info}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.desc}>{description}</p>
        </div>
    );
};

export default ProductInfo