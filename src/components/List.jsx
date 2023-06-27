import React, { useState, useEffect } from 'react';
import Product from './Product';
import styles from '../styles/list.module.css';
import { API } from 'aws-amplify';

const List = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

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

  // Calculate the indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={styles.list}>
      <div className={styles.content}>
        {cat
          ? currentItems.map((item) => <Product item={item} key={item.prodId} />)
          : products.filter(item => item.isNew).slice(0, 4).map((item) => <Product item={item} key={item.prodId} />)}
      </div>
      {filteredProducts.length > itemsPerPage && (
        <ul className={styles.pagination}>
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`${styles.pageItem} ${currentPage === index + 1 ? styles.active : ''}`}>
              {cat && <button className={styles.button} onClick={() => paginate(index + 1)}>{index + 1}</button>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
