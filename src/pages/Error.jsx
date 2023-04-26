import React from 'react'
import styles from '../styles/error.module.css'
const Error = () => {
  return (
    <main className={styles.container}>
  <h1 className={styles.heading}>4<span className={styles.span}>0</span>4</h1>
  <h2 className={styles.sub_heading}>Error: 404 page not found</h2>
  <p className={styles.para}>Sorry, the page you're looking for cannot be accessed</p>
</main>
  )
}

export default Error