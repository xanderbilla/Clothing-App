import React, { useState } from 'react'
import styles from '../styles/miniNavbar.module.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { Link, useNavigate } from 'react-router-dom';

const MiniNavbar = () => {
    const [value, setValue] = useState('All')
    const redirect = useNavigate()

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        redirect(`/category/${selectedValue}`);
    }
    
    return (
        <div className={styles.mininavbar}>
            <div className={styles.left}>
                <select className={styles.all_categories} name="categories" title="categories" value={value} onChange={handleSelect}>
                    <option className={styles.categories__selectOption} disabled value="All">All Categories</option>
                    <option className={styles.categories__selectOption} value="Men">Men</option>
                    <option className={styles.categories__selectOption} value="Women">Women</option>
                    <option className={styles.categories__selectOption} value="Kids">Kids</option>
                    <option className={styles.categories__selectOption} value="Accessories">Accessories</option>
                </select>
            </div>
            <div className={styles.right}>
                <Link to='https://admin.xanderbilla.com' className={styles.links}>
                    Admin Dashboard <LaunchIcon fontSize='small' />
                </Link>
                <Link to='https://food.xanderbilla.com' className={styles.links}>
                    Food <LaunchIcon fontSize='small' />
                </Link>
                <Link to='https://grocery.xanderbilla.com' className={styles.links}>
                    Grocery (Only for Testing)<LaunchIcon fontSize='small' />
                </Link>
            </div>
        </div>
    )
}

export default MiniNavbar