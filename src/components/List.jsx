import React, { useState, useEffect } from 'react';
import Product from './Product';
import styles from '../styles/list.module.css';
import { API } from 'aws-amplify';

const List = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiName = 'eCommerceApi';
        let url = '/products';
        if (cat) {
          url += `?category=${cat}`;
        }
        const response = await API.get(apiName, url);
        setProducts(response);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    let updatedProducts = products;

    if (cat && Object.keys(filters).length > 0) {
      updatedProducts = updatedProducts.filter(item =>
        Object.entries(filters).every(([key, value]) => item[key].includes(value))
      );
    }

    if (sort === 'newest') {
      updatedProducts = [...updatedProducts].sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort === 'asc') {
      updatedProducts = [...updatedProducts].sort((a, b) => a.discount_price - b.discount_price);
    } else {
      updatedProducts = [...updatedProducts].sort((a, b) => b.discount_price - a.discount_price);
    }

    setFilteredProducts(updatedProducts);
  }, [products, cat, filters, sort]);

  return (
    <div className={styles.list}>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.prodId} />)
        : products.filter(item => item.isNew).slice(0, 4).map((item) => <Product item={item} key={item.prodId} />)}
    </div>
  );
};

export default List;