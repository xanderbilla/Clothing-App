import React, { useEffect} from 'react'
import Product from './Product'
import styles from '../styles/list.module.css'
import { popularProducts } from '../static/data'

const List = ({ cat, filters, sort }) => {
    // const [products, setProducts] = useState([])
    // const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {

    }, [cat])

  return (
      <div className={styles.list}>{popularProducts?.map(item => (
          <Product item={item} key={ item._id}/>
    ))}</div>
  )
}

export default List