import React from 'react';
import styles from '../styles/categoryItem.module.css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CategoryItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <Link to={`/category/${item.cat}`}>
        <LazyLoadImage
          className={styles.container_item__img}
          src={item.img}
          alt=""
          effect="blur"
        />
        <div className={styles.container_item__info}>
          <h1 className={styles.container_item__info_title}>{item.title}</h1>
          <button className={styles.container_item__info_button}>
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
