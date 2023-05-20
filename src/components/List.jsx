import React, { useState, useEffect } from 'react'
import Product from './Product'
import styles from '../styles/list.module.css'
import { API } from 'aws-amplify'

const List = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const apiName = 'ecommerceApiProd';
        API.get(apiName, `/products?category=${cat}`).then((response) => {
          setProducts(response)
        }).catch((error) => {
          console.log(error);
        });
      } catch (error) { }
    };
    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
    )
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if ((sort === "asc")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.discount_price - b.discount_price))
    }
    else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.discount_price - a.discount_price))
    }
  }, [sort])

  return (
    <div className={styles.list}>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.prodId} />)
        : products.slice(0, 4).map((item) => <Product item={item} key={item.prodId} />)}
    </div>
  )
}

export default List
