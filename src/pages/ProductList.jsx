import styles from '../styles/productList.module.css'
import List from '../components/List'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

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

    console.log(filters);

    return (
        <div className={styles.container}>
            <h1 className={styles.container_title}>{cat}</h1>
            <div className={styles.container_filter}>
                <div className={styles.container_filter__item}>
                    <h3 className={styles.container_filter__text}>Filter Items:</h3>
                    <select className={styles.container_filter__select} name="color" onChange={handleFilters}>
                        <option className={styles.container_filter__option} disabled>Color</option>
                        <option className={styles.container_filter__option} value="Black">Black</option>
                        <option className={styles.container_filter__option} value="Blue">Blue</option>
                        <option className={styles.container_filter__option} value="Green">Green</option>
                        <option className={styles.container_filter__option} value="Red">Red</option>
                        <option className={styles.container_filter__option} value="White">White</option>
                        <option className={styles.container_filter__option} value="Yellow">Yellow</option>
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
            <List cat={cat} sort={sort} filters={filters}/>
        </div>
    )
}

export default ProductList