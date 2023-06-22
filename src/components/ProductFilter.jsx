import React from 'react';
import styles from '../styles/productList.module.css';

const ProductFilter = ({ handleFilters, setSort }) => {
  return (
    <div className={styles.container_filter}>
      <div className={styles.container_filter__item}>
        <h3 className={styles.container_filter__text}>Filter Items:</h3>
        <select className={styles.container_filter__select} name="color" onChange={handleFilters}>
          <option className={styles.container_filter__option} disabled>Color</option>
          <option className={styles.container_filter__option} value="black">Black</option>
          <option className={styles.container_filter__option} value="blue">Blue</option>
          <option className={styles.container_filter__option} value="green">Green</option>
          <option className={styles.container_filter__option} value="red">Red</option>
          <option className={styles.container_filter__option} value="white">White</option>
          <option className={styles.container_filter__option} value="yellow">Yellow</option>
        </select>
        <select className={styles.container_filter__select} name="size" onChange={handleFilters}>
          <option className={styles.container_filter__option} disabled >Size</option>
          <option className={styles.container_filter__option} value="XS">XS</option>
          <option className={styles.container_filter__option} value="S">S</option>
          <option className={styles.container_filter__option} value="M">M</option>
          <option className={styles.container_filter__option} value="L">L</option>
          <option className={styles.container_filter__option} value="XL">XL</option>
        </select>
      </div>
      <div className={styles.container_filter__item}>
        <div className={styles.container_filter__text}>Sort Products</div>
        <select className={styles.container_filter__select} name="sort" value="newest" onChange={e => setSort(e.target.value)}>
          <option className={styles.container_filter__option} value="newest">Newest</option>
          <option className={styles.container_filter__option} value="asc">Price Lowest To Highest</option>
          <option className={styles.container_filter__option} value="desc">Price Highest To Lowest</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilter;
