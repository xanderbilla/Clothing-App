import React from 'react'
import styles from '../styles/categories.module.css'
import CategoryItem from './CategoryItem'
import { categories } from '../static/data'

const Categories = () => {
  return (
    <div className={styles.container}>
      {
        categories.map(item =>
          <CategoryItem item={item} key={item.id} />
        )
      }</div>
  )
}

export default Categories