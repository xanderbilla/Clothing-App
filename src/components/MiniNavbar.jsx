import React, { useState } from 'react'
import styles from '../styles/miniNavbar.module.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { useNavigate } from 'react-router-dom';

const MiniNavbar = () => {
    const [value, setValue] = useState('All')
    const redirect = useNavigate()

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        setValue(selectedValue);
        redirect(`/category/${selectedValue}`);
    }

    // Set the "value" attribute to the value of the state variable "value"
    // Set the "defaultValue" attribute to "All" (the default option)
    return (
        <div className={styles.mininavbar}>
            <div className={styles.left}>
                <select className={styles.all_categories} name="categories" title="categories" value={value} defaultValue="All" onChange={handleSelect}>
                    <option className={styles.categories__selectOption} disabled value="All">All Categories</option>
                    <option className={styles.categories__selectOption} value="Men">Men</option>
                    <option className={styles.categories__selectOption} value="Women">Women</option>
                    <option className={styles.categories__selectOption} value="Kids">Kids</option>
                    <option className={styles.categories__selectOption} value="Accessories">Accessories</option>
                </select>
            </div>
            <div className={styles.right}>
                <div className={styles.links}>
                    Food <LaunchIcon fontSize='small' />
                </div>
                <div className={styles.links}>
                    Grocery <LaunchIcon fontSize='small' />
                </div>
                <div className={styles.links}>
                    Electronics <LaunchIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default MiniNavbar