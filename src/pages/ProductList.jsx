import {List, ProductFilter, useState, useLocation} from '../utils/Imports'
import styles from '../styles/productList.module.css'

const ProductList = () => {

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value 
        })
    }
    return (
        <div className={styles.container}>
        <h1 className={styles.container_title}>{cat}</h1>
            <ProductFilter handleFilters={handleFilters} setSort={setSort} sort={sort} />
        <List cat={cat} sort={sort} filters={filters} />
      </div>
    )
}

export default ProductList