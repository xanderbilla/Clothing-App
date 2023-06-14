import React, { useEffect, useState } from 'react';
import styles from '../styles/product.module.css';
import { Link } from 'react-router-dom';
import { getImage } from '../utils/getImage';
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Product = ({ item }) => {
  const [imageUrls, setImageUrls] = useState([]);
  console.log(imageUrls);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await Promise.all(item.img.map((imageKey) => getImage(imageKey)));
      setImageUrls(urls);
    };

    fetchImages();
  }, [item.img]);

  return (
    <Link className={styles.link} to={`/product/${item.prodId}`}>
      <div className={styles.card}>
        <div className={styles.image}>
          {item.isNew && <span className={styles.card_info}>New Season</span>}
          <LazyLoadImage src={imageUrls[0]} alt="" className={styles.main_img} />
          <LazyLoadImage src={imageUrls[1]} alt="" className={styles.second_img} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.card_title}>{item.title}</h2>
          <div className={styles.card_prices}>
            <h3 className={styles.card_price}>${item.discount_price}</h3>
            <h3 className={styles.card_price}>${item.original_price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
